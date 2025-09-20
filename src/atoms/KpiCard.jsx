import React from "react";
import ArrowRise from "@/assets/ArrowRise.svg";
import ArrowFall from "@/assets/ArrowFall.svg";

const Arrow = ({ value }) => {
  const positive = value >= 0;
  const pct = Math.abs(value).toFixed(2) + "%";
  const Icon = positive ? ArrowRise : ArrowFall;
  return (
    <span className={`kpi-change ${positive ? "is-positive" : "is-negative"}`}>
      {(positive ? "+" : "-") + pct}
      <img className="kpi-arrow" src={Icon} alt="" width={14} height={14} />
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
