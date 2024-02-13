import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const onAdd = (quantity) => {
    console.log(`Agregaste ${quantity} items al carrito`);
    setItemCount(quantity);
    setIsAdded(true);
  };

  return (
    <div className="card lg:card-side bg-base-100 glass shadow-lg">
      <figure>
        <img src={item.mainImg} className="w-96" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <h3>{item.descriptionShort}</h3>
        <p>{item.descriptionLong}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{item.category}</div>
        </div>

        {/* stat */}
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title text-primary">Parselas disponibles</div>
            <div className="stat-value text-primary">{item.stock}</div>
            <div className="stat-desc text-primary">Habilitada a la venta por 1 mes</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Capacidad</div>
            <div className="stat-value">{item.capacity} km2</div>
            <div className="stat-desc">Por parcela</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Población</div>
            <div className="stat-value">{item.population}</div>
            <div className="stat-desc">Total</div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-value text-center">${item.price}</div>
        </div>

        <div className="card-actions justify-center">
          {isAdded ? (
            <div className="block">
              <p className="text-center">Parcelas agregadas al carrito</p>
              <div className="space-x-2 mt-4">
                <Link to="/cart" className="btn btn-primary">
                  Finalizar compra
                </Link>
                <Link to="/" className="btn btn-success">
                  Seguir comprando
                </Link>
              </div>
            </div>
          ) : (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
