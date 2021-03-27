import React, { useState, useMemo } from "react";
import { procesoPesado } from "../helpers/procesoPesado";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const MemoHook = () => {
  const { state, increment } = useCounter(1000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <p>
        Counter: <Small value={state} />
      </p>

      <p>{ memoProcesoPesado }</p>

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
