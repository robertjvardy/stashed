import React, { useState } from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Table } from "../../../../components/Table";
import { useHistory } from "react-router-dom";
import "./EquityCard.css";

const testData = {
  currentPrice: 45645,
  low: 456456,
  high: 14560,
  open: 456,
  previousClose: 45646
};

const useStyles = makeStyles({
  gain: {
    color: "green"
  },
  loss: {
    color: "red"
  },
  neutral: {
    color: "black"
  }
});

const createData = (name, value) => {
  return { name, value };
};

const EquityCard = props => {
  const classes = useStyles();
  const history = useHistory();
  const { ticker } = props;
  const [dailyChangeStyles, setDailyChangeStyles] = useState(classes.neutral);
  const [percentChange, setPercentChange] = useState(45);
  const [currentData, setCurrentData] = useState(testData);

  return currentData ? (
    <div
      className="card"
      onClick={() => history.push(`equityDetails/${ticker}`)}
    >
      <div className="main-price-section">
        <h4>{ticker}</h4>
        <h4 className={`${dailyChangeStyles} main-price`}>
          {currentData.currentPrice}
        </h4>
        <h6
          className={`${dailyChangeStyles} percent-change`}
        >{`${percentChange} %`}</h6>
      </div>
      <div className="table-container">
        <Table
          data={[
            createData("Previous Close", currentData.previousClose),
            createData("Open", currentData.open),
            createData("High", currentData.high),
            createData("Low", currentData.low)
          ]}
        />
      </div>
    </div>
  ) : (
    <CircularProgress />
  );
};

EquityCard.propTypes = {
  ticker: PropTypes.string
};

export default EquityCard;

//TODO add after hours display
// TODO fix number rounding
// TODO add up/down arrows
// TODO add minus sign
// TODO make more responsive, specifically the current price
