import React, { useState, useEffect, useRef } from "react";
import {
  LayoutDashboard,
  FileText,
  Truck,
  ChevronRight,
  ChevronDown,
  Package,
  ClipboardList,
  Folder,
  BarChart,
  User
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BranchSelector from "../utils/BranchSelectore";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const scrollRef = useRef(null);

  // Load persisted dropdown and scroll position
  const [openDropdown, setOpenDropdown] = useState(
    () => localStorage.getItem("sidebarOpenDropdown") || null
  );

  useEffect(() => {
    const savedScroll = localStorage.getItem("sidebarScroll");
    if (scrollRef.current && savedScroll) {
      scrollRef.current.scrollTop = parseInt(savedScroll, 10);
    }
  }, []);

  // Persist scroll position on change
  const handleScroll = () => {
    if (scrollRef.current) {
      localStorage.setItem("sidebarScroll", scrollRef.current.scrollTop);
    }
  };

  const toggleDropdown = (name) => {
    const newValue = openDropdown === name ? null : name;
    setOpenDropdown(newValue);
    localStorage.setItem("sidebarOpenDropdown", newValue || "");
  };

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, type: "link", path: "/home" },
  {
    name: "PO & Dispatch Clearance",
    icon: FileText,
    type: "dropdown",
    children: [
      { name: "PO Updates", path: "/po1" },
      { name: "Dc Updates", path: "/clearance1" },
       
    ],
  },
  // {
  //   name: "Dispatch Clearance",
  //   icon: Truck,
  //   type: "dropdown",
  //   children: [
  //     { name: "Clearance 1", path: "/clearance1" },
  //     { name: "Clearance 2", path: "/clearance2" },
  //   ],
  // },
  {
    name: "STORES",
    icon: Package,
    type: "dropdown",
    children:[
      { name:"Store", path:"/store" },
      { name:"Store Holdings", path:"/store-holdings" },
      { name:"Store DC", path:"/store-dc" },
      { name:"Store Manager", path:"/store-manager" },
    ],
  },
  { name: "Manage Goods",
     icon: ClipboardList, 
     type: "dropdown",
     children:[
      { name:"Recive Goods", path:"/goods-received" },
      { name:"Goods Isuue", path:"/goods-issue" },
      { name:"Challan", path:"/challan" },
            { name:"GRN", path:"/grn" },
   
    ], },
  { name: "Project", icon: Folder, type: "link", path: "/projects" },
  { name: "Reports", icon: BarChart, type: "link", path: "/reports" },
  { name: "Users", icon: User, type: "link", path: "/users" },
];

  const user = {
    name: "Rajesh Kumar",
    mobile: "9876543210",
    role: "Admin",
    store: "Ahmedabad",
    storeCount: 5,
    stores:["jodhpur","vejlpur"],
    img:{},
  };
  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className={`bg-white border-r border-gray-200 box-shadow-1 pb-10
        transition-[width] duration-500 ease-in-out 
        overflow-y-auto h-full flex flex-col 
        ${isOpen ? "w-64" : "w-20"}`}
    >
        <div className="block md:hidden mx-5 mt-7"><BranchSelector stores={user.stores} defaultStore="gota" /></div>
      <ul className="mt-0 pt-4 space-y-2 relative flex-1">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            {/* Main Item */}
         {item.type === "link" ? (
  <Link to={item.path}>
    <div
      className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 ${
        location.pathname === item.path ? "bg-gray-200" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <item.icon size={isOpen ? 20 : 22} className="text-gray-700" />
        {isOpen && (
          <span className="transition-opacity duration-300 opacity-100">
            {item.name}
          </span>
        )}
        {!isOpen && (
          <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
            {item.name}
          </span>
        )}
      </div>
    </div>
  </Link>
) : (

            <div
  onClick={() => isOpen && toggleDropdown(item.name)}
  className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
>
<div className="flex items-center gap-3">
  <item.icon size={isOpen ? 20 : 28} className="text-gray-700" />
  {isOpen && (
    <span className="transition-opacity duration-300 opacity-100">
      {item.name}
    </span>
  )}
  {!isOpen && (
    <span className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-10">
      {item.name}
    </span>
  )}
</div>



  {isOpen && (
    <span
      className={`transform transition-transform duration-300 ${
        openDropdown === item.name ? "rotate-90" : ""
      }`}
    >
      {openDropdown === item.name ? (
        <ChevronDown size={16} className="text-gray-600" />
      ) : (
        <ChevronRight size={16} className="text-gray-600" />
      )}
    </span>
  )}
</div>

            )}

            {/* Dropdown children */}
            {item.type === "dropdown" && (
              <ul
                className={`ml-10 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === item.name && isOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.children.map((child, i) => (
                  <li key={i}>
                    <Link
                      to={child.path}
                      className={`block px-4 py-1 hover:bg-gray-100 ${
                        location.pathname === child.path ? "bg-gray-200" : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Sidebar;
