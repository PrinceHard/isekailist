import './App.css';
import Header from './components/Header';
import SliderCatalog from './components/SliderCatalog/SliderCatalog';
import MaisPopulares from './components/MaisPopulares/MaisPopulares'
import AnimesSubestimados from './components/AnimesSubestimados/AnimesSubestimados';
import MaisBemAvaliados from './components/MaisBemAvaliados/MaisBemAvaliados'
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Header/>
      <div className='background'></div>
        <SliderCatalog/>
        <MaisPopulares/>
        <AnimesSubestimados/>
        <MaisBemAvaliados/>
      </div>
  );
}

export default App;
