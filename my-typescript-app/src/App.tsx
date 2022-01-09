import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
        <Header />
        <LandingPage />
        <MainPage />
        <Footer />
    </div>
  );
}

export default App;
