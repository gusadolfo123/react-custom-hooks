import React from "react";
import { AppRouter } from "./router/AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const user = {
    id: 123456,
    name: "Gustavo Moreno",
    email: "gusadolfo123@hotmail.com",
  };

  return (
    <>
      {/* <h1>MainApp</h1> */}
      <UserContext.Provider value={user}>
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
