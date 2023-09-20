# Use Case Webpage

## Getting started

To get started go into the Server folder and run `node server.js` to start the server. Then go into the News Webpage folder and launch it on localhost.

## Functionality

This webpage is a mockup of a news website that has been instrumented with my custom JavaScript code when an Ajax request is made. This is done by adding the JavaScript file instrument.js as a script and popup.css as a CSS file. This file then overrides the `XMLHttpRequest.open` method and adds fetches the provenance data to a endpoint which you can specify.
