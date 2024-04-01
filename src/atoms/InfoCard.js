import React, { memo } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MiniLineChart from "./MiniLineChart";

const graphStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
};

function InfoCard(props) {
  const { data } = props;
  return (
    <Box
      sx={{
        minWidth: 150,
        border: "1px solid springgreen",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          background: "rgba(4, 25, 23, 0.69)",
          color: "white",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
            {data?.city}
          </Typography>
          <Typography sx={{ mb: 1.5, fontWeight: 600 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
              Forecast
            </Typography>
            <Typography sx={graphStyles}>
              <div>
                {data?.forecast_num}
                {data?.forecast_unit}
              </div>
              <div>
                <MiniLineChart colour={"rgba(75, 192, 192, 1)"} />
              </div>
            </Typography>
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 600 }}>
            <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
              Forecast
            </Typography>
            <Typography sx={graphStyles}>
              <div>{data?.forecast_percent}%</div>
              <div>
                <MiniLineChart colour={"springgreen"} />
              </div>
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default memo(InfoCard);
