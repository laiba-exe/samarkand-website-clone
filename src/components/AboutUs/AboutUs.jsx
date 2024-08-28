import React from 'react';
import './AboutUs.css'; // Import your CSS for styling
import { aboutItem, aboutBg } from '../../assets'; 

const AboutUs = () => {
    return (
        
            <div className="about-us">
                <img src={aboutBg} alt="" />
                <div className="grid">
                    <div className="grid_item-1">
                        <img src={aboutItem} alt="" />
                    </div>
                    <div className="grid_item-2 drop-shadow">
                        <h2 className="section_heading">Samarkand House</h2>
                        <p className="paragraphs">
                        Built in the 1960s around two massive boulders, Samarkand House was inspired by the iconic works of American architect, Frank Lloyd Wright. Our family's private getaway for three generations, we are pleased to open our doors and curate unforgettable experiences for our guests.
                        </p>
                    </div>
                </div>
            </div>
       
    );
};

export default AboutUs;
