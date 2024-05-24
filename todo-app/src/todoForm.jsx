import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {

// usestate for getting & setting values of todos.
  const [value, setValue] = useState();

// handle submission of todo items to be added in the list & if empty item added display an alert to the user
  const handleSubmit = e => {
    e.preventDefault();
    
    // use trim function for removing whitespaces.
    if (!value.trim()) { 
      alert("Empty to-do can't be save.");
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add To-do..."/>
    </form>
   
  );
};

export default TodoForm;