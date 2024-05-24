import React, { useState } from 'react';
import Todo from './todoCom';
import TodoForm from './todoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodo = { text: text.trim() }; // Add trim function here
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-do App </h1>
      <hr />
      {todos.map((todo, index) => (
        <Todo key={index}
         index={index} 
        todo={todo}
         completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))
        }
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
