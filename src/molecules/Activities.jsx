import React from "react";
import User1 from "@/assets/User1.svg";
import User2 from "@/assets/User2.svg";
import User3 from "@/assets/User3.svg";
import User4 from "@/assets/User4.svg";
import User5 from "@/assets/User5.svg";

const items = [
  {
    key: "a1",
    avatar: User1,
    title: "You have a bug that needs...",
    time: "Just now",
  },
  {
    key: "a2",
    avatar: User2,
    title: "Released a new version",
    time: "59 minutes ago",
  },
  { key: "a3", avatar: User3, title: "Submitted a bug", time: "12 hours ago" },
  {
    key: "a4",
    avatar: User4,
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    key: "a5",
    avatar: User5,
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const Activities = () => {
  return (
    <section className="rs-card">
      <h3 className="rs-title">Activities</h3>
      <ul className="act-list">
        {items.map((it) => (
          <li className="act-item" key={it.key}>
            <div className="act-avatar">
              <img src={it.avatar} alt="" width={24} height={24} />
            </div>
            <div className="act-text">
              <div className="act-main">{it.title}</div>
              <div className="act-time">{it.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
