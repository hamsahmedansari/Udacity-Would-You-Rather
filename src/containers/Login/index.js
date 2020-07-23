import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Page, LoginForm } from "../../components";
import { connect } from "react-redux";
import { Users } from "../../store/actions";

class LoginContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {
      userIsLogin,
      location: { state },
    } = this.props;
    if (userIsLogin) return <Redirect to={state ? state.previousRoute : "/"} />;
    return (
      <Page title="Login">
        <div className="pt-4">
          <LoginForm />
        </div>
      </Page>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  userIsLogin: state.User.isSuccess,
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllUsers: (props) => {
      dispatch(Users.getAllUsers(props));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
