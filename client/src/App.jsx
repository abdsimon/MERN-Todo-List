import {  useState } from "react";


export default function App() {
  const [todos, setTodos] = useState([]);
  
  function onAdd(e) {
    e.preventDefault(); // Corrected typo here
    const data = e.target.simon.value //input value

    console.log(data)

    setTodos([...todos, data])
    e.target.reset() //reset input fialed
   }

   console.log('todos: ', todos)
 
// create delete handler

function onDelete(){}




// create update handler

function onUpdate(){}

  return (
    <>
    <form onSubmit={onAdd}>
      <h1>Todo List</h1>
      <input name='simon'/>
      <button>Add</button>
    </form>
    <ul>
      {todos.map((item)=><li key={item}>{item}</li>)} 
    </ul>
    </>
  );
}