import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SPoster from '../images/Poster.webp'
import SPoster2 from '../images/Poster2.webp'
import SPoster3 from '../images/Poster3.webp'
import SPoster4 from '../images/Poster4.webp'
import SPoster5 from '../images/Poster5.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
      id='Home'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: false,
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={SPoster} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SPoster2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SPoster3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SPoster4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={SPoster5} alt="" /></SwiperSlide>
     
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}













