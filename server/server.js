// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// import the logger
const logger = require('./logger');

// server configuration
const PORT = 8080;

app.use(function (req, res, next) {
    console.log('middle ware cmd') //cmd executes on each request to the server
    next()
  });

// create a route for the app
app.get('/', (req, res) => {
  res.send('Server Running');
});


//welcome route (basic)
app.get('/welcome', (request, response) => {
    response.send('Welcome!');
  });

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

 