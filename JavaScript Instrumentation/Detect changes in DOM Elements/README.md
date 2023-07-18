# Detect changes in DOM Elements

## Getting started

To use include the inject.js and detect.js scripts above your </html> tag in the format of `<script src="inject.js"></script>`and `<script src="detect.js" defer></script>`in that order respectively.

## Functionality

The functionality of this implentation allows end users to see provenance data of Elements fetched by XMLHttpRequests. It does this by getting all of the scripts on the webpage and checks whether they contain the keywords XMLHttpRequest. It then insruments the scripts by adding a provenance header value as `document.getElementById("id").provenance = xhr.getAllResponseHeaders();`in be accessed later. To detect changes in the DOM I then use the MutationObserver object to log changes made in the DOM during the webpages runtime. When this change is detected it then checks whether a provenance value has been added through the previous Instrumentation and creates a provenance string to display back to the user in the console.

## Limitations

Unfortunately this approach come with many limitations. These includes:

- Only works on inline JavaScript within the HTML

- Only works for XMLHttpRequest calls

- Requires XMLHttpRequest values to be intialised with the value of `xhr`

- Requires the first `document.getElementById()`within the script to be the one that changes the DOM from the ajax call



It is unlikely that I will expand on this exact approach furthur due to these limitations.
