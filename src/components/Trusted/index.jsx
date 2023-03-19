import React from 'react'
import s from './style.module.css'

const Trusted = () => {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h2 className={s.authorTitle}>The Author’s Book</h2>
            <div className={s.titleBorderBottom}></div>
        </div>
        <div className={s.benefits}>
            <div className={s.benefitsItem}>
                <div className={s.itemImg_1}></div>
                <div className={s.itemTitle}>Amazen Corp.</div>
                <div className={s.itemDescr}>
                    They has been helping readers, music lovers, and videophiles find quality material.
                </div>
            </div>
            <div className={s.benefitsItem}>
                <div className={s.itemImg_2}></div>
                <div className={s.itemTitle}>Megan Books</div>
                <div className={s.itemDescr}>
                    We help physical bookstores manage their overstock to the book inventory.
                </div>
            </div>
            <div className={s.benefitsItem}>
                <div className={s.itemImg_3}></div>
                <div className={s.itemTitle}>Megank</div>
                <div className={s.itemDescr}>
                    Bookstore serving up the full spectrum of Black literature and wine black books.
                </div>
            </div>
            <div className={s.benefitsItem}>
                <div className={s.itemImg_4}></div>
                <div className={s.itemTitle}>Urban Store</div>
                <div className={s.itemDescr}>
                    We also carry the latest records, issues of all of your favorite comic books.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trusted