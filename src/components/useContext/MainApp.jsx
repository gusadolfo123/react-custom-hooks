import React, { useState } from "react";
import { AppRouter } from "./router/AppRouter.jsx";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <>
      {/* <h1>MainApp</h1> */}
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </>
  );
};
