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
  let beforeOpen = true;
  if (currentHour < 9 || (currentHour === 9 && currentMinute < 30)) {
    beforeOpen = false;
  }
  const weekendAndMonday = [0, 1, 6];
  let desiredDay = weekendAndMonday.includes(currentDay) ? 5 : today;
  desiredDay =
    beforeOpen && !weekendAndMonday.includes(currentDay)
      ? desiredDay - 1
      : desiredDay;
  return desiredDay;
};

export const filterSingleDayData = data => {
  const PreviousWorkDay = getPreviousWorkDay();
};
