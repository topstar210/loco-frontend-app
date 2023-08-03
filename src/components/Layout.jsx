import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleChangeSearch = val => {
    setSearch(val);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="flex">
      <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full md:w-[calc(100%-250px)]">
          <Header toggleSidebar={toggleSidebar} search={search} handleChangeSearch={handleChangeSearch} />
          <div>
            <Outlet context={[search]} />
          </div>
      </div>
    </div>
  );
};

export default Layout;
