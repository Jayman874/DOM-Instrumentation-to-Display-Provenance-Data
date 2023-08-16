var originalOpen = XMLHttpRequest.prototype.open;
var originalFetch = window.fetch;

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
window.fetch = async function(url, options){
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