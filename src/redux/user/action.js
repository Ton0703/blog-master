import * as TYPES from "../types";
import axios from "../../utils/axios";

export const login = (code, callback) => {
  return (dispatch) =>
    axios.post("/login", { code: code }).then((res) => {
      dispatch({
        type: TYPES.USER_LOGIN,
        payload: res.data,
      });
      callback();
    });
};
