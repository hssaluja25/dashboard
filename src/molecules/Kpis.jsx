import React from "react";
import KpiCard from "@/atoms/KpiCard";
import { mockData } from "@/models/mockData";

const numberFormat = (n) => n.toLocaleString();

const Kpis = () => {
  const { kpis } = mockData;
  return (
    <div className="kpis-grid">
      <KpiCard
        title="Customers"
        value={numberFormat(kpis.customers)}
        changePct={kpis.customersChangePct}
        accent="kpi-accent-blue"
      />

      <KpiCard
        title="Orders"
        value={numberFormat(kpis.orders)}
        changePct={kpis.ordersChangePct}
      />

      <KpiCard
        title="Revenue"
        value={numberFormat(Math.round(kpis.revenueTotal))}
        changePct={kpis.revenueChangePct}
        prefix="$"
      />

      <KpiCard
        title="Growth"
        value={kpis.growthPct}
        suffix="%"
        changePct={kpis.growthChangePct}
        accent="kpi-accent-indigo"
      />
    </div>
  );
};

export default Kpis;
