import React from "react";
import { Route as ReactRouter } from "react-router-dom";
import { Layout } from "../components";

const Route = (props) => {
  const { withoutHeaderAndFooter } = props;
  const schema = <ReactRouter {...props} />;
  if (props.withoutLayout) return schema;
  return (
    <Layout withoutHeaderAndFooter={withoutHeaderAndFooter}>{schema}</Layout>
  );
};

export default Route;
