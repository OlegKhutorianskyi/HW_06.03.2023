import React from 'react'
import s from './style.module.css'

const GetBook = () => {
  return (
    <div className={s.container}>
        <div className={s.promoText}>
            <div className={s.titleContainer}>
                <h2 className={s.authorTitle}>Get Book Copy Today!</h2>
            </div>
                <div className={s.titleBorderBottom}></div>
            <div className={s.propmoDescr}>
                 We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.
            </div>
        </div>
        <div className={s.promoImg}></div>
    </div>
  )
}

export default GetBook