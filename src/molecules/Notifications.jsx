import React from "react";
import BugIcon from "@/assets/Bug.svg";
import UserIcon from "@/assets/User.svg";
import SubscribeIcon from "@/assets/Subscribe.svg";

const items = [
  {
    key: "bug-now",
    icon: BugIcon,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    key: "user-registered",
    icon: UserIcon,
    title: "New user registered",
    time: "59 minutes ago",
  },
  {
    key: "bug-12h",
    icon: BugIcon,
    title: "You have a bug that needs...",
    time: "12 hours ago",
  },
  {
    key: "subscribed",
    icon: SubscribeIcon,
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const Notifications = () => {
  return (
    <section className="rs-card">
      <h3 className="rs-title">Notifications</h3>
      <ul className="notif-list">
        {items.map((it) => (
          <li key={it.key} className="notif-item">
            <div className="notif-icon">
              <img src={it.icon} alt="" width={20} height={20} />
            </div>
            <div className="notif-text">
              <div className="notif-main">{it.title}</div>
              <div className="notif-time">{it.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
