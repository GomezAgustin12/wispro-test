import {
  LOGEDIN,
  LOGOUT,
  UPDATE_USER_DATA_ERROR,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA,
} from "./userTypes";
import {
  deleteUser,
  fetchOneUser,
  fetchUsers,
  login,
  postUser,
  putUser,
} from "requests/usersAPI";

export const updateUserData = () => ({
  type: UPDATE_USER_DATA,
});

export const updateUserDataSuccess = (payload) => ({
  type: UPDATE_USER_DATA_SUCCESS,
  payload,
});

export const updateUserDataError = (payload) => ({
  type: UPDATE_USER_DATA_ERROR,
  payload,
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

export const postUserRedux = (values) => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      const user = await postUser({
        name: values.name,
        lastname: values.lastname,
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch(updateUserDataSuccess(user));
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};

export const loginRedux = (values) => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      const { email, id, username } = await login(values);
      dispatch(logedin({ email, id, username }));
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};

export const fetchOneUserRedux = (_id) => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      const { email, id, username } = await fetchOneUser(_id);
      dispatch(logedin({ email, id, username }));
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};

export const fetchUsersRedux = () => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      const res = await fetchUsers();
      dispatch(updateUserDataSuccess());
      return res;
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};

export const updateUserRedux = (data, user_id) => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      await putUser(data, user_id);
      dispatch(updateUserDataSuccess());
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};

export const deleteUserRedux = (user_id) => {
  return async function (dispatch) {
    try {
      dispatch(updateUserData());
      await deleteUser(user_id);
      dispatch(updateUserDataSuccess());
    } catch (error) {
      dispatch(updateUserDataError(error));
    }
  };
};
