import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider from "./style.module.css"


// import required modules

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {

  return (
    <div className={slider.box}>
      <Swiper
      loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className={slider.imag} src="https://backend.texnomart.uz/uploads/slides/4058491920kr.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={slider.imag} src="https://backend.texnomart.uz/uploads/slides/2367001920kr.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={slider.imag} src="https://backend.texnomart.uz/uploads/slides/7760271920kr.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={slider.imag}  src="https://backend.texnomart.uz/uploads/slides/727137Artboard%204%20copy_kir.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={slider.imag} src="https://backend.texnomart.uz/uploads/slides/6525471920x400%20kir.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={slider.imag} src="https://backend.texnomart.uz/uploads/slides/9493511920kr.webp" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
