import React, { useState, useEffect } from "react";
import Graph from "../Graph/Graph";
import axios from "axios";
import { timeSeriesConverter, filterSingleDayData } from "../../utils";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Pannel.css";

import { testData } from "../../assets/testData";
import PannelSummary from "../PannelSummary";

const Pannel = props => {
  const [timeSeriesData, setTimeSeriesData] = useState(undefined);
  const [interval, setInterval] = useState("1min");
  const { ticker } = props;
  const history = useHistory();
  const fetchData = async () => {
    const response = await axios.get("/query", {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: ticker,
        interval: interval,
        apikey: "2ELSARYR84GOD9S7", // this cant stay here
        outputsize: "full"
      }
    });
    setTimeSeriesData(
      filterSingleDayData(timeSeriesConverter(response.data, interval))
    );
  };
  useEffect(() => {
    // fetchData();
    // setTimeout(() => fetchData(), 60 * 2 * 1000); // every 2 minutes
    setTimeSeriesData(
      filterSingleDayData(timeSeriesConverter(testData, interval))
    );
  }, []);

  return (
    <div className="pannel">
      <div
        className="pannel-header"
        onClick={() => history.push(`/equity/${ticker}`)}
      >
        <h1 className="pannel-title">{ticker}</h1>
      </div>
      {timeSeriesData ? (
        <>
          <div className="graph-container">
            <Graph data={timeSeriesData} />
          </div>
          <div
            className="current-data-container"
            onClick={() => history.push(`/equity/${ticker}`)}
          >
            <PannelSummary ticker={ticker} />
          </div>
        </>
      ) : (
        <>
          <CircularProgress />
          <h1>Waiting...</h1>
        </>
      )}
    </div>
  );
};

export default Pannel;
