import React, { Component } from "react";
import { QuestionForm, QuestionResult, Page } from "../../components";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

class QuestionContainer extends Component {
  componentWillMount() {
    const {
      match: {
        params: { id },
      },
      Questions,
    } = this.props;
    if (!id || !Questions.data[id]) this.props.history.push("/404");
  }
  getData = (id) => {
    const { Questions, Users } = this.props;
    const selectedQuestion = Questions.data[id];
    if (!selectedQuestion) return false;
    const selectedUser = Users.data[selectedQuestion.author];
    return {
      ...selectedQuestion,
      author: selectedUser,
    };
  };
  render() {
    const {
      match: {
        params: { id },
      },
      User,
    } = this.props;
    const data = this.getData(id);
    const isAnswer =
      data.optionOne &&
      [...data.optionOne.votes, ...data.optionTwo.votes].includes(User.data.id);
    return (
      <Page title="Results">
        {!Object.keys(data).length ? (
          <div className="center-loading">
            <CircularProgress />
          </div>
        ) : (
          <div className="questions-container pt-4">
            {isAnswer ? (
              <QuestionResult data={data} />
            ) : (
              <QuestionForm data={data} />
            )}
          </div>
        )}
      </Page>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  Questions: state.Questions,
  Users: state.Users,
  User: state.User,
});

export default connect(mapStateToProps)(QuestionContainer);
