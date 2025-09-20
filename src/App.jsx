import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
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
    <BrowserRouter>
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

      <Routes>
        <Route path="/" element={<Dashboard setRightSidebarOpen={setRightSidebarOpen} setSidebarOpen={setSidebarOpen} />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>

      {rightSidebarOpen && <RightSidebar />}
    </div>
    </BrowserRouter>
  );
}

export default App;
