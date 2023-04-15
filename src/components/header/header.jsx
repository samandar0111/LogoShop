import React from 'react'
import header from "./header.module.scss"
import Katalog from "../../../public/katalog.svg"
import Image from 'next/image'
import Search from "../../../public/search.svg"
import Like from "../../../public/like.png"
import karzina from "../../../public/karzina.png"
import tell from "../../../public/tell.png"
import menu from "../../../public/menu.png"
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className={header.bgc}>
      <div className={header.fixx}>

    <div className="container">
      <div className={header.card}>
        <Link href="/">
        <div className={header.logo}>LOGO<span>SHOP</span></div></Link>
        <button className={header.katalog}> <Image className={header.icon1} width={15}
        height={15} src={Katalog}  alt=''/> Katalog</button>
        <form className={header.forr}>
          <input className={header.inp} type="text" />
          <button className={header.serch_btn} type='submit'><Image src={Search} alt='' width={25} height={25}/></button>
        </form>
         <Link href="/sevimli"> <div className={header.like}> <div><Image src={Like} alt="" width={25} height={25}/></div> Sevimlilar</div></Link>
        <Link href="/karzina">  <div className={header.like}> <div><Image src={karzina} alt="" width={30} height={30}/></div> Karzina</div></Link>
          <a  href="tel:+4733378901" className={header.tell}> <div><Image src={tell} alt="" width={35} height={25}/></div> +998 95-050-35-11</a>
          <div className={header.menu}><Image src={menu} alt='' width={30} height={30} /></div>
      </div>
    </div>
      </div>
    </div>

    <div className={header.navbarbg}>
    <ul className={header.navbar}>
      <li className={header.link}> <Link href="aksiya">aksiya</Link> </li>
      <li className={header.link}><Link href="ommabop">Ommabop</Link></li>
      <li className={header.link}><Link href="dostavka">yetkazib berish</Link></li>
      <li className={header.link}><Link href="kontakt">Kontaktlar</Link></li>
      <li className={header.link}><Link href="servise">Xizmat ko'rsatish markazi</Link></li>
      <li className={header.link}><Link href="adres">Do'kon manzillari</Link></li>
    </ul>
    </div>
    </>
  )
}

export default Header