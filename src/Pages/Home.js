import React, { memo } from "react";
import classes from "./pagesStyles.module.css";
import CityCards from "../components/CityCards";
import Map from "../components/Map";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const Home = () => {
  return (
    <div className={classes.pageContainer}>
      {/* Weather Card Component */}

      {/* User Greetings */}

      <div className={classes.userGreeting}>
        Hello User,{" "}
        <span className={classes.userAction}>
          {" "}
          <InfoOutlinedIcon /> There are 2 action items
        </span>
      </div>

      <div className={classes.cardLayout}>
        <CityCards />
      </div>
      {/* Map component */}
      <div>
        <Map />
      </div>
    </div>
  );
};

export default memo(Home);
