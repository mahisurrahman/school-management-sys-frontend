import React, { useState } from "react";

const AdminSiteStats = () => {
  const [data] = useState([
    { date: "1 Jan", visitors: 50 },
    { date: "2 Jan", visitors: 10 },
    { date: "3 Jan", visitors: 140 },
    { date: "4 Jan", visitors: 95 },
    { date: "5 Jan", visitors: 110 },
  ]);

  const chartHeight = 245;
  const chartWidth = 600;
  const padding = 50;

  const maxValue = Math.max(...data.map((d) => d.visitors));
  const getY = (value) => {
    const scaledValue = (value / maxValue) * (chartHeight - 2 * padding);
    return chartHeight - padding - scaledValue;
  };

  const getX = (index) => {
    return padding + (index * (chartWidth - 2 * padding)) / (data.length - 1);
  };

  return (
    <div className="hidden md:block bg-white rounded shadow-lg overflow-x-auto max-w-full">
      <div className="flex justify-between items-center mx-4 mt-2">
        <h2 className="text-md font-semibold">Site Stats</h2>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
          <span className="text-sm text-gray-600">Visitors</span>
        </div>
      </div>

      <svg
        width="95%"
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="block mx-auto"
      >
        {/* Y-axis labels and grid */}
        {Array.from({ length: 5 }, (_, i) => i).map((i) => {
          const value = (maxValue / 4) * i;
          return (
            <g key={i}>
              <text
                x={padding - 10}
                y={getY(value)}
                textAnchor="end"
                alignmentBaseline="middle"
                className="text-sm text-gray-500"
              >
                {value}
              </text>
              <line
                x1={padding}
                y1={getY(value)}
                x2={chartWidth - padding}
                y2={getY(value)}
                stroke="#e5e7eb"
                strokeWidth="1"
              />
            </g>
          );
        })}

        {/* X-axis labels */}
        {data.map((point, i) => (
          <text
            key={i}
            x={getX(i)}
            y={chartHeight - padding + 20}
            textAnchor="middle"
            className="text-sm text-gray-500"
          >
            {point.date}
          </text>
        ))}

        {/* Data points and lines */}
        <polyline
          fill="none"
          stroke="#EC4899"
          strokeWidth="2"
          points={data
            .map((point, i) => `${getX(i)},${getY(point.visitors)}`)
            .join(" ")}
        />

        {data.map((point, i) => (
          <g key={i}>
            <circle
              cx={getX(i)}
              cy={getY(point.visitors)}
              r="5"
              fill="#EC4899"
              className="hover:opacity-75"
            />
            <text
              x={getX(i)}
              y={getY(point.visitors) - 10}
              textAnchor="middle"
              className="text-xs text-gray-600"
            >
              {point.visitors}
            </text>
          </g>
        ))}

        {/* X-axis */}
        <line
          x1={padding}
          y1={chartHeight - padding}
          x2={chartWidth - padding}
          y2={chartHeight - padding}
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default AdminSiteStats;
