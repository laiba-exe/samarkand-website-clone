import React from 'react';
import './Booking.css'; 
import { person, calendar } from '../../assets'; 

const Booking = () => {
    return (
        <div className='booking'>
            <div className='flex w-full date_outer'>
                <div className='checkIn book_grid_items'>
                    <div>
                        <div className='flex span_book items-center'>
                            <img src={calendar} alt="" />
                            <div>Check In</div>
                        </div>
                        <div className='b_right'>
                            <div className='number'>27</div>
                            <div className='date'>August, 2024</div>
                        </div>
                    </div>
                </div>
                <div className='checkOut book_grid_items'>
                    <div>
                        <div className='flex span_book items-center'>
                            <img src={calendar} alt="" />
                            <div>Check Out</div>
                        </div>
                            <div className='b_right'>
                                <div className='number'>28</div>
                                <div className='date'>August, 2024</div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='book_grid_items'>
                <div>
                    <div className='flex span_book items-center book_grid_items'>
                        <img src={person} alt="" />
                        <div>Persons</div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='about_adults_grid'>
                            <div className='person_title'>Adults</div>
                            <div className='about_adults_grid_button'>
                                <div className='minus p_icon ml-2'>-</div>
                                <div className='p_number'>2</div>
                                <div className='plus p_icon mr-2'>+</div>
                            </div>
                        </div>
                        <div className='about_adults_grid'>
                            <div className='person_title'>Children</div>
                            <div className='about_adults_grid_button'>
                                <div className='minus p_icon ml-2'>-</div>
                                <div className='p_number'>0</div>
                                <div className='plus p_icon mr-2'>+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bookNow flex justify-end sm:justify-center items-center'>
                <button className='btn-primary'>BOOK NOW</button>
            </div>
        </div>
        // <div className="booking">
        //     <div className='calendar'>
        //         <p>Book </p>
        //         {/* Placeholder for calendar or booking input */}
        //     </div>
        //     <div className='persons'>
        //         <p>Number of Persons</p>
        //         {/* Placeholder for person selection input */}
        //     </div>
        //     <div className="button-container">
        //         <button className="btn-primary">BOOK NOW</button>
        //     </div>
        // </div>
    );
};

export default Booking;
