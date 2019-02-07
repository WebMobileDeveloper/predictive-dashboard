import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'core-js/es6/map';
import 'core-js/es6/set';

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);

registerServiceWorker();
