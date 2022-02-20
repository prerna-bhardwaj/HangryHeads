import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./userTypes";

const initialState = {
  isAuthenticated: false,
  username: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        username: action.username,
        isAuthenticated: true,
      };

    case USER_LOGGED_OUT:
      return {
        ...state,
        isAuthenticated: false,
        username: "",
      };

    default:
      return state;
  }
};

export default userReducer;
