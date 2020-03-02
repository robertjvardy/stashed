import React from "react";
import Graph from "../Graph/Graph";
import "./ContentContainer.css";
import Pannel from "../Pannel/Pannel";

const ContentContainer = props => {
  const { tickers } = props;
  return (
    <div id="content-container">
      {tickers.map(ticker => (
        <Pannel ticker={ticker} />
      ))}
    </div>
  );
};

export default ContentContainer;
