import React from "react";

export default function Contact() {
    return(
        <div>
            <h1>Leave me message with your name and E-mail and I will reach out as soon as possible</h1>
            <form className="contact-form">
                <input className="name-input" type="text" value={input}>Name</input>
                <input className="email-input" type="text" value={input}>Email</input>
                <input className="message-input" type="text" value={input}></input>
            </form>
        </div>
    )
}