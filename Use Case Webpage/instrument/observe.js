//Observer changes in DOM
var observer = new MutationObserver((mutations) => {
  mutations.forEach(async (mutation) => {
    var oldValue = mutation.oldValue;
    var newValue = mutation.target;
    if (oldValue !== newValue) {
      originalMutation = mutation;
      setTimeout(() => {
        if (originalMutation.target.provenance != undefined){
          console.log(originalMutation);
          provenanceString(originalMutation);
        }
      }, timeout);
    }
  });
});

//Create String to display Provenance information in console back to end user
function provenanceString(newValue){
  var oldVal = newValue.removedNodes[0] == undefined 
  ? " " : newValue.removedNodes[0].textContent
  var prov = "GET Request Detected \n" +
  "DOM content: (" + oldVal + ")\n" +
  "updated to: (" + newValue.target.innerHTML + ")\n" +
  "at DOM id: (" + newValue.target.id + ")\n" +
  "from the url: (" + newValue.target.url + ")\n" +
  "responding with the headers of: \n" + newValue.target.provenance + "\n";
  console.log(prov);
  originalMutation = null;
}

function provenanceStringPost(postURL, postData, postResponseHeaders) {
  var prov = "POST Request Detected \n" +
  "Data: (" + postData + ")\n" +
  "has been sent to: (" + postURL + ")\n" +
  "responding with the headers of: \n" + postResponseHeaders + "\n";
  console.log(prov);
}

//Observes changes in DOM during runtime
observer.observe(document, {
  characterDataOldValue: true, 
  subtree: true, 
  childList: true, 
  characterData: true
});