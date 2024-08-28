import React from 'react';
import './About.css'; 
import { aboutItem, aboutBg } from '../../assets'; 

const About = () => {
    return (
        <section className='about_us w-full'>
        <img className='backdrop' src={aboutBg} alt="" />
            <div className="container">     
                <div className="grid" id='about'>
                    <div className="grid_item-1">
                        <img className='grid_item-1-img' src={aboutItem} alt="" />
                    </div>
                    <div className="grid_item-2 drop-shadow">
                        <h2 className="section_heading">Samarkand House</h2>
                        <p className="paragraphs">
                        Built in the 1960s around two massive boulders, Samarkand House was inspired by the iconic works of American architect, Frank Lloyd Wright. Our family's private getaway for three generations, we are pleased to open our doors and curate unforgettable experiences for our guests.
                        </p>
                    </div>
                </div>
            </div>
            </section>
    );
};

export default About;
