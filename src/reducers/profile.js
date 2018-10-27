import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from "../actions/ProfileActions";

const initialState = {
  message: "",
  status: "",
  data: []
};

export function getProfile(state = initialState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {...state,
        message: "",
        status: "",
        data: []
      };

    case PROFILE_SUCCESS:
      console.log("PROFILE_SUCCESS");
      return {...state,
        data: action.payload,
        status: "ok"
      };

    case PROFILE_FAILURE:
      console.log("PROFILE_FAILURE");
      return {...state,
        message: action.payload,
        status: "not"
      };
    default:
      return state;
  }
}
