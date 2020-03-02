import React, { useState, useEffect } from "react";
import Graph from "../Graph/Graph";
import axios from "axios";
import { timeSeriesConverter, getPreviousWorkDay } from "../../utils";

const Pannel = props => {
  const [data, setData] = useState(undefined);
  const [interval, setInterval] = useState("1min");
  const { ticker } = props;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/query", {
        params: {
          function: "TIME_SERIES_INTRADAY",
          symbol: ticker,
          interval: interval,
          apikey: "2ELSARYR84GOD9S7",
          outputsize: "full"
        }
      });
      setData(timeSeriesConverter(response.data, interval));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{ticker}</h1>
      <Graph data={data} />
    </div>
  );
};

export default Pannel;
