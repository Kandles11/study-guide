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

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/usHist1302" component={usHist1302} />
    </div>
  </Router>,
  document.getElementById('root')
);


