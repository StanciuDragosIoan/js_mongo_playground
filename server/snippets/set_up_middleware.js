/*
  this file uses the logger.js file as middleware
  
  run npm i express

  then run the node server
*/

// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Server Running');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});