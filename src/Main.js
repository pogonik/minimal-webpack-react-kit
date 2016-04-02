import React, { Component } from 'react';

import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';

import AppBar from 'material-ui/lib/app-bar';

export default class Main extends Component {

   render() {
      return (
         <div>
            <AppBar title="Test">
               <Link to="/page-1">Page 1</Link>
               <Link to="/page-2">Page 2</Link>
            </AppBar>
            <h1>Main page</h1>
            {this.props.children}
         </div>
      );
   }
}
