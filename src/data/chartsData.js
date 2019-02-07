import COLORS from '../constants/colors';

export default {
  fullPotential: {
    nextWeek: [
      { title: 'Forecast', base: 1586250 },
      { title: '2019_Goal', base: 1206346 },
      { title: 'Actual', base: 2211222 },
    ],
    nextMonth: [
      { title: 'Segment_1', base: 6345000, risk: 705000, opportunity: 1253333 },
      { title: 'Segment_2', base: 4885702, risk: 824859, opportunity: 951760 },
      { title: 'Segment_3', base: 8734326, risk: 1746865, opportunity: 1281034 },
      { title: 'Segment_4', base: 2187925, risk: 115154, opportunity: 598800 },
    ],
    nextQuarter: [
      { title: 'Segment_1', base: 19035000, risk: 2115000, opportunity: 3760000 },
      { title: 'Segment_2', base: 14412821, risk: 2433333, opportunity: 2807692 },
      { title: 'Segment_3', base: 25329545, risk: 5065909, opportunity: 3715000 },
      { title: 'Segment_4', base: 6673171, risk: 351220, opportunity: 1826341 },
    ],
    fullYear: [
      { title: 'Segment_1', base: 76140000, risk: 8460000, opportunity: 15040000 },
      { title: 'Segment_2', base: 56210000, risk: 9490000, opportunity: 10950000 },
      { title: 'Segment_3', base: 97518750, risk: 19503750, opportunity: 14302750 },
      { title: 'Segment_4', base: 27360000, risk: 1440000, opportunity: 7488000 },
    ],
  },
  driversOfPotential: {
    nextWeek: [
      { title: 'Inspection', base: 21, risk: 8, opportunity: 36 },
      { title: 'CFNA', base: 18, risk: 14, opportunity: 40},
      { title: 'Alignment', base: 33, risk: 19, opportunity: 35},
      { title: 'Suggested_Services', base: 30, risk: 21, opportunity: 20},
    ],
    nextMonth: [
      { title: 'Inspection', base: 19, risk: 12, opportunity: 34},
      { title: 'CFNA', base: 20, risk: 15, opportunity: 35},
      { title: 'Alignment', base: 29, risk: 19, opportunity: 34},
      { title: 'Suggested_Services', base: 31, risk: 18, opportunity: 21},
    ],
    nextQuarter: [
      { title: 'Inspection', base: 23, risk: 11, opportunity: 33},
      { title: 'CFNA', base: 16, risk: 16, opportunity: 36},
      { title: 'Alignment', base: 34, risk: 17, opportunity: 32},
      { title: 'Suggested_Services', base: 29, risk: 18, opportunity: 22},
    ],
    fullYear: [
      { title: 'Inspection', base: 20, risk: 9, opportunity: 34},
      { title: 'CFNA', base: 17, risk: 15, opportunity: 38},
      { title: 'Alignment', base: 34, risk: 18, opportunity: 33},
      { title: 'Suggested_Services', base: 29, risk: 22, opportunity: 18},
    ],
  },
  laborAsDriver: {
    nextWeek: [
      { title: 'Phone Conversion', Inspection: 21, CFNA: 8, Alignment: 36, suggested_services: 35 },
      { title: 'Walk-ins', Inspection: 18, CFNA: 14, Alignment: 40, suggested_services: 28 },
      { title: 'Site Visits', Inspection: 33, CFNA: 19, Alignment: 35, suggested_services: 13 },
      { title: 'Marketing/Media', Inspection: 30, CFNA: 21, Alignment: 20, suggested_services: 29 },
    ],
    nextMonth: [
      { title: 'Phone Conversion', Inspection: 11, CFNA: 55, Alignment: 32, suggested_services: 52 },
      { title: 'Walk-ins', Inspection: 25, CFNA: 42, Alignment: 22, suggested_services: 10 },
      { title: 'Site Visits', Inspection: 72, CFNA: 8, Alignment: 25, suggested_services: 13 },
      { title: 'Marketing/Media', Inspection: 22, CFNA: 38, Alignment: 43, suggested_services: 9 },
    ],
    nextQuarter: [
      { title: 'Phone Conversion', Inspection: 10, CFNA: 20, Alignment: 30, suggested_services: 40 },
      { title: 'Walk-ins', Inspection: 80, CFNA: 11, Alignment: 9, suggested_services: 15 },
      { title: 'Site Visits', Inspection: 25, CFNA: 36, Alignment: 52, suggested_services: 11 },
      { title: 'Marketing/Media', Inspection: 20, CFNA: 19, Alignment: 35, suggested_services: 34 },
    ],
    fullYear: [
      { title: 'Phone Conversion', Inspection: 82, CFNA: 22, Alignment: 11, suggested_services: 41 },
      { title: 'Walk-ins', Inspection: 22, CFNA: 32, Alignment: 24, suggested_services: 32 },
      { title: 'Site Visits', Inspection: 21, CFNA: 12, Alignment: 18, suggested_services: 32 },
      { title: 'Marketing/Media', Inspection: 10, CFNA: 30, Alignment: 20, suggested_services: 40 },
    ],
  },
  laborBudget: {
    nextWeek: [
      { title: 'Budget', Checkout: 89004, Floor: 138451, Operations: 148341, Services: 118673 },
    ],
    nextMonth: [
      { title: 'Budget', Checkout: 354403, Floor: 551294, Operations: 590672, Services: 472538 },
    ],
    nextQuarter: [
      { title: 'Budget', Checkout: 1045990, Floor: 1627095, Operations: 1743316, Services: 1394653 },
    ],
    fullYear: [
      { title: 'Budget', Checkout: 4105395, Floor: 6386170, Operations: 6842325, Services: 5473860 },
    ],
  },
  riskAndLostEvaluation: {
    nextWeek: { Risk: 8, Lost: 89 },
    nextMonth: { Risk: 9, Lost: 85 },
    nextQuarter: { Risk: 11, Lost: 80 },
    fullYear: { Risk: 14, Lost: 75 },
  },
  promotions: {
    customerPotentialMaxValue: 2500,
    data: [
      { title: '10% off  2 gallons+ coupon', customerPotential: 2045, previousExecution: 4, action: 'Check signage and staff awareness' },
      { title: 'BOGOHP on Store Brand', customerPotential: 1256, previousExecution: 8, action: '' },
      { title: 'Free Brush with every can of BBT paint', customerPotential: 506, previousExecution: 6, action: 'Check shelf execution' },
      { title: 'Intro half price on Dupron Spray Paint', customerPotential: 204, previousExecution: 'N/A', action: '' },
    ],
    colors: [
      { customerPotential: COLORS.orange, previousExecution: COLORS.red },
      { customerPotential: COLORS.orange, previousExecution: COLORS.green },
      { customerPotential: COLORS.orange, previousExecution: COLORS.orange },
      { customerPotential: COLORS.orange, previousExecution: COLORS.darkgrey },
    ],
  },
  analysis: {
    totalChartXAxisMaxValue: 80000,
    data: [
      { title: 'Paint', 'Labor Allocation': 14008.13, 'Shelf Availability': 3046.37, 'Promotional Execution': 3343.08, omnichannel: 171.76, other: 259.33 },
      { title: 'Furniture', 'Labor Allocation': 7729.81, 'Shelf Availability': 1594.54, 'Promotional Execution': 6385.66, omnichannel: 1087.09, other: 1495.86 },
      { title: 'Tools', 'Labor Allocation': 2418.12, 'Shelf Availability': 3071.10, 'Promotional Execution': 6399.20, omnichannel: 278.40, other: 1779.73 },
      { title: 'Hardware', 'Labor Allocation': 4187.73, 'Shelf Availability': 984.24, 'Promotional Execution': 2424.99, omnichannel: 2345.72, other: 166.64 },
      { title: 'Lumber', 'Labor Allocation': 3319.71, 'Shelf Availability': 1415.73, 'Promotional Execution': 1222.47, omnichannel: 874.05, other: 434.73 },
      { title: 'Outdoor', 'Labor Allocation': 3523.81, 'Shelf Availability': 910.48, 'Promotional Execution': 1022.72, omnichannel: 665.80, other: 155.23 },
    ],
  },
  benchmarkFullPotential: {
    potential: { laborAllocation: 14008.13, shelfAvailability: 3046.37, promotionalExecution: 3343.08, omnichannel: 171.76, overall: 20828.67 },
    rating: { laborAllocation: 3, shelfAvailability: 7, promotionalExecution: 5, omnichannel: 8, overall: 7 },
  },
  benchmarkMostEffectiveStores: [
    { title: 'Baton Rouge / #14062', laborAllocation: 9, shelfAvailability: 9, promotionalExecution: 8, omnichannel: 8, overall: 9 },
    { title: 'Toledo / #13406', laborAllocation: 8, shelfAvailability: 9, promotionalExecution: 8, omnichannel: 7, overall: 8 },
    { title: 'Grand Rapids / #15608', laborAllocation: 9, shelfAvailability: 7, promotionalExecution: 6, omnichannel: 9, overall: 8 },
    { title: 'Monroeville / #11256', laborAllocation: 8, shelfAvailability: 8, promotionalExecution: 9, omnichannel: 4, overall: 8 },
    { title: 'Medina / #10089', laborAllocation: 7, shelfAvailability: 9, promotionalExecution: 8, omnichannel: 6, overall: 8 },
  ],
  availability: {
    customerPotentialMaxValue: 3500,
    data: [
      { title: 'Tools', customerPotential: 3071.10, availability: 93, inventory: 102, daysOfSupply: 24, gmroi: 183, action: 'Review overall days of supply' },
      { title: 'Paint', customerPotential: 3046.37, availability: 91, inventory: 34, daysOfSupply: 45, gmroi: 160, action: 'Check key line availability' },
      { title: 'Furniture', customerPotential: 1594.54, availability: 94, inventory: 68, daysOfSupply: 48, gmroi: 152, action: '' },
      { title: 'Lumber', customerPotential: 1415.73, availability: 98, inventory: 28, daysOfSupply: 68, gmroi: 145, action: '' },
      { title: 'Hardware', customerPotential: 984.24, availability: 97, inventory: 126, daysOfSupply: 50, gmroi: 140, action: '' },
      { title: 'Outdoor', customerPotential: 910.48, availability: 96, inventory: 175, daysOfSupply: 82, gmroi: 94, action: 'Stock reduction plan' },
    ],
    colors: [
      { customerPotential: COLORS.orange, availability: COLORS.red, inventory: COLORS.green, daysOfSupply: COLORS.red, gmroi: COLORS.green },
      { customerPotential: COLORS.orange, availability: COLORS.red, inventory: COLORS.orange, daysOfSupply: COLORS.orange, gmroi: COLORS.orange },
      { customerPotential: COLORS.orange, availability: COLORS.orange, inventory: COLORS.green, daysOfSupply: COLORS.orange, gmroi: COLORS.orange },
      { customerPotential: COLORS.orange, availability: COLORS.orange, inventory: COLORS.orange, daysOfSupply: COLORS.orange, gmroi: COLORS.orange },
      { customerPotential: COLORS.orange, availability: COLORS.orange, inventory: COLORS.orange, daysOfSupply: COLORS.orange, gmroi: COLORS.orange },
      { customerPotential: COLORS.orange, availability: COLORS.orange, inventory: COLORS.red, daysOfSupply: COLORS.orange, gmroi: COLORS.red },
    ],
  },
};
