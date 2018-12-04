import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Layout, Breadcrumb } from 'antd';
const { Footer, Content } = Layout;

import Home from './Home';
import Venue from './Venue';
import Space from './Space';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>

        <hr />
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              <Route exact path="/" component={Home} />
              <Route path="/venue/:id" component={Venue} />
              <Route path="/space/:id" component={Space} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Perfect Venue ©2018 Created by Nima Sepehr
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

/*
      <Route path="/venue/:id"  component={Venue} />
      <Route component={NoMatch} />
      */