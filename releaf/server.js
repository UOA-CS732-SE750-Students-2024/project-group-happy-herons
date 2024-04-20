const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB URI
const uri = 'mongodb+srv://cs732:asdqwe123@cluster0.mmj2ima.mongodb.net/Garbage_Classification_DB?retryWrites=true&w=majority'; // 替换为你的具体 MongoDB 连接字符串
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Schema for the collections
const Schema = mongoose.Schema;
const GarbageItemSchema = new Schema({
  item: String,
  category: String
});

// Create models for each collection
const FoodScrapsBin = mongoose.model('Food_Scraps_Bin', GarbageItemSchema, 'Food_Scraps_Bin');
const Recycling = mongoose.model('Recycling', GarbageItemSchema, 'Recycling');
const Rubbish = mongoose.model('Rubbish', GarbageItemSchema, 'Rubbish');

// Generic function to get items from a collection
const getItems = async (model, res) => {
    try {
      const items = await model.find();
      console.log('Items found:', items);  // Log the found items
      res.json(items);
    } catch (error) {
      console.log('Error fetching items:', error);  // Log any errors
      res.status(400).json('Error: ' + error);
    }
  };

// Routes
app.get('/food-scraps-bin', (req, res) => getItems(FoodScrapsBin, res));
app.get('/recycling', (req, res) => getItems(Recycling, res));
app.get('/rubbish', (req, res) => getItems(Rubbish, res));

// Server Listening
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
