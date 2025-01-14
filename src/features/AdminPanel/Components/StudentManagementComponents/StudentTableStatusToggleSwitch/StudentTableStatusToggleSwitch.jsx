import React from "react";

const StudentTableStatusToggleSwitch = ({ isOn, onToggle }) => (
  <button
    className={`w-12 h-6 rounded-full p-1 ${
      isOn ? "bg-teal-500" : "bg-gray-300"
    }`}
    onClick={onToggle}
  >
    <div
      className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
        isOn ? "translate-x-6" : ""
      }`}
    />
  </button>
);

export default StudentTableStatusToggleSwitch;