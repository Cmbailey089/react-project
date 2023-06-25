import React from "react";

export default function Contact() {
    return(
        <div>
            <label>Feel free to message me!</label>
           <form className="form-page">
           <input
             name="name"
            type="text"
            placeholder="name"
            />
            
            <input
             name="email"
            type="email"
            placeholder="email"
            />
            <input className="message-input"
             name="message"
            type="text"
            placeholder="message"/>
            <button className="btn">Submit</button>
           </form>
        </div>
    )
}