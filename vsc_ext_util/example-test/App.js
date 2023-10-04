const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware to parse JSON data in the request body
app.use(express.json());

// Route 1: Handling a POST request with JSON data
app.post('/gendocs', (req, res) => {
  const { data } = req.body;
  // Process the JSON data and send a response
  res.send(`docs are as follows ${data}`);
});

// Route 2: Handling a POST request with JSON data
app.post('/improve', (req, res) => {
  const { data } = req.body;
  // Process the JSON data and send a response
  res.send(`improved code is here ${data}`);
});

// Route 3: Handling a POST request with JSON data
app.post('/explain', (req, res) => {
  const { data } = req.body;
  // Process the JSON data and send a response
  res.send(`explanation is here  ${data}`);
});

// Route 4: Handling a POST request with JSON data
app.post('/doubts', (req, res) => {
  const { data } = req.body;
  // Process the JSON data and send a response
  res.send(`go to chatGPT.  ${data}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
