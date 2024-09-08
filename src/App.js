import React from 'react';
import Hero from './components/Hero/Hero';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Perfect from './components/Perfect/Perfect';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import OurRooms from './components/OurRooms/OurRooms';

function App() {
    return (
        <div>
            
            <Hero />
            <Booking />
            <About />
            <OurRooms />
            <Perfect />
            <Experience />
            <Footer /> 

        </div>
    );
}

export default App;
