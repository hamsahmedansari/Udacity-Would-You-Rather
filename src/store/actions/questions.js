import Constants from "../constants";
import { http } from "../../services";
import swal from "sweetalert";

const getAll = (params) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.Questions.QUESTIONS_REQUEST,
        payload: null,
      });
      const response = await http.getQuestions();
      dispatch({
        type: Constants.Questions.QUESTIONS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.log("getAll -> error", error);
      dispatch({
        type: Constants.Questions.QUESTIONS_FAILED,
        payload: error,
      });
    }
  };
};

const updateQuestion = (params) => {
  console.log("updateQuestion -> params", params);
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.Questions.QUESTIONS_REQUEST,
        payload: null,
      });
      await http.saveQuestionAnswer(params);
      const response = await http.getQuestions();
      swal("Good job!", "Answer is updated", "success");
      dispatch({
        type: Constants.Questions.QUESTIONS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      console.log("getAll -> error", error);
      dispatch({
        type: Constants.Questions.QUESTIONS_FAILED,
        payload: error,
      });
    }
  };
};

const addQuestion = (params, callBack) => {
  console.log("updateQuestion -> params", params);
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: Constants.Questions.QUESTIONS_REQUEST,
        payload: null,
      });
      await http.saveQuestion(params);
      const response = await http.getQuestions();
      swal("Good job!", "Poll is created", "success");
      dispatch({
        type: Constants.Questions.QUESTIONS_SUCCESS,
        payload: response,
      });
      callBack();
    } catch (error) {
      console.log("getAll -> error", error);
      dispatch({
        type: Constants.Questions.QUESTIONS_FAILED,
        payload: error,
      });
    }
  };
};
export default {
  getAll,
  updateQuestion,
  addQuestion,
};
