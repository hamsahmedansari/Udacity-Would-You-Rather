import React from "react";
import { Tabs, Page } from "../../components";

const HomeContainer = (props) => {
  return (
    <Page title="Home">
      <div className="home-container">
        <Tabs />
      </div>
    </Page>
  );
};

export default HomeContainer;
