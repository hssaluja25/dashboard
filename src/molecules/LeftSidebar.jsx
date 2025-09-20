import React from "react";
import UserAvatar from "../atoms/UserAvatar";
import FavoritesBox from "./FavoritesBox";
import DashboardsPicker from "./DashboardsPicker";
import PagesPicker from "./PagesPicker";

const LeftSidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <aside className={`left-sidebar ${isOpen ? "open" : ""}`}>
      <UserAvatar onClose={onClose} />
      <FavoritesBox />
      <DashboardsPicker />
      <PagesPicker />
    </aside>
  );
};

export default LeftSidebar;
