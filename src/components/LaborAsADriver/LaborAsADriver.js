import React from 'react';
import Grid from 'material-ui/Grid';

import { HeadPage, FooterNav, SegmentHeader, AlertBox } from '../shared';
import ChartContainer from './BarStack/ChartContainer';
import { Route } from 'react-router-dom';

const LaborAsADriver = () => (
  <Grid container
        spacing={0}
        direction={'column'}
        style={{ paddingBottom: 90, paddingLeft: 20 }}>

    <HeadPage head={'Drivers of Potential'}/>

    <AlertBox title={'ALL STORES'}/>

    <SegmentHeader title={'Drivers for all customers'}/>
    <Grid item xs={12}>
      <Route exact path={`/LaborAsADriver/period/:stage`} render={() => <ChartContainer dataCategory="laborAsDriver" total={true}/>}/>
    </Grid>

    <SegmentHeader title={'Drivers for each Customer Segment'}/>
    <Grid item xs={12}>
      <Route exact path={`/LaborAsADriver/period/:stage`} render={() => <ChartContainer dataCategory="laborAsDriver"/>}/>
    </Grid>

    <Grid item xs={12}>
      <FooterNav linkTo={'/LaborAsADriver/period'}/>
    </Grid>

  </Grid>
);

export default LaborAsADriver;
