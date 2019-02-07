import React, { Component } from 'react';
import MainPanel from './components/MainPanel';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const themeOrigin = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: green,
    error: red,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={themeOrigin}>
        <MainPanel/>
      </MuiThemeProvider>
    );
  }
}

export default App;
