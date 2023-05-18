console.log("The extension is up and running");

let scriptPagesXML = [];
let url = {};

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

function highlightDOM(domElement){
    let startIndex = domElement.indexOf("document.getElementById(");
    let sub = domElement.substring(startIndex);
    let startIndex2 = sub.indexOf("(");
    let endIndex = sub.indexOf(")");
    let final = sub.substring(startIndex2+2, endIndex-1);
    document.getElementById(final).style.background = "red";
}

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

chrome.runtime.onMessage.addListener(function(request, sendResponse) {
    if(request.ping) { sendResponse({pong: true}); return; }
    for (let key in url){
        if (request.includes(key)){
            highlightDOM(url[key]);
            return;
        }
    }
});

getXMLHttpRequest();