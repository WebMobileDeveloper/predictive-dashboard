import React from 'react';
import * as Recharts from 'recharts';
import { withRouter } from 'react-router';

import { currencyFormatter } from '../../shared/utils/NumberFormatter';
import { getFullPotentialData } from '../../HOC';

const { BarChart, XAxis, YAxis, Bar, LabelList, Tooltip, Legend } = Recharts;

const Chart = ({ data }) => {
  const colors = ['#212a58', '#50ade5', '#8194b2', '#2f394c'];
  const fields = Object.keys(data[0]).filter(item => item !== 'title');

  return (
    <BarChart data={data}
              layout="vertical"
              barSize={50}
              width={1200} height={143}
              margin={{ top: 10, right: 40, left: 120, bottom: 10 }}>

      <XAxis type="number"
             axisLine={false}
             scale={'linear'}
             tickFormatter={currencyFormatter}/>

      <YAxis type="category" dataKey="title"/>

      <Tooltip/>

      <Legend/>

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

export default withRouter(getFullPotentialData(Chart));
