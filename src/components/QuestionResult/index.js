import React from "react";
import { Button, Typography } from "@material-ui/core";
import { ProgressBar } from "..";
import { useSelector } from "react-redux";
const getPercentage = (t, p) => (t / p) * 100;
const QuestionFrom = ({ data }) => {
  const totalVotes = [...data.optionOne.votes, ...data.optionTwo.votes];
  const user = useSelector((state) => state.User.data);
  const voted = data.optionOne.votes.includes(user.id);
  return (
    <div className="question-container ">
      <div className="header p-3">
        <h4 className="m-0">{data.author.name}</h4>
      </div>
      <div className="body p-4">
        <div className="img-container mr-4">
          <img
            src={data.author.authorURL}
            className="img-fluid img-circle"
            alt=""
          />
        </div>
        <div className="body-container flex-grow-1">
          <h6>Result:</h6>
          <div className="item-answer-container mb-2">
            <Typography variant="body2" color="textSecondary">
              {data.optionOne.text}
            </Typography>
            <ProgressBar
              value={getPercentage(
                data.optionOne.votes.length,
                totalVotes.length
              )}
            />

            <div className="d-flex justify-content-between align-items-center">
              {voted ? (
                <Button variant="contained" disableElevation color="secondary">
                  Voted
                </Button>
              ) : (
                <div />
              )}
              <Typography
                variant="body2"
                color="textPrimary"
                className="text-bold text-right pr-5"
              >
                {data.optionOne.votes.length} out of {totalVotes.length}
              </Typography>
            </div>
          </div>
          <div className="item-answer-container mb-2">
            <Typography variant="body2" color="textSecondary">
              {data.optionTwo.text}
            </Typography>
            <ProgressBar
              value={getPercentage(
                data.optionTwo.votes.length,
                totalVotes.length
              )}
            />
            <div className="d-flex justify-content-between align-items-center">
              {!voted ? (
                <Button variant="contained" disableElevation color="secondary">
                  Voted
                </Button>
              ) : (
                <div />
              )}
              <Typography
                variant="body2"
                color="textPrimary"
                className="text-bold text-right pr-5"
              >
                {data.optionTwo.votes.length} out of {totalVotes.length}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionFrom;
