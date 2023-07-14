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
            <img src={planner} alt="planner"/>
            </a>
            <a href="https://blog-for-all.herokuapp.com/" >
            <img src={comments} alt="comments"/>
            </a><a href="https://github.com/Cmbailey089/The-portfolio" >
            <img src={picOfMe} alt="pic"/>
            </a><a href="https://github.com/Cmbailey089/sql-database" >
            <img src={database} alt="databse"/>
            </a><a href="https://github.com/Cmbailey089/almost-right-weather" >
            <img src={weather} alt="weather"/>
            </a><a href="https://whispering-sea-09039-50a149ea49a2.herokuapp.com/" >
            <img src={download} alt="networking"/>
            </a>
        </div>
    )
}