import React from "react";
import "./PannelsContainer.css";
import Pannel from "../Pannel/Pannel";

const PannelsContainer = props => {
  const { tickers } = props;
  return (
    <>
      {tickers.map(ticker => (
        <Pannel ticker={ticker} key={ticker} />
      ))}
    </>
  );
};

export default PannelsContainer;
