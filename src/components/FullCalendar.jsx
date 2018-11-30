import React, { Component } from 'react';

// Full Calendar JS required files
import $ from 'jquery';
import 'moment/min/moment.min.js';
import 'fullcalendar';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

class FullCalendar extends Component {
  constructor(props) {
    super(props);
    this.events = [
      {
        title: "First Event",
        start: '2018-11-29',
        end: '2018-11-29'
      }
    ]
  }

  componentDidMount() {
    this.calendar = $('#calendar').fullCalendar({
      // put your options and callbacks here
      events: this.events
    });
  }
  
  render() {
    return (
      <div id='calendar'></div>
    )
  }
}

export default FullCalendar;
