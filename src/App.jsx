import './App.css';
import Header from './components/Header';
import SliderCatalog from './components/SliderCatalog/SliderCatalog';
import MaisPopulares from './components/MaisPopulares/MaisPopulares'

const App = () => {
  return (
    <div className='background'>
      <Header/>
      <SliderCatalog/>
    </div>
  );
}

export default App;
