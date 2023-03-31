import React from 'react'
import header from "./header.module.scss"
const Header = () => {
  return (
    <div className={header.bgc}>
    <div className="container">
      <div className={header.card}>
        <div className={header.logo}>LOGO<span>SHOP</span></div>
      </div>
    </div>
    </div>
  )
}

export default Header