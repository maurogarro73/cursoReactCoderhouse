import { useEffect, useState } from 'react';

const PokeCard = ({ pokedata }) => {
  const [pokeData, setPokeData] = useState();
  const [pokeTypes, setPokeTypes] = useState([]);

  const getPokeById = async () => {
    try {
      const res = await fetch(pokedata.url);
      const data = await res.json();
      setPokeData(data);
      setPokeTypes(data.types);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokeById();
  }, []);

  return (
    <>
      {pokeData && (
        <div>
          {pokeTypes.some((type) => type.type.name === 'water') && (
            <>
              <h3>{pokedata.name}</h3>
              <img src={pokeData.sprites?.front_default} alt={pokedata.name} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default PokeCard;
