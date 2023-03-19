import React from 'react'
import s from './style.module.css'

const Author = () => {
  return (
    <div>
        <div className={s.titleContainer}>
            <h2 className={s.authorTitle}>The Author’s Book</h2>
            <div className={s.titleBorderBottom}></div>
        </div>
        <section className={s.booksList}>
            <div className={s.bookItem}>    
                <div className={s.bookImg}></div>
                <div className={s.bookParams}>
                    <p className={s.bookTitle}>Atomic One’s</p>
                    <p className={s.bookPrice}>$ 13.84 USD</p>
                    <p className={s.bookDescr}>
                    As the book contains <br/> theoretical 
                        content as well as <br/> solved questions.
                    </p>
                    <button className={s.printedBookBtn}>
                        <div className={s.circleBookBtn}></div>
                        Printed Book
                    </button>
                </div>
            </div>
            <div className={s.bookItem}>  
                <div className={s.bookImgSecond}></div>
                <div className={s.bookParams}>
                    <p className={s.bookTitle}>The Dark Light</p>
                    <p className={s.bookPrice}>$ 86.11 USD</p>
                    <p className={s.bookDescr}>
                        As the book contains <br/> theoretical 
                        content as well as <br/> solved questions.
                    </p>
                    <button className={s.printedBookBtn}>
                        <div className={s.circleBookBtn}></div>
                        Printed Book
                    </button>
                </div>    
            </div>
        </section>
        
    </div>
  )
}

export default Author