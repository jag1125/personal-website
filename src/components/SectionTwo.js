import React from 'react';
import allPolaroids from "../images/allPolaroids.png";
import gridBack from "../images/gridBack.jpg";
import IDBack from "../images/IDBack.png";
import PostIt from "../images/PostIt.png";
import "./SectionTwo.css";

const SectionTwo = () => {
    return(
        <div className="aboutContainer">
            <img className="Polaroids" src={allPolaroids} alt="Polaroids"></img>
            <img className="GridBack" src={gridBack} alt="Grid"></img>
            <h1 className="aboutTitle">about me</h1>
            <div className="entireID">
                <img className="IDBack" src={IDBack} alt="ID Background"></img>
                <div className="EntireText">
                <h2 className="CollegeName">Williams College</h2>
                <p className="InfoText">BA ・ Computer Science and Mathematics<br/>2023-2027<br/>|||| ||</p>
                </div>
            </div>
            <div className="AllPostIts">
                <img className="PostIt" src={PostIt} alt="Post It"></img>
                <p className="PostText1"><b>Hi!</b> I'm Joseph Gallegos, a CS and Math student from New York City.</p>
                <img className="PostIt" src={PostIt} alt="Post It"></img>
                <p className="PostText2">I'm currently focused on developing my <b>full-stack</b> skills. <b>Thank you for visiting!</b></p>
            </div>
        </div>
    )
}

export default SectionTwo;