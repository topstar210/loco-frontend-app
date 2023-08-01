import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex">
      <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full md:w-[calc(100%-250px)]">
          <Header toggleSidebar={toggleSidebar} />
          <div>
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default Layout;
