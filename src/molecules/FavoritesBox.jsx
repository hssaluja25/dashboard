import React from "react";

const FavoritesBox = () => {
  return (
    <section className="fav-box">
      <div className="fav-tabs">
        <button className="fav-tab is-active">Favorites</button>
        <button className="fav-tab">Recently</button>
      </div>

      <ul className="fav-list">
        <li className="fav-item">
          <span className="fav-dot" />
          <span>Overview</span>
        </li>
        <li className="fav-item">
          <span className="fav-dot" />
          <span>Projects</span>
        </li>
      </ul>
    </section>
  );
};

export default FavoritesBox;
