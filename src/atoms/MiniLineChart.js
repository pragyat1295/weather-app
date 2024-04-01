import React, { memo } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      tension: 1,
    },
  },
  tooltips: {
    enabled: true,
  },
  hover: { mode: null },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  animation: {
    duration: 0,
  },
  parsing: {
    xAxisKey: "time",
    yAxisKey: "value",
  },
};

const MiniLineChart = (props) => {
  const dataOptions = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        data: [10, 20, 15, 10, 25],
        borderColor: props.colour,
        borderWidth: 2,
        fill: false,
      },
    ],
  };
  return (
    <div style={{ width: "50px", height: "35px" }}>
      <Line data={dataOptions} options={options} />
    </div>
  );
};

export default memo(MiniLineChart);
