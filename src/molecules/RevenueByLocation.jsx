import React, { useMemo } from "react";
import { mockData } from "@/models/mockData";
import MapSvg from "@/assets/MapWithoutDots.svg";

const RevenueByLocation = () => {
  const points = useMemo(() => mockData.revenueByLocation, []);
  const max = Math.max(...points.map((p) => p.revenue));

  const coords = {
    "New York": { left: "15%", top: "36%" },
    "San Francisco": { left: "28%", top: "42%" },
    Sydney: { left: "84%", top: "77%" },
    Singapore: { left: "73%", top: "58%" },
  };

  return (
    <section className="loc-card">
      <h3 className="loc-title">Revenue by Location</h3>

      <div className="loc-map">
        <img src={MapSvg} alt="World map" className="loc-map__img" />
        {points.map((p) => (
          <span key={p.name} className="loc-dot" style={coords[p.name]}>
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
