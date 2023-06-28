let colours = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "violet", "turquoise", "grey"];

let observer = new MutationObserver((mutations) => {
  mutations.forEach(async (mutation) => {
    let oldValue = mutation.oldValue;
    let newValue = mutation.target;
    if (oldValue !== newValue) {
      let provenance = newValue.provenance;
      if (provenance != undefined && newValue.id != "stats"){
        provenanceString(mutation);
      }
    }
  });
});

observer.observe(document.body, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});

function provenanceString(newValue){
  const randomElement = colours[Math.floor(Math.random() * colours.length)];
  const index = colours.indexOf(randomElement);
  if (index >= -1){
    colours.splice(index, 1);
  }
  let doc = document.getElementById("stats");
  let prov = "DOM text content: (" + newValue.removedNodes[0].textContent + ")\n" +
  "updated to: (" + newValue.target.innerHTML + ")\n" +
  "at DOM id: (" + newValue.target.id + ")\n" +
  "from the url: (" + newValue.target.url + ")\n" +
  "responding with the headers of: \n" + newValue.target.provenance + "\n" +
  "This element has been highlighted on the webpage as the color:"; 
  doc.innerHTML += "<pre>" + prov + '<div style="background-color:' + randomElement + ';>""</div> </pre>';
  highlightDOM(newValue.target.id, randomElement);
}

function highlightDOM(element, colour) {
  document.getElementById(element).style.background = colour;
}
