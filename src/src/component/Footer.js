import React from "react";
import gitHub from "./img/GitHub-logo.png";
import linkIn from "./img/linkedin-icon-1.png";
import stack from "./img/stackoverflow.png";

export default function Footer() {
    return(
        <footer className="footer">
           <a className="column" href="https://github.com/Cmbailey089"> 
            <img src={gitHub} alt="github"></img>
             </a>
             <a className="column" href="https://www.linkedin.com/in/christopher-bailey-913859206/">
            <img src={linkIn} alt="linkin"></img>
           </a>
           <a className="column" href="https://stackoverflow.com/users/22130446/chrismb">
            <img src={stack} alt="stack"></img>
           </a>
        </footer>
    )
}