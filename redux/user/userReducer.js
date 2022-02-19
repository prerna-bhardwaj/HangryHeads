import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./userTypes";

const initialState = {
  userId: null,
  isAuthenticated: false,
  username: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        userId: action.userId,
        isAuthenticated: true,
        email: action.email,
        username: action.username,
      };

    case USER_LOGGED_OUT:
      return {
        ...state,
        userId: null,
        isAuthenticated: false,
        email: "",
        username: "",
      };

    default:
      return state;
  }
};

export default userReducer;
