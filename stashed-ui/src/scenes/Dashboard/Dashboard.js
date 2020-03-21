import React from "react";
import PropTypes from "prop-types";
import { EquityCard } from "./components/EquityCard";

const Dashboard = props => {
  const { equities } = props;
  return (
    <>
      {equities.map(equity => (
        <EquityCard ticker={equity.ticker} />
      ))}
    </>
  );
};

Dashboard.propTypes = {
  equities: PropTypes.array
};

export default Dashboard;
