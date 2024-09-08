import React from 'react';
import './OurRooms.css';
import room1 from '../../assets/room1.jpeg';
import room2 from '../../assets/room2.jpeg';
import room3 from '../../assets/room3.jpeg';
import room4 from '../../assets/room4.jpeg';


const OurRooms = () => {
    return (
        <section className='rooms' id='rooms'>
            <div className='rooms_grid pt-18'>
                <div className='rooms_grid_item1 pb-3'>
                    <div className='span_title'>DISCOVER</div>
                    <h2 className='section_heading rooms-hd mb-4 mb-sm-0'>Our Rooms</h2>
                    <div className='rooms_container_des'>
                        <div className='individual_rooms'>
                            <div className='img_container' style={{ backgroundImage: `url(${room1})` }}></div>
                            <div className='flex flex-col justify-center text_container'>
                                <h3>Master Bedroom</h3>
                                <p>The master bedroom in this heritage hotel exudes an aura of timeless elegance and luxury.</p>
                            </div>
                        </div>

                        <div className='individual_rooms'>
                            <div className='img_container' style={{ backgroundImage: `url(${room2})` }}></div>
                            <div className='flex flex-col justify-center text_container'>
                                <h3>The Library</h3>
                                <p>Curl up with a good book in the cozy comfort of the library bedroom.</p>
                            </div>
                        </div>

                        <div className='individual_rooms'>
                            <div className='img_container' style={{ backgroundImage: `url(${room3})` }}></div>
                            <div className='flex flex-col justify-center text_container'>
                                <h3>The Garden Room</h3>
                                <p>Wake up to the tranquil beauty of nature with the breathtaking garden view from this bedroom.</p>
                            </div>
                        </div>

                        <div className='individual_rooms'>
                            <div className='img_container' style={{ backgroundImage: `url(${room4})` }}></div>
                            <div className='flex flex-col justify-center text_container'>
                                <h3>The Nest</h3>
                                <p>Escape the hustle and bustle of the outside world and unwind in the warm and inviting coziness of this charming bedroom.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rooms_grid_item2' style={{ backgroundImage: `url(${room4})` }}></div>
            </div>
        </section>
    );
};

export default OurRooms;
