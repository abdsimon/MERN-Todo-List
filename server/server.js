// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const cors = require('cors');
require('dotenv').config();

const Todo=require('./Todo')

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONG_URI,{dbName:"todoApp"})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => console.error(err));

// Routes
app.get('/api/todos', async (req, res) =>  {
  
  const todos= await  Todo.find()
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const { title } = req.body;
  const newTodo =   new Todo({title:title})
  await  newTodo.save();
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await  Todo.findByIdAndDelete(id);
  res.status(200).json({ message: 'Todo deleted successfully' });


});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const {title} = req.body
  console.log(id);
  console.log(title);
await Todo.findByIdAndUpdate(id ,{$set:{title:title}})
const  updatedTodo = await Todo.find()
res.json(updatedTodo)
});

// Start server

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port `, process.env.PORT);
});