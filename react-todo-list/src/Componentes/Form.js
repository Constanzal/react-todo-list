import React from 'react';
import './Form.css';

const Form = ({ texto, setTexto, tareas, setTareas }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setTexto(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTareas([
            ...tareas, {text: texto, completed: false, id: Math.random() * 1000}
        ]);
        setTexto("");
    };

    return(
        <form className="form-todo">
            <input value={texto} onChange={inputTextHandler} type="text" placeholder="TAREAS DEL DÍA" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit"><i className="fa fa-plus"></i></button>
        </form>
    );
};

export default Form;