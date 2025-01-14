import React from "react";

const StudentTableActionButtons = ({ icon, color, size, onClick }) => {
  const iconSize =
    size === "small" ? "w-6 h-6 text-white" : "w-4 h-4 text-white";

  return (
    <button className={`p-2 ${color}`} onClick={onClick}>
      {React.cloneElement(icon, { className: iconSize })}
    </button>
  );
};

export default StudentTableActionButtons;
