import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminStudentAttendanceGraph = () => {
  const data = [
    { class: "One", present: 35, absent: 5 },
    { class: "Two", present: 40, absent: 3 },
    { class: "Four", present: 42, absent: 4 },
    { class: "Five", present: 36, absent: 6 },
    { class: "Six", present: 16, absent: 26},
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="font-semibold">Class {label}</p>
          <p className="text-blue-500">Present: {payload[0].value}</p>
          <p className="text-pink-500">Absent: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-5 md:mt-0 w-full h-full bg-white rounded shadow-sm md:p-6">
      <div className="mb-6 pt-4 md:pt-0 ml-4 md:ml-0">
        <h2 className="text-xl font-semibold mb-2">
          Students Today's Attendance
        </h2>
        <p className="text-sm text-gray-500">
          Click the columns to view this month student attendance
        </p>
      </div>
      <div className="-ml-6 md:-ml-0 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="class" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="present" fill="#3B82F6" />
            <Bar dataKey="absent" fill="#EC4899" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminStudentAttendanceGraph;
