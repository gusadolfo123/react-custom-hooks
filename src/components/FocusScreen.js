import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handlerInput = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="nombre" />
      <hr />
      <button className="btn btn-primary" onClick={handlerInput}>
        Guardar
      </button>
    </div>
  );
};
