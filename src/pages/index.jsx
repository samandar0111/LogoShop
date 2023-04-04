
import { MainLayout,Card,AksiyaCard } from '@/components' 
import Slider from '@/components/slider/slider'
import { CotegorSlide } from '@/components'
import home from "../styles/Home.module.scss"
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
      <div className={home.ommaboprek}><img src="https://www.mediapark.uz/upload/file/sliders/main_slides/brend_samsung_1539x209.webp" alt="omabop tovarlar" /></div>
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
      <div className={home.elektrrek}>
        <img src="https://olcha.uz/image/460x152/homePage/JM9SdxNOgnlldqEx7MCxb150OcX2eV1CWv8jBoCi7YiaV95IxL0wYrWUlHoC.png" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/g75RQWzkeoqf5iY2KTgi0fUFpC90vWuRbBA9IuX4tIvn90WVwiaK3VdM4Je1.png" alt="" />
        <img src="https://olcha.uz/image/460x152/homePage/Y1hpOReoQtgWutcO2hNiYo9ddlxLpgHSWI1Hwpk54EAsZnUXyUHG2Iu3gd3r.png" alt="" />
      </div>
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
      <div className={home.uyrek}>
        <img src="https://olcha.uz/image/original/homePage/RAJmH8sUxrz1yR6pd4U2ei9kifqcvYDZzc4f13YWaRh41hefrG7CjtO1zvDi.png" alt="" />
        <img src="https://olcha.uz/image/original/homePage/THReB1ZE9w84GpLt0yBN7tAbLwSlcjXr3Ky5rWjud4ZBv7M8WEc7VgLL0D8F.png" alt="" />
      </div>
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
        <div className={home.aksiyarek}><img src="https://olcha.uz/image/original/homePage/FOcsDOqCfmndNu3PGBGbtRHiJ6bwxslDrwt2gQK8gD9JtCu3xkRA2Yr4lndn.png" alt="" /></div>
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
