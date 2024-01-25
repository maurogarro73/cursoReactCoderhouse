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
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handlerResta}
        >
          -
        </button>
        <span className="text-center px-5">{count}</span>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handlerSuma}
        >
          +
        </button>
      </div>
      <div>
        <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
