import React, { memo } from "react";
import { weatherInfo } from "../data/weather_information";
import { Link } from "react-router-dom";
import InfoCard from "../atoms/InfoCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    position: "static",
    width: "90vw",
  },
  cardContent: {
    display: "inline-block",
    margin: "5px",
  },
}));

function CityCards() {
  const classes = useStyles();
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
