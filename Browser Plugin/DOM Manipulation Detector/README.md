# Browser Plugin Spike Test

## Getting started

To Run this plugin go to chrome://extensions/ click on "Load unpacked" then select this folder.

## Plugin Functionality

The main functionality of this plugin is that it highlights DOM elements which have been altered using Ajax more specifically XMLHttpRequest. It does this by scanning the webpage and searching for each time a new instance of XMLHttpRequest is used in a “script” tag. It then gets the URL used to make the request and stores it in an array. While this is happening the plugin also records all the responses coming into a webpage. When a response is received the response URL is compared to all request URLs used in the webpage. If any matches that means a DOM element has been manipulated through Ajax and will highlight that element in red. This plugin also has the functionality of listing all headers which have manipulated DOM elements at the bottom of the page through HTML manipulation using JavaScript.
