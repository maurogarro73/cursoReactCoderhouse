import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.mainImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{product.category}</div>
        </div>
        <div className="flex justify-center">
          <div className="stat">
            <div className="stat-value">${product.price}</div>
          </div>
          <div className="card-actions justify-end gap-0 mt-2">
            <Link to={`/item/${product.id}`} className="btn btn-primary">
              Comprar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
