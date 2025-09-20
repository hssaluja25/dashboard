import React from "react";

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <section className="rs-card">
        <h3 className="rs-title">Summary</h3>
        <ul className="rs-list">
          <li className="rs-item"><span className="rs-dot" /> New tasks: 4</li>
          <li className="rs-item"><span className="rs-dot" /> Reviews: 2</li>
          <li className="rs-item"><span className="rs-dot" /> Mentions: 1</li>
        </ul>
      </section>

      <section className="rs-card">
        <h3 className="rs-title">Notifications</h3>
        <div className="rs-note">
          System maintenance scheduled for Friday at 9pm.
        </div>
        <div className="rs-note">You have 3 unread messages.</div>
      </section>

      <section className="rs-card">
        <h3 className="rs-title">Quick Actions</h3>
        <div className="rs-actions">
          <button className="rs-btn" type="button">Create</button>
          <button className="rs-btn" type="button">Invite</button>
          <button className="rs-btn" type="button">Export</button>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
