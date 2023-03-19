import React from 'react'
import s from './style.module.css'
const Resources = () => {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h2 className={s.title}>What Will You Learn?</h2>
            <div className={s.titleBorderBottom}></div>
        </div>

        <div className={s.rasuorces}>
            <div className={s.rasuorceItem}>
                <div className={s.rasuorceImg}></div>
                <div className={s.rasuorceTitle}>
                    Significant reading has more info number
                </div>
                <div className={s.rasuorceDescr}>
                    Override the digital divide with additional clickthroughs from DevOps for real-time schemas.
                </div>
                <div className={s.rasuorceDate}>October 6, 2021</div>
            </div>
            <div className={s.rasuorceItem}>
                <div className={s.rasuorceImg}></div>
                <div className={s.rasuorceTitle}>
                    Significant reading has more info number
                </div>
                <div className={s.rasuorceDescr}>
                    Override the digital divide with additional clickthroughs from DevOps for real-time schemas.
                </div>
                <div className={s.rasuorceDate}>October 6, 2021</div>
            </div>
            <div className={s.rasuorceItem}>
                <div className={s.rasuorceImg}></div>
                <div className={s.rasuorceTitle}>
                    Significant reading has more info number
                </div>
                <div className={s.rasuorceDescr}>
                    Override the digital divide with additional clickthroughs from DevOps for real-time schemas.
                </div>
                <div className={s.rasuorceDate}>October 6, 2021</div>
            </div>
        </div>
    </div>
  )
}

export default Resources