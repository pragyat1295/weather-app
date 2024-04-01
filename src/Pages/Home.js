import React, { memo } from "react";
import CityCards from "../components/CityCards";
import Map from "../components/Map";
import "../styles.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const Home = () => {
  return (
    <div className="pageContainer">
      {/* Weather Card Component */}

      {/* User Greetings */}

      <div className="userGreeting">
        Hello User,{" "}
        <span className="userAction">
          {" "}
          <InfoOutlinedIcon /> There are 2 action items
        </span>
      </div>

      <div className="cardLayout">
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
