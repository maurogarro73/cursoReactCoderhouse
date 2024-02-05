import React, { useState } from 'react';
import { useEffect } from 'react';

const PokeApi = () => {
  const [pokedata, setPokedata] = useState({});
  const [id, setId] = useState(1);

  const handleSiguiente = () => {
    setId(id + 1);
  };

  const handleAnterior = () => {
    if (id > 0) {
      setId(id - 1);
    }
  };

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokedata(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      <h2>{pokedata.name}</h2>
      <img src={pokedata.sprites?.front_default} alt={pokedata.name} />

      <button onClick={() => handleSiguiente()}>Siguiente</button>
      <button onClick={() => handleAnterior()}>Anterior</button>
    </div>
  );
};

export default PokeApi;
