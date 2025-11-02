import React, { useState } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: isDark ? '#1a1d1f' : '#ffffff',
          border: `1px solid ${isDark ? '#272b30' : '#e4e7eb'}`,
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <p style={{ margin: 0, fontSize: '12px', color: isDark ? '#9a9fa5' : '#6f767e', marginBottom: '4px' }}>
          {label}
        </p>
        <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: isDark ? '#ffffff' : '#1a1d1f' }}>
          {payload[0].value}M
        </p>
      </div>
    );
  }
  return null;
};

const BarChart = ({ data, dataKey = 'value', xAxisKey = 'month', height = 300 }) => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const chartColors = {
    bar: isDark ? '#60a5fa' : '#3b82f6',
    barHover: isDark ? '#7dd3fc' : '#2563eb',
    grid: isDark ? '#272b30' : '#e4e7eb',
    text: isDark ? '#9a9fa5' : '#6f767e',
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        onMouseMove={(state) => {
          if (state.isTooltipActive) {
            setActiveIndex(state.activeTooltipIndex);
          } else {
            setActiveIndex(null);
          }
        }}
        onMouseLeave={() => setActiveIndex(null)}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} vertical={false} />
        <XAxis
          dataKey={xAxisKey}
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
          content={<CustomTooltip isDark={isDark} />}
          cursor={{ fill: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)', radius: [4, 4, 0, 0] }}
        />
        <Bar
          dataKey={dataKey}
          radius={[4, 4, 0, 0]}
          animationDuration={500}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={activeIndex === index ? chartColors.barHover : chartColors.bar}
              style={{
                transition: 'fill 0.2s ease',
                cursor: 'pointer',
              }}
            />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;

