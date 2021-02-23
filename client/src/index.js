import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';

import App from './components/App';
import usHist1302 from './components/usHist1302';
import usHist1301 from './components/usHist1301';
import usGov2305 from './components/usGov2305';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/usHist1302" component={usHist1302} />
      <Route path="/usHist1301" component={usHist1301} />
      <Route path="/usGov2305" component={usGov2305} />

    </div>
  </Router>,
  document.getElementById('root')
);


