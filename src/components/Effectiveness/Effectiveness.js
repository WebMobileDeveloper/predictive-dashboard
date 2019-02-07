import React from 'react';
import Grid from 'material-ui/Grid';

import { HeadPage, FooterNav, SegmentHeader, AlertBox } from '../shared';
import LaborBudgetChartContainer from './BarStack/LaborBudgetChartContainer';
import FullPotentialChartContainer from './BarStack/FullPotentialChartContainer';
import LaborAsDriverChartContainer from './BarStack/LaborAsDriverChartContainer';
import { Route } from 'react-router-dom';
import data from '../../data/chartsData';

const Effectiveness = (props) => {
  let retrievedData;
  let dataCategory='riskAndLostEvaluation';

  switch (props.match.params.stage) {
    case 'nextWeek': retrievedData = data[dataCategory].nextWeek; break;
    case 'nextMonth': retrievedData = data[dataCategory].nextMonth; break;
    case 'nextQuarter': retrievedData = data[dataCategory].nextQuarter; break;
    case '2018': retrievedData = data[dataCategory].fullYear; break;
    default: retrievedData = data[dataCategory].nextWeek
  }

  return (
    <Grid container
          spacing={0}
          direction={'column'}
          style={{ paddingBottom: 90 }}>

      <HeadPage head={'Budget & Effectiveness at Delivering Potential'}/>

      <AlertBox title={'ALL STORES'}/>

      <SegmentHeader title={'Budget by Type/Function'}/>
      <Grid item xs={12}>
        <Route exact path={`/Effectiveness/period/:stage`} render={() => <LaborBudgetChartContainer dataCategory="laborBudget" total={true}/>}/>
      </Grid>

      <SegmentHeader title={'Budget/Plan Effectiveness'}/>
      <AlertBox title={`Risk: ${retrievedData.Risk}% of Missing Forecast`}/>
      <Grid item xs={12}>
        <Route exact path={`/Effectiveness/period/:stage`} render={() => <FullPotentialChartContainer dataCategory="fullPotential" total={true}/>}/>
      </Grid>

      <SegmentHeader title={'Lost Opportunity'}/>
      <AlertBox title={`Lost: ${retrievedData.Lost}% of Opportunity`}/>
      <Grid item xs={12}>
        <Route exact path={`/Effectiveness/period/:stage`} render={() => <LaborAsDriverChartContainer dataCategory="laborAsDriver" total={true}/>}/>
      </Grid>

      <Grid item xs={12}>
        <FooterNav linkTo={'/Effectiveness/period'}/>
      </Grid>

    </Grid>
  );
};

export default Effectiveness;
