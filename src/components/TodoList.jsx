import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo, toggleTodo}) => {
  return (
        <ul className='list'>
    {/* Rendering nothing if there's no todo using short circuiting*/}
    {todos.length === 0 && "No Todos Available"}
    {todos.map(todo =>
      {
        {/* <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/> */}
        return ( 
             
          <TodoItem {...todo} key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
         
          )
    }
    )
    }
    </ul>
  )
}

export default TodoList