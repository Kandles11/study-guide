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
import TestPage from './components/TestPage';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/testPage" component={TestPage} />
    </div>
  </Router>,
  document.getElementById('root')
);


