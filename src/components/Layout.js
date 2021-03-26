import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import "./myStyles.css";

export const Layout = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();
  useLayoutEffect(() => {
    if (pTag.current) setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breakind Bad Quotes</h1>
      <hr />
      {loading ? (
        <div className="spinner-grow" role="status"></div>
      ) : (
        <blockquote className="blockquote text-right">
          <p ref={pTag} className="mb-0 mb-4">
            {quote}
          </p>
          <footer className="blockquote-footer text-white">{author}</footer>
        </blockquote>
      )}

      <hr />
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next Quote
      </button>
    </div>
  );
};
