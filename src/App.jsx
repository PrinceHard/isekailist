import './App.css';
import AnimeSection from './components/AnimeSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <div className='background'>
        <Header />
        <AnimeSection id={"section-1"} nameSection={"Animes Season"}/>
        <AnimeSection  id={"section-2"} nameSection={"Most Popular Animes"}/>
        <AnimeSection id={"section-3"} nameSection={"Most Read Mangas"}/>
        <AnimeSection id={"section-4"} nameSection={"News"}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
