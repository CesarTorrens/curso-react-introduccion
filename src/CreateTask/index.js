import React from "react";
import "../TodoCounter/TodoCounter.css"

function CreateTask() {
    return ( 
        <div>
            <h1 className="TodoCounter">Crea una Nueva Tarea</h1>
            <p className="TodoCounter-span">Introduzca la Tarea</p>
        </div>       
                        
    );
}

export { CreateTask };