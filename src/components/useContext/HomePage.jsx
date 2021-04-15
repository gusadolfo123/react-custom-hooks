import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomePage = () => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div>
      <h1>Home</h1>
      <p>Hello</p>
    </div>
  );
};
