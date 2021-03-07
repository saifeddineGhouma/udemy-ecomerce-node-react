const PORT = 5000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
 const routes = express.Router();
 app.use('/api',routes);

// body-parser
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());
 
//cors









//  mongoDB client

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://udemy-ecomerce-men-stack:Oym2Tf2Nva9CXeKI@cluster-marketplace.n6oiy.mongodb.net/marketplace?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//  connecte to server 
routes.use(cors());
app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`);
});
//  connection to  database
client.connect(err => {
  if(err)
    throw  Error(err)
  const collection = client.db("marketplace").collection("products");
  console.log('database success connected')
  // perform actions on the collection object
  client.close();
});
 //   list route
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.get("/products", (req, res) => {
    console.log(req);
    res.send("this route is runing successful!");
  });