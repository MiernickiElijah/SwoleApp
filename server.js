const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/index", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/htmlroutes.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://miernickielijah:<password>@cluster0.r4ova.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});