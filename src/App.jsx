import './App.css';
import AnimeSection from './components/AnimeSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <div className='background'>
        <Header />
        <AnimeSection nameSection={"Animes Season"} id={1} />
        <AnimeSection nameSection={"Most Popular Animes"} id={2}/>
        <AnimeSection nameSection={"Most Read Mangas"}/>
        <AnimeSection nameSection={"News"}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
