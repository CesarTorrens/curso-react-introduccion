import React from "react";
import { TodoContext } from "../TodoContext";
import "./TextArea.css";


function InputTask () {    
    const {        
        newTodoValue,
        setNewTodoValue
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <textarea 
        value={newTodoValue}
        onChange={onChange}
        className="TextArea" 
        placeholder="Escribe aqui su tarea"></textarea>
    );
}

export { InputTask };