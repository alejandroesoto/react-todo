import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.todoTitle.value;
        console.log(todoTitle); 
        props.onAddTodo(todoTitle); 
        event.target.reset(); 
    };
    const handleChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title" onChange={handleChange}/>
            <button type="submit">Add</button>
        </form>
    )
};

export default AddTodoForm;