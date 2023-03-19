import Header from '../Header';
import '../../App.css';
import s from './style.module.css'
import Footer from '../Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AuthorPage from '../../pages/AuthorPage';
import CompaniesPage from '../../pages/CompaniesPage';
import ArticlesPage from '../../pages/ArticlesPage';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
      <Route path='/' element={<HomePage />}/>
      <Route path='/author' element={<AuthorPage />}/>
      <Route path='/companies' element={<CompaniesPage />}/>
      <Route path='/articles' element={<ArticlesPage />}/>
      <Route path='/*' element={<NotFoundPage />}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
