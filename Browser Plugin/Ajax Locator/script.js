function update() {
    let responseHeaders = [];
    chrome.storage.session.get(['key'], function(result) {
        responseHeaders = result.key;
        let doc = document.getElementById("list");
        try{
        for (let i = 0; i < responseHeaders.length; i++) {
          doc.innerHTML += "<pre>" + responseHeaders[i] + "</pre><br></br>";
        }
        } catch(err) {
            console.log(err);
        }
    });
}


update();