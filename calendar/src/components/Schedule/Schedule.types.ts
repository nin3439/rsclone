import { Moment } from 'moment'
export type EventsScheduleProps = {
    date: Moment | null,
    changeDate: (date: Moment | null) => void
}

export type Events = {
    start: object | string,
    end: object | string,
    title: string
}
  
