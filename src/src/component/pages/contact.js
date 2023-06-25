import React from "react";

export default function Contact() {
    return(
        <div>
            <label>Your </label>
           <form className="form-page">
           <input
             name="name"
            type="text"/>
            <input
             name="email"
            type="email"/>
            <input className="message-input"
             name="message"
            type="text"/>

           </form>
        </div>
    )
}