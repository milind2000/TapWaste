export const initialState = null;

export const reducer = (state, action) => {
  if (action.type === "VENDOR") {
    return action.payload;
  }

  return state;
};
