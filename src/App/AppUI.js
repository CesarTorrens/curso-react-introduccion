import React from "react";
import "./App.css";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import {TodoSearch} from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { CreateTask } from '../CreateTask';
import { InputTask } from '../InputTask';
import { ImageTask } from '../ImageTask';
import { CreateNewTask } from '../CreateNewTask';


function AppUI() {
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodos,
        deleteTodos 
    } = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
        <div className="ContainerLeft">
          <div className='ContainerLeftDiv'>
            <CreateTask />
            
            <InputTask />
            <CreateNewTask />
            <ImageTask />
          </div>
         
        </div>
        <div className="ContainerRight">
          <div className='ContainerLeftDiv'>
            <TodoCounter />
    
            <TodoSearch />
            <div className='TasksDiv'>              
                <TodoList>
                {error && <p>ERROR!!!!</p>} 
                {loading && <p>Estamos cargando!</p>}                
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
                
                {searchedTodos.map(todo => (
                        <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed} 
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                        />
                        ))}
                </TodoList>                              
            </div>           
    
            
          </div>
          
        </div>
     
       </React.Fragment>
    );
}

export { AppUI };