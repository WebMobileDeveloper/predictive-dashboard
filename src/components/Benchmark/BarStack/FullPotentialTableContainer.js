import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';

import { currencyFormatter0Digits } from '../../shared/utils/NumberFormatter';
import { getData } from '../../HOC';

import COLORS from '../../../constants/colors';

const styles = theme => ({
  tableWrapper: {
    marginRight: 40,
  },
  table: {
    width: '100%',
    color: COLORS.darkgrey,
    whiteSpace: 'nowrap',
  },
  th: {
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    padding: '0 20px 0 20px',
    borderBottom: '17px solid white',
  },
  td: {
    width: '16%',
    height: 50,
    textAlign: 'center',
    padding: '0 20px 0 20px',
    borderBottom: '17px solid white',
    backgroundColor: '#f2f2f2',
  },
  tdTitle: {
    width: '20%',
    textAlign: 'left',
    backgroundColor: 'inherit',
  },
});

const Table = ({ data, classes }) => {
  let potential = data.potential;
  let rating = data.rating;

  return (
    <div className={classes.tableWrapper}>
      <table cellSpacing={0} className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}/>
            <th className={classes.th}>Labor Allocation</th>
            <th className={classes.th}>Shelf Availability</th>
            <th className={classes.th}>Promotional Execution</th>
            <th className={classes.th}>Omnichannel</th>
            <th className={classes.th}>Overall</th>
          </tr>
        </thead>
        <tbody>
          <tr key={0}>
            <td className={[classes.td, classes.tdTitle].join(' ')} style={{ minWidth: 172 }}> {/* style implementation is not correct */}
              Potential
            </td>
            <td className={classes.td} style={{ color: getColor(rating.laborAllocation) }}>
              {currencyFormatter0Digits(potential.laborAllocation)}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.shelfAvailability) }}>
              {currencyFormatter0Digits(potential.shelfAvailability)}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.promotionalExecution) }}>
              {currencyFormatter0Digits(potential.promotionalExecution)}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.omnichannel) }}>
              {currencyFormatter0Digits(potential.omnichannel)}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.overall) }}>
              {currencyFormatter0Digits(potential.overall)}
            </td>
          </tr>
          <tr key={1}>
            <td className={[classes.td, classes.tdTitle].join(' ')}>
              Rating
            </td>
            <td className={classes.td} style={{ color: getColor(rating.laborAllocation) }}>
              {rating.laborAllocation}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.shelfAvailability) }}>
              {rating.shelfAvailability}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.promotionalExecution) }}>
              {rating.promotionalExecution}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.omnichannel) }}>
              {rating.omnichannel}
            </td>
            <td className={classes.td} style={{ color: getColor(rating.overall) }}>
              {rating.overall}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function getColor(value) {
  return value < 5
    ? COLORS.red
    : value < 8
      ? COLORS.orange
      : COLORS.green
}

export default withRouter(withStyles(styles)(getData(Table)));
