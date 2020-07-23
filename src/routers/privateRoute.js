import React from "react";
import { Redirect } from "react-router-dom";
import Router from "./route";
import { useSelector } from "react-redux";
const PrivateRoute = (props) => {
  const isAuthorized = useSelector((state) => state.User.isSuccess);
  if (!isAuthorized)
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            previousRoute: props.path,
          },
        }}
      />
    );
  return <Router {...props} />;
};

export default PrivateRoute;
