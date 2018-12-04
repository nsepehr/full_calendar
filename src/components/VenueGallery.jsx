import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

class VenueGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3,
      redirectTo: false
    }
  }

  cardClicked(id) {
    console.log(`Venue id ${id} clicked`);
    this.setState(() => {
      return {
        redirectTo: true
      }
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to="/venue/1234" />
    }
    const cols = [];
    for (let i = 0; i < this.state.columnCount; i++) {
      cols.push(
        <Col key={i.toString()} span={ 24 / this.state.columnCount }>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="Texas_T-Bone" src="venue/Texas_T-Bone.jpeg" />}
            onClick={() => this.cardClicked("5c01e10cde235c15017e8911")}
          >
            <Meta
              title="Texas T-Bone"
              description="Steak House Resturant"
            />
          </Card>
        </Col>
      );
    }
    return (
      <Row gutter={16}>
        { cols }
      </Row>
    )
  }
}

export default VenueGallery;