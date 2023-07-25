(function($) {
  //Variables Initialised for global use
  var originalURL;
  var originalMutation;
  const timeout = 500;
  var originalOpen = XMLHttpRequest.prototype.open;
  var originalAjax = $.ajax;
  var originalFetch = fetch;

  //Observer changes in DOM
  var observer = new MutationObserver((mutations) => {
    mutations.forEach(async (mutation) => {
      var oldValue = mutation.oldValue;
      var newValue = mutation.target;
      if (oldValue !== newValue) {
        originalMutation = mutation;
        setTimeout(() => {
          if (mutation.target.provenance !== undefined){
            console.log(mutation);
            provenanceString(mutation, originalURL);
          }
        }, timeout);
      }
    });
  });

  //Create String to display Provenance information in console back to end user
  function provenanceString(newValue, url){
    var prov = "DOM content: (" + newValue.removedNodes[0].textContent + ")\n" +
      "updated to: (" + newValue.target.innerHTML + ")\n" +
      "at DOM id: (" + newValue.target.id + ")\n" +
      "from the url: (" + url + ")\n" +
      "responding with the headers of: \n" + newValue.target.provenance + "\n";
    console.log(prov);
    originalMutation = null;
    originalURL = null;
  }

  //Observes changes in DOM during runtime
  observer.observe(document, {
    characterDataOldValue: true, 
    subtree: true, 
    childList: true, 
    characterData: true
  });

  //Proxy XMLHttpRequest calls
  XMLHttpRequest.prototype.open = function(_method, url) {
    originalURL = url;
    this.onload = function() {
      $("#" + originalMutation.target.id).prop("provenance", "[\n" + this.getAllResponseHeaders() + "]");
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
        $("#" + originalMutation.target.id).prop("provenance", "[\n" + xhr.getAllResponseHeaders() + "]");
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
      $("#" + originalMutation.target.id).prop("provenance", JSON.stringify(array, null, 2));
    }, timeout);
    return response;
  }

}(jQuery));
