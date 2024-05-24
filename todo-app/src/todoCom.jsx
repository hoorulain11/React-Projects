import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className='container'
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        
      </div>
      <button className='button1' onClick={() => completeTodo(index)}>done</button>
      <button className='button2' onClick={() => removeTodo(index)}>x</button>
    </div>
  );
};

export default Todo;