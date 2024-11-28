import React from 'react';

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;