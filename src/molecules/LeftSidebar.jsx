import React from "react";
import UserAvatar from "../atoms/UserAvatar";
import FavoritesBox from "./FavoritesBox";
import DashboardsPicker from "./DashboardsPicker";

const LeftSidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <aside className={`left-sidebar ${isOpen ? "open" : ""}`}>
      <UserAvatar onClose={onClose} />
      <FavoritesBox />
      <DashboardsPicker />
    </aside>
  );
};

export default LeftSidebar;
