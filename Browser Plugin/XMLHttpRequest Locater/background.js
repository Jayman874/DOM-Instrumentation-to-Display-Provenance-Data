console.log("The extension is up and running");

var page = document.getElementsByTagName("script");

for (i = 0; i < page.length; i++){
    if (page[i].innerText.match(/new XMLHttpRequest/g) && page[i].innerText.match(/getElementById/g)){
        console.log(page[i]);
        let startIndex = page[i].innerText.indexOf("document.getElementById(");
        let sub = page[i].innerText.substring(startIndex);
        let startIndex2 = sub.indexOf("(");
        let endIndex = sub.indexOf(")");
        let final = sub.substring(startIndex2+2, endIndex-1);
        console.log(final);
        document.getElementById(final).style.background = "red";
    }
}