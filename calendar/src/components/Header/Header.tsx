import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
const linksData = [
  { id: 1,
    path: 'day',
    name: 'Day',
  },
  { id: 2,
    path: 'week',
    name: 'Week',
  },
  { id: 3,
    path: 'month',
    name: 'Month',
  },
  { id: 4,
    path: 'year',
    name: 'Year',
  },
  { id: 5,
    path: 'schedule',
    name: 'Schedule',
  },
  { id: 6,
    path: 'fourDay',
    name: 'Four Day',
  }
]

// const links = linksData.map(element => {
//   return (
//     <NavLink to={`/${element.path}`} className={classes.item}>
//       {element.name}
//     </NavLink>
//   );

// })
export const Header = () => {
  return (
    <div className={classes.header}>
      Header
      <div>
      </div>

    </div>
  );
};
