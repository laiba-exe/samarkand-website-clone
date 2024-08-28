import React from 'react';
import './Perfect.css';
import { specialbgdesk, destination, destination2 } from '../../assets';

const Perfect = () => {
    return (
        
    <section className='sliders_section w-full'>
    <img src={specialbgdesk}  className='s_backdrop desktop' alt="" />
      <div className='special_container w-full'>
        <div className='container'>
            <h2 className='section_heading text-center mb-4'>What Makes Us Special</h2>
            <p className='paragraphs text-center mx-[5rem]'>Enjoy top notch amenities. Spend the afternoon taking in the serene surroundings from our sparkling swimming pool. Challenge friends to a game of tennis on our private court. Or relax and unwind in our one-of-kind cave hangout.</p>
        </div>
        <div className='mt-6'>
            <div className='swiper swiper_container swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide swiper-slide-visible swiper-slide-prev'></div>
                    <div className='swiper-slide swiper-slide-visible swiper-slide-active'></div>
                    <div className='swiper-slide swiper-slide-visible swiper-slide-next'></div>
                    <div className='swiper-slide' ></div>
                    <div className='swiper-slide'></div>
                </div>
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'></div>
                    <div className='swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal'>
                        <span className='swiper-pagination-bullet swiper-pagination-bullet-active'></span>
                        <span className='swiper-pagination-bullet'></span>
                        <span className='swiper-pagination-bullet'></span>
                        <span className='swiper-pagination-bullet'></span>
                        <span className='swiper-pagination-bullet'></span>
                    </div>
                    <div className='swiper-button-next slider-arrow'></div>
                </div>
            </div>
            <div className=''>
                
            </div>
            <div className=''>
                
            </div>
        </div>
        
      </div>
      <div className="relative mems-outer mt-24">
      <div className='memories-container container'>
        <h2 className='section-heading text-center mb-4'> Perfect For Making Memories</h2>
        <div className='my-9 mem_slider_container'>
            <div className='flex-column'>
            <img src={destination}  className='img1'  alt="" />
                <div className='mem_details'  id='fontadd'  >
                    <h3 className='caption'>Hira and Mani’s Destination Wedding</h3>
                </div>
            </div>
            <div className='flex-column'>
                <img src={destination2}  className='img2'  alt="" />
                <div className='mem_details'>
                    <h3 className='caption'>Unilever’s Conference Social Activity</h3>
                </div>
            </div>
            <div className='flex-column'>
                <p className='paragraphs text-center  mx-[5rem] mb-4 mt-4'>
                Create lasting memories etched in nature's wonder and our family's multi-generational unique sense of place. Stunning surroundings. Serentiy. Unforgettable experiences you'll treasure for a lifetime.
                </p>
            </div>
        </div>
      </div>
      </div>
      </section>
      
      );
    };

export default Perfect;