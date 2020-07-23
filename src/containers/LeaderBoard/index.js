import React, { Component } from "react";
import { Profile, Page } from "../../components";
import { connect } from "react-redux";
import { Users } from "../../store/actions";

class LeaderBoardContainer extends Component {
  state = {};

  componentDidMount() {
    this.props.getAllUsers();
  }

  formatData = () => {
    const { Users } = this.props;
    const users = Object.keys(Users)
      .map((userId) => {
        const user = Users[userId];
        const totalAnswers = Object.keys(user.answers).length,
          totalQuestions = Object.keys(user.questions).length;
        return {
          img: user.avatarURL,
          name: user.name,
          totalAnswers,
          totalQuestions,
          rating: totalAnswers + totalQuestions,
        };
      })
      .sort((a, b) => b.rating - a.rating);
    return users;
  };
  render() {
    const data = this.formatData();
    return (
      <Page title="Leaderboard">
        <div className="questions-container pt-4">
          {data.map((d, i) => (
            <Profile {...d} index={i} />
          ))}
        </div>
      </Page>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  Users: state.Users.data,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllUsers: (props) => {
      dispatch(Users.getAllUsers(props));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeaderBoardContainer);
