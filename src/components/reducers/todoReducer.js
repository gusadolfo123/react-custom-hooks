export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((el) => el.id !== action.payload);
    case "toggle":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};