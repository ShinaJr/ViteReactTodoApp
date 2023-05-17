import React from 'react'

const TodoItem = ({completed, id,title, deleteTodo, toggleTodo}) => {
  return (
    <div>
        <li key={id}>
        <label>
          <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
         {title}
        </label>
        <button className='btn btn-danger' onClick={()=> deleteTodo(id)}>Delete</button>
      </li> 
    </div>
  )
}

export default TodoItem