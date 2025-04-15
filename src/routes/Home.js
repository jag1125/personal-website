import React from 'react';
import Sidebar from '../components/Sidebar';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import "./Home.css";

const Home = () => {
    return (
        <div className="MainPage">
            <Sidebar className="sidebar"/>
            <SectionOne className="section-one"/>
            <SectionTwo className="section-two"/>
            <SectionThree className="section-three"/>
        </div>
    )
}

export default Home