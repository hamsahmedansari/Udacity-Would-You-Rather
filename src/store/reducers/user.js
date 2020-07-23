import Constants from "../constants";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  error: "",
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Constants.User.LOGIN_REQUEST:
      return { ...state, isError: false, isLoading: true, error: "" };
    case Constants.User.LOGIN_FAILED:
      return { ...state, isError: true, isLoading: false, error: payload };
    case Constants.User.LOGOUT:
      return initialState;
    case Constants.User.LOGIN_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        error: "",
        data: payload,
      };
    default:
      return state;
  }
};
