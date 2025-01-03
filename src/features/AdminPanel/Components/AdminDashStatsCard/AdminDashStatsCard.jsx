import React from "react";
import { User, GraduationCap, UserSquare2, BookOpen } from "lucide-react";

const AdminDashStatsCard = () => {
  const statisticsData = [
    {
      count: 44,
      title: "Student",
      icon: <GraduationCap size={50} className="text-white" />,
      bgColor: "bg-[#FF7B5C]",
    },
    {
      count: 10,
      title: "Parents",
      icon: <User size={50} className="text-white" />,
      bgColor: "bg-[#41CDC7]",
    },
    {
      count: 12,
      title: "Teacher",
      icon: <UserSquare2 size={50} className="text-white" />,
      bgColor: "bg-[#FF5C9B]",
    },
    {
      count: 35,
      title: "Subject",
      icon: <BookOpen size={50} className="text-white" />,
      bgColor: "bg-[#8B5CF6]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className={`${stat.bgColor} rounded shadow-md p-4 flex items-center justify-between`}
        >
          <div>
            <h2 className="text-3xl font-bold text-white">{stat.count}</h2>
            <p className="text-white mt-1">{stat.title}</p>
          </div>
          <div className="p-2">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashStatsCard;
