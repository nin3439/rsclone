import { Sidebar } from './components/Sidebar/Sidebar';
import { WidgetProps } from './Widgets.types';
import classes from './Widgets.module.css';

export const Widgets = ({date, changeDate} : WidgetProps) => {
  return (
    <div className={classes.widgets}>
      <Sidebar date={date} changeDate={changeDate} />
    </div>
  );
};
