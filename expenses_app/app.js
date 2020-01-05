var express = require("express");
var app = express();
var port = 3000;
 
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

//middleware
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//DB logic
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/expenses-demo");


//define schema
var expenseSchema = new mongoose.Schema({
    value: Number,
    type: String,
    details: String
  });

//create model
var Expense = mongoose.model("Expense", expenseSchema);

//POST route
app.post("/addexpense", (req, res) => {
    var myData = new Expense(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });


//display client-side form with sendFile() 
app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
 
app.listen(port, () => {
  console.log("Server listening on port " + port);
});