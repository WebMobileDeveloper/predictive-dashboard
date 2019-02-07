import React from 'react';
import * as Recharts from 'recharts';
import { withRouter } from 'react-router';

import { currencyFormatter } from '../../shared/utils/NumberFormatter';
import { getAnalysisData } from '../../HOC';

import COLORS from '../../../constants/colors';

const { BarChart, XAxis, YAxis, Bar, LabelList, Tooltip, Legend } = Recharts;

const Pattern = ({ id, fill = COLORS.darkgrey, stroke = '#333' }) => {
  return (
    <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="8">
      <rect width="8" height="8" fill={fill}/>
      <path d="M 0,8 l 8,-8 M -2,2 l 4,-4 M 6,10 l 4,-4" strokeWidth="2" shapeRendering="auto" stroke={stroke} strokeLinecap="square"/>
    </pattern>
  );
};

const Chart = ({ data, total }) => {
  const colors = [COLORS.blue, COLORS.orange, COLORS.grey, COLORS.red];
  const fields = Object.keys(data.data[0]).filter(item => item !== 'title');

  return (
    <BarChart data={data.data}
              layout="vertical"
              barSize={50}
              width={1200} height={total ? 143 : 476}
              margin={{ top: 10, right: 40, left: 120, bottom: 10 }}>

      <defs><Pattern id="lines"/></defs>

      <XAxis type="number"
             axisLine={true}
             scale={'linear'}
             tickFormatter={currencyFormatter}
             domain={[0, total ? data.totalChartXAxisMaxValue : 'auto']}/>

      <YAxis type="category" dataKey="title"/>

      <Tooltip/>

      {total ? <Legend/> : null}

      {fields.map((field, idx) => {
        return (
          <Bar key={idx} dataKey={field} stackId="a1" fill={colors[idx]}>
            <LabelList dataKey={field} fill="white" formatter={currencyFormatter}/>
          </Bar>
        );
      })}

    </BarChart>
  );
};

export default withRouter(getAnalysisData(Chart));
