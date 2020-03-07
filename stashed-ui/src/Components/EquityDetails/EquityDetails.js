import React from "react";
import VerticalTabs from "../VerticalTabs/VerticalTabs";

const EquityDetails = props => {
  const { ticker } = props;
  const list = [
    {
      id: 0,
      label: "Item 1",
      component: <div className="content">Item One</div>
    },
    {
      id: 1,
      label: "Item 2",
      component: <div className="content">Item Two</div>
    },
    {
      id: 2,
      label: "Item 3",
      component: <div className="content">Item Three</div>
    },
    {
      id: 3,
      label: "Item 4",
      component: <div className="content">Item Four</div>
    }
  ];
  return (
    <div>
      <h2>{ticker}</h2>
      <VerticalTabs tabs={list} />
    </div>
  );
};

export default EquityDetails;
