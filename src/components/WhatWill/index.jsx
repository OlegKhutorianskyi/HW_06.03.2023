import React from 'react'
import s from './style.module.css'

const WhatWill = () => {
  return (
    <div className={s.container}>
        <div className={s.titleContainer}>
            <h2 className={s.title}>What Will You Learn?</h2>
            <div className={s.titleBorderBottom}></div>
        </div>
        <div className={s.cousesContainer}>
        <div className={s.couses}>
            <div className={s.cousesItem}>
                <div className={s.cousesNumber}>01</div>
                <div className={s.cousesDescr}>
                    Use HDFS & Map Reduce for storing & analyzing data at scale.
                </div>
            </div>
            <div className={s.cousesItem}>
                <div className={s.cousesNumber}>02</div>
                <div className={s.cousesDescr}>
                    Consume streaming data using Spark Streaming, Flink, and Storm.
                </div>
            </div>
            <div className={s.cousesItem}>
                <div className={s.cousesNumber}>03</div>
                <div className={s.cousesDescr}>
                     Choose an appropriate data storage technology for your application
                </div>
            </div>
            <div className={s.cousesItem}>
                <div className={s.cousesNumber}>04</div>
                <div className={s.cousesDescr}>
                    Analyze non-relational data using HBase, Cassandra, and MongoDB.
                </div>
            </div>
        </div>
            <div className={s.cousesImgBorder}>
                <div className={s.cousesImg}></div>
            </div>
            </div>
    </div>
  )
}

export default WhatWill