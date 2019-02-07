import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import { HeadPage, FooterNav, SegmentHeader, AlertBox } from '../shared';
import ChartContainer from './BarStack/ChartContainer';
import ChartContainer1 from './BarStack/ChartContainer_1';
import { Route } from 'react-router-dom';
import { DROPDOWN_LOCATIONS } from '../../data/dropdownData';

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
const data = {
  1: {
    chartData: [
      { title: 'Inspection', additional: 10, increase: 1651 },
      { title: 'CFNA', additional: 8, increase: 1000 },
      { title: 'Alignment', additional: 12, increase: 2047.50 },
      { title: 'Suggested_Services', additional: 18, increase: 3213 },
    ],
    detail: [
      {
        title: "Paid Search",
        chartData: [
          { title: "Planned Spend", value: 5000000 },
          { title: "Actual Spend", value: 5000000 },
        ]
      },
      {
        title: "Paid Search",
        chartData: [
          { title: "Planned Spend", value: 5000000 },
          { title: "Actual Spend", value: 5000000 },
        ]
      },
    ]
  },
  2: {
    chartData: [
      { title: 'Inspection', additional: 15, increase: 2751 },
      { title: 'CFNA', additional: 5, increase: 600 },
      { title: 'Alignment', additional: 12, increase: 2154 },
      { title: 'Suggested_Services', additional: 20, increase: 4104 },
    ]
  },
}
class Opportunity extends React.Component {

  state = {
    locations: [],
    selectedLocation: 1,
    // selectedRegion: "",
    // selectedStore: "",
    // regions: [],
    // stores: []
  }

  componentDidMount() {
    this.setState({
      locations: DROPDOWN_LOCATIONS
    });
  }

  locationChangeHandler = e => {
    let val = e.target.value;
    // this.setState({ regions, selectedBrand: val, stores: [] })
  }
  // regionChangeHandler = e => {
  //   let val = e.target.value;
  //   let stores = DROPDOWN_STORES.filter(v => v.parent_id == val);
  //   this.setState({ stores, selectedRegion: val })
  // }

  // storeChangeHandler = e => {
  //   let val = e.target.value;
  //   this.setState({ selectedStore: val })
  // }

  render() {
    const { classes } = this.props;
    const { locations } = this.state;
    const styles = {
      header: {
        display: "inline-block",
        // margin: "10px 0px"
      },

      headerTitle: {
        display: "inline-block",
      },
      dropdown: {
        border: "solid 1px black",
        width: "300px",
        marginLeft: "30px",
        display: "inline-block",
        background: "black",
      },

    }
    let total = 0;
    data[this.state.selectedLocation].chartData.map((item, i) => {
      total += item.increase;
    })
    return (
      <Grid container
        spacing={0}
        direction={'column'}
        style={{ paddingBottom: 90, paddingLeft: 20 }}>

        <Grid item xs={12}>
          <HeadPage head={'Support for Improving Store Performance'} style={styles.header} headStyle={styles.headerTitle} />
          <Select native
            value={this.state.selectedLocation}
            // className={classes.dropdown}
            onChange={this.locationChangeHandler}
            style={styles.dropdown}
          >
            {locations.map((item, i) =>
              <option key={i} value={item.id} >{item.region + ' / ' + item.postal}</option>
            )}
          </Select>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft: 48 }}>
          <Grid item xs={12}>
            <h2>Week of:<span style={{ color: "#2CAEE1", marginLeft: "20px" }}>February 4, 2019</span></h2>
            <Grid container spacing={0} >
              <Grid item xs={6}>
                <SegmentHeader title={'Areas of Focus'} />
                <table className="support-table" cellpadding="0" cellspacing="0">
                  <thead>
                    <tr>
                      <th width="100"></th>
                      <th></th>
                      <th className="center" width="70">Addtional Services</th>
                      <th className="center" width="150">Increase in Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data[this.state.selectedLocation].chartData.map((item, i) =>
                      <tr key={i}>
                        {i == 0 && <td rowSpan="4" className="vertical-top">Drivers</td>}
                        <td><ChartContainer data={[item]} /></td>
                        {/* <td><ChartContainer data={data[this.state.selectedLocation]} /></td> */}
                        <td className="center"><div className="gray-bg">{item.additional}</div></td>
                        <td className="center"><div className="gray-bg">${item.increase}</div></td>
                      </tr>
                    )}
                    <tr>
                      <td></td>
                      <td></td>
                      <td className="center">
                        <p>Total Change</p>
                      </td>
                      <td className="center">
                        <p>${total}</p>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td><p>Media&emsp; Spend</p></td>
                      <td colSpan="3" >
                        <p>Monthly Regional spend: $<span>500,000</span></p>
                        <p>Paid Search Spend effecting this store: $<span>100,000</span></p>
                      </td>
                    </tr>
                    <br />
                    <tr>
                      <td ><p>Current Promotion</p></td>
                      <td colSpan="3">
                        <p>Radio, Print, Paid Search</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </Grid>
              {/* <Grid item xs={3}><SegmentHeader title={'How to ...'} /></Grid> */}
            </Grid>
            {/* <Grid container spacing={0} style={{ marginTop: "50px" }}>
              <Grid item xs={12}>
                <h3>Boss Engagement and Conversion Support</h3>
              </Grid>
              <ChartContainer1 dataCategory="opportunity" />
              <table>
                <tbody>

                </tbody>
              </table>
            </Grid>
           */}
          </Grid>



        </Grid>
        {/* <AlertBox title={'ALL STORES'} /> */}

        {/* <SegmentHeader title={'Full Potential'} />
        <Grid item xs={12}>
          <Route exact path={`/DriversOfPotential/period/:stage`} render={() => <ChartContainer dataCategory="driversOfPotential" total={true} />} />
        </Grid>

        <SegmentHeader title={'By Customer Segment'} />
        <Grid item xs={12}>
          <Route exact path={`/DriversOfPotential/period/:stage`} render={() => <ChartContainer dataCategory="driversOfPotential" />} />
        </Grid>

        <Grid item xs={12}>
          <FooterNav linkTo={'/DriversOfPotential/period'} />
        </Grid> */}

      </Grid >);
  }
}

export default withStyles(styles)(Opportunity);
