var originalOpen = XMLHttpRequest.prototype.open;
var originalAjax = $.ajax;
var originalFetch = fetch;

//Proxy XMLHttpRequest calls
XMLHttpRequest.prototype.open = function(_method, url) {
  originalURL = url;
  this.onload = function() {
    document.getElementById(originalMutation.target.id).provenance = "[\n" + this.getAllResponseHeaders() + "]";
  }
  originalOpen.apply(this, arguments);
}

//Proxy ajax calls
$.ajax = function(options) {
  var successCallback = options.success;
  options.success = function(_response, _textStatus, xhr) {
    if (successCallback) {
      successCallback.apply(this, arguments);
    }
    setTimeout(() => {
      document.getElementById(originalMutation.target.id).provenance = "[\n" + xhr.getAllResponseHeaders() + "]";
    }, timeout);
  };
  originalAjax.apply(this, arguments);
}

//Proxy fetch calls
fetch = async function(url, options){
  var array = [];
  originalURL = url;
  const response = await originalFetch(url, options);
  setTimeout(() => {
    const head = response.headers.entries();
    var header = head.next();
    while (!header.done){
      array.push(header.value);
      header = head.next();
    }
    document.getElementById(originalMutation.target.id).provenance = JSON.stringify(array, null, 2);
  }, timeout);
  return response;
}