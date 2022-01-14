import { GET_LIST_NUMBERS } from "./types";

export const getList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_NUMBERS,
    });
  };
};
