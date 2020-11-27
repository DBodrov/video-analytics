import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid} from 'recharts';
import {TCount} from '../use-summary-client';

type TChartProps = {
  counts?: TCount[];
};
export function IncidentsDailyChart(props: TChartProps) {
  const {counts} = props;
  return (
    <AreaChart
      width={250}
      height={250}
      data={counts}
      margin={{
        top: 10,
        right: 0,
        left: -25,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey="hour" hide/>
      <YAxis axisLine={false}/>
      <Area type="monotone" dataKey="incidents" stroke="var(--color-primary)" fill="var(--color-primary)" />
    </AreaChart>
  );
}
