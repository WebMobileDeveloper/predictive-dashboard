import React from 'react';
import * as Recharts from 'recharts';

const { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, LabelList, Tooltip, Legend, Cell, Label, Text } = Recharts;

const Chart = ({ data }) => {
  // const colors = ['red', 'black', 'grey'];
  // const fields = Object.keys(data[0]).filter(item => item !== 'title');
  const fillColors = {
    'Inspection': "#4472C4",
    'CFNA': '#2CAEE1',
    'Alignment': '#8FAADC',
    'Suggested_Services': '#333F50'
  }
  console.log("=============", fillColors[data[0].title])
  console.log("========", data)

  return (
    <BarChart data={data}
      layout="vertical"
      width={300} height={50}
      barSize={50}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <XAxis type="number" domain={[dataMin => Math.min(0, dataMin), dataMax => Math.max(20, dataMax)]} hide />
      <YAxis type="category" dataKey="title" hide />
      <Tooltip style={{ visiblity: "visible" }} />
      <Bar dataKey="additional" style={{ visiblity: 'visible', fontSize: '8px' }} background={{ fill: '#eee' }} fill={fillColors[data[0].title]} >
        {/* <Label position="center" style={{ visiblity: "show" }} >{data[0].title}</Label> */}
        <LabelList dataKey="title" />
      </Bar>
    </BarChart>
  );
};

export default Chart;
