import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';
import { ArticleSummary } from './models/hashnode';
import { RandomArticle } from './services/RandomArticle';

function App() {
  const [article, setArticle] = useState<ArticleSummary | null>(null);

  return (
    <div className="App">
        <Header randomArticleOnClick={async (event: any)=> {
                const randomArticle = await new RandomArticle().getRandomArticle();
                setArticle(randomArticle);
              }}/>
        <LandingPage />
        <MainPage article={article} setArticle={setArticle} />
        <Footer />
    </div>
  );
}

export default App;

