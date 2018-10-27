import axios from "axios";
import { defaultErrorMsgProfile } from "../constants/Default";
import {LOGIN_REQUEST, loginRequest} from "./LoginActions";

export const PROFILE_REQUEST = "PROFILE_REQUEST";
export const PROFILE_SUCCESS = "PROFILE_SUCCESS";
export const PROFILE_FAILURE = "PROFILE_FAILURE";

export const profileRequest = () => ({
  type: PROFILE_REQUEST
});

export const profileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data
});

export const profileFailure = (errorMsg: string) => ({
  type: PROFILE_FAILURE,
  payload: errorMsg
});

export const getInfoProfile = (url) => dispatch => {
  dispatch({
    type: profileRequest
  });

  axios.get(url)
    .then(res => {const {data, status} = res.data;

      if (status === "ok") {
        dispatch(profileSuccess(data));
      } else {
        dispatch(profileFailure("Ошибка при загрузке страницы..."));
      }
    })
    .catch(e => dispatch(profileFailure(defaultErrorMsgProfile)));
};