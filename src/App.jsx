import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Context/Context';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Hero /> */}
                  <ItemListContainer greeting="Bienvenidos al futuro...!" />
                </>
              }
            />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
