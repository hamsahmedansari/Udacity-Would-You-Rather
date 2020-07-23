import React, { Component } from "react";
import Page from "../../components/Page";
import "./style.scss";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { User } from "../../store/actions";
import { Redirect } from "react-router-dom";
class LogoutContainer extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    const { User } = this.props;
    if (User.isSuccess) return <Redirect to="/" />;
    return (
      <Page title="Logging out">
        <div className="page-not-found-container">
          <CircularProgress />
        </div>
      </Page>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(User.Logout());
    },
  };
};
const mapStateToProps = (state, ownProps) => ({
  User: state.User,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
