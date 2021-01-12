import React, { useState } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './events';
import { FormElement } from '../../Form/Forms';

moment.locale('en-GB');

const localizer = momentLocalizer(moment);

export class EventsSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalActive: false,
      events,
      holidays: [],
      isHolidaysSelected: false
    };
  }

  getHolidays = () => {
    const url = 'https://holidayapi.com/v1/holidays?pretty&key=7aa6b761-0c81-4bc6-9c4c-c38371475a9a&country=BY&year=2020';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.holidays.map((holiday) => {
          return this.setState({
            holidays: [
              ...this.state.holidays,
              {
                start: holiday.date,
                end: holiday.observed,
                title: holiday.name,
              },
            ]
          });
        })
      })
      .catch((error) => console.log(error))
  }

  componentDidMount() {
    this.getHolidays();
  }

  toggleHolidays = () => {
    this.setState({
      isHolidaysSelected: !this.state.isHolidaysSelected
    })
  }


  changeModalActive = () => {
    this.setState({ modalActive: false })
  }

  getAllEvents = () => {
    if (this.state.isHolidaysSelected) {
      return [...this.state.events, ...this.state.holidays];
    } else {
      return this.state.events;
    }
  }

  handleSelect = ({ start, end }, title = "no") => {
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
      <input type='checkbox' onChange={this.toggleHolidays} checked={this.state.isHolidaysSelected} />
      <span>Belarus's Holidays</span>
      <Calendar
        //culture
        style={{ height: '90vh' }}
        localizer={localizer}
        events={this.getAllEvents()}
        startAccessor="start"
        defaultDate={moment().toDate()}
        endAccessor="end"
        selectable
        onSelectSlot={this.handleSelect}
        onSelectEvent={event => console.log(event)}
        popup
        step={15}
        timeslots={8}
      />
      {this.state.modalActive && <FormElement changeModalActive={this.changeModalActive} />}
    </>
    );
  }
}










