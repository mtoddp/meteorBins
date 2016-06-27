import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './components/app'; 
import {Posts} from '../imports/collections/posts';

Meteor.startup(() => {
  // code to run on client at startup
  ReactDOM.render(<App/>, document.querySelector('.target')); 
});
