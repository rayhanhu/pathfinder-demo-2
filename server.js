const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = 'mongodb+srv://<MongoDBusername>:<MongoDBpassword>@testdata.odsoyzv.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(9000, () => {
  console.log("Server started on port 9000");
});
