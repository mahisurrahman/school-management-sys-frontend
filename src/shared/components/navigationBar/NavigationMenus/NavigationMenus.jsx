import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavigationMenus = ({
  menuItems,
  toggleSubMenu,
  isSidebarOpen,
  openSubMenus,
  activeMenu,
}) => {
  const [subMenuHeights, setSubMenuHeights] = useState({});
  const subMenuRefs = useRef({});

  useEffect(() => {
    const heights = {};
    menuItems.forEach((item) => {
      if (item.subMenus && subMenuRefs.current[item.id]) {
        heights[item.id] = subMenuRefs.current[item.id].scrollHeight;
      }
    });
    setSubMenuHeights(heights);
  }, [menuItems]);

  return (
    <nav
      className="flex-1 h-[50%] overflow-y-scroll text-sm"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {menuItems.map((item) => (
        <div key={item.id} className="group">
          {item.subMenus ? (
            <div>
              <button
                onClick={() => toggleSubMenu(item.id)}
                className={`w-full flex items-center p-3 hover:bg-gray-700/50 transition-all duration-300 ${
                  !isSidebarOpen ? "justify-center" : "justify-between"
                } ${activeMenu === item.id ? "bg-gray-700" : ""}`}
              >
                <div className="flex items-center">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span
                    className={`ml-3 transition-opacity duration-300 ${
                      !isSidebarOpen ? "opacity-0 w-0" : "opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
                {isSidebarOpen && (
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                      openSubMenus[item.id] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              <div
                ref={(el) => (subMenuRefs.current[item.id] = el)}
                className="bg-slate-900 overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openSubMenus[item.id]
                    ? `${subMenuHeights[item.id]}px`
                    : "0px",
                  opacity: openSubMenus[item.id] ? 1 : 0,
                  transform: `translateY(${
                    openSubMenus[item.id] ? "0" : "-10px"
                  })`,
                }}
              >
                {item.subMenus.map((subItem) => (
                  <Link
                    key={subItem.id}
                    to={subItem.path}
                    className={`flex items-center py-2 transition-all duration-200 
                      hover:bg-gray-700/50 group/subitem ${
                        isSidebarOpen ? "px-11" : "px-4 justify-center"
                      } ${activeMenu === subItem.id ? "bg-gray-700" : ""}`}
                  >
                    <div className="transition-transform duration-200 group-hover/subitem:scale-110">
                      {subItem.icon}
                    </div>
                    <span
                      className={`ml-2 transition-opacity duration-300 ${
                        !isSidebarOpen ? "opacity-0 w-0" : "opacity-100"
                      }`}
                    >
                      {subItem.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              to={item.path}
              className={`flex items-center p-3 hover:bg-gray-700/50 transition-all duration-300 ${
                !isSidebarOpen && "justify-center"
              } ${activeMenu === item.id ? "bg-gray-700" : ""}`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span
                className={`ml-3 transition-opacity duration-300 ${
                  !isSidebarOpen ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenus;
