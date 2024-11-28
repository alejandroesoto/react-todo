import React from 'react';

function TodoListItem({ title, id }) {
  return (
    <li>
      {title} (ID: {id})
    </li>
  );
}

export default TodoListItem;
