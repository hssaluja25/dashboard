import React, { useState } from "react";
import LeftSidebar from "../molecules/LeftSidebar";
import RightSidebar from "../molecules/RightSidebar";
import Header from "../molecules/Header";
import Kpis from "../molecules/Kpis";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  return (
    <div className="dashboard">
      {sidebarOpen && (
        <LeftSidebar isOpen onClose={() => setSidebarOpen(false)} />
      )}

      {/* Show a dark backdrop for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="dashboard-main">
        <Header
          setSidebarOpen={setSidebarOpen}
          setRightSidebarOpen={setRightSidebarOpen}
        />

        <section className="dashboard-content">
          <p>eCommerce</p>
          <Kpis />
        </section>
      </main>

      {rightSidebarOpen && <RightSidebar />}
    </div>
  );
};

export default Dashboard;
