const express = require('express');
const app = express();


app.get('/hello', (req, res) => {
    res.status(200).json({ mssg: "hello people" })
 })

 const port=5000;
 
 app.listen(port, ()=> { 
    console.log(`Server is running at http://localhost:${port}`)
});

app.post('/todos', (req, res) => {
    const { text, completed } = req.body;
    const newTodo = new Todo({ text, completed });
    newTodo.save()
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Read all Todos
app.get('/todos', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});