import React, { useState } from "react";
import {
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { Page } from "..";
import { useDispatch, useSelector } from "react-redux";
import { Questions } from "../../store/actions";

const QuestionFrom = ({ data }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.User.data);
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => {
    dispatch(
      Questions.updateQuestion({
        authedUser: user.id,
        qid: data.id,
        answer: value,
      })
    );
  };
  return (
    <Page title={`Answer ${data.author.name}`}>
      <div className="question-container ">
        <div className="header p-3">
          <h3>{data.author.name} ask:</h3>
        </div>
        <div className="body p-4">
          <div className="img-container mr-4">
            <img
              src={data.author.avatarURL}
              className="img-fluid img-circle"
              alt=""
            />
          </div>
          <div className="body-container flex-grow-1">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="question"
                name="question1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"optionOne"}
                  control={<Radio />}
                  label={data.optionOne.text}
                />

                <FormControlLabel
                  value={"optionTwo"}
                  control={<Radio />}
                  label={data.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="secondary"
              disabled={!value}
              onClick={handleSubmit}
              className="w-100"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default QuestionFrom;
