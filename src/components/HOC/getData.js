import React from 'react';
import data from '../../data/chartsData';

const getData = (ChartComponent) => (
  (props) => {
    return <ChartComponent data={data[props.dataCategory]} {...props}/>;
  }
);

export default getData;
