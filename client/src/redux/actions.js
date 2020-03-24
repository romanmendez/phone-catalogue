import axios from "axios";

const server = axios.create({ baseURL: "http://localhost:3000" });

export const getPhones = () => {
  return dispatch => {
    dispatch({ type: "GET_PHONES_REQUEST" });
    server
      .get("/phones")
      .then(res => {
        const phones = res.data;
        dispatch({
          type: "GET_PHONES_SUCCESS",
          phones: phones
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_PHONES_FAILURE",
          error: error
        });
      });
  };
};
