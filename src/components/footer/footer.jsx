import React from 'react'
import footer from "./footer.module.scss"
import Uzkart from "../../../public/uzcard.webp"
import Humo from "../../../public/humo.webp"
import Click from "../../../public/click.webp"
import Visa from "../../../public/visa.webp"
import Mastercard from "../../../public/mastercard.webp"
import Image from 'next/image'
import Telegram from "../../../public/telegram.svg"
import Facebook from "../../../public/facebook.svg"
import Instagram from "../../../public/instagram.svg"
const Footer = () => {
  return (
    <div className={footer.bgc}>
        <div className='container'>
        <div className={footer.box}>
         <div className={footer.biz}>
         <h2>BIZ HAQIMIZDA</h2>
          <h3>YANGILIKLAR</h3>
          <h3>AKSIYALAR</h3>
          <h3>DO'KON MANZILLAREI</h3>
         </div>

         <div className={footer.biz}>
          <h2>XARIDORLAR</h2>
          <h3>YETKAZIB BERISH</h3>
          <h3>KONTAKTLAR</h3>
          <h3>SERVIS MARKAZLAR</h3>
         </div>

          <div className={footer.oplata}>
            <h2>TO'LOV USULLARI</h2>
            <div>
              <Image src={Uzkart} alt='' width={100} height={50}/>
              <Image src={Humo} alt='' width={100} height={50}/>
              <Image src={Visa} alt='' width={100} height={50}/>
              <Image src={Mastercard} alt='' width={100} height={50}/>
              <Image src={Click} alt='' width={100} height={50}/>
            </div>
          </div>

          <div className={footer.kontact}>
            <h2>KONTAKTLAR</h2>
            <div className={footer.instabox}>
              <Image className={footer.face} src={Facebook} alt='' width={50} height={50}/>
              <Image className={footer.telegram} src={Telegram} alt='' width={50} height={50}/>
              <Image className={footer.insta} src={Instagram} alt='' width={50} height={50}/>
            </div>
            <a  href="tell:+998950503511">+99895-050-35-11</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer