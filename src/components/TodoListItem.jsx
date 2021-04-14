import React from "react";

export const TodoListItem = ({ todo, handleToggle, handleDelete, index }) => {
  const { id, desc, done } = todo;

  return (
    <li className="list-group-item" key={id}>
      <p
        className={`text-center ${done && "complete"}`}
        onClick={() => handleToggle(id)}
      >
        {index + 1} - {desc}
      </p>
      <button onClick={() => handleDelete(id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
