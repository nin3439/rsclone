import React, { useState } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import i18n from '../../../i18ns';
import events from './events';
import { FormElement } from '../../Form/Forms';
import 'moment/locale/en-gb';
import 'moment/locale/ru';
import 'moment/locale/de';


// import 'moment/locale/fr';
moment.locale(`${i18n.language}`);

const localizer = momentLocalizer(moment);
// console.log(localizer)
export class EventsSchedule extends React.Component {
  constructor({ t }) {
    super(t);
    this.t = t
    this.state = {
      modalActive: false ,
      events,
    };
  }

  changeModalActive = () => {
    this.setState({modalActive:false})
  }

  handleSelect = ({ start, end, ...e }, title="no") => {
    debugger
    console.log(e)
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
        culture={i18n.language}
        startAccessor="start"
        defaultDate={moment().toDate()}
        endAccessor="end"
        selectable
        onSelectSlot={this.handleSelect}
        onSelectEvent={event => console.log(event)}
        messages={{
          next:this.t("Next"),
          previous: this.t("Back"),
          today: this.t("Today"),
          month: this.t("Month"),
          week: this.t("Week"),
          day: this.t("Day"),
          agenda:this.t("Agenda")
        }}
      />
      {this.state.modalActive && <FormElement changeModalActive={this.changeModalActive}/> }
      </>
    );
  }
}


