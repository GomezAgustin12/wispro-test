import {
  LOGEDIN,
  LOGOUT,
  UPDATE_USER_DATA_ERROR,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA,
} from "./userTypes";

export const updateUserData = () => ({
  type: UPDATE_USER_DATA,
});

export const updateUserDataSuccess = (payload) => ({
  type: UPDATE_USER_DATA_SUCCESS,
  payload,
});

export const updateUserDataError = () => ({
  type: UPDATE_USER_DATA_ERROR,
});

export const logedin = (user) => {
  return {
    type: LOGEDIN,
    user: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
