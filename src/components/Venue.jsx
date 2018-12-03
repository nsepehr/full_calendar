import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Venue extends Component {
  render() {
    return (
      <div>
        <Row gutter={8}>
          <Col spand={24}>
            <img src="Texas_T-Bone.jpeg" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Venue;