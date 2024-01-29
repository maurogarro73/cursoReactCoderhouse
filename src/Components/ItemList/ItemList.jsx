import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="grid gap-3 xl:grid-cols-3 md:grid-cols-2">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
