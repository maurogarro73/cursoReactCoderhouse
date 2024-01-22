import { useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={sumar}>+</button>
      <p>{count}</p>
      {count > 0 && <button onClick={restar}>-</button>}
    </div>
  );
};
