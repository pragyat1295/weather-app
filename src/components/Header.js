import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import classes from "./components.module.css";

function Header() {

  return (
    <div className={classes.headerContainer}>
      <div className={classes.center}>
        <button style={{background: 'none', color: 'white'}} >
          {" "}
          <MenuIcon />{" "}
        </button>
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
