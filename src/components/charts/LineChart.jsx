import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const LineChart = ({ data, height = 300 }) => {
  const { isDark } = useTheme();

  const chartColors = {
    current: isDark ? '#60a5fa' : '#3b82f6',
    previous: isDark ? '#1a1d1f' : '#e4e7eb',
    grid: isDark ? '#272b30' : '#e4e7eb',
    text: isDark ? '#9a9fa5' : '#6f767e',
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fill: chartColors.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: chartColors.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}M`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? '#1a1d1f' : '#ffffff',
            border: `1px solid ${chartColors.grid}`,
            borderRadius: '8px',
            fontSize: '12px',
          }}
        />
        <Legend
          wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
          iconType="circle"
          formatter={(value) => (
            <span style={{ color: chartColors.text }}>
              {value === 'current' ? 'Current Week: $58,211' : 'Previous Week: $68,768'}
            </span>
          )}
        />
        <Line
          type="monotone"
          dataKey="current"
          stroke={chartColors.current}
          strokeWidth={2}
          dot={false}
          name="current"
        />
        <Line
          type="monotone"
          dataKey="previous"
          stroke={chartColors.previous}
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
          name="previous"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;

