import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomTable from "../../../CustomTable";
import "./PannelSummary.css";

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

//TODO add after hours display
// TODO fix number rounding
// TODO add up/down arrows
// TODO add minus sign
// TODO make more responsive, specifically the current price
const PannelSummary = props => {
  const classes = useStyles();
  const { ticker } = props;
  const [currentData, setCurrentData] = useState(undefined);
  const [dailyChangeStyles, setDailyChangeStyles] = useState(classes.neutral);
  const [percentChange, setPercentChange] = useState(0);
  const fetchCurrentData = async () => {
    const response = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol: ticker,
        token: "bpeg3mnrh5rckeckl8m0"
      }
    });
    const {
      data: { c, l, h, o, pc }
    } = response;
    setCurrentData({
      currentPrice: c,
      previousClose: pc,
      low: l,
      open: o,
      high: h
    });
    switch (true) {
      case c < pc:
        setDailyChangeStyles(classes.loss);
        break;
      case c > pc:
        setDailyChangeStyles(classes.gain);
        break;
      default:
        setDailyChangeStyles(classes.neutral);
        break;
    }
    setPercentChange(Math.abs(((pc - c) / pc) * 100).toFixed(2));
  };

  useEffect(() => {
    fetchCurrentData();
    const interval = setInterval(() => {
      fetchCurrentData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return currentData ? (
    <>
      <div className="main-price-sction">
        <h4 className={`${dailyChangeStyles} main-price`}>
          {currentData.currentPrice}
        </h4>
        <h6
          className={`${dailyChangeStyles} percent-change`}
        >{`${percentChange} %`}</h6>
      </div>
      <div className="table-container">
        <CustomTable
          data={[
            createData("Previous Close", currentData.previousClose),
            createData("Open", currentData.open),
            createData("High", currentData.high),
            createData("Low", currentData.low)
          ]}
        />
      </div>
    </>
  ) : (
    <CircularProgress />
  );
};

export default PannelSummary;
