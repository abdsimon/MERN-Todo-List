// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [editTodoId, setEditTodoId] = useState()

  const [saveEditTodo, setSaveEditTodo] = useState()

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      console.log(todos)
    }
  };

  const handleAddTodo = async () => {


    try {
      const response = await axios.post('http://localhost:5000/api/todos', { title: newTodo });
      setTodos([...todos, response.data]);
      setNewTodo('');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {


    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);

      
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  console.log('Edit ', editTodoId)

  const handleEditTodo = async () => {
    console.log("editing ", editTodoId)
    console.log("new value", saveEditTodo)


    try {
    const payload =  await axios.put(`http://localhost:5000/api/todos/${editTodoId}`, {
      title:saveEditTodo
    });

      console.log(payload.data)
      setTodos(payload.data);
      setEditTodoId()
      setSaveEditTodo('')
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map (todo => (
          <li key={todo._id}>
           {todo._id ===  editTodoId ?
           <input defaultValue={todo.title}
           onChange={(e) => setSaveEditTodo(e.target.value)}

           />:

           <p>{todo.title}</p>}
            <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
         {todo._id ===  editTodoId ?
          <button className='Save' onClick={handleEditTodo}>Save</button> :
          <button className='Edit' onClick={() => setEditTodoId(todo._id)}>Edit</button>}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



