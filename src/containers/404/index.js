import React, { Component } from "react";
import Page from "../../components/Page";
import "./style.scss";
class PageNotFound extends Component {
  render() {
    return (
      <Page title="404">
        <div className="page-not-found-container">
          <h1>404</h1>
        </div>
      </Page>
    );
  }
}

export default PageNotFound;
