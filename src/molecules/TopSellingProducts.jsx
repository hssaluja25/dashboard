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
      <div className="tsp-table" role="table" aria-label="Top selling products">
        <div className="tsp-thead" role="rowgroup">
          <div className="tsp-row tsp-head" role="row">
            <div className="tsp-th" role="columnheader">
              Name
            </div>
            <div className="tsp-th" role="columnheader">
              Price
            </div>
            <div className="tsp-th" role="columnheader">
              Quantity
            </div>
            <div className="tsp-th" role="columnheader">
              Amount
            </div>
          </div>
        </div>
        <div className="tsp-tbody" role="rowgroup">
          {rows.map((r, i) => (
            <div
              key={r.name}
              className={`tsp-row tsp-body ${mounted ? "is-in" : ""}`}
              role="row"
              style={{ "--delay": `${i * 90}ms` }}
            >
              <div className="tsp-td" role="cell">
                {r.name}
              </div>
              <div className="tsp-td" role="cell">
                {fmtCurrency(r.price)}
              </div>
              <div className="tsp-td" role="cell">
                {r.quantity}
              </div>
              <div className="tsp-td" role="cell">
                {fmtCurrency(r.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
