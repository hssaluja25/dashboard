import React, { useMemo } from "react";
import { mockData } from "@/models/mockData";
import MapSvg from "@/assets/MapWithoutDots.svg";

const RevenueByLocation = () => {
  const points = useMemo(() => mockData.revenueByLocation, []);
  const max = Math.max(...points.map((p) => p.revenue));

  return (
    <section className="loc-card">
      <h3 className="loc-title">Revenue by Location</h3>

      <div className="loc-map">
        <img src={MapSvg} alt="World map" className="loc-map__img" />
        {points.map((p) => (
          <span
            key={p.name}
            className="loc-dot"
            style={{ left: p.left, top: p.top }}
          >
            <span className="loc-dot__inner" />
          </span>
        ))}
      </div>

      <ul className="loc-list">
        {points.map((p) => (
          <li className="loc-item" key={p.name}>
            <div className="loc-row">
              <span className="loc-name">{p.name}</span>
              <span className="loc-amt">{Math.round(p.revenue / 1000)}K</span>
            </div>
            <div className="loc-bar">
              <div
                className="loc-bar__fill"
                style={{ width: `${Math.round((p.revenue / max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RevenueByLocation;
