import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/LoginActions'


const initialState = {
  id: "",
  message: "",
  isRedirect: false,
};

export function getLogin(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state,
        isRedirect: false
      };
    case LOGIN_SUCCESS:
      return {...state,
        id: action.payload,
        isRedirect: true,
      };
    case LOGIN_FAILURE:
      return {...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
