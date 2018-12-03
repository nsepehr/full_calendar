import React from 'react';
import { BrowserRouter as Router, Redirect, Link, Route } from "react-router-dom";

import Home from './Home';
import Venue from './Venue';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/content/1234">About</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/content/:id" component={Venue} />
      </div>
    </Router>
  );
}

export default App;

/*
      <Route path="/venue/:id"  component={Venue} />
      <Route component={NoMatch} />
      */