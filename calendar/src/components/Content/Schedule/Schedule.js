import React from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events';

moment.locale('en-GB');

const localizer = momentLocalizer(moment);

class EventsSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events,
    };
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      });
  };

  render() {
    return (
      <Calendar
        localizer={localizer}
        events={this.state.events}
        startAccessor="start"
        defaultDate={moment().toDate()}
        endAccessor="end"
        selectable
        onSelectSlot={this.handleSelect}
        onSelectEvent={event => alert(event.title)}
      />
    );
  }
}

export default EventsSchedule;
