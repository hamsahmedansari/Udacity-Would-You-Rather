import React from "react";
import { Typography } from "@material-ui/core";
import "./style.scss";

const Profile = (props) => {
  return (
    <div className="profile-container mb-3">
      <Typography variant="h1" className="position">
        {props.index + 1}
      </Typography>
      <div className="body">
        <div className="img-container mr-4 p-4">
          <img src={props.img} className="img-fluid img-circle" alt="" />
        </div>
        <div className="body-container flex-grow-1 pt-4 pb-4">
          <h5>
            <b>{props.name}</b>
          </h5>
          <div className="w-100 d-flex justify-content-between align-items center">
            <Typography variant="body2" color="textSecondary">
              Answered Questions
            </Typography>
            <Typography variant="h6">{props.totalAnswers}</Typography>
          </div>
          <div className="w-100 d-flex justify-content-between align-items center">
            <Typography variant="body2" color="textSecondary">
              Created Questions
            </Typography>
            <Typography variant="h6">{props.totalQuestions}</Typography>
          </div>
        </div>
        <div className="score-container ml-4">
          <h5>
            <b>Score</b>
          </h5>
          <div className="score">
            <Typography variant="h6">{props.rating}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
