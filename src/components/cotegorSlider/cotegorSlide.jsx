import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icon from "../../../public/tv.png"
import style from "./cotegor.module.scss"
import left from "../../../public/left.svg"
import right from "../../../public/right.svg"

const CotegorSlide = () => {
  return (
    <div className='container'>
      
      <div className={style.box}>
        <span className={style.prev} data-swiper='prev1'><Image className={style.clik} src={left} alt="" width={30} height={30} /></span>
        <span className={style.prev1} data-swiper='next1'><Image className={style.clik} src={right} alt="" width={30} height={30} /></span>
      <Swiper
      
        spaceBetween={10} 
        slidesPerView={7}
      
        navigation={{
          nextEl: 'span[data-swiper=next1]',
          prevEl: 'span[data-swiper=prev1]'
        }}
       
        modules={[Navigation, Pagination]}
        className={style.swip}
      >
        <SwiperSlide data-history="1"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="Slide 2"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="3"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="Slide 4"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="5"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="Slide 6"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="7"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="Slide 8"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="9"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
        <SwiperSlide data-history="1"><div className={style.card}>
      <Image src={icon} alt="" width={35} height={35}  />
      <h3>televizor</h3>
      </div></SwiperSlide>
  
      </Swiper>
    </div>
      </div>
  )
}

export default CotegorSlide