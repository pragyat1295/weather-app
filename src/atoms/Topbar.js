import Grid from "@mui/material/Grid";
import React, { memo } from "react";
import SidebarDrawer from "../components/SidebarDrawer";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import classes from "./atoms.module.css"

const Topbar = (props) => {
  const {
    stackName = "",
    stackId = "",
    AIForecast = "",
    FinalForecast = "",
    handleCityClick = () => {},
    cityData = [],
  } = props;

  return (
    <>
      <Grid className={classes.topbarContainer} container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={1} className={classes.stackNameContainer}>
            <Grid item xs={6} md={3} lg={2}>
              <SidebarDrawer
                cityData={cityData}
                handleCityClick={handleCityClick}
              />
            </Grid>
            <Grid item xs={6} md={9} lg={10}>
              <div style={{ display: "flex" }}>
                <div>
                  <WarningAmberIcon style={{ color: "yellow" }} />
                </div>
                <div>{stackName}</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={8} style={{ margin: "auto" }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <div className={`${classes.stackIdContainer}`}>
                <div className={classes.stackIdText}> Stack Id: </div>
                <div className={classes.stackIdValue}> {stackId} </div>
                <ListAltIcon />
              </div>
            </Grid>
            <Grid xs={6}>
              <div className={classes.center}>
                <div className={classes.forecastContainer}>
                  <div>
                    <div>Forecast</div>
                    <div> {AIForecast}% </div>
                  </div>
                  <div>
                    <div>Forecast</div>
                    <div> {FinalForecast}% </div>
                  </div>
                </div>
                <EmojiFlagsIcon />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(Topbar);
