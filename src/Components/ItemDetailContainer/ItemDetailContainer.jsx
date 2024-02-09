import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadinPlanet from '../../../public/img/planetWeb.gif';
import { getItem } from '../../db/dbMars';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((res) => {
        setItem(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div
      className="flex justify-center items-center"
      style={{
        height: '100vh', // 100% del alto de la pantalla
        width: '100vw', // 100% del ancho de la pantalla
        backgroundImage: `url(${item.naturalImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {loading ? (
        <>
          <div className="flex justify-center items-center">
            <img src={loadinPlanet} alt="loading" />
          </div>
        </>
      ) : (
        <div className="block" style={{ height: '100%' }}>
          <h1 className="text-3xl font-bold text-center text-primary mb-5">Detalle del terreno</h1>
          <ItemDetail item={item} />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
