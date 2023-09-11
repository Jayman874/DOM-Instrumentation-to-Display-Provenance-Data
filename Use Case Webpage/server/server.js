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
    res.header('External-URL', 'https://www.w3schools.com/angular/customers.php');
    res.header('Database', 'Read From Database');
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
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': d.length,
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Max-Age': '86400',
        'Expires': '0',
        'pragma': 'no-cache',
        'External-URL': 'https://www.w3schools.com/angular/customers.php',
        'Database': "Read From Database"
    });
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

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});