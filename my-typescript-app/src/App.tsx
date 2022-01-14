import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Article from './pages/Article';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

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

