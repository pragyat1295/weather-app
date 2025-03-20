import React, { memo } from "react";
import { Line } from "react-chartjs-2";
import { quarters } from "../data/weather_information";

const PastChart = (props) => {
  const { pastQuarterInfo = null } = props;
  return (
    <div className="">
      <Line
        data={{
          labels: quarters,
          datasets: [
            {
              label: "AI Forecast",
              data: pastQuarterInfo?.ai_forecast?.quarter_data,
              backgroundColor: "green",
              borderColor: "green",
            },
            {
              label: "Final Forecast",
              data: pastQuarterInfo?.final_forecast?.quarter_data,
              backgroundColor: "yellow",
              borderColor: "yellow",
            },
            {
              label: "Consumption",
              data: pastQuarterInfo?.consumption,
              backgroundColor: "blue",
              borderColor: "blue",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0,
            },
          },
        }}
      />
    </div>
  );
};
export default memo(PastChart);
