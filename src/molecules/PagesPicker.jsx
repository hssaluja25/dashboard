import React from "react";
import UserProfileIcon from "@/assets/UserProfile.svg";
import AccountIcon from "@/assets/Account.svg";
import CorporateIcon from "@/assets/Corporate.svg";
import BlogIcon from "@/assets/Blog.svg";
import SocialIcon from "@/assets/Social.svg";

const items = [
  { key: "profile", label: "User Profile", icon: UserProfileIcon },
  { key: "account", label: "Account", icon: AccountIcon },
  { key: "corporate", label: "Corporate", icon: CorporateIcon },
  { key: "blog", label: "Blog", icon: BlogIcon },
  { key: "social", label: "Social", icon: SocialIcon },
];

const PagesPicker = () => {
  return (
    <section className="db-picker">
      <h3 className="db-title">Pages</h3>

      <ul className="db-list">
        {items.map((it) => {
          return (
            <li key={it.key} className="db-item">
              <button type="button" className={`db-row`}>
                <span className="db-chevron">›</span>
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

export default PagesPicker;
