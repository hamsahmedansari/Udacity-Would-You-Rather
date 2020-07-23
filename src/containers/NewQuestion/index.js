import React, { Component } from "react";
import { NewQuestionForm, Page } from "../../components";

class QuestionContainer extends Component {
  state = {};
  render() {
    return (
      <Page title="Add New Question">
        <div className="questions-container pt-4">
          <NewQuestionForm />
        </div>
      </Page>
    );
  }
}

export default QuestionContainer;
