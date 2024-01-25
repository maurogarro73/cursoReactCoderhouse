import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greeting }) {
  return (
    <div>
      <p className="mt-10 text-center m-auto font-bold text-3xl text-sky-700">{greeting}</p>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default ItemListContainer;
