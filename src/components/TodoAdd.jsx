import React from "react";
import { UseForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handlerInputChange, reset] = UseForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar Todo</h4>
      <hr />
      <form className="row" onSubmit={handleSubmit}>
        <input
          className="form-control col-12"
          type="text"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handlerInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-light my-1 col-12">
          Agregar
        </button>
      </form>
    </>
  );
};
