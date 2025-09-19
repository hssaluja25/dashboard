import React from "react";
import UserAvatar from "../atoms/UserAvatar";

const LeftSidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <aside className={`left-sidebar ${isOpen ? "open" : ""}`}>
      <UserAvatar onClose={onClose} />
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
