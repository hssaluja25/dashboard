import React from "react";

const Arrow = ({ value }) => {
  const positive = value >= 0;
  const pct = Math.abs(value).toFixed(2) + "%";
  const arrow = positive ? "↗" : "↘";
  return (
    <span className={`kpi-change ${positive ? "is-positive" : "is-negative"}`}>
      {(positive ? "+" : "-") + pct} {arrow}
    </span>
  );
};

const KpiCard = ({ title, value, changePct = 0, prefix = "", suffix = "", accent = "" }) => {
  return (
    <section className={`kpi-card ${accent}`}>
      <div className="kpi-title">{title}</div>
      <div className="kpi-row">
        <div className="kpi-value">
          {prefix}
          {value}
          {suffix}
        </div>
        <Arrow value={changePct} />
      </div>
    </section>
  );
};

export default KpiCard;
