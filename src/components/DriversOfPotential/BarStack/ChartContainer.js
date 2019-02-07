import React from 'react';
import * as Recharts from 'recharts';
import { withRouter } from 'react-router';

import { percentFormatter } from '../../shared/utils/NumberFormatter';
import { getFullPotentialData } from '../../HOC';

const { BarChart, XAxis, YAxis, Bar, LabelList, Tooltip, Legend } = Recharts;

const Chart = ({ data, total }) => {
  const colors = ['red', 'black', 'grey'];
  const fields = Object.keys(data[0]).filter(item => item !== 'title');

  return (
    <BarChart data={data}
              layout="vertical"
              barSize={50}
              width={1200} height={total ? 110 : 300}
              margin={{ top: 10, right: 40, left: 120, bottom: 10 }}>

      <XAxis type="number" hide/>

      <YAxis type="category" dataKey="title"/>

      <Tooltip/>

      {total ? <Legend/> : null}

      {fields.map((field, idx) => {
        return (
          <Bar key={idx} dataKey={field} stackId="a1" fill={colors[idx]}>
            <LabelList dataKey={field} fill="white" formatter={percentFormatter}/>
          </Bar>
        );
      })}

    </BarChart>
  );
};

export default withRouter(getFullPotentialData(Chart));
