import { SET_AUTH_USER_DATA, TOGGLE_IS_FETCHING } from "./types";

let initialState = {
  id: null,
  login: "",
  username: "",
  nickname: "",
  email: "",
  tel: "",
  password: "",
  isFetching: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    return state;
};
