const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    var dbo = db.db("test_db_2");
    console.log(dbo);
    // var myobj = { name: "Company Inc", address: "Highway 37" };
    // dbo.collection("customers").insertOne(myobj, function(err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // });

//     console.log(client.topology.clientInfo);

//    client.close();
});