import React from 'react';
import data from '../../data/chartsData';
import _ from 'lodash';
import { roundDecimal } from '../shared/utils/NumberUtils';

const getAnalysisData = (ChartComponent) => (
  (props) => {
    const { dataCategory, total } = props;

    let retrievedData = data[dataCategory];
    if (total) {
      retrievedData = getTotalByDepartmentData(retrievedData);
    }

    return <ChartComponent data={retrievedData} {...props}/>;
  }
);

function getTotalByDepartmentData(data) {
  return {
    totalChartXAxisMaxValue: data.totalChartXAxisMaxValue,
    data: [_.reduce(data.data, (result, value) => ({
      title: 'All Departments',
      'Labor Allocation': roundDecimal(result['Labor Allocation'] + value['Labor Allocation']),
      'Shelf Availability': roundDecimal(result['Shelf Availability'] + value['Shelf Availability']),
      'Promotional Execution': roundDecimal(result['Promotional Execution'] + value['Promotional Execution']),
      omnichannel: roundDecimal(result.omnichannel + value.omnichannel),
      other: roundDecimal(result.other + value.other),
    }))],
  };
}

export default getAnalysisData;
