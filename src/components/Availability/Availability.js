import React from 'react';
import Grid from 'material-ui/Grid';

import { SegmentHeader, AlertBox } from '../shared/index';
import HeadPageSVG from './HeadPageSVG';
import TableContainer from './BarStack/TableContainer';

const Availability = () => (
  <Grid container
        spacing={0}
        direction={'column'}>

    <HeadPageSVG/>

    <AlertBox title={'Last 4 weeks'}/>

    <SegmentHeader title={'Department'}/>
    <Grid item xs={12}>
      <TableContainer dataCategory="availability"/>
    </Grid>

  </Grid>
);

export default Availability;
