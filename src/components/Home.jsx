import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Footer, Content } = Layout;

import VenueGallery from './VenueGallery';

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <h1 style={{ textAlign: 'center' }}>Perfect Venue</h1>
              <VenueGallery />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Perfect Venue ©2018 Created by Nima Sepehr
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default Home;