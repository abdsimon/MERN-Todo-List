// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const cors = require('cors');
const app = express();



// Middleware
app.use(bodyParser.json());
app.use(cors());

// Mock data
let todos = [];

// Routes
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { id: Date.now(), title, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(200).json({ message: 'Todo deleted successfully' });


});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;

  const {title} = req.body

  console.log('Client data ==> ',id, title)

  console.log('Todo array ==> ',todos)

  const newTodos = todos.map((obj)=>{
   if(obj.id == id){
    obj.title = title 
   }
     return obj
  })
   todos = newTodos
res.json(newTodos)
});

mongoose.connect(process.env.MONG_URI)
mongoose.connect()
.then (() => {console.log("connected to MongoDB")

})
.catch((err)=> console.error(err));

// Start server

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port `, process.env.PORT);
});