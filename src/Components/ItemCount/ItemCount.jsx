import { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
  let [count, setCount] = useState(initial);

  const handlerResta = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handlerSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="m-2">
        <button className="btn btn-accent" onClick={handlerResta}>
          -
        </button>
        <span className="text-center px-5">{count}</span>
        <button className="btn btn-accent" onClick={handlerSuma}>
          +
        </button>
      </div>
      <div>
        <button className="btn btn-accent my-2">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
