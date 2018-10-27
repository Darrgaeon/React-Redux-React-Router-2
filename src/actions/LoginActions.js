import axios from "axios";
import { defaultErrorMsg } from "../constants/Default";


export const LOGIN_REQUEST  = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = (id: string) => ({
  type: LOGIN_SUCCESS,
  payload: id
});

export const loginFailure = (errorMsg: string) => ({
  type: LOGIN_FAILURE,
  payload: errorMsg
});

export const getUserLogin = (url, email, password) => dispatch => {
  dispatch({
    type: loginRequest
  });

  axios.post(url, {email, password})
    .then(res => {const {data, status} = res.data;

      if (status === "ok") {
        dispatch(loginSuccess(data.id));
      } else {
        dispatch(loginFailure("Имя пользователя или пароль введены не верно"));
      }
    })
    .catch(e => dispatch(loginFailure(defaultErrorMsg)));
};