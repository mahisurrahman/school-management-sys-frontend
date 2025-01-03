import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NavigationBarToggleLogo from "./NavigationBarToggleLogo/NavigationBarToggleLogo";
import NavigationBarAdminProfile from "./NavigationBarAdminProfile/NavigationBarAdminProfile";
import NavigationMenus from "./navigationMenus/NavigationMenus";
import { menuItems } from "../../utils/navMenus";

const NavigationBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubMenu = (menuId) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Find active menu based on current path
  const findActiveMenu = () => {
    const currentPath = location.pathname;
    let activeId = null;

    menuItems.forEach((item) => {
      if (item.path === currentPath) {
        activeId = item.id;
      }
      if (item.subMenus) {
        item.subMenus.forEach((subItem) => {
          if (subItem.path === currentPath) {
            activeId = subItem.id;
          }
        });
      }
    });

    return activeId;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          isSidebarOpen ? "w-56 md:w-64" : "w-16"
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
          activeMenu={findActiveMenu()}
        />
      </aside>
    </div>
  );
};

export default NavigationBar;
