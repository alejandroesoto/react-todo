import React, { useEffect, useState } from "react";
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // update the default state for todoList to be an empty Array 
  const [todoList, setTodoList] = useState([]); 
  // new state variable named isLoading with a default value true
  const [isLoading, setIsLoading] = useState(true);

  // create a new async function fetchData 
  const fetchData = async () => { 
    const options = { 
      method: 'GET', 
      headers: { 
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`, }
    }; 
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`; 
    
    try { 
      const response = await fetch(url, options); 
      if (!response.ok) { 
        throw new Error(`Error: ${response.status}`); 
      } 
      const data = await response.json(); 

      // Transform the data to match the todo schema 
      const todos = data.records.map(record => ({ 
       title: record.fields.title,
       id: record.id
      }));

      setTodoList(data.records.map(record => ({ id: record.id, ...record.fields }))); 
      setIsLoading(false); 
    } catch (error) { 
      console.error("An error occurred:", error); 
      setIsLoading(false); 
    } 
  }; 
  
  // replace the contents of the first useEffect with a call to fetchData 
  useEffect(() => { 
    fetchData(); 
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