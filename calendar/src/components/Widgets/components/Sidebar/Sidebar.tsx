import Button from '@material-ui/core/Button';
import React from 'react';
import { Calendar } from './components/Calendar/Calendar';
import { SidebarProps } from './Sidebar.types';
import styles from './styles/Sidebar.module.sass';

export const Sidebar = ({ date, changeDate } : SidebarProps) => {
    return (
        <div className={styles.sidebar}>
            <Button className={styles.button} variant="contained" color="primary">
                Create
            </Button>
            <Calendar date={date} changeDate={changeDate} />
        </div>
    )
}
