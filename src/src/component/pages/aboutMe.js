import React from "react";
import picOfMe from "../img/20201026_143858[338].jpg"

export default function AboutMe() {

    return(
        <div className="about-page">
            
            <h1>About me!</h1>
            
            <p>
                Hi! My name is Chris and I'm going to tell you a little about myself. I am currently enrolled in a coding bootcamp.
                While not having any experience in coding or web development, I am learning a lot and hope to put my skills to the test in a
                career field. 
            </p>
            <img src={picOfMe} alt="me"></img>
        </div>
    )
}