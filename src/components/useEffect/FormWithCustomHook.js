import React, { useEffect, useState } from "react";
import { UseForm } from "../../hooks/useForm";
import { Message } from "../Message";
import "./effects.css";

export const FormWithCustomHook = ({ title }) => {
  const [formValues, handlerInputChange, handlerSubmit] = UseForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Load View");
  }, []);

  useEffect(() => {
    console.log("Load Name");
  }, [name]);

  useEffect(() => {
    console.log("Load Email");
  }, [email]);

  return (
    <form onSubmit={handlerSubmit} className="container">
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
      <br />
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={handlerInputChange}
        />
      </div>
      <hr />
      {name === "123" && <Message />}
      <button className="btn btn-primary">Guardar</button>
    </form>
  );
};
