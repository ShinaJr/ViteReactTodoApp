import React, { useEffect, useState } from 'react'
import "./styles.css"
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

const App = () => {
  //getting the information stored in the local storage using a useState and passing a fucntion as our defaulrt value
  const [todos, setTodos] =useState(()=> {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })

 //storing the todos in a local storage by brunning the function  anytime the user modifies the values of the todos array using the useEffectHook
 useEffect(() => {
   localStorage.setItem("ITEMS", JSON.stringify(todos))
 }, [todos])
 

  //add todo function to be able to use in the newTodoForm component
  const addTodo = (title) => {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed:false},
      ]
    })
  }
//toggle function
const toggleTodo = (id, completed) => {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed}
    } 
    return todo
  })})
  }

  //delete function
  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
  })
}
  return (
    <>
    <NewTodoForm addTodo={addTodo}/>
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )

}

export default App;
