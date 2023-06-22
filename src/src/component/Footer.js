import React from "react";
import gitHub from "./img/GitHub-logo.png";
import linkIn from "./img/pngtree-linkedin-icon-png-image_3547995.jpg"

export default function Footer() {
    return(
        <footer className="footer">
            <h1 className="container">Footer</h1>
            <image src={gitHub} href="https://github.com/Cmbailey089"></image>
            <image src={linkIn} href="https://www.linkedin.com/feed/"></image>
        </footer>
    )
}