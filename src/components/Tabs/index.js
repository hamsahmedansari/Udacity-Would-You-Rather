import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Question from "../Question";
import { useSelector } from "react-redux";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"div"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

const propsCreatorForTab = (index) => ({
  id: `full-width-tab-${index}`,
  "aria-controls": `full-width-tabpanel-${index}`,
});

const TabsComponent = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const questions = useSelector((state) => state.Questions.data);
  const user = useSelector((state) => state.User.data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let allAnswerQuestions = [];
  let allUnAnswerQuestions = [];

  Object.keys(questions).forEach((questionID) => {
    const temp = [
      ...questions[questionID].optionOne.votes,
      ...questions[questionID].optionTwo.votes,
    ];
    if (temp.includes(user.id)) allAnswerQuestions.push(questions[questionID]);
    else allUnAnswerQuestions.push(questions[questionID]);
  });

  // sorting
  allAnswerQuestions = allAnswerQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );
  allUnAnswerQuestions = allUnAnswerQuestions.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          centered
        >
          <Tab label="Unanswered Questions " {...propsCreatorForTab(0)} />
          <Tab label="Answered Questions" {...propsCreatorForTab(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={"x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          {allUnAnswerQuestions.map((question) => (
            <Question {...question} key={question.id} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {allAnswerQuestions.map((question) => (
            <Question {...question} key={question.id} />
          ))}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};
export default TabsComponent;
