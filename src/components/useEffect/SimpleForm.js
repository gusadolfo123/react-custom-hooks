import React, { useEffect, useState } from "react";
import { Message } from "../Message";
import "./effects.css";

export const SimpleForm = ({ title }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Load View");
  }, []);

  useEffect(() => {
    console.log("Load Name");
  }, [name]);

  useEffect(() => {
    console.log("Load Email");
  }, [email]);

  const handlerInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Name"
          autoComplete="off"
          value={name}
          onChange={handlerInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Enter Email"
          autoComplete="off"
          value={email}
          onChange={handlerInputChange}
        />
      </div>
      <hr />
      {name === "123" && <Message />}
    </div>
  );
};
