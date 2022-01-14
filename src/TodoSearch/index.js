import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css"

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(searchValue)
        setSearchValue(event.target.value)
    }
    return (    
        <input 
        className="TodoSearch" 
        placeholder="En cual Tarea estas pensando?"
        value={searchValue}
        onChange={onSearchValueChange}
        />  
        
    );
}

export {TodoSearch};