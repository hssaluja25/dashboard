import React from "react";
import UserAvatarSvg from "../assets/UserAvatar.svg";

const UserAvatar = ({ onClose }) => {
  return (
    <div className="left-sidebar__header">
      <span className="left-sidebar__title">
        <div className="user-avatar-container">
          <img src={UserAvatarSvg} alt="user avatar" width={24} height={24} />
        </div>
        ByteWind
      </span>
      {/* Only shown on mobile */}
      <button className="left-sidebar__close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default UserAvatar;
