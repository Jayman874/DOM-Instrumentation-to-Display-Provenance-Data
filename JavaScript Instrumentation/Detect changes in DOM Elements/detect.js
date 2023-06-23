let observer = new MutationObserver((mutations) => {
  mutations.forEach(async (mutation) => {
    let oldValue = mutation.oldValue;
    let newValue = mutation.target;
    if (oldValue !== newValue) {
      let provenance = "\n" + mutation.target.provenance;
      console.trace(provenance);
    }
  });
});

observer.observe(document.body, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});
