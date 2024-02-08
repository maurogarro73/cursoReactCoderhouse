import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl glass">
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
            <div className="stat-title">Parselas disponibles</div>
            <div className="stat-value">{item.stock}</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Capacidad</div>
            <div className="stat-value text-secondary">{item.capacity} km2</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Población</div>
            <div className="stat-value">{item.population}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        <div className="stat">
          <div className="stat-value text-center">${item.price}</div>
        </div>

        <div className="card-actions justify-center">
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;