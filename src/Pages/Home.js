import React, { memo } from "react";
import CityCards from "../components/CityCards";
import Map from "../components/Map";
import { makeStyles } from "@mui/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    height: "100vh",
    width: "100vw",
    position: "relative",
  },
  cardLayout: {
    position: "absolute",
    top: "90px",
    left: "5px",
    zIndex: 9999,
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
  },
  userGreeting: {
    position: "absolute",
    top: "21px",
    left: "61px",
    backgroundColor: "#444",
    color: "white",
    fontWeight: 700,
    fontSize: "17px",
    padding: "10px",
    zIndex: 9999,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    borderRadius: "5px",
    boxShadow: "0 1px 5px 1px rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
  },
  userAction: {
    background: "#0080ffc9",
    padding: "5px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
}));

const Home = () => {
  const classes = useStyles();
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
