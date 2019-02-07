import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';

import { currencyFormatterAsIs } from '../../shared/utils/NumberFormatter';
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
    height: 50,
    textAlign: 'center',
    padding: '0 20px 0 20px',
    borderBottom: '17px solid white',
    backgroundColor: '#f2f2f2',
  },
  tdTitle: {
    textAlign: 'left',
    backgroundColor: 'inherit',
  },
  cellCustomerPotential: {
    borderRight: '17px solid white',
  },
  tdCustomerPotential: {
    width: '100%',
    // The following we need to fill background in percents
    position: 'relative',
  },
  spanCustomerPotential: {
    // The following we need to fill background in percents
    position: 'absolute',
    top: 14,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  divCustomerPotential: {
    // The following we need to fill background in percents
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'grey',
  },
});

const Table = ({ data, classes }) => {
  let id = -1;
  let rows = data.data.map(row => {
    id += 1;
    return { id, ...row };
  });

  let colors = data.colors;

  return (
    <div className={classes.tableWrapper}>
      <table cellSpacing={0} className={classes.table}>
        <thead>
          <tr>
            <th className={classes.th}/>
            <th className={[classes.th, classes.cellCustomerPotential].join(' ')}>Customer Potential</th>
            <th className={classes.th}>Previous Execution</th>
            <th className={classes.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={row.id}>
              <td className={[classes.td, classes.tdTitle].join(' ')}>
                {row.title}
              </td>
              <td className={[classes.td, classes.cellCustomerPotential, classes.tdCustomerPotential].join(' ')}>
                <span className={classes.spanCustomerPotential} style={{ color: colors[idx].customerPotential}}>
                  {currencyFormatterAsIs(row.customerPotential)}
                </span>
                <div className={classes.divCustomerPotential}
                     style={{ width: getPercents(data.customerPotentialMaxValue, row.customerPotential) }}/>
              </td>
              <td className={classes.td} style={{ color: colors[idx].previousExecution}}>
                {row.previousExecution}
              </td>
              <td className={classes.td}>
                {row.action}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getPercents(maxValue, currentValue) {
  return (currentValue * 100 / maxValue) + '%';
}

export default withRouter(withStyles(styles)(getData(Table)));
