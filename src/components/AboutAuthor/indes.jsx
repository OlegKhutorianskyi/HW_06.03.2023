import React from 'react'
import s from './style.module.css'
const AboutAuthor = () => {
  return (
    <div className={s.container}>
        <div className={s.imgAuthor}></div>
        <div className={s.aboutAuthorContent}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>About the Author</h2>
          </div>
            <div className={s.titleBorderBottom}></div>
          <p className={s.authorDescr}>
              We believe that bookstores are essential to a healthy culture. They’re where authors can  connect    with readers, where we discover new writers, where children get hooked on the thrill  of reading   that can last a lifetime.
          </p>
          <div className={s.authorParams}>
            <div className={s.booksSum}><h2>02</h2>Books Published</div>
            <div className={s.userRate}><h2>4.5</h2>User Reviews</div>
            <div className={s.bestSellerRate}><h2>04</h2>Best Seller Awards</div>
          </div>
          <div className={s.authorContacts}>
            <div className={s.qr}></div>
            <div className={s.contactText}>
              <h4 className={s.authorName}>John Abraham , Ph.d</h4>
              <p className={s.email}>Mail: johnabraham@gmail.com</p>
              <p className={s.phoneNumber}>Phone: (+2) 123 545 9000</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutAuthor