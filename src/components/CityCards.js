import React, { memo } from "react";
import { weatherInfo } from "../data/weather_information";
import { Link } from "react-router-dom";
import InfoCard from "../atoms/InfoCard";
import classes from './components.module.css';

function CityCards() {
  return (
    <div className={classes.cardContainer}>
      {weatherInfo?.map((data) => {
        return (
          <div className={classes.cardContent}>
            <Link
              to={`/${data?.id}`}
              key={data?.id}
              style={{ textDecoration: "none" }}
            >
              <InfoCard data={data} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default memo(CityCards);
