import React from 'react';
import TodoListItem from './TodoListItem'; // Assuming TodoListItem is your component

const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        <ul>
            {todoList.map(todo => (
                <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
