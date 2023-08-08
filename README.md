# DOM Instrumentation to Display Provenance Data

## Project Description

The primary focus of this project was to address end-users who want to gain insights into what information server-side applications utilise when data is inputted on webpages. By shedding light on obscured data, this project aimed to protect information that users might not have wished to be utilised for purposes such as AI model training. Contemporary web applications were layered, and there were existing solutions for server-side applications. Given the ongoing development of numerous websites, it became crucial to establish solutions that could be integrated into existing applications without the need for extensive rewriting. The scope of this project did not encompass rendering data directly to the presentation layer (UI) of a webpage; rather, it was presented through the browser's console. This approach was pivotal in determining the credibility and integrity of data based on its source. Examples of provenance data included information about the APIs being utilised and the origin or storage location of the data. The main assumption made during this project was that the server would generate this provenance data, and it could be extracted by analysing header information.

The proposed approach involved DOM manipulation and instrumentation. For instance, a similar concept of provenance is employed by companies like Facebook and Google for their advertisements. These companies use data to display personalised ads and include a "Why am I seeing this ad?" link where the user could access provenance information by clicking the provided link.

To achieve this goal, three distinct approaches were explored. These approaches were a browser plugin, pure JavaScript instrumentation, and Framework plugins. However, it was essential to acknowledge that each approach came with its unique challenges and design complexities, and not all solutions were feasible due to the limitations of each approach.

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

[jQuery Plugin](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/Jquery%20Plugin)

[React Plugin](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/React%20Plugin)

[jQuery Webpage](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/simple-jquery-webpage-example)

[React Webpage](https://gitlab.ecs.vuw.ac.nz/course-work/project489/2023/gulabjaye/dom-instrumentation-to-display-provenance-data/-/tree/main/Framework%20Plugin/simple-react-webpage-example)
