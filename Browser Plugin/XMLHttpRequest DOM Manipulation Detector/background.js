function responseUrls(details) {
  if (details.type != null && details.method != null && details.requestId != null){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, details);
    });
  }
}

chrome.webRequest.onHeadersReceived.addListener(
  responseUrls,
  {urls: ["<all_urls>"]},
);