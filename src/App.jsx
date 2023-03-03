import './App.css';
import AnimeSection from './components/AnimeSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <div className='background'>
        <Header />
        <AnimeSection nameSection={"Animes Season"}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
