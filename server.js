const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000; // Use PORT from .env or default to 3000
const uri = process.env.MONGO_URI; // Use MONGO_URI from .env

const client = new MongoClient(uri);

app.use(express.json());

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Create (Insert) endpoint
app.post("/insert", async (req, res) => {
  try {
    const { collection, document } = req.body;
    const db = client.db("testDB");
    const result = await db.collection(collection).insertOne(document);
    res.status(201).send(`Document inserted with ID: ${result.insertedId}`);
  } catch (err) {
    res.status(500).send("Error inserting document:", err);
  }
});
// Read (Find) endpoint
app.get("/find/:collection", async (req, res) => {
  try {
    const { collection } = req.params;
    const db = client.db("testDB");
    const documents = await db.collection(collection).find({}).toArray();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).send("Error finding documents:", err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectToMongoDB();
});