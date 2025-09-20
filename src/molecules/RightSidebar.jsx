import React from "react";
import Notifications from "./Notifications";
import Activities from "./Activities";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Notifications />
      <Activities />
    </aside>
  );
};

export default RightSidebar;
