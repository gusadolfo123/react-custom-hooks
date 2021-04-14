import React, { useReducer, useEffect } from "react";
import { UseForm } from "../hooks/useForm";
import { todoReducer } from "./reducers/todoReducer";
import "./todoStyles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Learning React",
  //     done: false,
  //   },
  // ];
};

export const TODOApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handlerInputChange, reset] = UseForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleDelete = (todoId) => {
    const deleteAction = {
      type: "remove",
      payload: todoId,
    };
    dispatch(deleteAction);
  };

  const handleToggle = (todoId) => {
    console.log(todoId);
    const toggleAction = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(toggleAction);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const actionAddTodo = {
      type: "add",
      payload: newTodo,
    };

    dispatch(actionAddTodo);
    reset();
  };

  return (
    <div className="container">
      <h1 className="text-center">TODO App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todo.map(({ id, desc, done }, i) => {
              return (
                <li className="list-group-item" key={id}>
                  <p
                    className={`text-center ${done && "complete"}`}
                    onClick={() => handleToggle(id)}
                  >
                    {i + 1} - {desc}
                  </p>
                  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-danger"
                  >
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          {/* <button className="btn btn-primary">Agregar</button> */}
          <h4>Agregar TODO</h4>
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
        </div>
      </div>
    </div>
  );
};
