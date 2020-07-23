import React from "react";
import {
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Questions } from "../../store/actions";
import { useHistory } from "react-router-dom";

const initialValues = {
  value1: "",
  value2: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.value1) {
    errors.value1 = "Required";
  }
  if (!values.value2) {
    errors.value2 = "Required";
  }
  return errors;
};

const NewQuestionForm = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.data);
  const question = useSelector((state) => state.Questions);
  const history = useHistory();

  const onSuccessSubmit = () => history.push("/");

  const handleSubmit = (values, { setValues }) => {
    const payload = {
      optionOneText: values.value1,
      optionTwoText: values.value2,
      author: user.id,
    };
    dispatch(Questions.addQuestion(payload, onSuccessSubmit));
  };

  return (
    <div className="question-container ">
      <div className="header p-3 text-center">
        <h5>Create New Question</h5>
      </div>

      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="body row p-4">
            <Typography
              className="col-12"
              variant="body2"
              color="textSecondary"
            >
              Complete the question:
            </Typography>
            <Typography className="col-12 mt-2 mb-2" variant="h6">
              <b>Would you rather ?</b>
            </Typography>
            <div className="col-12 mb-3">
              <TextField
                label="Option 1"
                variant="filled"
                className="w-100"
                name="value1"
                value={values.value1}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.value1 && touched.value1 && errors.value1}
                error={errors.value1 && touched.value1 && errors.value1}
              />
            </div>
            <div className="col-12 mb-3">
              <TextField
                label="Option 2"
                variant="filled"
                className="w-100"
                name="value2"
                value={values.value2}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={errors.value2 && touched.value2 && errors.value2}
                error={errors.value2 && touched.value2 && errors.value2}
              />
            </div>
            <div className="col-12">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                className="w-100"
              >
                {question.isLoading ? <CircularProgress /> : "Submit"}
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default NewQuestionForm;
