import { useState } from "react";

export const UseForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handlerInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(values);
  // };

  const resetForm = () => {
    setValues(initialState);
  };

  return [values, handlerInputChange, resetForm];
};
