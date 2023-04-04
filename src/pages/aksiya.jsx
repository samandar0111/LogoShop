import React from 'react'
import { MainLayout } from '@/components'
import aksiya from "../styles/aksiya.module.scss"
import Image from 'next/image'
import { AksiyaCard } from '@/components'
const aksiyalar = [1,2,3,4,5,6,7,8,9]
 const Aksiya = () => {
  return (
    <div className={aksiya.bgc}>
    <MainLayout>
      <div className="container">
        <div className={aksiya.reklama}><img src="https://olcha.uz/image/original/homePage/FOcsDOqCfmndNu3PGBGbtRHiJ6bwxslDrwt2gQK8gD9JtCu3xkRA2Yr4lndn.png" alt="" /></div>
      <h2 className={aksiya.title}>Aksiyalar</h2> 
      <div className={aksiya.box}>
      {aksiyalar.map(el=>{
       return <AksiyaCard key={el}/>
      })}
      </div>
      </div>
    </MainLayout>
    </div>
  )
}
export default Aksiya