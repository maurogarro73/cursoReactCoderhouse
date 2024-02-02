import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { pedirDatos } from '../../db/data.js';
import ItemList from '../ItemList/ItemList.jsx';
import loadinPlanet from '../../../public/img/planetWeb.gif';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div className="flex justify-center items-center">
            <img src={loadinPlanet} alt="loading" />
          </div>
        </>
      ) : (
        <>
          <p className="mt-10 text-center m-auto font-bold text-3xl text-sky-700 mb-5">{greeting}</p>
          <div className="flex justify-center items-center">
            <ItemList products={products} />
          </div>
        </>
      )}
      {/* <ItemCount stock={5} initial={1} /> */}
    </div>
  );
}

export default ItemListContainer;
