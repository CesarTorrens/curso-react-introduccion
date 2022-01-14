import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter () {
    const {completedTodos , totalTodos} = React.useContext(TodoContext);
    return (
        <div>
            <h2 className="TodoCounter">Tus Tareas</h2> 
            <span className="TodoCounter-span">Has completado {completedTodos} de {totalTodos} Tareas</span>  
        </div>
       
    );
}

export { TodoCounter };