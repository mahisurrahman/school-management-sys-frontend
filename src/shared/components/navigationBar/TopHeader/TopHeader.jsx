import React from "react";
import NavigationNotification from "../NavigationNotification/NavigationNotification";
import TopHeaderUserProfile from "../TopHeaderUserProfile/TopHeaderUserProfile";

function TopHeader() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-md">
        <div className="flex items-center justify-between px-6 py-1">
          <h1 className="text-xl font-semibold">
            Admin Panel
          </h1>
          <div className="flex items-center space-x-4">
            <NavigationNotification />
            <TopHeaderUserProfile />
          </div>
        </div>
      </header>
    </div>
  );
}

export default TopHeader;
