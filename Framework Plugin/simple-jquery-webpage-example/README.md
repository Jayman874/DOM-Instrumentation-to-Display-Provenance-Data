# Instrumentation through Proxying

## Getting started

To run this implementation include the instrument folder and its contents aswell as the `load.js` file on the same level as the file you want to instrument. Then include `<script src="load.js"></script>` in the head of that html file.

## Functionality

The functionality of this implementation allows for the easy Instrumentation of JavaScript within a webpage by proxying the `XMLHttpRequest.open` method, the `$.ajax` method, and the `fetch` function. This overrding adds the header provenance data to a variable when these methods are executed. Then during the webpages runtime the MutationObserver object detects when a DOM object is changed and determines whether in was changed by a ajax or fetch call. It does this by seeing whether a provenance header value has been associated with the given DOM manipulation. If it does have an association then a provenance string is formed and logged to the console for the end user to see. This string includes values such as the old DOM value, the new DOM value, the id of the HTML value manipulated, the URL where the data was retrieved from, the reponse headers from the ajax or fetch call, and the colour of the highlighted DOM value within the webpage to show visually the DOM element changed by an ajax or fetch call.
