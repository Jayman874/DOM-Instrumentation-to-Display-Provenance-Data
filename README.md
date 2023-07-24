# DOM Instrumentation to Display Provenance Data

## Project Description

The problem I am attempting to solve is to give end users more transparency about where their data is coming and going when browsing a webpage. I aim to do this by contributing to an infrastructure that will enable end users to monitor the use of their data. With privacy laws changing every day the main use case of this project will be end-users who want more information on how server-side applications are using data when they interact with a webpage. Modern web applications are layered, with existing solutions for server-side applications. This project aims to add support to another layer by exposing existing provenance data from the server-side domain model to the client-side domain through the manipulation of the client-side DOM. It is out of scope to render data to the presentation layer (UI) of a webpage. Instead, this will be displayed via a separate page. This problem matters because with the increasing amount of information available online many people are becoming more sensitive and conscious about how companies are using their data. I plan on solving this problem by attempting to develop three potential software solutions to instrument the client-side DOM to expose existing provenance data. I plan on using Java and JavaScript to develop these tools. During each step of this project, I will evaluate and elaborate on each of the decisions I make before beginning the construction of an implementation. Once I have developed a prototype, I plan on assessing it by analysing its performance through DOM instrumentation which measures a product's performance by adding overheads. These steps will help determine which prototype I believe to be most effective. The final step of this project will be transitioning my project to a public GitHub for future development.

### Browser Plugin

[Browser Plugin Injection](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Browser%20Plugin%20Injection%20Test)

[Intercept Headers](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Intercept%20Headers%20Test)

[Display Headers](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Display%20Headers%20Test)

[DOM Manipulation Detector (Main Prototype)](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/DOM%20Manipulation%20Detector)

### DOM Instrumentation in Browser Code

[Detect Changes in DOM Elements](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Detect%20changes%20in%20DOM%20Elements)

[Aspect-Orientated Approach Example](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Aspect-Orientated%20Approach%20Example)

[Instrumentation through Proxying (Main Prototype)](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Instrumentation%20through%20Proxying)

### Framework Plugin

[Jquery Plugin](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/Jquery%20Plugin)

[React Plugin](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/React%20Plugin)

[simple-jquery-webpage-example](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/simple-jquery-webpage-example)

[simple-react-webpage-example](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/simple-react-webpage-example)