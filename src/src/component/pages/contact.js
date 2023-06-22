import React from "react";

export default function Contact() {
    return(
        <div>
            <h1>Leave me message with your name and E-mail and I will reach out as soon as possible</h1>
            <form className="contact-form">
                <input className="name-input" type="text" >Name</input>
                <input className="email-input" type="text" >Email</input>
                <input className="message-input" type="text" ></input>
            </form>
        </div>
    )
}