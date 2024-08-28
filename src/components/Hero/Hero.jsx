import React from 'react';
import './Hero.css';
import { mainImage, logo } from '../../assets';
const Hero = () => {
    return (

        <section className='hero w-full'>
            <div className='highlighter'></div>
            <div className='container'>
                <nav className='topbar'>
                    <div className='logo_container'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='toggle'>
                        <img src="" alt="" />
                    </div>
                    <ul className="menu">
                         <li><a href="#">The House</a></li>
                         <li><a href="#">Dining</a></li>
                         <li><a href="#">Events</a></li>
                    </ul>
                </nav>
                
            </div>
            <div className='main_heading'>An Architectural Gem Perched in the Murree Hills</div>

        </section>
        // <section className="hero">
        //     <div className='main-bg'>
        //         <img src={mainImage} alt="" />
        //     </div>
        //     <div className="highlighter"></div> 
        //     <div className="hero-content">
        //         <img src={logo} alt="Logo" className="logo" />
        //         <nav className="navbar">
        //             <ul className="nav-links">
        //                 <li><a href="#">The House</a></li>
        //                 <li><a href="#">Dining</a></li>
        //                 <li><a href="#">Events</a></li>
        //             </ul>
        //         </nav>
        //         <div className="hero-text">
        //             <h1>An Architectural Gem Perched in the Murree Hills</h1>
                    
        //         </div>
        //     </div>
        //     <div className="hero-container"></div>
        // </section>
    );
};
export default Hero;
