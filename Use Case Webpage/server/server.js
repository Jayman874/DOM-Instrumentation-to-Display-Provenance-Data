const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from any origin
app.use(cors({origin: '*'}));

app.use(express.json()); // Parse JSON request bodies

// Define a route to handle GET requests
app.get('/getData', (req, res) => {
    // Replace this with your data retrieval logic
    const data = { message: 'This is the data from the server.' };
    res.status(200).json(data);
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