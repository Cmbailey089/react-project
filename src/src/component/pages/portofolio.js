import React from "react";
import planner from "../img/planner.jpg";
import comments from "../img/comment-icon-pink.jpg";
import picOfMe from "../img/20201026_143858[338].jpg";
import database from "../img/database.jpg";
import weather from "../img/weather.jpg";
import download from "../img/download.jpg";

export default function portfolio() {
    return(
        <div className="portfolio">
            <a href="https://github.com/Cmbailey089/work-planner" >
            <img src={planner}/>
            </a>
            <a href="https://github.com/Cmbailey089/work-planner" >
            <img src={comments}/>
            </a><a href="https://github.com/Cmbailey089/work-planner" >
            <img src={picOfMe}/>
            </a><a href="https://github.com/Cmbailey089/work-planner" >
            <img src={database}/>
            </a><a href="https://github.com/Cmbailey089/work-planner" >
            <img src={weather}/>
            </a><a href="https://github.com/Cmbailey089/work-planner" >
            <img src={download}/>
            </a>
        </div>
    )
}