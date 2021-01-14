import React, { useState } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events';
import { FormElement } from '../../Form/Forms';
moment.locale('en-GB');

const localizer = momentLocalizer(moment);



class EventsSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive:props.active,
      events,
    };
    this.setState = this.setState.bind(this)
  }

  handleSelect = ({ start, end }, title="no") => {

      this.setState({
        modalActive: true,
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
    return (<>
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
      <FormElement active={this.state.modalActive} setValue={this.setState} />
      </>
    );
  }
}

export default EventsSchedule;
