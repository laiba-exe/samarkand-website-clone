import React, { useState } from 'react';
import './Hero.css';
import logo from '../../assets/logo.png';

const Hero = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <section className='hero w-full'>
            <div className='highlighter'></div>
            <div className='container'>
                <nav className='topbar'>
                    <div className='logo_container'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <button class='toggle' onClick={toggleSidebar}>
                    <img class={sidebarOpen ? 'toggle active' : 'toggle'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAPCAYAAAAYjcSfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABBSURBVHgB7dQhDgAwCANA4OOEl3ebn0BAVS8BRVLTYAASXOlvG1ncKeNi58nHcMPTm6GjDY/m3WTj1N5l0O/dUwd900LbvT92fgAAAABJRU5ErkJggg=='></img>
                    </button>
                    <ul className="menu">
                        <li><a href="#">The House</a></li>
                        <li><a href="#">Dining</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </nav>
                <div className={`sidebar ${sidebarOpen ? 'sidebarshow' : ''}`} id='sidebar'>
                    <ul>
                    <li><a href="#">The House</a></li>
                        <li><a href="#">Dining</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </div>
            </div>
            <div className='main_heading'>An Architectural Gem Perched in the Murree Hills</div>
        </section>
    );
};

export default Hero;
