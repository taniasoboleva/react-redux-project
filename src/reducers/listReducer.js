import { GET_LIST_NUMBERS } from "../actions/types";

const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_NUMBERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
