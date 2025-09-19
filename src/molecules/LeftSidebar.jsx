import React from "react";

const LeftSidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <aside className={`left-sidebar ${isOpen ? "open" : ""}`}>
      <div className="left-sidebar__header">
        <span className="left-sidebar__title">Menu</span>
        {/* Only shown on mobile */}
        <button className="left-sidebar__close" onClick={onClose}>
          ×
        </button>
      </div>
      <nav className="left-sidebar__nav">
        {/* Later add logic for is-active */}
        <a href="#" className="left-sidebar__link is-active">
          Default
        </a>
        <a href="#" className="left-sidebar__link">
          Ecommerce
        </a>
        <a href="#" className="left-sidebar__link">
          Projects
        </a>
        <a href="#" className="left-sidebar__link">
          Online Courses
        </a>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
