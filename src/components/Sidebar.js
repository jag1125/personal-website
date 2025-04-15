import "./Sidebar.css";
import { React, useState } from 'react';
import { Link } from "react-router-dom";
import buttonImg from "../images/PortfolioButton.png";
import headPhoto from "../images/headPhoto.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="sidebar">
            <img className="headshot" src={headPhoto} alt="Me!"></img>
            <ul className={click ? "onlyButtons.active" : "onlyButtons"}>
                <Link to="/">
                <button className="SideButton">
                <img src={buttonImg} alt="Button" className="buttonImage"/>
                <li className="img-text">
                    home
                </li>
                </button>
                </Link>
                <Link to="/about">
                <button className="SideButton">
                <img src={buttonImg} alt="Button" className="buttonImage"/>
                <li className="img-text">about</li>
                </button>
                </Link>
                <Link to="/projects">
                <button className="SideButton">
                <img src={buttonImg} alt="Button" className="buttonImage"/>
                <li className="img-text">projects</li>
                </button>
                </Link>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#222"}}/>
                ) : (
                    <FaBars size={20} style={{ color: "#222"}}/>
                )}
            </div>
        </div>
        
    );
}

export default Sidebar;