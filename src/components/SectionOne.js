import React from 'react';
import "./SectionOne.css";
import SectionOneBack from "../images/SectionOneBack.png";
import Lights from "../images/stringLight.png";
import resumeLight from "../images/resumeLight.png";
import resumeDark from "../images/resumeDark.png";
import linksLight from "../images/linksLight.png";
import linksDark from "../images/linksDark.png";


const SectionOne = () => {
    return(
        <div className="fullSection">
            <div className="mask">
              <img className="one-img" src={SectionOneBack} alt="Section One Background"/>
            </div>
            <div className="img-content">
              <h1 className="nameText">joseph gallegos</h1>
              <div className="fullLights">
                <img className="justLights" src={Lights} alt="String Lights"></img>
                    <button className="resumeButton">
                    <img className="resumeLight" src={resumeLight} alt="Resume Button"></img>
                    <img className="resumeDark" src={resumeDark} alt="Resume Button"></img>
                    </button>
                    <button className="linksButton">
                    <img className="linksLight" src={linksLight} alt="Links Button"></img>
                    <img className="linksDark" src={linksDark} alt="Links Button"></img>
                    </button>
              </div>
            </div>
        </div>
    )
}

export default SectionOne;