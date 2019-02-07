import React from 'react';
import Grid from 'material-ui/Grid';

import { HeadPage, FooterNav, SegmentHeader, AlertBox } from '../shared';
import ChartContainer from './BarStack/ChartContainer';
import { Route } from 'react-router-dom';

const DriversOfPotential = () => (
  <Grid container
        spacing={0}
        direction={'column'}
        style={{ paddingBottom: 90, paddingLeft: 20 }}>

    <HeadPage head={'Potential of your customers'}/>

    <AlertBox title={'ALL STORES'}/>

    <SegmentHeader title={'Full Potential'}/>
    <Grid item xs={12}>
      <Route exact path={`/DriversOfPotential/period/:stage`} render={() => <ChartContainer dataCategory="driversOfPotential" total={true}/>}/>
    </Grid>

    <SegmentHeader title={'By Customer Segment'}/>
    <Grid item xs={12}>
      <Route exact path={`/DriversOfPotential/period/:stage`} render={() => <ChartContainer dataCategory="driversOfPotential"/>}/>
    </Grid>

    <Grid item xs={12}>
      <FooterNav linkTo={'/DriversOfPotential/period'}/>
    </Grid>

  </Grid>
);

export default DriversOfPotential;
