import { Sidebar } from './components/Sidebar/Sidebar';

import classes from "./Widgets.module.css";

export const Widgets = ({ date, changeDate } : {date: any, changeDate: any}) => {
  return (
    <div className={classes.item}>
      <Sidebar date={date} changeDate={changeDate} />
    </div>
  );
};
