import React from 'react'
import card from "./aksiyaCard.module.scss"
const AksiyaCard = () => {
  return (
    <div className={card.box}>
      <div className={card.imag}>
        <img src="https://www.mediapark.uz/upload/file/article/images/actions/Redmi_aks_400_400_1.png" alt="" />
      </div>
      <div className={card.textbox}>
        <h3>Акция "Жаркое лето!"</h3>
        <span className={card.shart}>aksiya shartlari...</span>
        <span className={card.holat}>aksiya holati-</span>
        <span className={card.aktiv}>aktiv</span>
      </div>
    </div>
  )
}

export default AksiyaCard