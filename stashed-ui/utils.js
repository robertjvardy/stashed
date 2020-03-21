import { isArray, isObject } from "lodash";

// converts data from Alpha Avantage API to canvasJS readable format
export const timeSeriesConverter = (data, interval) => {
  const timeSeries = data[`Time Series (${interval})`];
  const timeStamps = Object.keys(timeSeries);
  let dataList = [];
  timeStamps.forEach(stamp => {
    const date = new Date(stamp);
    const value = parseFloat(timeSeries[stamp]["4. close"]);
    dataList = [...dataList, { x: date, y: value }];
  });
  return dataList;
};

const getPreviousWorkDay = () => {
  const today = new Date();
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const currentDay = today.getDay();
  let dayStarted =
    currentHour > 9 || (currentHour === 9 && currentMinute >= 30);
  const weekend = [0, 6];
  switch (true) {
    case weekend.includes(currentDay):
      return 5;
    case currentDay === 1:
      return dayStarted ? 1 : 5;
    default:
      return dayStarted ? currentDay : currentDay - 1;
  }
};

export const filterSingleDayData = data => {
  const previousWorkDay = getPreviousWorkDay();
  return data.filter(date => date.x.getDay() === previousWorkDay);
};

export const verifyApiResponse = response => {
  if (response.status !== 200) return false;
  const data = response.data;
  switch (true) {
    case isArray(data):
      console.log("Returned a list");
      break;
    case isObject(data):
      console.log("Returned an object");
      break;
    default:
      console.log("Returned error");
      break;
  }
  // TODO return a value if the call returned valid data, otherwise throw an error
};
