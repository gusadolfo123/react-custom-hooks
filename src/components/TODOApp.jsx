import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./reducers/todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
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
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className="container">
      <h1 className="text-center">TODO App</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          {/* <button className="btn btn-primary">Agregar</button> */}
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
