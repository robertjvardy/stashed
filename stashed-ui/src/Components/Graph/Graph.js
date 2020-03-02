import React from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = props => {
  const { data, ticker } = props;

  const options = {
    theme: "light2", // "light1", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: ticker
    },
    axisY: {
      includeZero: false
    },
    data: [
      {
        type: "area",
        dataPoints: data
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Graph;
