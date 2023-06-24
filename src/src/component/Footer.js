import React from "react";
import gitHub from "./img/GitHub-logo.png";
import linkIn from "./img/pngtree-linkedin-icon-png-image_3547995.jpg"

export default function Footer() {
    return(
        <footer className="footer">
           <a className="column" href="https://github.com/Cmbailey089"> 
            <img src={gitHub}></img>
             </a>
             <a className="column" href="https://www.linkedin.com/feed/">
            <img src={linkIn}></img>
           </a>
        </footer>
    )
}