import React, { memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import "./componentStyles.css";

function Header() {
  
  return (
    <div className="headerContainer">
      <div className="center">
        <div>
          {" "}
          <MenuIcon />{" "}
        </div>
        <div>Header</div>
      </div>

      <div className="center">
        <div>
          <LanguageIcon />
        </div>
        <div className="center">
          <PersonIcon />
          <div>User</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
