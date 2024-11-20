import React, { useState } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
        <h1>To Do List</h1>
        <AddTodoForm onAddTodo={setNewTodo}/>
        <TodoList />
        <p>New Todo: {newTodo}</p>
    </div>
  )
}

export default App;