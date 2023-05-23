function responseUrls(details) {
  //console.log(`Response: ${details.url}`);
  console.trace(details);
}

function requestUrls(details) {
  //console.log(`Request: ${details.url}`);
  console.trace(details);
}
 
chrome.webRequest.onBeforeRequest.addListener(
  requestUrls,
  {urls: ["<all_urls>"]},
);

chrome.webRequest.onHeadersReceived.addListener(
   responseUrls,
   {urls: ["<all_urls>"]}
 );