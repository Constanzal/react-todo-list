import React, { useState } from 'react';
import Form from './Componentes/Form';
import TodoList from './Componentes/TodoList';
import './App.css';


function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className="app-container">
      <Form texto={texto} tareas={tareas} setTareas={setTareas} setTexto={setTexto}/>
      <TodoList setTareas={setTareas} tareas={tareas} />
      </div>
    </div>
  );
};

export default App;
