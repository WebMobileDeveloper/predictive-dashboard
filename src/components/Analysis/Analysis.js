import React from 'react';
import Grid from 'material-ui/Grid';

import { SegmentHeader, AlertBox } from '../shared/index';
import HeadPageSVG from './HeadPageSVG';
import ChartContainer from './BarStack/ChartContainer';

const Analysis = () => (
  <Grid container
        spacing={0}
        direction={'column'}>

    <HeadPageSVG/>

    <AlertBox title={'Last 4 weeks'}/>

    <SegmentHeader title={'Full Potential'}/>
    <Grid item xs={12}>
      <ChartContainer dataCategory="analysis" total={true}/>
    </Grid>

    <SegmentHeader title={'By Department'}/>
    <Grid item xs={12}>
      <ChartContainer dataCategory="analysis"/>
    </Grid>

  </Grid>
);

export default Analysis;
