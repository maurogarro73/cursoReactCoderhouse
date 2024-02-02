import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ItemListContainer greeting="Bienvenidos al futuro...!" />
      <Footer />
    </div>
  );
}

export default App;
