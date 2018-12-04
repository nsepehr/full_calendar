import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Footer, Content } = Layout;

import VenueGallery from './VenueGallery';

class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Perfect Venue</h1>
        <VenueGallery />
      </div>
    )
  }
}

export default Home;