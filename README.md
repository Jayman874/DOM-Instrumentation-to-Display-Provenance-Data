# DOM Instrumentation to Display Provenance Data

## Project Description

With ever-evolving privacy laws, end users of software systems are increasingly expressing concerns about the usage of their data. Real-world incidents, such as the 2019 data breach affecting up to 112,000 Air New Zealand Airpoints customers, have contributed to a growing awareness of data privacy issues. In response to these concerns, New Zealand regulators re-evaluated the privacy act in 2020, imposing financial liability on data providers to mitigate potential data breaches. To address the intentional obscurity of end users' data, this project aimed to contribute to an infrastructure enabling users to monitor the usage of their data when interacting with web applications. I have done this by providing end users with increased transparency regarding the handling of their data during web browsing. Modern web applications have complex layered architectures, often involving server-side applications with existing solutions. Developing and retrofitting systems to support this transparency is both intricate and costly; hence, automation was the desirable approach. This research explored the implementation of a solution by extending support to an additional layer, exposing existing provenance data from the server-side domain to the client-side domain through manipulation of the client-side Document Object Model (DOM). The rendering of data to the presentation layer (UI) was beyond the scope of this work and was displayed separately as a pop-up. To achieve this objective, I have developed a range of prototypes to instrument the client-side DOM and expose existing provenance data. These prototypes included browser plugins, pure JavaScript instrumentation, and framework plugins. Throughout the project, I carefully evaluated each decision I made before initiating implementation. I have assessed the performance of each prototype by measuring performance overheads to help determine whether the performance cost is worth the functionality.

A use case example of this implementation can be found in the [Use Case Webpage](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Use%20Case%20Webpage) Folder.

### Browser Plugin

[Browser Plugin Injection](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Browser%20Plugin%20Injection%20Test)

[Intercept Headers](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Intercept%20Headers%20Test)

[Display Headers](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/Display%20Headers%20Test)

[DOM Manipulation Detector (Main Prototype)](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Browser%20Plugin/DOM%20Manipulation%20Detector)

### DOM Instrumentation in Browser Code

[Detect Changes in DOM Elements](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Detect%20changes%20in%20DOM%20Elements)

[Aspect-Orientated Approach Example](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Aspect-Orientated%20Approach%20Example)

[Instrumentation through Proxying (SSE)](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Instrumentation%20Proxying%20(SSE))

[Instrumentation through Proxying (Main Prototype)](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/JavaScript%20Instrumentation/Instrumentation%20through%20Proxying)

### Framework Plugin

[React Plugin](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/React%20Plugin)

[React Webpage](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/simple-react-webpage-example)

### Final Product

[Instrumentation](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Instrumentation%20Code)
