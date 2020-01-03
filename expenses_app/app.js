const submitBtn = document.getElementById("expense");
submitBtn.addEventListener("click", saveExpense);
const expenseDetails = document.getElementById("details");
const expenseValue = document.getElementById("value");
const expenseType = document.getElementById("type");



let expenses = [];

id = 0;

function saveExpense(){

    id += 1;

    let expense = {
        value : expenseValue.value,
        details: expenseDetails.value,
        type: expenseType.value
    }

//add to data structure

    // expenses.push(expense);

    // expenseDetails.value = "";
    // expenseValue.value = "";
    // expenseType.value = "";

    // console.log(expenses);

    saveToDataBase();
     
}


//DB Logic

/*
    dbname = expenses;

    db collection = expenses_values;

    *db created fropm terminal for now
    //insert 1 value:

    db.expenses_values.insert({value: 30, type: "test expense", details: "test"})



    //check if inserted
    db.expenses_values.find() 
*/

// var MongoClient = require('mongodb').MongoClient;

 
var MongoClient = require(['mongodb'], function (mongoClient) {
    //foo is now loaded.
});
var url = "mongodb://localhost:27017/";


 


function saveToDatabase() {
       // Get the documents collection
       var collection = db.collection('expenses_values');

       const expense = {
        value : expenseValue.value,
        details: expenseDetails.value,
        type: expenseType.value
      }

       // Insert expense
       collection.insertOne(myobj, function(err, res) {
        if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
}



var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  saveToDatabase(db, function() {
    db.close();
  });
});

