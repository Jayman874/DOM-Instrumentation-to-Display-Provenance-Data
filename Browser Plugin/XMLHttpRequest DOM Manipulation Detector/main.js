console.log("The extension is up and running");

let scriptPagesXML = [];
let url = {};

// gets all scripts within webpage that use XMLHttpRequest
function getXMLHttpRequest(){
    let page = document.getElementsByTagName("script");
    for (i = 0; i < page.length; i++){
        if (page[i].innerText.includes("new XMLHttpRequest()") && page[i].innerText.includes("getElementById")){
            scriptPagesXML.push(page[i]);
            console.log(page[i]);
        }
    }
    for (j = 0; j < scriptPagesXML.length; j++){
        url[(getURL(scriptPagesXML[j]))] = scriptPagesXML[j].innerText;
    }
}

// highlights the DOM element which has been manipulated by an Http Request
function highlightDOM(domElement){
    let startIndex = domElement.indexOf("document.getElementById(");
    let sub = domElement.substring(startIndex);
    let startIndex2 = sub.indexOf("(");
    let endIndex = sub.indexOf(")");
    let final = sub.substring(startIndex2+2, endIndex-1);
    document.getElementById(final).style.background = "red";
}

// gets the url of all requests used in XMLHttpRequests
function getURL(scriptPagesXML){
    let startIndex = scriptPagesXML.innerText.indexOf(".open(");
    let sub = scriptPagesXML.innerText.substring(startIndex);
    let result = sub.split(",")[1].trim();
    let final = "";
    if (result.includes("?")){
        let index = result.indexOf("?");
        final = result.substring(1, index);
    } else {
        final = result.substring(1, result.length-1);
    }
    return final;
}

// Injects list of headers that have manipulated DOM elements
function update() {
    let b = document.createElement('br');
    let details = document.createElement('details');
    let summary = document.createElement('summary');
    details.setAttribute("id", "stats");
    summary.innerText = "Headers that Manipulated DOM Elements on Webpage";
    document.body.append(b);
    document.body.appendChild(details).appendChild(summary);
    document.getElementById("stats").style.fontSize ="x-small";
    getXMLHttpRequest();
}

// receives all headers entering webpage and see if any match urls being used in the DOM
chrome.runtime.onMessage.addListener(function(request, sendResponse) {
    let doc = document.getElementById("stats");
    if(request.ping) { sendResponse({pong: true}); return; }
    for (let key in url){
        if (request.url.includes(key)){
            doc.innerHTML += "<pre>" + JSON.stringify(request, null, 2) + "</pre>";
            highlightDOM(url[key]);
            return;
        }
    }
});

update();

