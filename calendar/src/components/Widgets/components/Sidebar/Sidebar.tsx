import React from 'react'
import { Calendar } from './components/Calendar/Calendar'
import Button from '@material-ui/core/Button'
import styles from './styles/Sidebar.module.sass'

export const Sidebar = ({ date, changeDate } : {date: any, changeDate: any}) => {
    return (
        <div className={styles.sidebar}>
            <Button className={styles.button} variant="contained" color="primary">
                Create
            </Button>
            <Calendar date={date} changeDate={changeDate} />
        </div>
    )
}
