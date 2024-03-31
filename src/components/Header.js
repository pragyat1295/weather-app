import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    background: "#222",
    color: "#fff",
    padding: "10px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    borderRadius: "5px",
  },
  center: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.center}>
        <div>
          {" "}
          <MenuIcon />{" "}
        </div>
        <div>Header</div>
      </div>

      <div className={classes.center}>
        <div>
          <LanguageIcon />
        </div>
        <div className={classes.center}>
          <PersonIcon />
          <div>User</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
