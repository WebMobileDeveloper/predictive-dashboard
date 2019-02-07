import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import './footer-nav.css';
import { STAGES } from '../../../data/stages';

export const FooterNav = ({ linkTo }) => {
  return (
    <Grid container
          spacing={0}
          justify={'center'}
          alignItems={'center'}
          alignContent={'space-around'}
          className={'footerBlock'}>

      {STAGES.map((nav, idx) =>
        <Grid key={idx} item xs={2}>
          <NavLink to={`${linkTo}/${nav.key}`}
                   className={'footerBlock__nav'}
                   activeClassName={'footerBlock__nav-active'}>
            {nav.value}
          </NavLink>
        </Grid>,
      )}

    </Grid>
  );
};

FooterNav.propTypes = {
  linkTo: PropTypes.string.isRequired,
};
