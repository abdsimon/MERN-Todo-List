// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Mock data
let todos = [];

// Routes
app.get('api/todos', (req, res) => {
  res.json(todos);
});

app.post('api/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { id: Date.now(), title, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(200).json({ message: 'Todo deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
