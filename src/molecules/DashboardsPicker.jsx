import React from "react";
import DefaultIcon from "@/assets/Default.svg";
import EcommerceIcon from "@/assets/eCommerce.svg";
import ProjectsIcon from "@/assets/Projects.svg";
import CoursesIcon from "@/assets/Online_Courses.svg";

const items = [
  { key: "default", label: "Default", icon: DefaultIcon },
  { key: "ecommerce", label: "eCommerce", icon: EcommerceIcon },
  { key: "projects", label: "Projects", icon: ProjectsIcon },
  { key: "courses", label: "Online Courses", icon: CoursesIcon },
];

const DashboardsPicker = ({ active = "default" }) => {
  return (
    <section className="db-picker">
      <h3 className="db-title">Dashboards</h3>

      <ul className="db-list">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <li key={it.key} className="db-item">
              <button
                type="button"
                className={`db-row ${isActive ? "is-active" : ""}`}
              >
                {!isActive && <span className="db-chevron">›</span>}
                <img src={it.icon} alt="" className="db-icon" />
                <span className="db-label">{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DashboardsPicker;
