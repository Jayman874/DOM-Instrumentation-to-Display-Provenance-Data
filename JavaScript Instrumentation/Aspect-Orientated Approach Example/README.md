# Aspect-Orientated Approach Example

## Getting started

To run this Implementation include the following code in the <head> tag of your html page 
    <script src="https://unpkg.com/esprima@~3.1/dist/esprima.js"></script>
    <script src="logger.js"></script>
    <script src="addAspects.js"></script>
    <script src="api.js"></script>

Then Include the following code above the </html> tag at the bottom of your html page
    <script>api.addScripts({scripts: document.querySelectorAll("script")})</script>
    <script src="detect.js"></script>

## Functionality

This implentation is an example approach I have mocked up to better understand how I could use Aspect-Orientated Programming within to aid in Instrumenting a webpages JavaScript. It does this by adding in JavaScript before a script is executed through Reflection and Pointcuts. 


