import Constants from "../constants";

const Login = (params) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.User.LOGIN_REQUEST,
        payload: null,
      });
      const { Users } = getState();
      const selectedUser = Users.data[params];
      dispatch({
        type: Constants.User.LOGIN_SUCCESS,
        payload: selectedUser,
      });
    } catch (error) {
      console.log("Login -> error", error);
      dispatch({
        type: Constants.User.LOGIN_FAILED,
        payload: error,
      });
    }
  };
};

const Logout = (params) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.User.LOGOUT,
        payload: null,
      });
    } catch (error) {
      console.log("Login -> error", error);
      dispatch({
        type: Constants.User.LOGIN_FAILED,
        payload: error,
      });
    }
  };
};
export default {
  Login,
  Logout,
};
