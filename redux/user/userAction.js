import { Alert } from "react-native";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./userTypes";

export const setLoggedIn = (userData) => {
  return {
    type: USER_LOGGED_IN,
    ...userData,
  };
};

export const setLoggedOut = (userId) => {
  return {
    type: USER_LOGGED_OUT,
  };
};

