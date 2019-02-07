import React from 'react';
import { withRouter } from 'react-router';
import { withStyles } from 'material-ui/styles';

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
  thead: {
    visibility: 'hidden',
    lineHeight: 0,
  },
  th: {
    fontWeight: 'normal',
    whiteSpace: 'nowrap',
    padding: '0 20px 0 20px',
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
  let id = -1;
  let rows = data.map(row => {
    id += 1;
    return { id, ...row };
  });

  return (
    <div className={classes.tableWrapper}>
      <table cellSpacing={0} className={classes.table}>
        <thead className={classes.thead}>
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
          {rows.map(row => (
            <tr key={row.id}>
              <td className={[classes.td, classes.tdTitle].join(' ')}>
                {row.title}
              </td>
              <td className={classes.td} style={{ color: getColor(row.laborAllocation) }}>
                {row.laborAllocation}
              </td>
              <td className={classes.td} style={{ color: getColor(row.shelfAvailability) }}>
                {row.shelfAvailability}
              </td>
              <td className={classes.td} style={{ color: getColor(row.promotionalExecution) }}>
                {row.promotionalExecution}
              </td>
              <td className={classes.td} style={{ color: getColor(row.omnichannel) }}>
                {row.omnichannel}
              </td>
              <td className={classes.td} style={{ color: getColor(row.overall) }}>
                {row.overall}
              </td>
            </tr>
          ))}
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
      : COLORS.green;
}

export default withRouter(withStyles(styles)(getData(Table)));
