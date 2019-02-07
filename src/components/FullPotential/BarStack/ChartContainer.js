import React from 'react';
import * as Recharts from 'recharts';
import { withRouter } from 'react-router';

import { currencyFormatter, percentFormatter, } from '../../shared/utils/NumberFormatter';
import { getStoreData } from '../../HOC/getFullPotentialData';

import COLORS from '../../../constants/colors';

const { BarChart, XAxis, YAxis, Bar, LabelList, Tooltip, Legend, Cell } = Recharts;

const Pattern = ({ id, fill = COLORS.darkgrey, stroke = '#333' }) => {
  return (
    <pattern id={id} patternUnits="userSpaceOnUse" width="8" height="8">
      <rect width="8" height="8" fill={fill} />
      <path d="M 0,8 l 8,-8 M -2,2 l 4,-4 M 6,10 l 4,-4" strokeWidth="2" shapeRendering="auto" stroke={stroke} strokeLinecap="square" />
    </pattern>
  );
};

const AxisLabel = ({ axisType, x, y, width, height, stroke, children }) => { const isVert = axisType === 'yAxis'; const cx = isVert ? x : x + (width / 2); const cy = isVert ? (height / 2) + y : y + height + 10; const rot = isVert ? `270 ${cx} ${cy}` : 0; return (<text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}> {children} </text>); };

const Chart = ({ data, total, category, storeId }) => {
  const colors = ['red', 'black', 'grey'];
  const fields = Object.keys(data[0]).filter(item => item !== 'title');
  const emptyReturn = function () {
    return ""
  }
  return (
    <BarChart data={data}
      layout="vertical"
      barSize={20}
      width={1200} height={total ? 130 : 130}
      margin={{ top: 10, right: 40, left: 120, bottom: 10 }}>

      <defs><Pattern id="lines" /></defs>

      <XAxis type="number"
        axisLine={true}
        scale={'linear'}
        tickFormatter={(label => (''))}
        stroke="#efefef"
        style={{ fontSize: '14px' }} />

      <YAxis type="category" dataKey="title" interval={0} style={{ fontSize: '14px' }} />

      <Tooltip />

      {total ? <Legend /> : null}

      {fields.map((field, idx) => {
        return (
          <Bar key={idx} dataKey={field} stackId="a1" fill={colors[idx]}>
            <LabelList dataKey={field} fill="white" formatter={category == "fullPotential_1" ? percentFormatter : (category == "fullPotential_2" ? currencyFormatter : null)} style={{ fontSize: '14px' }} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Bar>
        );
      })}

    </BarChart>
  );
};

export default withRouter(getStoreData(Chart));
