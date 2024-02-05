import { useEffect, useState } from 'react';
import PokeCard from '../PokeCard/PokeCard';

const PokeLista = () => {
  const [pokemones, setPokemones] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  const handleNext = () => {
    setUrl(nextUrl);
  };

  const handlePrev = () => {
    setUrl(prevUrl);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setPokemones(data.results);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div>
      <h1>Pokemones</h1>
      <div className="flex w-full">
        {pokemones.map((poke) => (
          <PokeCard key={poke.name} pokedata={poke} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-secondary m-3" onClick={() => handlePrev()}>
          Anterior
        </button>
        <button className="btn btn-secondary m-3" onClick={() => handleNext()}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default PokeLista;
