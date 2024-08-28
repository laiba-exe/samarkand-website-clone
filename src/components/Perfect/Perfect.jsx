import React from 'react';
import './Perfect.css';
import { specialbgdesk, destination, destination2 } from '../../assets';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5 } from '../../assets';


const Perfect = () => {
    return (
        
    <section className='sliders_section w-full'>
    <img src={specialbgdesk}  className='s_backdrop desktop' alt="" />
      <div className='special_container w-full'>
        <div className='container'>
            <h2 className='section_heading text-center mb-4'>What Makes Us Special</h2>
            <p className='paragraphs text-center mx-[5rem]'>Enjoy top notch amenities. Spend the afternoon taking in the serene surroundings from our sparkling swimming pool. Challenge friends to a game of tennis on our private court. Or relax and unwind in our one-of-kind cave hangout.</p>
        </div>
    

         <div className="containerr">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 93,
          depth: 120,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        

        <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> 
          
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
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