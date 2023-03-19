import React from 'react'
import Resources from '../../components/Resources'
import WhatWill from '../../components/WhatWill'
import s from './style.module.css'

const ArticlesPage = () => {
  return (
    <div className={s.container}>
      <WhatWill/>
      <Resources/>
    </div>
  )
}

export default ArticlesPage