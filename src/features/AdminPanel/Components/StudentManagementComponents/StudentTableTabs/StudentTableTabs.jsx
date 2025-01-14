import React from "react";
const StudentTableTabs = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 ${
      active ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-600"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default StudentTableTabs;
