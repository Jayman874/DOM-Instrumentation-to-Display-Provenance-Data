import { useEffect } from "react";

//Variables Initialsed for global use
var originalMutation;
var originalOpen = XMLHttpRequest.prototype.open;
const timeout = 500;
var tableHeader = false;

var provHeaderName = "provenance-header"; //Change this to the name of your provenance header

//Observe changes in DOM
var observer = new MutationObserver((mutations) => {
    mutations.forEach(async (mutation) => {
      var oldValue = mutation.oldValue;
      var newValue = mutation.target;
      if (oldValue !== newValue) {
        originalMutation = mutation;
        setTimeout(() => {
          //Checks if provenance data is preseny in manipulated DOM element
          if (originalMutation.target.provenance !== undefined) {
            displayProvenance(originalMutation);
          }
        }, timeout);
      }
    });
});

//Creates the table for the provenance data
function createTable(data) {
    const table = document.createElement("table");
    table.className = "provTable";
    const tbody = document.createElement("tbody");
    tbody.className = "provTable";
    //Creates the header for the table
    if (tableHeader == false){
      tableHeader = true;
      const td = document.createElement("td");
      const th = document.createElement("th");
      td.innerHTML = "<strong>Provenance Data</strong>"
      th.innerHTML = "#"
      td.className = "provCell";
      th.className = "provCell";
      table.appendChild(th)
      table.appendChild(td)
    }
    //Recusively inserts values into table taking into account nested JSON objects
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const value = data[key];
            const row = document.createElement("tr");
            const cellKey = document.createElement("td");
            cellKey.className = "provCell";
            cellKey.innerHTML = `<strong>${key.replace(/\b\w/g, char => char.toUpperCase())}</strong>`;
            row.appendChild(cellKey);
            //Checks if JSON is nested
            const cellValue = document.createElement("td");
            cellValue.className = "provCell";
            if (typeof value === "object") {
                //Recursively calls function to insert nested JSON into table
                cellValue.appendChild(createTable(value));
            } else {
                cellValue.innerHTML = `<em>${value}</em>`;
            }
            row.appendChild(cellValue);
            tbody.appendChild(row);
        }
    }
    table.appendChild(tbody);
    return table;
}
  
  //Display Provenance information in console and in pop up back to end user
async function displayProvenance(newValue){
    var oldVal = newValue.removedNodes[0] == undefined 
    ? " " : newValue.removedNodes[0].textContent

    //Data to be displayed in popup
    var prov =  "<strong>" + newValue.target.method + " Request Detected</strong>\n" +
    "<strong>At DOM ID:</strong> (<em>" + newValue.target.id + "</em>)\n" +
    "<strong>From the URL:</strong> (<em>" + newValue.target.url + "</em>)\n" +
    "<div id=provDataInfo-" + newValue.target.id + "></div>\n";

    //Extra data to be displayed on the console
    var provString = newValue.target.method + " Request Detected\n" +
    "Original DOM Content: (" + oldVal + ")\n" +
    "Updated To: \n(" + newValue.target.innerText + ")\n" +
    "At DOM ID: (" + newValue.target.id + ")\n" +
    "From the URL: (" + newValue.target.url + ")\n" +
    "Provenance Data:\n" + newValue.target.provenance + "\n" +
    "Containing the raw data of:\n" + newValue.target.value + "\n";
    console.log(provString);

    //Stores provenance data in DOM element
    document.getElementById(newValue.target.id).data = prov;
    createPopup(newValue.target.id);
    //Creates table for provenance data
    let provData = document.getElementById("provDataInfo-" + newValue.target.id);
    provData.appendChild(createTable(JSON.parse(newValue.target.provenance)));
    tableHeader = false;
    originalMutation = null;
}

  //Creates a Popup for each DOM element that has been updated by Ajax
  async function createPopup(id) {
    //Checks if popup already exists
    if (document.getElementById(id+"-pop")) {
        let pop = document.getElementById(id+"-pop");
        pop.innerHTML = document.getElementById(id).data;
    } else {
        //Creates popup which can be toggled on and off
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
            var popup = document.getElementById(id+"-pop");
            popup.classList.toggle("show");
        })
        //Creates popup content
        var popDiv = document.createElement("div");
        popDiv.className = "popup";
        popDiv.id = "provenance";
        var popupText = document.createElement("span");
        popupText.className = "popuptext";
        popupText.id = id+"-pop";
        popupText.innerHTML = document.getElementById(id).data;
        popDiv.appendChild(popupText);

        //Inserts popup into DOM
        let doc = document.getElementById(id);
        let docClone = doc.cloneNode(true);
        mainDiv.appendChild(docClone);
        document.body.appendChild(popDiv);
        doc.parentNode.replaceChild(mainDiv, doc);
    }
}

//Proxy XMLHttpRequest and jQuery calls
XMLHttpRequest.prototype.open = function(method, url) {
  //XMLHttpRequest
  this.onload = function() {
    document.getElementById(originalMutation.target.id).method = method;
    document.getElementById(originalMutation.target.id).url = this.responseURL;
    document.getElementById(originalMutation.target.id).value = this.response;
    let headers = this.getAllResponseHeaders();
    let headersArray = headers.trim().split('\n');
    findProvenanceHeader(headersArray);
  }
  //jQuery
  this.addEventListener('load', function () {
    document.getElementById(originalMutation.target.id).method = method;
    document.getElementById(originalMutation.target.id).url = this.responseURL;
    document.getElementById(originalMutation.target.id).value = this.response;
    let headers = this.getAllResponseHeaders();
    let headersArray = headers.trim().split('\n');
    findProvenanceHeader(headersArray);
  });
  originalOpen.apply(this, arguments);
}

//Searches for Provennace Header in Response Headers
function findProvenanceHeader(headersArray) {
  for (let i = 0; i < headersArray.length; i++) {
    var header = headersArray[i];
    //Splits each header into name and value
    var headerParts = header.split(': ');
    var headerName = headerParts[0];
    //Checks if header is the provenance header
    if (headerName === provHeaderName) {
      getProv(headerParts[1]);
      break;
    };
  }
}

//Fetch call of provenance endpoint in specified server
function getProv(url) {
  fetch(url)
    .then(async response => await response.text())
    .then(data => {
      //Stores provenance data in DOM element
      document.getElementById(originalMutation.target.id).provenance = data;
    }) 
}

// Custom React Hook
function useDOMProvenance() {
  useEffect(() => {
    // Observes changes in DOM during runtime
    observer.observe(document, {
      characterDataOldValue: true,
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true,
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, []);
}

function Instrument(){
  return (
    useDOMProvenance()
  );
}

export default Instrument;