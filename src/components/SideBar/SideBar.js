import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import logo from './bstone_b_logo.png';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  drawer: {
    width: 240,
  },
  avatar: {
    width: 60,
    height: 60,
    margin: '10px auto',
    backgroundColor: '#fff'
  },
  userName: {
    display: 'flex',
    flexDirection: 'column',
  },
  hUserName: {
    marginBottom: '-20%',
  },
  hUserPosition: {
    marginTop: '-20%',
  },
});

class SideBar extends React.Component {

  state = { open: true };

  handleClick() {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { menu, classes, history } = this.props;

    return (
      <Drawer type="permanent"
        anchor="left" variant="permanent">

        <List className="sidebar"
          subheader={
            <ListSubheader className={classes.row}>
              <Avatar alt="user" src={logo} className={classes.avatar} />
            </ListSubheader>
          }>
          {menu.map((menuItem, i) =>

            i == 2 ?
              <div key={i}>
                <ListItem key={menuItem.id}
                  button
                  divider
                  onClick={() => { history.push(`/${menuItem.text.replace(new RegExp(' ', 'g'), '')}`); this.handleClick() }}
                  className={styles.listItem}>
                  <ListItemIcon>
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText inset primary={menuItem.text} className="textColor" />
                  {this.state.open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
                </ListItem>
                {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button >
                <ListItemText inset primary="Store #17264" />
              </ListItem>
              <ListItem button >
                <ListItemText inset primary="Store #17264" />
              </ListItem>
            </List>
          </Collapse> */}
              </div>
              : <ListItem key={i}
                button
                divider
                onClick={() => history.push(`/${menuItem.text.replace(new RegExp(' ', 'g'), '')}`)}
                className={styles.listItem}>
                <ListItemIcon>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText inset primary={menuItem.text} className="textColor" />
              </ListItem>
          )}
        </List>

      </Drawer>
    );
  };
}

SideBar.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default withRouter(withStyles(styles)(SideBar));
