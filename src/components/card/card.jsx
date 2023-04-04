import React from 'react'
import card from "./card.module.scss"
import karzina from "../../../public/karzinacard.png"
import Image from 'next/image'
const Card = () => {

    return (
   
        <div className=''>
          <div className={card.box}>
            <div className={card.imgblock}>
           <img src="https://texnomart.uz/_ipx/f_webp/https://backend.texnomart.uz/images/gallery/product/102038/32767/preview.jpg" alt="" />
  
            </div>
            <div className={card.desk}>
              <h3>Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB Grey</h3>
              <span className={card.price}>429 000 сум</span>
              <span className={card.pas}>58 000 сум x 12 мес</span>
  
              <div className={card.btn_box}><button className={card.rasbtn}>в рассрочку</button> <button className={card.karbtn}><Image src={karzina} alt='' width={30} height={30}/></button></div>
            </div>
          </div>
        </div>
     
    )
  }

export default Card