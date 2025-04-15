import React from "react";
import WindowBack from "../images/WindowBack.png";
import "./ProjectWindow.css";

const ProjectWindow = ({projectImage, description}) => {
    return(
        <div className="window-container">
            <img className="window-back" src={WindowBack} alt="Window"></img>
            <img className="project-image" src={projectImage} alt="Project"></img>
            <button className="project-button">
                <h1 className="project-name">{description}</h1>
            </button>
        </div>
    )
}

export default ProjectWindow;