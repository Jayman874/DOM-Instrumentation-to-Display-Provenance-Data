var colours = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "violet", "turquoise", "grey"];

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
  const randomElement = colours[Math.floor(Math.random() * colours.length)];
  const index = colours.indexOf(randomElement);
  if (index >= -1){
    colours.splice(index, 1);
  }
  highlightDOM(newValue.target.id, randomElement);
  var prov = "DOM content: (" + newValue.removedNodes[0].textContent + ")\n" +
  "updated to: (" + newValue.target.innerHTML + ")\n" +
  "at DOM id: (" + newValue.target.id + ")\n" +
  "from the url: (" + url + ")\n" +
  "responding with the headers of: \n" + newValue.target.provenance + "\n" +
  "This element has been highlighted on the webpage as the color: " + "(" + randomElement + ")"; 
  console.log(prov);
  originalMutation = null;
  originalURL = null;
}

//Highlights DOM Element that have been changed
function highlightDOM(element, colour) {
  document.getElementById(element).style.background = colour;
}

//Observes changes in DOM during runtime
observer.observe(document, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});