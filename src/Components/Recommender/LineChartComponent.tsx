import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PrimaryColorLocal } from '../../Util/Theme';

function LineChartComponent() {
  const data = [
    { name: '', revenue: 260 },
    { name: '10', revenue: 560 },
    { name: '20', revenue: 320 },
    { name: '30', revenue: 790 },
    { name: '40', revenue: 670 },
    { name: '50', revenue: 820 },
    { name: '60', revenue: 440 },
    { name: '70', revenue: 550 },
    { name: '80', revenue: 590 },
    { name: '90', revenue: 770 },
    { name: '100', revenue: 660 },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        //height={600}
        width={100}
        data={data}
        margin={{
          top: 0,
          right: 20,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='4 1 2' stroke='#d8d2d2' />
        <XAxis dataKey='name' />
        <YAxis
          scale='linear'
          width={50}
          tick={{ strokeWidth: 0.5 }}
          unit='$'
          type='number'
          tickCount={70}
          //  minTickGap={10}

          dataKey='revenue'
        />
        <Tooltip separator=': $' />
        <Legend />
        <Line
          type='monotone'
          dot={false}
          dataKey='revenue'
          stroke={PrimaryColorLocal}
          activeDot={{ r: 8 }}
        />
        {/* <Line type='monotone' dataKey='uv' stroke='#82ca9d' /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartComponent;
