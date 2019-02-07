import React from 'react';
import Grid from 'material-ui/Grid';

import { SegmentHeader } from '../shared/index';
import HeadPageSVG from './HeadPageSVG';
import AlertBoxSVG from './AlertBoxSVG';
import FullPotentialTableContainer from './BarStack/FullPotentialTableContainer';
import MostEffectiveStoresTableContainer from './BarStack/MostEffectiveStoresTableContainer';

const Benchmark = () => (
  <Grid container
        spacing={0}
        direction={'column'}>

    <HeadPageSVG/>

    <AlertBoxSVG/>

    <SegmentHeader title={'Full Potential'}/>
    <Grid item xs={12}>
      <FullPotentialTableContainer dataCategory="benchmarkFullPotential"/>
    </Grid>

    <SegmentHeader title={'Most Effective Benchmark Stores'}/>
    <Grid item xs={12}>
      <MostEffectiveStoresTableContainer dataCategory="benchmarkMostEffectiveStores"/>
    </Grid>

  </Grid>
);

export default Benchmark;
