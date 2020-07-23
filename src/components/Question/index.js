import React from "react";
import { Button } from "@material-ui/core";
import "./style.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

const Question = (props) => {
  const handleView = (id) => props.history.push(`/question/${id}`);
  const users = useSelector((state) => state.Users.data);
  const author = users[props.author];
  return (
    <div className="question-container mb-3">
      <div className="header p-3">
        <h5>{author.name} ask:</h5>
      </div>
      <div className="body p-4">
        <div className="img-container mr-4">
          <img src={author.avatarURL} className="img-fluid img-circle" alt="" />
        </div>
        <div className="body-container flex-grow-1">
          <h6>
            <b>Would You Rather?</b>
          </h6>
          <p className="m-0">{props.optionOne.text}</p>
          <p>{props.optionTwo.text}</p>

          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => handleView(props.id)}
            className="w-100"
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Question);
