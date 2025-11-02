import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import './DonutChart.css';

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const DonutChart = ({ data, height = 300 }) => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);

  const COLORS = {
    light: ['#a78bfa', '#60a5fa', '#34d399', '#f59e0b'],
    dark: ['#a78bfa', '#60a5fa', '#34d399', '#f59e0b'],
  };

  const colors = isDark ? COLORS.dark : COLORS.light;

  // Calculate total and percentage
  const total = data.reduce((sum, item) => sum + (typeof item.value === 'number' ? item.value : 0), 0);
  const displayPercentage = activeIndex !== null
    ? ((data[activeIndex]?.value / total) * 100).toFixed(1)
    : ((data[0]?.value / total) * 100).toFixed(1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="donut-chart-wrapper">
      {/* Chart Section */}
      <div className="donut-chart-section">
        <div className="donut-chart-container">
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
                startAngle={90}
                endAngle={450}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                animationDuration={500}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                    style={{ cursor: 'pointer', transition: 'opacity 0.2s' }}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center-label">
            <div className="donut-center-value">{displayPercentage}%</div>
            {activeIndex !== null && (
              <div className="donut-center-name">{data[activeIndex]?.name}</div>
            )}
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="donut-legend">
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className={`donut-legend-item ${activeIndex === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="donut-legend-color" style={{ backgroundColor: colors[index % colors.length] }}></div>
            <span className="donut-legend-label">{entry.name}</span>
            <span className="donut-legend-value">${typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;

