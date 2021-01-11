import React from "react";
import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");

const localizer = momentLocalizer(moment);

class App extends React.Component {
  constructor(props) {
    super(props)
    const now = new Date();
    const events = [
      {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2021, 0, 1),
        end: new Date(2021, 0, 2),
      },
      {
        id: 1,
        title: 'Long Event',
        start: new Date(2021, 0, 7),
        end: new Date(2021, 0, 10),
      },
      {
        id: 2,
        title: 'Right now Time Event',
        start: now,
        end: now,
      },
    ]
    this.state = {
      events
    };
  }
  componentDidMount() {
    //We will populate this function later
  }
  render() {
    return (
      <Calendar
        localizer={localizer}
        events={this.state.events}
        startAccessor="start"
        defaultDate={moment().toDate()}
        endAccessor="end"
      />
    )
  }
}

export default App;