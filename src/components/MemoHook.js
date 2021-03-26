import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const MemoHook = () => {
  const { state, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memo Hook</h1>
      <p>
        Counter: <Small value={state} />
      </p>
      <button
        onClick={() => {
          increment(1);
        }}
      >
        + 1
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
