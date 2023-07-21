import { useEffect } from "react";
import $ from 'jquery';

//Variables Initialised for global use
let originalURL;
let originalMutation;
const timeout = 500;
const colours = ["red", "blue", "green", "yellow", "purple", "orange", "cyan", "violet", "turquoise", "grey"];

//Observer changes in DOM
const observer = new MutationObserver((mutations) => {
  mutations.forEach(async (mutation) => {
    const oldValue = mutation.oldValue;
    const newValue = mutation.target;
    if (oldValue !== newValue) {
      originalMutation = mutation;
      setTimeout(() => {
        if (mutation.target.provenance !== undefined) {
          console.log(mutation);
          provenanceString(mutation, originalURL);
        }
      }, timeout);
    }
  });
});

//Create String to display Provenance information in console back to end user
function provenanceString(newValue, url) {
  const randomElement = colours[Math.floor(Math.random() * colours.length)];
  const index = colours.indexOf(randomElement);
  if (index >= -1) {
    colours.splice(index, 1);
  }
  highlightDOM(newValue.target.id, randomElement);
  const prov =
    "DOM content: (" +
    newValue.removedNodes[0].textContent +
    ")\n" +
    "updated to: (" +
    newValue.target.innerHTML +
    ")\n" +
    "at DOM id: (" +
    newValue.target.id +
    ")\n" +
    "from the url: (" +
    url +
    ")\n" +
    "responding with the headers of: \n" +
    newValue.target.provenance +
    "\n" +
    "This element has been highlighted on the webpage as the color: " +
    "(" +
    randomElement +
    ")";
  console.log(prov);
  originalMutation = null;
  originalURL = null;
}

//Highlights DOM Element that have been changed
function highlightDOM(element, colour) {
  document.getElementById(element).style.background = colour;
}

// Proxy XMLHttpRequest calls
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (_method, url) {
  originalURL = url;
  this.onload = function () {
    document.getElementById(originalMutation.target.id).provenance =
      "[\n" + this.getAllResponseHeaders() + "]";
  };
  originalOpen.apply(this, arguments);
};

// Proxy ajax calls
const originalAjax = $.ajax;
$.ajax = function (options) {
  const successCallback = options.success;
  options.success = function (_response, _textStatus, xhr) {
    if (successCallback) {
      successCallback.apply(this, arguments);
    }
    setTimeout(() => {
      document.getElementById(originalMutation.target.id).provenance =
        "[\n" + xhr.getAllResponseHeaders() + "]";
    }, timeout);
  };
  originalAjax.apply(this, arguments);
};

// Proxy fetch calls
const originalFetch = fetch;
fetch = async function (url, options) {
  const array = [];
  originalURL = url;
  const response = await originalFetch(url, options);
  setTimeout(() => {
    const head = response.headers.entries();
    let header = head.next();
    while (!header.done) {
      array.push(header.value);
      header = head.next();
    }
    document.getElementById(originalMutation.target.id).provenance = JSON.stringify(array, null, 2);
  }, timeout);
  return response;
};

// Custom React Hook
function useDOMProvenance() {
  useEffect(() => {
    // Observes changes in DOM during runtime
    observer.observe(document, {
      characterDataOldValue: true,
      subtree: true,
      childList: true,
      characterData: true,
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, []);
}

function Instrument(){
  return (
    useDOMProvenance()
  );
}

export default Instrument;