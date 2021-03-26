import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breakind Bad Quotes</h1>
      <hr />
      {loading ? (
        <div class="spinner-grow" role="status"></div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0 mb-4">{quote}</p>
          <footer className="blockquote-footer text-white">{author}</footer>
        </blockquote>
      )}
      <hr />
      <button className="btn btn-primary" onClick={() => increment(1)}>
        Next Quote
      </button>
    </div>
  );
};
