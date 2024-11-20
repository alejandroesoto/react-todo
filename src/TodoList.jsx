import TodoListItem from "./TodoListItem";

const todoList = [
    { id: 1, title: "Read the Book", author: "James Kirk"},
    { id: 2, title: "Edit the source code", author: "Luke Skywalker"},
    { id: 3, title: "Complete assignment", author: "Spok the Vulcan"}
];

function TodoList() {
    return (
            <div>
                {todoList.map( todo => (
                    <TodoListItem key={todo.id} title={todo.title}/>
                ))}
            </div>
    );
};

export default TodoList;