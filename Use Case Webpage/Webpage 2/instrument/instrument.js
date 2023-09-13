//Variables Initialsed for global use
var originalMutation;
const timeout = 500;
var originalOpen = XMLHttpRequest.prototype.open;
var prov = "http://localhost:3000/prov";
var provHeaderName = "provenance-header";

//Observer changes in DOM
var observer = new MutationObserver((mutations) => {
    mutations.forEach(async (mutation) => {
      var oldValue = mutation.oldValue;
      var newValue = mutation.target;
      if (oldValue !== newValue) {
        originalMutation = mutation;
        setTimeout(() => {
          if (originalMutation.target.provenance !== undefined) {
            displayProvenance(originalMutation);
          }
        }, timeout);
      }
    });
  });
  
  //Create String to display Provenance information in console and in pop up back to end user
  function displayProvenance(newValue){
    //var oldVal = newValue.removedNodes[0] == undefined 
    //? " " : newValue.removedNodes[0].textContent
    var prov = 
    "<strong>" + newValue.target.method + " Request Detected</strong>\n" +
    //"<strong>Original DOM Content:</strong> (<em>" + oldVal + "</em>)\n" +
    //"<strong>Updated To:</strong> \n(<em>" + newValue.target.innerText + "</em>)\n" +
    "<strong>At DOM ID:</strong> (<em>" + newValue.target.id + "</em>)\n" +
    "<strong>From the URL:</strong> (<em>" + newValue.target.url + "</em>)\n" +
    "<strong>Provenance Data:</strong>\n<em>" + newValue.target.provenance + "</em>\n";
    //"<strong>Containing the raw data of:</strong>\n<em>" + newValue.target.value + "</em>\n";

    var provString = newValue.target.method + " Request Detected\n" +
    //"Original DOM Content: (" + oldVal + ")\n" +
    //"Updated To: \n(" + newValue.target.innerText + ")\n" +
    "At DOM ID: (" + newValue.target.id + ")\n" +
    "From the URL: (" + newValue.target.url + ")\n" +
    "Provenance Data:\n" + newValue.target.provenance + "\n";
    //"Containing the raw data of:\n" + newValue.target.value + "\n";
    console.log(provString);
    document.getElementById(newValue.target.id).data = prov;
    originalMutation = null;
    createPopup(newValue.target.id);
  }

  //Creates a Popup for each DOM element that has been updated by Ajax
  function createPopup(id) {
    if (document.getElementById(id+"pop")) {
        let pop = document.getElementById(id+"pop");
        pop.innerHTML = document.getElementById(id).data;
    } else {
        var mainDiv = document.createElement("div");
        mainDiv.className = "popupdiv";
        mainDiv.id = "prov";
        mainDiv.style = "cursor: pointer; border-left: 10px solid red;";
        mainDiv.active = false;
        mainDiv.addEventListener('click', function() {
            if (mainDiv.active == false){
                mainDiv.active = true;
                mainDiv.style = "cursor: pointer; border-left: 10px solid green;";
            } else {
                mainDiv.active = false;
                mainDiv.style = "cursor: pointer; border-left: 10px solid red;";
            }
            var popup = document.getElementById(id+"pop");
            popup.classList.toggle("show");
        })
        var popDiv = document.createElement("div");
        popDiv.className = "popup";
        popDiv.id = "provenance";
        var popupText = document.createElement("span");
        popupText.className = "popuptext";
        popupText.id = id+"pop";
        popupText.innerHTML = document.getElementById(id).data;
        popDiv.appendChild(popupText);
    
        let doc = document.getElementById(id);
        let docClone = doc.cloneNode(true);
        mainDiv.appendChild(docClone);
        document.body.appendChild(popDiv);
        doc.parentNode.replaceChild(mainDiv, doc);
    }
}

  //Observes changes in DOM during runtime
  observer.observe(document, {
    characterDataOldValue: true, 
    subtree: true, 
    childList: true, 
    characterData: true,
    attributes: true,
  });

//Proxy XMLHttpRequest and jQuery calls
XMLHttpRequest.prototype.open = function(method, url) {
   //XMLHttpRequest
  this.onload = function() {
    document.getElementById(originalMutation.target.id).method = method;
    document.getElementById(originalMutation.target.id).url = this.responseURL;
    let headers = this.getAllResponseHeaders();
    let headersArray = headers.trim().split('\n');
    
    // Iterate through the array to process each header
    for (let i = 0; i < headersArray.length; i++) {
      var header = headersArray[i];
      // Split each header into name and value
      var headerParts = header.split(': ');
      var headerName = headerParts[0];

      if (headerName === provHeaderName) {
        getProv(headerParts[1]);
      }
    }
  }
  //jQuery
  this.addEventListener('load', function () {
    document.getElementById(originalMutation.target.id).method = method;
    document.getElementById(originalMutation.target.id).url = this.responseURL;
    let headers = this.getAllResponseHeaders();
    let headersArray = headers.trim().split('\n');
    
    // Iterate through the array to process each header
    for (let i = 0; i < headersArray.length; i++) {
      var header = headersArray[i];
      // Split each header into name and value
      var headerParts = header.split(': ');
      var headerName = headerParts[0];

      if (headerName === provHeaderName){
        getProv(headerParts[1]);
      };
    }
  });
  originalOpen.apply(this, arguments);
}

function getProv(url) {
  fetch(url)
    .then(async response => await response.text())
    .then(data => {
      document.getElementById(originalMutation.target.id).provenance = data;
    }) 
}

