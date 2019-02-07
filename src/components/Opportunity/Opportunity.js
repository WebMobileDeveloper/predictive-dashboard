import React from 'react';
import { withStyles } from 'material-ui/styles';

import PageSVG from './PageSVG';

const styles = theme => ({
  divContainer: {
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  button: {
    width: 150,
    background: '#6fb353',
    color: 'white',
    textWeight: 'bold',
  },
});

const Opportunity = () => (
  <PageSVG/>
);

export default withStyles(styles)(Opportunity);
