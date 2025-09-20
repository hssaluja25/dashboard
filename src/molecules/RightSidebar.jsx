import React from "react";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
};

export default RightSidebar;
