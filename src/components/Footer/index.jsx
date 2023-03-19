import React from 'react'
import s from './style.module.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={s.footer}>
        <div className={s.socialBlock}>
            <div className={s.logoBlock}>
                <h1 className={s.logo}><BiBook/> </h1>
                <h1 className={s.logoText}>Pages</h1>
            </div>
            <div className={s.socialLinks}>
                <button><FaFacebookF/></button>
                <button><FaTwitter/></button>
                <button><FaLinkedinIn/></button>
                <button><FaInstagram/></button>
            </div>
        </div>
        <div className={s.footerNavBlock}>
            <div className={s.exploreListContainer}>
                <ul className={s.exploreList}>
                    <h3 className={s.footerNacBlockTitle}>Explore</h3>
                    <li>Home</li>
                    <li>About</li>
                    <li>Articles</li>
                    <li>Our Store</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            
            <div className={s.footerContacts}>
                <h3 className={s.footerNacBlockTitle}>Keep in Touch</h3>
                <span>Address :</span><p> 24A Kingston St, Los Vegas <br/> NC 28202, USA.</p>
                <span>Mail :</span><p>support@pages.com</p>
                <span>Phone :</span><p>(+22) 123 - 4567 - 900</p>
            </div>
        </div>

    </div>
  )
}

export default Footer