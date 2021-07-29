import React from 'react'

export const About = () => {
    let mystyle={
        minHeight: "79.7vh",
       }
    return (
        <div className="container my-3 lead p-3" style={mystyle}>
            <p>This is a React website to create and delete tasks. The tasks are saved so they do not disappear even if you reload the page.</p>
        </div>
    )
}