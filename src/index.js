import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';

import Main from './Main';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={Main}>
         <IndexRoute component={Page1} />
         <Route path="/page-1" component={Page1} />
         <Route path="/page-2" component={Page2} />
      </Route>
   </Router>
   , document.getElementById('app')
);
