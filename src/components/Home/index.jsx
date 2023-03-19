import React from 'react'
import s from './style.module.css'

const Home = () => {
  return (
    <div className={s.home}>
        <div className={s.textContentBlock}>
            <div>
                <h4 className={s.greetingsText}>Welcome to Pages!!!</h4>
                <h1 className={s.title}>Your Books From<br/>The Best Writer.</h1>
                <p className={s.subTitle}>
                    We believe that reading books are essential to a healthy culture.<br/>
                    They’re where authors can connect with readers.
                </p>
            </div>
            <div className={s.contentBtnBlock}>
                <button className={s.contentBtn}>Order Today</button>
                <p className={s.linkToReading}>Read Free Demo</p>
            </div>
            <ul className={s.setBookList}>
                <li><h3 className={s.setBookListTitle}>Pages:</h3><br/>250pages</li>
                <li><h3 className={s.setBookListTitle}>Length:</h3><br/>10 Hours</li>
                <li><h3 className={s.setBookListTitle}>Rating:</h3><br/>4.5/5; 305 ratings</li>
                
            </ul>
        </div>
        <div className={s.imgContentBlock}></div>
    </div>
  )
}

export default Home