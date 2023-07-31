var originalOpen = XMLHttpRequest.prototype.open;
var originalAjax = $.ajax;
var originalFetch = fetch;

//Proxy XMLHttpRequest and jQuery calls
XMLHttpRequest.prototype.open = function(_method, url) {
  //XMLHttpRequest
  this.onload = function() {
    document.getElementById(originalMutation.target.id).url = url;
    document.getElementById(originalMutation.target.id).provenance = "[\n" + this.getAllResponseHeaders() + "]";
  }
  //jQuery
  this.addEventListener('load', function () {
    document.getElementById(originalMutation.target.id).url = url;
    document.getElementById(originalMutation.target.id).provenance = "[\n" + this.getAllResponseHeaders() + "]";
  });
  originalOpen.apply(this, arguments);
}

//Proxy fetch calls
fetch = async function(url, options){
  var array = [];
  const response = await originalFetch(url, options);
  setTimeout(() => {
    const head = response.headers.entries();
    var header = head.next();
    while (!header.done){
      array.push(header.value);
      header = head.next();
    }
    document.getElementById(originalMutation.target.id).url = url;
    document.getElementById(originalMutation.target.id).provenance = JSON.stringify(array, null, 2);
  }, timeout);
  return response;
}

var OriginalEventSource = window.EventSource;
window.EventSource.prototype = Object.create(OriginalEventSource.prototype);
window.EventSource = function(url, options) {
  //fetch(url);
  var eventSource = new OriginalEventSource(url, options);
  eventSource.onopen = function(event) {
  };
  eventSource.onmessage = function(event) {
    console.log(event);
  };
  return eventSource;
}
