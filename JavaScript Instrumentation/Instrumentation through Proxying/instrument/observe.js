//Observer changes in DOM
var observer = new MutationObserver((mutations) => {
  mutations.forEach(async (mutation) => {
    var oldValue = mutation.oldValue;
    var newValue = mutation.target;
    if (oldValue !== newValue) {
      originalMutation = mutation;
      setTimeout(() => {
        if (mutation.target.provenance != undefined){
          console.log(mutation);
          provenanceString(mutation, originalURL);
        }
      }, timeout);
    }
  });
});

//Create String to display Provenance information in console back to end user
function provenanceString(newValue, url){
  var prov = "DOM content: (" + newValue.removedNodes[0].textContent + ")\n" +
  "updated to: (" + newValue.target.innerHTML + ")\n" +
  "at DOM id: (" + newValue.target.id + ")\n" +
  "from the url: (" + url + ")\n" +
  "responding with the headers of: \n" + newValue.target.provenance + "\n";
  console.log(prov);
  originalMutation = null;
  originalURL = null;
}

//Observes changes in DOM during runtime
observer.observe(document, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});