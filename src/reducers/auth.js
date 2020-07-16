import { func } from "prop-types";
import { LOGIN_FAILED, LOGIN_SUCCESS, LOGIN_START } from "../actions/actionTypes";

const initalAuthState = {
  user: {},

  error: null,
  isLoggedin: false,
  isProgress: false,
};
export default function auth(state = initalAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isProgress: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        isProgress: false,
        error: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
       
        isProgress: false,
        error: action.error,
      };

    default:
      return state;
  }
}
