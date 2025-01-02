import React, { useEffect, useState } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // update the default state for todoList to be an empty Array 
  const [todoList, setTodoList] = useState([]); 
  // new state variable named isLoading with a default value true
  const [isLoading, setIsLoading] = useState(true);

  // define the useEffect React hook with an empty dependency list 
  useEffect(() => { 
   const fetchData = new Promise((resolve, reject) => { 
   // mimic a loading delay with setTimeout 
   setTimeout(() => { 
     resolve(
      { data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [] } }
     ); 
    }, 2000); 
  }); 
 
  fetchData 
    .then((result) => { 
      // use the state setter to update the list 
      setTodoList(result.data.todoList); 
      setIsLoading(false);
    })
    .catch((error) => { 
      console.error("An error occurred:", error); 
      setIsLoading(false);
    }); 
  }, []); // empty dependency list

  // add an if statement to check that isLoading is false before setting localStorage 
  useEffect(() => { 
    if (!isLoading) { 
      localStorage.setItem('savedTodoList', JSON.stringify(todoList)); 
    } 
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => { 
     setTodoList([...todoList, newTodo]); 
  }; 
    
  const removeTodo = (id) => { 
    const newTodoList = todoList.filter(todo => todo.id !== id); 
    setTodoList(newTodoList); 
  };

  return ( 
    <React.Fragment>
    <h1>To Do List</h1> 
    {isLoading ? 
      ( 
      <p>Loading...</p> 
      ) : 
      ( 
      <React.Fragment> 
        <AddTodoForm onAddTodo={addTodo} /> 
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
      </React.Fragment> 
      )
    } 
   </React.Fragment> 
 );
}

export default App;