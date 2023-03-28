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
          <AnimesSeason/>
          <MostPopularAnimes/>
          <MostPopularMangas/>
          <Ads2023/>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
