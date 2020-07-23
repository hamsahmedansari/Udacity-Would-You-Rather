import React from "react";
import { Helmet } from "react-helmet";
import PropType from "prop-types";
const Page = (props) => {
  const title = props.title ? props.title + " - " : "";

  return (
    <>
      <Helmet>
        <title>{title + "Would You Rather"}</title>
      </Helmet>
      {props.children}
    </>
  );
};
Page.prototype = {
  title: PropType.string.isRequired,
};

export default Page;
