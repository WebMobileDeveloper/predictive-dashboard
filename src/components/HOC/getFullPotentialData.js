import React from 'react';
import data from '../../data/chartsData';
import _ from 'lodash';

const getFullPotentialData = (ChartComponent) => (
  (props) => {
    const { dataCategory, total, match } = props;

    let retrievedData;

    switch (match.params.stage) {
      case 'nextWeek':
        retrievedData = data[dataCategory].nextWeek;
        break;
      case 'nextMonth':
        retrievedData = data[dataCategory].nextMonth;
        break;
      case 'nextQuarter':
        retrievedData = data[dataCategory].nextQuarter;
        break;
      case '2018':
        retrievedData = data[dataCategory].fullYear;
        break;
      default:
        retrievedData = data[dataCategory].nextWeek;
    }

    if (total) {
      switch (dataCategory) {
        case 'fullPotential':
          retrievedData = [getTotalAllAllocationsData(retrievedData)];
          break;
        case 'driversOfPotential':
          retrievedData = [getTotalBySegmentData(retrievedData)];
          break;
        case 'laborAsDriver':
          retrievedData = [getTotalAllAllocationsData(retrievedData)];
          break;
        default:
      }
    }

    return <ChartComponent data={retrievedData} {...props}/>;
  }
);

function getTotalAllAllocationsData(data) {
  return _.reduce(data, (result, value) => ({
    title: 'All Segments',
    Inspection: result.Inspection + value.Inspection,
    CFNA: result.CFNA + value.CFNA,
    Alignment: result.Alignment + value.Alignment,
    suggested_services: result.suggested_services + value.suggested_services
  }));
}

// function getTotalBySegmentData(data) {
//   return _.reduce(data, (result, value, index) => ({
//     title: 'All Segments',
//     checkout: index === 0 ? result.checkout : (result.checkout * index + value.checkout) / (index + 1),
//     floor: index === 0 ? result.floor : (result.floor * index + value.floor) / (index + 1),
//     operations: index === 0 ? result.operations : (result.operations * index + value.operations) / (index + 1),
//     services: index === 0 ? result.services : (result.services * index + value.services) / (index + 1),
//   }));
// }

function getTotalBySegmentData(data) {
  return _.reduce(data, (result, value, index) => ({
    title: 'All Segments',
    base: index === 0 ? result.base : (result.base * index + value.base) / (index + 1),
    risk: index === 0 ? result.risk : (result.risk * index + value.risk) / (index + 1),
    opportunity: index === 0 ? result.opportunity : (result.opportunity * index + value.opportunity) / (index + 1),
  }));
}

export default getFullPotentialData;
