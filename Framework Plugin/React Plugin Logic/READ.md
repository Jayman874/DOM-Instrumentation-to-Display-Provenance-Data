# React Plugin

## Getting started

To run this React Plugin add the `instrument.js`  file to your React Project. When rendering your React app with `root.render()`  include `import Instrument from ./instrument.js`  at the head of the file where you are rendering your app. Then within `root.render()`  add `<Instrument />` to add the Instrumentation.

Future versions of this plugin may be inclded on the node package manager (npm)

## Functionality

The functionality of this implementation allows for the easy Instrumentation of JavaScript within a webpage by Proxying the `XMLHttpRequest.open` method, the `$.ajax` method, and the `fetch` function. This overrding adds the header provenance data to a variable when these methods are executed. Then during the webpages runtime the MutationObserver object detects when a DOM object is changed and determines whether in was changed by a ajax or fetch call. It does this by seeing whether a provenance header value has been associated with the given DOM manipulation. If it does have an association then a provenance string is formed and logged to the console for the end user to see. This string includes values such as the old DOM value, the new DOM value, the id of the HTML value manipulated, the URL where the data was retrieved from, the reponse headers from the ajax or fetch call, and the colour of the highlighted DOM value within the webpage to show visually the DOM element changed by an ajax or fetch call. 
