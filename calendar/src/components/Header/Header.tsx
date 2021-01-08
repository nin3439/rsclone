import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      Header
      <NavLink to="/day" className={classes.item}>
        Day
      </NavLink>
      <NavLink to="/week" className={classes.item}>
        Week
      </NavLink>
      <NavLink to="/month" className={classes.item}>
        Month
      </NavLink>
      <NavLink to="/year" className={classes.item}>
        Year
      </NavLink>
      <NavLink to="/schedule" className={classes.item}>
        Schedule
      </NavLink>
      <NavLink to="/fourDay" className={classes.item}>
        Four Day
      </NavLink>
    </div>
  );
};

export default Header;
