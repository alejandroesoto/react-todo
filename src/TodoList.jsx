import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <ul>
        {/*
      {todoList.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
        */}
      
      {todoList.map((item) => (
        <TodoListItem title={item.title} key={item.index}/>
      ))}

    </ul>
  );
}

export default TodoList;