import React, { useState } from "react";


export const AddTodo = ({ addTodo }) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
        addTodo(title,desc);
        settitle("");
        setdesc("");
        }
    }
  return (
    <div className="container my-3 w-50 p-3">
        <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=> {settitle(e.target.value)}}
            className="form-control"
            id="Title"
            aria-describedby="emailHelp"
          />
       
        </div>
        <div className="mb-3">
          <label htmlFor="Desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=> {setdesc(e.target.value)}}
            className="form-control"
            id="Desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add todo
        </button>
      </form>
    </div>
  );
};
