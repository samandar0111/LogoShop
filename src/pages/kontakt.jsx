import React from 'react'
import { MainLayout } from '@/components'
import kontact from "../styles/kontact.module.scss"

import { useForm } from "react-hook-form";

const Kontakt = () => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const dataFunk = (data)=>{
    console.log(data);
reset()
  }
  return (
    <MainLayout>
      <div className={kontact.bgc}>
        <div className="container">
          <div className={kontact.box}>
              <h2 className={kontact.title}>Kontaktlar</h2>
            <div className={kontact.box1}>
              <div className={kontact.register}>
                <h3>Xabar qoldirish</h3>
                <form onSubmit={handleSubmit(dataFunk)}>
                  <div className={kontact.inpbox}>

                    <label for="ism">ISM</label>
                    <input {...register("ism" ,{required:true}) }  id='ism' type="text" />
                  </div>

                  <div className={kontact.inpbox}>

                    <label for="email">EMAIL</label>
                    <input {...register("email" ,{required:true}) }  id='email' type="text" />
                  </div>
                  <div className={kontact.inpbox}>
                <label for="xabar">XABAR</label>
                <textarea {...register("xabar " ,{required:true}) }  id="xabar" cols="30" rows="10"></textarea>
                  </div>
                  <button type='submit' className={kontact.formbtn}>Jonatish</button>
                </form>
              </div>

              <div className={kontact.malumot}>
                  <h2>Aloqa ma'lumotlari</h2>
                  <p>

                Наш адрес: город Ташкент, Шайхонтохурский район, улица Караташ 11А. <br />

Единый контакт-центр MEDIAPARK Bozori: +99871 203 33 33 <br />

Почтовый индекс: 100021 <br />
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Kontakt