import React from "react";
import SidebarIcon from "@/assets/Sidebar.svg";
import StarIcon from "@/assets/Star.svg";
import SearchIcon from "@/assets/Search.svg";
import SunIcon from "@/assets/Sun.svg";
import ClockIcon from "@/assets/ClockCounterClockwise.svg";
import BellIcon from "@/assets/Bell.svg";

const Header = ({ setSidebarOpen, setRightSidebarOpen }) => {
  return (
    <header className="dashboard-header">
      <div className="hdr-left">
        <button
          className="icon-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <img src={SidebarIcon} alt="" className="icon" />
        </button>

        <button className="icon-btn">
          <img src={StarIcon} alt="" className="icon" />
        </button>

        <div className="hdr-breadcrumb">
          <span className="muted">Dashboards</span>
          <span className="sep">/</span>
          <span className="current">Default</span>
        </div>
      </div>

      <div className="hdr-search">
        <img src={SearchIcon} alt="" className="search-icon" />
        <input type="text" placeholder="Search" />
        <span className="kbd-hint">⌘/</span>
      </div>

      <div className="hdr-actions">
        <button className="icon-btn">
          <img src={SunIcon} alt="" className="icon" />
        </button>
        <button className="icon-btn">
          <img src={ClockIcon} alt="" className="icon" />
        </button>
        <button className="icon-btn">
          <img src={BellIcon} alt="" className="icon" />
        </button>
        <button
          className="icon-btn"
          onClick={() => setRightSidebarOpen((prev) => !prev)}
        >
          <img src={SidebarIcon} alt="" className="icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
