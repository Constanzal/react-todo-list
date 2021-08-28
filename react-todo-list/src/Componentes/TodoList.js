import React from 'react';
import Todo from './Todo';

const TodoList = ({ tareas, setTareas }) => {
    console.log(tareas);
    return(
        <div className="container">
            <ul className="todo-list">
                {tareas.map(todo => (
                    <Todo setTareas={setTareas} tareas={tareas} todo={todo} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;