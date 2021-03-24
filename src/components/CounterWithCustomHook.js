import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, reset, increment, decrement } = useCounter();

  return (
    <div className="container">
      <h1>Counter with hook: {state}</h1>
      <button onClick={() => increment(1)}>+ 1</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => decrement(1)}>- 1</button>
    </div>
  );
};
