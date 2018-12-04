import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Row, Col, Carousel, Card } from 'antd';
const { Meta } = Card;

import '../style/venue.css';

class Venue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      redirectTo: false
    }
  }

  cardClicked(id) {
    console.log(`Space id ${id} clicked`);
    this.setState(() => {
      return {
        redirectTo: true
      }
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to="/space/1234" />
    }
    const cols = [];
    for (let i = 0; i < this.state.columnCount; i++) {
      cols.push(
        <Col key={i.toString()} span={ 24 / this.state.columnCount }>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Texas_T-Bone" src="Texas_T-Bone.jpeg" />}
            onClick={() => this.cardClicked("5c01e10cde235c15017e8911")}
          >
            <Meta
              title="Texas T-Bone"
              description="This room is awesome"
            />
          </Card>
        </Col>
      );
    }

    return (
      <div>
        <Row gutter={8} className="pv-venue-title">
          <h1> Texas T-Bone </h1>
        </Row>
        <Row gutter={8}>
          <Col spand={24}>
            <Carousel className="pv-venue-carousel">
              <div><img src="Texas_T-Bone.jpeg" /></div>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={8}>
          { cols }
        </Row>
        <Row gutter={8}>
          <p>We may put some descriptions here</p>
        </Row>
      </div>
    )
  }
}

export default Venue;