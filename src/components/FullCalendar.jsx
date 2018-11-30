import React, { Component } from 'react';

// Full Calendar JS required files
import $ from 'jquery';
import 'moment/min/moment.min.js';
import 'fullcalendar';

class FullCalendar extends Component {
  constructor(props) {
    super(props);
    this.events = [
      {
        start: '2017-11-29',
        end: '2017-11-29',
        rendering: 'background',
        color: '#00FF00'
      }
    ]
  }

  componentDidMount() {
    $('#calendar').fullCalendar({
      // put your options and callbacks here
    })
  }
  
  render() {
    return (
      <div id='calendar'></div>
    )
  }
}

export default FullCalendar;
