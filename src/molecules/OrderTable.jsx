import React, { useMemo, useState } from "react";
import { mockData } from "@/models/mockData";
import CalendarIcon from "@/assets/Calendar.svg";
import Contact1 from "@/assets/Contact1.svg";
import Contact2 from "@/assets/Contact2.svg";
import Contact3 from "@/assets/Contact3.svg";
import Contact4 from "@/assets/Contact4.svg";
import Contact5 from "@/assets/Contact5.svg";
import Contact6 from "@/assets/Contact6.svg";

const PAGE_SIZE = 10;

const getStatusColor = (status) => {
  return status === "Complete"
    ? "#4AA785"
    : status === "Approved"
    ? "#FFC555"
    : status === "Rejected"
    ? "#1C1C1C66"
    : "#8A8CD9";
};

const StatusDot = ({ status }) => {
  const color = getStatusColor(status);
  return <span className="ot-status" style={{ background: color }} />;
};

const OrderTable = () => {
  const rows = useMemo(() => mockData.orders, []);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(() => new Set());
  const avatars = useMemo(
    () => [Contact1, Contact2, Contact3, Contact4, Contact5, Contact6],
    []
  );
  const pickAvatar = (key) => {
    let h = 0;
    const s = String(key);
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return avatars[h % avatars.length];
  };

  const pageCount = Math.ceil(rows.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const slice = rows.slice(start, start + PAGE_SIZE);

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allChecked = slice.every((r) => selected.has(r.orderId));
  const toggleAll = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allChecked) {
        slice.forEach((r) => next.delete(r.orderId));
      } else {
        slice.forEach((r) => next.add(r.orderId));
      }
      return next;
    });
  };

  return (
    <section className="orders-card">
      <div className="ot-table">
        <div className="ot-row ot-head">
          <div className="ot-cell ot-check">
            <input type="checkbox" checked={allChecked} onChange={toggleAll} />
          </div>
          <div className="ot-cell">Order ID</div>
          <div className="ot-cell">User</div>
          <div className="ot-cell">Project</div>
          <div className="ot-cell">Address</div>
          <div className="ot-cell">Date</div>
          <div className="ot-cell">Status</div>
        </div>

        <div className="ot-body">
          {slice.map((r) => {
            const isChecked = selected.has(r.orderId);
            return (
              <label
                key={r.orderId}
                className={`ot-row ot-body-row ${
                  isChecked ? "is-selected" : ""
                }`}
              >
                <div className="ot-cell ot-check">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(r.orderId)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div className="ot-cell ot-id">#{r.orderId}</div>
                <div className="ot-cell ot-user">
                  <img
                    className="ot-avatar"
                    src={pickAvatar(r.orderId)}
                    alt=""
                  />
                  <span>{r.user?.name}</span>
                </div>
                <div className="ot-cell">{r.project}</div>
                <div className="ot-cell">{r.address}</div>
                <div
                  className="ot-cell date"
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <img width={12} src={CalendarIcon} alt="" className="icon" />
                  {r.date}
                </div>
                <div className="ot-cell ot-status-cell">
                  <StatusDot status={r.status} />
                  <span style={{ color: getStatusColor(r.status) }}>
                    {r.status}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div className="ot-pager">
        <button
          className="ot-page-btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          ‹
        </button>
        {Array.from({ length: pageCount }).map((_, i) => {
          const n = i + 1;
          return (
            <button
              key={n}
              className={`ot-page-num ${n === page ? "is-active" : ""}`}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          );
        })}
        <button
          className="ot-page-btn"
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          disabled={page === pageCount}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default OrderTable;
