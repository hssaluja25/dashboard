import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import LeftSidebar from "./molecules/LeftSidebar";
import RightSidebar from "./molecules/RightSidebar";

function App() {
  const theme = useSelector((state) => state.app.theme);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
  }, [theme]);

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

      <Dashboard
        setRightSidebarOpen={setRightSidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {rightSidebarOpen && <RightSidebar />}
    </div>
  );
}

export default App;
