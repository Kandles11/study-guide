import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './index.css';

import App from './components/App';
import usHist1302 from './components/usHist1302';
import usHist1301 from './components/usHist1301';
import usGov2305 from './components/usGov2305';
import apChemistry from './components/apChemistry';
import econ2301 from './components/econ2301';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/usHist1302" component={usHist1302} />
      <Route path="/usHist1301" component={usHist1301} />
      <Route path="/usGov2305" component={usGov2305} />
      <Route path="/apChemistry" component={apChemistry} />
      <Route path="/apChemistry" component={apChemistry} />
      <Route path="/econ2301" component={econ2301} />

    </div>
  </Router>,
  document.getElementById('root')
);


