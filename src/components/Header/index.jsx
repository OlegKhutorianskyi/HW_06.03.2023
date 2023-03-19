import React from 'react'
import s from './style.module.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'


const Header = () => {

  const chekClass = ({isActive}) => isActive ? s.active: '';



  return (

    
    <div className={s.header}>
        <div className={s.socialBlock}>
            <h1 className={s.logo}><BiBook/> </h1>
            <h3 className={s.logoText}>Pages</h3>
            <div className={s.socialLinks}>
                <button><FaFacebookF/></button>
                <button><FaTwitter/></button>
                <button><FaLinkedinIn/></button>
            </div>
        </div>
        <nav className={s.nav}>
            <NavLink className={chekClass} to='/'>Home</NavLink> 
            <NavLink className={chekClass} to='/author'>Author</NavLink> 
            <NavLink className={chekClass} to='/companies'>Companies</NavLink> 
            <NavLink className={chekClass} to='/articles'>Articles</NavLink> 
        </nav>
        <button className={s.headerBtn}>Order Today</button>
    </div>
  )
}

export default Header