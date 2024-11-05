import * as React from 'react';

const todoList = [
  {
    id: 1,
    title: "Read the Book",
    author: "James Kirk",
  },
  {
    id: 2,
    title: "Edit the source code",
    author: "Luke Skywalker",
  },
  {
    id: 3,
    title: "Complete assignment",
    author: "Spok the Vulcan",
  }
];

const updatedList = todoList.map((item)=> {
  return <li key={item.id}> {item.title}</li>;
});

function App() {
return (
  <div>
    <h1>To Do List</h1>
    <hr />
    <ul>
      {updatedList}
    </ul> 
  </div>
);
}

export default App;