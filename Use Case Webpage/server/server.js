const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path')

const app = express();

// Allow requests from any origin
app.use(cors({origin: '*'}));

app.use(express.json()); // Parse JSON request bodies

// Define a route to handle GET requests
app.get('/getData', (req, res) => {
    // Replace this with your data retrieval logic
    var data = [
        { "id": 1, "name": "John Doe", "email": "john@example.com" },
        { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
    ];
    res.status(200).json(data);
});

// Define a route to handle GET requests
app.get('/getStats', (req, res) => {
    // Replace this with your data retrieval logic
    let d = fs.readFileSync('data.json').toString();
    const data = [ d ];
    res.status(200).json(data);
});

app.get('/getImage', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'space.jpg'); // Provide the correct path to your image
    const image = fs.readFileSync(imagePath);
    
    res.writeHead(200, {
        'Content-Type': 'image/jpeg', // Adjust content type based on your image format
        'Content-Length': image.length
    });
    res.status(200).end(image);
});

// Define a route to handle POST requests
app.post('/postData', (req, res) => {
    const receivedData = req.body;
    // Replace this with your data processing logic
    // For now, we'll just send back the received data
    res.status(200).json(receivedData);
    //console.log(data);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});