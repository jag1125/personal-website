import React from 'react';
import BrickBack from "../images/BrickBack.jpg";
import ProjectWindow from "./ProjectWindow.js";
import PortfolioProject from "../images/PortfolioProject.png";
import "./SectionThree.css";

const SectionThree = () => {
    return(
        <div className="section-three-container">
            <img className="brick-back" src={BrickBack} alt="Brick Background"></img>
            <div className="window-containers">
                <ProjectWindow projectImage={PortfolioProject} description="Portfolio Project"/>
            </div>
        </div>
    )
}

export default SectionThree;