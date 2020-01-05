/*
  run npm i express

  then run the node server
*/

// import express (after npm install express)
const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 5000;

 app.use(function (req, res, next) {
//    // console.log('middle ware cmd') //cmd executes on each request to the server
//      // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

//      // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
 
//      // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
//      // Set to true if you need the website to include cookies in the requests sent
//      // to the API (e.g. in case you use sessions)
//     //  res.setHeader('Access-Control-Allow-Credentials', true);
 
     // Pass to next layer of middleware
 
     next()
  });

// create a route for the app
app.get('/', (req, res) => {
  res.send('Server Running');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});