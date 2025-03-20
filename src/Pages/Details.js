import React, { useState, memo } from "react";
import { useParams } from "react-router-dom";
import { weatherInfo } from "../data/weather_information";
import PastChartData from "../atoms/PastChartData";
import FutureChartData from "../atoms/FutureChartData";
import DataTable from "../atoms/DataTable";
import Grid from "@mui/material/Grid";
import Topbar from "../atoms/Topbar";

const Details = () => {
  let { id } = useParams();
  const weather_information = weatherInfo.find(
    (item) => item.id === parseInt(id)
  );
  const firstWeatherInfo = weather_information?.city_data[0];
  const [pastQuarterInfo, setPastQuarterInfo] = useState(
    firstWeatherInfo?.past_quarter
  );
  const [futureQuarterInfo, setFutureQuarterInfo] = useState(
    firstWeatherInfo?.future_quarter
  );
  const [stackName, setStackName] = useState(firstWeatherInfo?.name);
  const [stackId, setStackId] = useState(firstWeatherInfo?.id);
  const handleCityClick = (cityInfo) => {
    setPastQuarterInfo(cityInfo?.past_quarter);
    setFutureQuarterInfo(cityInfo?.future_quarter);
    setStackName(cityInfo?.name);
    setStackId(cityInfo?.id);
  };

  if (!weather_information) {
    return <div>Details not found</div>;
  }

  return (
    <div style={{ background: "#111" }}>
      <div style={{ margin: "23px", width: "98%" }}>
        <Topbar
          stackName={stackName}
          stackId={stackId}
          handleCityClick={handleCityClick}
          cityData={weather_information?.city_data}
          AIForecast={pastQuarterInfo?.ai_forecast?.percent}
          FinalForecast={pastQuarterInfo?.final_forecast?.percent}
        />
      </div>

      {/* .... Past Quarter Chart ...... */}

      {/* .... Future Quarter Chart ...... */}

      <Grid container spacing={0}>
        <Grid item xs={12} lg={6}>
          <PastChartData pastQuarterInfo={pastQuarterInfo} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <FutureChartData futureQuarterInfo={futureQuarterInfo} />
        </Grid>
      </Grid>

      <br />
      <div style={{ background: "#222", marginTop: "10px" }}>
        <DataTable tableData={pastQuarterInfo} />
      </div>
    </div>
  );
};

export default memo(Details);
