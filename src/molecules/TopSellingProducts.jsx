import React, { useEffect, useState } from "react";
import { mockData } from "@/models/mockData";

const fmtCurrency = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n
  );

const TopSellingProducts = () => {
  const rows = mockData.topProducts;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="tsp-card">
      <h3 className="tsp-title">Top Selling Products</h3>
      <div className="tsp-table">
        <div className="tsp-thead">
          <div className="tsp-row tsp-head">
            <div className="tsp-th">Name</div>
            <div className="tsp-th">Price</div>
            <div className="tsp-th">Quantity</div>
            <div className="tsp-th">Amount</div>
          </div>
        </div>
        <div className="tsp-tbody">
          {rows.map((r, i) => (
            <div
              key={r.name}
              className={`tsp-row tsp-body ${mounted ? "is-in" : ""}`}
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="tsp-td">{r.name}</div>
              <div className="tsp-td">{fmtCurrency(r.price)}</div>
              <div className="tsp-td">{r.quantity}</div>
              <div className="tsp-td">{fmtCurrency(r.amount)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
