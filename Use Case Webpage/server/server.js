const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path')

const app = express();

// Allow requests from any origin
app.use(cors({origin: '*'}));

app.use(express.json()); // Parse JSON request bodies

app.use((req, res, next) => {
    // Server can specify the origin of requests it will accept
    req.header('Access-Control-Expose-Headers', '*');
    res.header('Access-Control-Expose-Headers', '*');
    res.header('Provenance-Header', 'http://localhost:3000/prov');
    next();
});

// Define a route to handle GET requests
app.get('/getData', (req, res) => {

    var data = [
        {"id": 1, "name": "John Doe", "email": "john@example.com", "description": "Lorem Ipsum"},
        {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "description": "Lorem Ipsum"},
        {"id": 3, "name": "Bob Johnson", "email": "bob@example.com", "description": "Lorem Ipsum"},
        {"id": 4, "name": "Alice Williams", "email": "alice@example.com", "description": "Lorem Ipsum"},
        {"id": 5, "name": "Michael Brown", "email": "michael@example.com", "description": "Lorem Ipsum"},
        {"id": 6, "name": "Emily Davis", "email": "emily@example.com", "description": "Lorem Ipsum"},
        {"id": 7, "name": "David Martinez", "email": "david@example.com", "description": "Lorem Ipsum"},
        {"id": 8, "name": "Olivia Anderson", "email": "olivia@example.com", "description": "Lorem Ipsum"},
    ]

    res.status(200).json(data)
});

// Define a route to handle GET requests
app.get('/getStats', (req, res) => {
    // Replace this with your data retrieval logic
    let d = fs.readFileSync('data.txt').toString();
    res.status(200).end(d);
});

app.get('/getImage', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'building.webp');
    const image = fs.readFileSync(imagePath);
    
    res.status(200).end(image);
});

// Define a route to handle POST requests
app.post('/postData', (req, res) => {
    const receivedData = req.body;

    res.send(receivedData);
    res.status(200);
});

// Define root to handle provenance requests
app.get('/prov', (req, res) => {
  var provData = [
      {
          "application_name": "MockWebApp",
          "version": "1.0.0",
          "description": "A fictitious web application for demonstration purposes.",
          "created_by": "John Doe",
          "created_date": "2023-01-15",
          "last_modified_by": "Jane Smith",
          "last_modified_date": "2023-09-10",
          "contributors": [
            "Alice Johnson",
            "Bob Anderson",
            "Eve Williams"
          ],
          "repository_url": "https://github.com/mockwebapp",
          "license": "MIT License",
          "deployment_environment": "Production",
          "deployment_date": "2023-03-20",
          "data_source": [
            {
              "name": "Mock Database",
              "type": "SQL",
              "connection_string": "mysql://user:password@localhost/mockdb",
              "last_accessed": "2023-08-05"
            },
            {
              "name": "External API",
              "type": "REST",
              "endpoint": "https://api.mockwebapp.com/data",
              "last_accessed": "2023-09-01"
            }
          ],
          "modules": [
            {
              "name": "User Authentication",
              "description": "Handles user login and registration.",
              "version": "1.0.0",
              "author": "Alice Johnson",
              "last_updated": "2023-05-10"
            },
            {
              "name": "Data Processing",
              "description": "Processes data from various sources.",
              "version": "2.1.0",
              "author": "Bob Anderson",
              "last_updated": "2023-08-15"
            }
          ],
          "dependencies": [
            {
              "name": "Express.js",
              "version": "4.17.1"
            },
            {
              "name": "React",
              "version": "17.0.2"
            },
            {
              "name": "MySQL",
              "version": "8.0.25"
            }
          ],
        }
      ]
  let prov = JSON.stringify(provData, null, 2);
  res.status(200).end(prov);
});

// Sees if the server is running on specified port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});