import * as TYPES from "../types";
const initialState = {
  token: "",
};

const userInfo = localStorage.getItem("userInfo");
if (userInfo) {
  initialState.token = userInfo;
}

export default function UserReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TYPES.USER_LOGIN:
      localStorage.setItem("userInfo", payload);
      return { ...state, token: payload };
    default:
      return state;
  }
}
