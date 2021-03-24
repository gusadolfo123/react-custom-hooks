import React from "react";
import CounterApp from "./components/CounterApp";

export const HooksApp = () => {
  return (
    <div className="container text-center mt-4 bg-secondary text-white">
      <CounterApp value={1} />
    </div>
  );
};
