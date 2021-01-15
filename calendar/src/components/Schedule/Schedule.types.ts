export type EventsScheduleProps = {
    date: Date,
    changeDate: (date: Date) => void
}
  
export type Events = {
    start: object | string,
    end: object | string,
    title: string
}