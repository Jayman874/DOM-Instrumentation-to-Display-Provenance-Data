# Performance Testing

## Getting started

To view performace test captures go into the Performance tab of the chrome devTools accessible by typing `ctrl+shift+i`. In this tab will be an upwards facing arrow giving you the option to "Load a Profile". Click this and select the json capture you want to view.

## View Overhead

To see the overhead generated by my instrumentation code type `ctrl+f` to bring up the search keyword bar. Then type `instrument.js` into this bar to see each time an instance of my instrumentation code is called. A more highly detailed discussion on this overhead and the values it returned can be found in my report.

### Performance Capture One

This capture shows the action of entering in form data where that data is sent to an endpoint through a post request. This is reflected in the capture as an instance of the `getProv` function located in `instrument.js` being called can be seen.

### Performance Capture Two

This capture shows the action of pressing a button to fetch data from this server. This data is designed to be updated every 5 seconds once the button is pressed. This is refelcted in the capture as multiple instances of the `getProv` function located in `instrument.js` being called can be seen.

### Performance Capture Three

This capture shows the action of me logging into the webpage then clicking on an article which sends your cookie information to a server through ajax. This is reflected in the capture as an instance of the ajax function being called then instrumented in `instrument.js`.

### Performance Capture Four

This capture shows me scrolling to the bottom of the page and downloading an image using ajax. This is reflected in the capture as an instance of the ajax function being called then instrumented in `instrument.js`.

### Performance Capture Five

This capture shows me performing all possible actions on the webpage which use ajax. This is refelcted in the capture as multiple instances of `getProv` is called located in `instrument.js`.
