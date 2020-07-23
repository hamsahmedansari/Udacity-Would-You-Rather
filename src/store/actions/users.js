import Constants from "../constants";
import { http } from "../../services";

const getAllUsers = (params) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.Users.USERS_REQUEST,
        payload: null,
      });
      const response = await http.getUsers();
      dispatch({
        type: Constants.Users.USERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.log("getAllUsers -> error", error);
      dispatch({
        type: Constants.Users.USERS_FAILED,
        payload: error,
      });
    }
  };
};

export default {
  getAllUsers,
};
