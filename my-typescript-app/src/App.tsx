import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { RandomArticle } from './services/RandomArticle';
import { useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Article from './pages/Article';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  const navigate = useNavigate();
  return (
      <div className="App">
          <ScrollToTop>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path={`/article/:id`} element={<Article />} />
            </Routes>
          </ScrollToTop>

          <Footer />
      </div>
  );
}

export default App;

