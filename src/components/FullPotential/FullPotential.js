import React from 'react';
import Grid from 'material-ui/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from 'material-ui/Typography';
import { HeadPage, FooterNav, SegmentHeader, AlertBox } from '../shared';
import ChartContainer from './BarStack/ChartContainer';
import { Route } from 'react-router-dom';

import SvgIcon from 'material-ui/SvgIcon';

const DropUpIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/>
  </SvgIcon>
);

const DropDownIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/>
  </SvgIcon>
);

const FullPotential = (props) => {
 
  const classes = {
    card: {
      minWidth: 275,
      backgroundColor: '#fff',
      padding: '10px 25px',
      boxShadow: 'none',
      marginTop:5
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginTop: 3,
      color: '#000'
    },
    headline: {
      marginBottom: 10,
      color: '#000',
      fontWeight:'bold'
    }
  };
  return(
    <div style={{paddingLeft: '50px', paddingTop: '20px'}}>
      <Grid container  spacing={0} >
        <Grid item xs={3} style={classes.card}>
          {/* <Card style={classes.card}>
            <CardContent> */}
              <Typography style={classes.headline} variant="headline" component="h5">
                Store Overview
              </Typography>
              <Typography style={classes.pos}>
                Store Tears in Business
              </Typography>
              <Typography style={classes.pos}>
                Manger Tenure&nbsp;&nbsp;&nbsp;2.5 years
              </Typography>
              <Typography style={classes.pos}>
                Number of Days&nbsp;&nbsp;&nbsp;9
              </Typography>
              <Typography style={classes.pos}>
                Location Type&nbsp;&nbsp;&nbsp;Urban
              </Typography>
            {/* </CardContent>
          </Card> */}
        </Grid>

        <Grid item xs={3} style={classes.card}>
          {/* <Card style={classes.card}>
            <CardContent> */}
              <Typography style={classes.headline} variant="headline" component="h5">
                Post Metrics
              </Typography>
              <Typography style={classes.pos}>
                Current Level&nbsp;&nbsp;&nbsp;Silver
              </Typography>
              <Typography style={classes.pos}>
                Current Score&nbsp;&nbsp;&nbsp;78.9
              </Typography>
            {/* </CardContent>
          </Card> */}
        </Grid>

        <Grid item xs={3} style={classes.card}>
          {/* <Card style={classes.card}>
            <CardContent> */}
              <Typography style={classes.headline} variant="headline" component="h5">
                Peer Store Metrics
              </Typography>
              <Typography style={classes.pos}>
                Boss Count&nbsp;&nbsp;&nbsp;<DropUpIcon style={{color: 'green'}}/>1.5%
              </Typography>
              <Typography style={classes.pos}>
                Phone Conversion&nbsp;&nbsp;&nbsp;<DropUpIcon style={{color: 'green'}}/>1.7%
              </Typography>
              <Typography style={classes.pos}>
                Matchback&nbsp;&nbsp;&nbsp;<DropDownIcon style={{color: 'red'}}/>2%
              </Typography>
            {/* </CardContent>
          </Card> */}
        </Grid>
      </Grid>
      
      <Grid container
            spacing={0}
            
            style={{ paddingBottom: 10, marginTop:20 }}>
        {/* <Card style={classes.card}>
          <CardContent style={{padding: '0 20px'}}> */}
            <Grid item xs={12} style={classes.card}>
              <Typography style={classes.headline} variant="headline" component="h5">
                Scorecard
              </Typography>
              <Typography style={classes.pos} style={{color: 'red', fontSize: '16px', fontWeight: 'bold'}}>
                Boss Count
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Route exact path={`/FullPotential/period/:stage`} render={() => <ChartContainer dataCategory="fullPotential"/>}/>
            </Grid>
          {/* </CardContent>
        </Card> */}

        {/* <Card style={classes.card}>
          <CardContent style={{padding: '0 20px'}}> */}
            <Grid item xs={12} style={classes.card}>
              <Typography style={classes.pos} style={{color: 'red', fontSize: '16px', fontWeight: 'bold'}}>
                Phone Conversion
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Route exact path={`/FullPotential/period/:stage`} render={() => <ChartContainer dataCategory="fullPotential"/>}/>
            </Grid>
          {/* </CardContent>
        </Card> */}

        {/* <Card style={classes.card}>
          <CardContent style={{padding: '0 20px'}}> */}
            <Grid item xs={12} style={classes.card}>
              <Typography style={classes.pos} style={{color: 'red', fontSize: '16px', fontWeight: 'bold'}}>
                Matchback
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Route exact path={`/FullPotential/period/:stage`} render={() => <ChartContainer dataCategory="fullPotential"/>}/>
            </Grid>
          {/* </CardContent>
        </Card> */}
      </Grid>
    </div>
  )
}

export default FullPotential;
