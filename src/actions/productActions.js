export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS" });
};

export const setChosenId = (id) => (dispatch) => {
  console.log("Setting");
  dispatch({ type: "SET_CHOSEN_ID", payload: id });
};


