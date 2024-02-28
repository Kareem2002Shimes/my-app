import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);
  return (
    <>
      <h2>Count: {count}</h2>
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>
      <button type='button' onClick={() => setCount((prev) => prev - 1)}>
        Decrement
      </button>
      <button type='button' onClick={() => setCount(10)}>
        Reset
      </button>
    </>
  );
};

export default Counter;
