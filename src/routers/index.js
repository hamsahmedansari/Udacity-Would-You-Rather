import React from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./route";
import PrivateRoute from "./privateRoute";
import {
  HomeContainer,
  LoginContainer,
  PageNotFound,
  QuestionContainer,
  NewQuestionContainer,
  LeaderBoardContainer,
  LogoutContainer,
} from "../containers";
const Router = (props) => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={HomeContainer} />
      <PrivateRoute
        exact
        path="/question/new"
        component={NewQuestionContainer}
      />
      <PrivateRoute exact path="/question/:id" component={QuestionContainer} />
      <PrivateRoute
        exact
        path="/leaderboard"
        component={LeaderBoardContainer}
      />

      <Route exact path="/404" component={PageNotFound} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/logout" component={LogoutContainer} />
      <Route exact path="/*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default Router;
