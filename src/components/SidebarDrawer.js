import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from "@mui/icons-material/Close";

function SidebarDrawer(props) {
  const [open, setOpen] = useState(false);
  const { cityData = null } = props;
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [value, setValue] = useState("backlog");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const DrawerList = (
    <Box
      sx={{ minWidth: 250, marginTop: "10px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 5px",
        }}
      >
        <div>
          <Link to="/" style={{ color: "black" }}>
            <Tooltip title="Back to home page">
              <ArrowBackIcon style={{ marginLeft: "5px" }} />
            </Tooltip>
          </Link>
        </div>
        <div>
          <CloseIcon onClick={toggleDrawer(false)} />
        </div>
      </div>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
        <Tab label={`Backlog (${cityData?.length || 0})`} value={"backlog"} />
        <Tab label={`Pending (0)`} value="pending" />
        <Tab label={`Final Sign-Off (0)`} value={"final_signoff"} />
      </Tabs>
      <List>
        {value === "backlog" &&
          cityData?.map((item) => (
            <ListItem
              key={item?.id}
              onClick={() => props?.handleCityClick(item)}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={item?.name} />
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Tooltip title="Open Sidebar">
          <FastRewindIcon />
        </Tooltip>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default memo(SidebarDrawer);
