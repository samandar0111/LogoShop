import React from 'react'
import karzina from "../styles/karzina.module.scss"
import { MainLayout } from '@/components'
import Save from "../../public/save.svg"
import Image from 'next/image'
import plus from "../../public/plus.svg"
import minus from "../../public/minus.svg"
const Karzina = () => {
  return (
    <div>
        <MainLayout>
    <div className='container'>
      <div className={karzina.box}>

        <div>
          <div className={karzina.asosiy}>
            <h3>Karzina</h3>
            <ul>
              <li className={karzina.block}>
                <div className={karzina.img__block}>
                  <img src="https://olcha.uz/image/original/products/2022-03-29/monitor-pixel-pxg24fhd-24-curved-gaming-43652-0.jpeg" alt="" />
                </div> 
                <div className={karzina.desk__block}>
                    <h3>Смартфон Xiaomi Redmi Note 11 6 GB 128GB Графитово-серый</h3>
                    <div className={karzina.price__box}>
                        <div className={karzina.btn__block}>
                          <div className={karzina.count__box}>
                            <button><Image src={minus} alt='' width={20} height={20}/></button>
                            <span>2</span>
                            <button><Image src={plus} alt='' width={20} height={20}/></button>
                          </div>
                          <button className={karzina.saveicon}><Image src={Save} alt='' width={20} height={20}/></button>
                        </div>
                        <span>2 989 000 sum</span>
                    </div>
                </div>
              </li>
              <li className={karzina.block}>
                <div className={karzina.img__block}>
                  <img src="https://olcha.uz/image/original/products/2022-03-29/monitor-pixel-pxg24fhd-24-curved-gaming-43652-0.jpeg" alt="" />
                </div> 
                <div className={karzina.desk__block}>
                    <h3>Смартфон Xiaomi Redmi Note 11 6 GB 128GB Графитово-серый</h3>
                    <div className={karzina.price__box}>
                        <div className={karzina.btn__block}>
                          <div className={karzina.count__box}>
                            <button><Image src={minus} alt='' width={20} height={20}/></button>
                            <span>2</span>
                            <button><Image src={plus} alt='' width={20} height={20}/></button>
                          </div>
                          <button className={karzina.saveicon}><Image src={Save} alt='' width={20} height={20}/></button>
                        </div>
                        <span>2 989 000 sum</span>
                    </div>
                </div>
              </li>
              <li className={karzina.block}>
                <div className={karzina.img__block}>
                  <img src="https://olcha.uz/image/original/products/2022-03-29/monitor-pixel-pxg24fhd-24-curved-gaming-43652-0.jpeg" alt="" />
                </div> 
                <div className={karzina.desk__block}>
                    <h3>Смартфон Xiaomi Redmi Note 11 6 GB 128GB Графитово-серый</h3>
                    <div className={karzina.price__box}>
                        <div className={karzina.btn__block}>
                          <div className={karzina.count__box}>
                            <button><Image src={minus} alt='' width={20} height={20}/></button>
                            <span>2</span>
                            <button><Image src={plus} alt='' width={20} height={20}/></button>
                          </div>
                          <button className={karzina.saveicon}><Image src={Save} alt='' width={20} height={20}/></button>
                        </div>
                        <span>2 989 000 sum</span>
                    </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={karzina.malumot}>
          <h3>Malumotlaringiz</h3>
          <div className={karzina.malumot__card}>
            <div>
            <label for="ism">Ism</label>
            <input type="text" id='ism' name='ism' />
            </div>
            <div>
              <label for="tell">Telefon</label>
              <input type="number" id='tell' name='tell' />
            </div>
          </div>
          </div>
        </div>
        <div className={karzina.block2}>
          <div className={karzina.itogi}>
              <span>umumiy</span> 
              5 484 000 som
          </div>
          <div className={karzina.narx}>
           <span> Narxi</span>
           4 556 000 som
          </div>
          <div className={karzina.narx}>
            <span>Bonus</span>
            0 som
          </div>
          <div className={karzina.narx}>
            <span>Dostavka narxi</span>
            0 som
          </div>
          <button className={karzina.buyurtma__btn}>Buyurtma berish</button>
        </div>
      </div>
    </div>
    </MainLayout>
    </div>
  )
}

export default Karzina