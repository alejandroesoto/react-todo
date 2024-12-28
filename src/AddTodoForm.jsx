import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (todoTitle.trim() !== '') {
      onAddTodo({
        title: todoTitle,
        id: Date.now()
      });
      setTodoTitle('');
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel 
        id="todoTitle"
        type="text"
        value={todoTitle} 
        onChange={handleTitleChange} 
        placeholder="Add Todo"
        autoFocus={true}
      >
      Title 
      </InputWithLabel> 
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;