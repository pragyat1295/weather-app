import React, { memo, useEffect, useRef } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { futureQuarters } from "../data/weather_information";

let chart;
const FutureChartData = (props) => {
  const { futureQuarterInfo = null } = props;
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (chart) {
        chart.destroy();
        chart = new ChartJS(ctx, {
          type: "line",
          data: {
            labels: futureQuarters,
            datasets: [
              {
                label: "AI Forecast",
                data: futureQuarterInfo?.ai_forecast,
                backgroundColor: "green",
                borderDash: [5, 5],
                borderColor: "green",
                fill: false,
              },
              {
                label: "Final Forecast",
                data: futureQuarterInfo?.final_forecast,
                backgroundColor: "red",
                borderDash: [5, 5],
                borderColor: "red",
                fill: false,
              },
              {
                label: "Previous Quarter",
                data: futureQuarterInfo?.previous_quarter,
                backgroundColor: "rgba(75, 192, 192, 1)",
                borderDash: [5, 5],
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      } else {
        chart = new ChartJS(ctx, {
          type: "line",
          data: {
            labels: futureQuarters,
            datasets: [
              {
                label: "AI Forecast",
                data: futureQuarterInfo?.ai_forecast,
                backgroundColor: "green",
                borderDash: [5, 5],
                borderColor: "green",
                fill: false,
              },
              {
                label: "Final Forecast",
                data: futureQuarterInfo?.final_forecast,
                backgroundColor: "red",
                borderDash: [5, 5],
                borderColor: "red",
                fill: false,
              },
              {
                label: "Previous Quarter",
                data: futureQuarterInfo?.previous_quarter,
                backgroundColor: "rgba(75, 192, 192, 1)",
                borderDash: [5, 5],
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [futureQuarterInfo]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};
export default memo(FutureChartData);
