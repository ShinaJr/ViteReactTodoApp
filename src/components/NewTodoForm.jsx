import React, { useState } from 'react'

const NewTodoForm = ({addTodo}) => {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
      if(newItem === "") return false
      //else return the below function
      addTodo(newItem)
      setNewItem("")
    }
  return (
    <div>
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input type='text' id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />

      </div>
      <button className='btn'>Add</button>
    </form>
    </div>
  )
}

export default NewTodoForm