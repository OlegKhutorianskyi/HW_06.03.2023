import React from 'react'
import AboutAuthor from '../../components/AboutAuthor/indes'
import BooksList from '../../components/BooksList'
import s from './style.module.css'
const AuthorPage = () => {
  return (
    <div className={s.container}>
      <BooksList/>
      <AboutAuthor/>
    </div>
  )
}

export default AuthorPage