import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminIncomeExpenseGraph = () => {
  const data = [
    { month: "January", income: 1000, expense: 800 },
    { month: "February", income: 1200, expense: 1000 },
    { month: "March", income: 900, expense: 1100 },
    { month: "April", income: 1500, expense: 1300 },
    { month: "May", income: 2000, expense: 1800 },
    { month: "June", income: 45000, expense: 40000 },
    { month: "July", income: 55000, expense: 52000 },
    { month: "August", income: 35000, expense: 32000 },
    { month: "September", income: 15000, expense: 12000 },
    { month: "October", income: 5000, expense: 4000 },
    { month: "November", income: 2000, expense: 1500 },
    { month: "December", income: 1000, expense: 800 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="font-semibold">{label}</p>
          <p className="text-blue-500">Income: ${payload[0].value}</p>
          <p className="text-pink-500">Expense: ${payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="hidden md:block mt-5 w-full bg-white rounded shadow-sm p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2025 Accounts Summary</h2>
        <p className="text-sm text-gray-500">
          Click month income or expense column to view day wise account summary
        </p>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="income"
              stackId="1"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="expense"
              stackId="1"
              stroke="#EC4899"
              fill="#EC4899"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminIncomeExpenseGraph;
