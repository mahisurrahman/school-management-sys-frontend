import React from "react";

function NavigationBarToggleLogo({toggleSidebar, isSidebarOpen}) {
  return (
    // {/* Sidebar Toggle Button */}
    <div className="p-4 border-t border-gray-700 bg-gray-800 text-white">
      <div className="flex items-center justify-between mb-4">
        {isSidebarOpen && (
          <h1 className="text-lg font-bold">
            School Management Software (SMS)
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-transform duration-300 ${
              isSidebarOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default NavigationBarToggleLogo;
