
import { MainLayout,Card,AksiyaCard } from '@/components' 
import Slider from '@/components/slider/slider'
import { CotegorSlide } from '@/components'
import home from "../styles/Home.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from 'next/image';
import right from "../../public/right.svg"
import left from "../../public/left.svg"
export default function Home() {
  const arr = [1,2,3,4,5,6,7,8,9,10]
  return (
<MainLayout>
  <div className={home.bgc}>

  <Slider/>
  <CotegorSlide/>

  <section className='container'>
    <div>
      <h2 className={home.title}>Yangi tovarlar</h2>
      <div className={home.slid}>

        <span className={home.prev} data-swiper='prev2'><Image  className={home.clik} src={left} alt="" width={30} height={30} /></span>

        <span className={home.prev1} data-swiper='next2'><Image className={home.clik} src={right} alt="" width={30} height={30} /></span>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: 'span[data-swiper=next2]',
          prevEl: 'span[data-swiper=prev2]'
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={home.swiper}
      >
      {arr.map((el)=>{
        return <SwiperSlide>  <Card/> </SwiperSlide>
      })}
      </Swiper>
    </div>
    </div>

    <div>
      <h2 className={home.title}>Ommabop tovarlar</h2>
      <div className={home.slid}>

        <span className={home.prev} data-swiper='prev3'><Image  className={home.clik} src={left} alt="" width={30} height={30} /></span>

        <span className={home.prev1} data-swiper='next3'><Image className={home.clik} src={right} alt="" width={30} height={30} /></span>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: 'span[data-swiper=next3]',
          prevEl: 'span[data-swiper=prev3]'
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={home.swiper}
      >
      {arr.map((el)=>{
        return <SwiperSlide>  <Card/> </SwiperSlide>
      })}
      </Swiper>
    </div>
    </div>
    <div>
      <h2 className={home.title}>Elektronika</h2>
      <div className={home.slid}>

        <span className={home.prev} data-swiper='prev4'><Image  className={home.clik} src={left} alt="" width={30} height={30} /></span>

        <span className={home.prev1} data-swiper='next4'><Image className={home.clik} src={right} alt="" width={30} height={30} /></span>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: 'span[data-swiper=next4]',
          prevEl: 'span[data-swiper=prev4]'
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={home.swiper}
      >
      {arr.map((el)=>{
        return <SwiperSlide>  <Card/> </SwiperSlide>
      })}
      </Swiper>
    </div>
    </div>
    <div>
      <h2 className={home.title}>Uy Jihozlari</h2>
      <div className={home.slid}>

        <span className={home.prev} data-swiper='prev5'><Image  className={home.clik} src={left} alt="" width={30} height={30} /></span>

        <span className={home.prev1} data-swiper='next5'><Image className={home.clik} src={right} alt="" width={30} height={30} /></span>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        navigation={{
          nextEl: 'span[data-swiper=next5]',
          prevEl: 'span[data-swiper=prev5]'
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className={home.swiper}
      >
      {arr.map((el)=>{
        return <SwiperSlide>  <Card/> </SwiperSlide>
      })}
      </Swiper>
    </div>
    </div>




    <div className={home.box}>

      <h3 className={home.title}>Aksiya</h3>
      <Swiper
      loop
      slidesPerView={3}
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        
        modules={[Autoplay, Pagination, Navigation]}
        className={home.aksiyaslid}
      >
       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>

       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>

       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>

       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>

       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>
       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>

       <SwiperSlide>
        <AksiyaCard/>
       </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </div>
 
</MainLayout>
  )
}
