import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import ArticlePage from './pages/ArticlePage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
      <div className="App">
        <ScrollToTop>
          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path={`/article/:id`} element={<ArticlePage />} />
              <Route path='/page-not-found' element={<NotFoundPage />} />
              <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
  );
}

export default App;

