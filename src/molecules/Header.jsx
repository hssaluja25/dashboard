import React from "react";

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="dashboard-header">
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        ☰
      </button>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
