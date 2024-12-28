import React, { useEffect, useState } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() { 
  const savedValue = JSON.parse(localStorage.getItem('savedTodoList')) || []; 
  const [state, setState] = useState(savedValue); 
  useEffect(() => { 
    localStorage.setItem('savedTodoList', JSON.stringify(state)); 
  }, [state]); 
  return [state, setState]; 
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => { 
    setTodoList([...todoList, newTodo]);};

  const removeTodo = (id) => { 
    const newTodoList = todoList.filter(todo => todo.id !== id); 
    setTodoList(newTodoList); };

  return (
    <React.Fragment>
        <h1>To Do List</h1>
        <AddTodoForm onAddTodo={addTodo} /> 
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </React.Fragment>
  );
}

export default App;