import React from "react";
import {
  Button,
  FormControl,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { User } from "../../store/actions";

const initialValues = {
  user: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = "Required";
  }
  return errors;
};

const LoginForm = (props) => {
  const users = useSelector((state) => state.Users);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(User.Login(values.user));
  };
  const form = (
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
        isValid,
        dirty,
        /* and other goodies */
      }) => (
        <div className="body row p-4">
          <Typography className="col-12" variant="body2" color="textSecondary">
            Please sign in to continue
          </Typography>
          <div className="col-12 mb-3">
            <FormControl variant="filled" className="w-100">
              <InputLabel id="demo-simple-select-filled-label">User</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={values.user}
                onChange={handleChange}
                name="user"
                onBlur={handleBlur}
                helperText={errors.user && touched.user && errors.user}
                error={errors.user && touched.user && errors.user}
                className="w-100"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Object.keys(users.data).map((d) => (
                  <MenuItem value={d} key={d}>
                    {users.data[d].name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="col-12">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              className="w-100"
              disabled={user.isLoading || !(isValid && dirty)}
            >
              {user.isLoading ? <CircularProgress /> : "Submit"}
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
  return (
    <div className="question-container ">
      <div className="header p-3 text-center">
        <h5>Welcome to the Would You rather Rather App!</h5>
      </div>
      {users.isLoading ? (
        <div className="center-loading">
          <CircularProgress />
        </div>
      ) : (
        form
      )}
    </div>
  );
};

export default LoginForm;
