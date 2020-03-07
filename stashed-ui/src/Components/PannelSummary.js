import React, { useEffect, useState } from "react";
import axios from "axios";

const PannelSummary = props => {
  const { ticker } = props;
  const [currentData, setCurrentData] = useState(undefined);
  const fetchCurrentData = async () => {
    const response = await axios.get("https://finnhub.io/api/v1/quote", {
      params: {
        symbol: ticker,
        token: "bpeg3mnrh5rckeckl8m0"
      }
    });
    setCurrentData(response.data);
  };

  useEffect(() => {
    fetchCurrentData();
    const interval = setInterval(() => {
      fetchCurrentData();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return currentData ? <div>{currentData.c}</div> : <div></div>;
};

export default PannelSummary;
