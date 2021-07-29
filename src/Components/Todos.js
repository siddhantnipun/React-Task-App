import React from 'react';
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
    let mystyle={
        minHeight: "43vh",
       }
    return (
        <div className="container w-50 p-3" style={mystyle}>
            <h3 className=" my-3">Tasks List</h3>
            {props.todos.length===0? "No Tasks to display": 
            /* JS higher order method map */
            props.todos.map((todo) =>{
                return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
                })
            }     
        </div>
    ) 
}
 