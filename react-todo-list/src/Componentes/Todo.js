import React from 'react';
import './Todo.css';

const Todo = ({ text, todo, tareas, setTareas }) => {
    const deleteHandler = () => {
        setTareas(tareas.filter((el) => el.id !== todo.id));
    }
    return (
        <div className="todo">
            <li className="todo-item">{ text }</li>
            <button onClick={deleteHandler} className="delete-btn btn-outline-secondary"><i className="fa fa-times"></i></button>
        </div>
    );
}

export default Todo;