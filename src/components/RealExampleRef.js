import React, { useRef, useState } from "react";
import { MultipleCustomHooks } from "./MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handlerShow = () => setShow(!show);

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary" onClick={handlerShow}>
        Show/Hide
      </button>
    </div>
  );
};
