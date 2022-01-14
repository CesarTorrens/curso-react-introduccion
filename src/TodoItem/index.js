import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const OnCheck = (props) =>  props.completed = true

    return (
        <li class={`TodoItem ${props.completed && 'TodoItemCheck'}`}>
            <span 
            className={`Check ${props.completed && 'CheckGreen'}`}
            onClick={props.onComplete}
            ><i class="bi bi-check-lg"></i></span>
            <p className={`Check ${props.completed && 'CheckGreen'}`}>{props.text}</p>
            <span 
                className="Trash"
                onClick={props.onDelete}
            ><i class="bi bi-trash"></i></span>
        </li>
    );
}

export { TodoItem }