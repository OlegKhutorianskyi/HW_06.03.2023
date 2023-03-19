import React from 'react'
import GetBook from '../../components/GetBook'
import Trusted from '../../components/Trusted'
import s from './style.module.css'

const CompaniesPage = () => {
  return (
    <div className={s.container}>
      <Trusted/>
      <GetBook/>
    </div>
  )
}

export default CompaniesPage