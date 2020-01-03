const mongo = require('mongodb');
//MongoClient is used to connect to the MongoDB server.
const MongoClient = mongo.MongoClient;
//This is the URL to the database. The 27017 is the default port on which the MongoDB server listens.
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }, (err, client) => {

    if (err) throw err;

    console.log(client.topology.clientInfo);

    client.close();
});