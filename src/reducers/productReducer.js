const initialState = {
  items: [],
  chosenId: 0,
  loading: true,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_ASYNC":
      return { ...state, items: action.value };
    case "SET_CHOSEN_ID":
      return { ...state, chosenId: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.value };
    default:
      return state;
  }
}
