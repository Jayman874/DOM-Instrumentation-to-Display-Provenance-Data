function responseUrls(details) {
  console.log(`Response: ${details.url}`);
}

function requestUrls(details) {
  console.log(`Request: ${details.url}`);
}
 
chrome.webRequest.onBeforeRequest.addListener(
  requestUrls,
  {urls: ["<all_urls>"]},
);

chrome.webRequest.onHeadersReceived.addListener(
   responseUrls,
   {urls: ["<all_urls>"]}
 );