// Layout.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavigationBarToggleLogo from "./NavigationBarToggleLogo/NavigationBarToggleLogo";
import NavigationBarAdminProfile from "./NavigationBarAdminProfile/NavigationBarAdminProfile";
import NavigationMenus from "./navigationMenus/NavigationMenus";
import TopHeader from "./TopHeader/TopHeader";
import { menuItems } from "../../utils/navMenus";

const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (menuId) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-slate-800 text-white transition-all duration-300 ease-in-out relative flex flex-col`}
      >
        <NavigationBarToggleLogo
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <NavigationBarAdminProfile isSidebarOpen={isSidebarOpen} />

        <NavigationMenus
          isSidebarOpen={isSidebarOpen}
          menuItems={menuItems}
          openSubMenus={openSubMenus}
          toggleSubMenu={toggleSubMenu}
        />
      </aside>

      {/* Main Content */}
      <TopHeader Outlet={Outlet} />
    </div>
  );
};

export default NavigationBar;
