import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { Count } from './Count';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Count />
      <ItemListContainer greeting="Bienvenidos al futuro...!" />
    </div>
  );
}

export default App;
