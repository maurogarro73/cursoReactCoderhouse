import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import PokeApi from './Components/PokeApi/PokeApi';
import PokeLista from './Components/PokeLista/PokeLista';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Hero />
      <ItemListContainer greeting="Bienvenidos al futuro...!" /> */}
      {/* <PokeApi /> */}
      <PokeLista />
      <Footer />
    </div>
  );
}

export default App;
