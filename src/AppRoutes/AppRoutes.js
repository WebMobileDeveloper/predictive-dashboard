import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import FullPotential from '../components/FullPotential';
import DriversOfPotential from '../components/DriversOfPotential';
import LaborAsADriver from '../components/LaborAsADriver';
import Effectiveness from '../components/Effectiveness';
import Opportunity from '../components/Opportunity';
import Promotions from '../components/Promotions';
import Analysis from '../components/Analysis';
import Benchmark from '../components/Benchmark';
import Availability from '../components/Availability';

const AppRoutes = () => (
  <Switch>
    <Redirect exact from={'/Scorecard'} to={'/FullPotential/period/nextWeek'}/>
    <Route exact path={'/FullPotential/period/:stage'} component={FullPotential}/>

    <Redirect exact from={'/Potential'} to={'/DriversOfPotential/period/nextWeek'}/>
    <Route exact path={'/DriversOfPotential/period/:stage'} component={DriversOfPotential}/>

    <Redirect exact from={'/PerformanceDrivers'} to={'/LaborAsADriver/period/nextWeek'}/>
    <Route exact path={'/LaborAsADriver/period/:stage'} component={LaborAsADriver}/>

    <Redirect exact from={'/Effectiveness'} to={'/Effectiveness/period/nextWeek'}/>
    <Route exact path={'/Effectiveness/period/:stage'} component={Effectiveness}/>

    <Route exact path={'/Support'} component={Opportunity}/>

    <Route exact path={'/Promotions'} component={Promotions}/>

    <Route exact path={'/Analysis'} component={Analysis}/>

    <Route exact path={'/Benchmark'} component={Benchmark}/>

    <Route exact path={'/Availability'} component={Availability}/>
  </Switch>
);

export default AppRoutes;
