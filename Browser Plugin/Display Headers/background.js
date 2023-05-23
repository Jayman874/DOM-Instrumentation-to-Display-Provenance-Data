let responseHeaders = [];

function responseUrls(details) {
  if (details.type != null && details.method != null && details.requestId != null){
    responseHeaders.push(JSON.stringify(details, null, 2));
  }
  chrome.storage.session.set({key: responseHeaders});
}

chrome.webRequest.onHeadersReceived.addListener(
  responseUrls,
  {urls: ["<all_urls>"]}
);

