import React from "react";
import NavigationNotification from "../NavigationNotification/NavigationNotification";
import TopHeaderUserProfile from "../TopHeaderUserProfile/TopHeaderUserProfile";

function TopHeader({ Outlet }) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <NavigationNotification />
            <TopHeaderUserProfile />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default TopHeader;
