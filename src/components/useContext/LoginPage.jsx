import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <button
        className="btn btn-outline-light"
        onClick={() => setUser({ id: 123, name: "Gustavo" })}
      >
        Login
      </button>
    </div>
  );
};
