import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import './main-panel.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Notifications from 'material-ui-icons/Notifications';
import MailOutline from 'material-ui-icons/MailOutline';
import Settings from 'material-ui-icons/Settings';
import IconButton from 'material-ui/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from 'material-ui/Select';
import { MENU_NAV } from '../../data/menuNav';
import { DROPDOWN_BRANDS, DROPDOWN_REGIONS, DROPDOWN_STORES } from '../../data/dropdownData';

import SideBar from '../SideBar';
import AppRoutes from '../../AppRoutes';

const drawerWidth = 265;

const styles = theme => ({
  left: {
    backgroundColor: '#282828',
  },
  content: {
    // position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    
  },
  flex: {
    flex: 1,
  },
  buttonGroup: {
    right: 0,
    float: 'right',
    paddingLeft:0
  },
  dropdownContent: {
    marginLeft: 0,
    flex: 1,
    backgroundColor: 'red',
    marginRight: '25px',
    height: '64px'
  },
  dropdown: {
    marginLeft: 50,
    width: '20%',
    textAlign: 'center',
    marginTop: '15px',
    backgroundColor: 'salmon',
    padding: '1px 15px'
  },
  dropdownitem: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '5px'
  }
});

class MainPanel extends React.Component {
  
  state = {
    brands : [],
    selectedBrand:"",
    selectedRegion:"",
    selectedStore: "",
    regions: [],
    stores: []
  }

  componentDidMount() {

    this.setState({brands: DROPDOWN_BRANDS});
  }

  brandChangeHandler = e => {
    let val = e.target.value;
    let regions = DROPDOWN_REGIONS.filter(v => v.parent_id == val);
    console.log(regions);
    this.setState({regions, selectedBrand:val, stores:[]})
  }
  regionChangeHandler = e => {
    let val = e.target.value;
    let stores = DROPDOWN_STORES.filter(v => v.parent_id == val);
    console.log(stores);
    this.setState({stores, selectedRegion:val})
  }

  storeChangeHandler = e => {
    let val = e.target.value;
    this.setState({selectedStore:val})
  }
 
  render() {
    const { classes } = this.props;
    const {brands, regions, stores} = this.state;
    
    return (
      <Router basename={process.env.PUBLIC_URL}>

        <Grid container
              spacing={0}>

          <Grid item xs={12}>
            <AppBar position="static"
                    className={classes.content} style={{backgroundColor:'red'}}>
              <Toolbar className={classes.buttonGroup}>
                <div className={classes.dropdownContent}>
                <Select native 
                  value={this.state.selectedBrand}
                  className={classes.dropdown}
                  onChange={this.brandChangeHandler}
                >
                    <option value="" className={classes.dropdownitem}>All Brands</option>
                    {brands.map((b, i) => (
                      <option key={i} value={b.id} className={classes.dropdownitem}>{b.text}</option>
                    ))}
                </Select>
                <Select native value={this.state.selectedRegion} className={classes.dropdown} onChange={this.regionChangeHandler}>
                  <option value="" className={classes.dropdownitem}>All Regions</option>
                  {regions.map((b,i) => (
                    <option key={i} value={b.id} className={classes.dropdownitem}>{b.text}</option>
                  ))}
                </Select>
                <Select native value={this.state.selectedStore} className={classes.dropdown} onChange={this.storeChangeHandler}>
                  <option value="" className={classes.dropdownitem}>All Stores</option>
                  {stores.map((b, i) => (
                    <option key={i} value={b.id} className={classes.dropdownitem}>{b.text}</option>
                  ))}
                </Select>
                </div>
                <IconButton color="default">
                  <Notifications/>
                </IconButton>
                <IconButton color="default">
                  <MailOutline/>
                </IconButton>
                <IconButton color="default">
                  <Settings/>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid container
                direction={'row'}
                alignItems={'stretch'}
                className={classes.content}
                spacing={0}
                wrap={'nowrap'}>

            <SideBar menu={MENU_NAV}/>

            <Grid item xs={12}>
              <AppRoutes/>
            </Grid>

          </Grid>

        </Grid>

      </Router>
    );
  }
}

MainPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPanel);
