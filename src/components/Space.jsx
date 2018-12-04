import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import FullCalendar from './FullCalendar';
import '../style/venue.css';

class Space extends Component {
  render () {
    return (
      <div>
        <Row gutter={8} className="pv-venue-title">
          <h1> Texas T-Bone North </h1>
        </Row>
        <Row gutter={8}>
          <Col spand={24}>
            <Carousel className="pv-venue-carousel">
              <div><img src="Texas_T-Bone-North_room.jpeg" /></div>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={8}>
          <p>Some filter options go here</p>
        </Row>
        <Row gutter={8}>
          <p>The space description goes here</p>
        </Row>
        <Row gutter={8}>
          <FullCalendar />
        </Row>
      </div>
    )
  }
}

export default Space;