import './App.css';
import AnimesSeason from './components/AnimeSection/AnimesSeason';
import MostPopularAnimes from './components/AnimeSection/MostPopularAnimes';
import MostPopularMangas from './components/AnimeSection/MostPopularMangas';
import Ads2023 from './components/AnimeSection/Ads2023';
import Footer from './components/Footer/Footer';
import Header from './components/Header';

const App = () => {

  return (
    <div>
      <div className='background'>
        <Header />
        <div className='slyderBox'>
          <AnimesSeason id={"section-1"} nameSection={"Animes da temporada"}/>
          <MostPopularAnimes  id={"section-2"} nameSection={"Animes mais populares"}/>
          <MostPopularMangas id={"section-3"} nameSection={"Mangas mais populares"}/>
          <Ads2023 id={"section-4"} nameSection={"Animes anunciados para 2023"}/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
