import React from "react";

const frontEnd = ['HTML','CSS','Javascript','Web-API','Third-party API','Server-side API'];
const backEnd = ['NodeJs','OOP','Express','SQL','ORM','MVC','Computer Science','MongoDB','PWA','React']

export default function Resume() {

    return (
        <div>
           <h1>Front End</h1>
           <ul className="front-list">
            {frontEnd.map((skills)=> (
                <li key={skills}>{skills}</li>
            ))}
           </ul> 
           <h1>Back End</h1>
           <ul className="back-list">
            {backEnd.map((skills)=> (
                <li key={skills}>{skills}</li>
            ))}
           </ul>

        </div>
    )
}