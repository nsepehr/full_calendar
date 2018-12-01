import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header, Footer, Content } = Layout;

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
              Content
            </div>
          </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default Home;