import React, { useEffect, useMemo, useState } from "react";
import { mockData } from "@/models/mockData";
import CalendarIcon from "@/assets/Calendar.svg";
import ArrowLeft from "@/assets/ArrowLeft.svg";
import ArrowRight from "@/assets/ArrowRight.svg";
import Contact1 from "@/assets/Contact1.svg";
import Contact2 from "@/assets/Contact2.svg";
import Contact3 from "@/assets/Contact3.svg";
import Contact4 from "@/assets/Contact4.svg";
import Contact5 from "@/assets/Contact5.svg";
import Contact6 from "@/assets/Contact6.svg";
import AddIcon from "@/assets/Add.svg";
import FilterIcon from "@/assets/Filter.svg";
import SortIcon from "@/assets/Sort.svg";
import SearchIcon from "@/assets/Search.svg";
import { useSelector } from "react-redux";

const PAGE_SIZE = 10;

const getStatusColor = (status, theme = "light") => {
  return status === "Complete"
    ? "#4AA785"
    : status === "Approved"
    ? "#FFC555"
    : status === "Rejected"
    ? theme === "light"
      ? "#1C1C1C66"
      : "#767676"
    : "#8A8CD9";
};

const StatusDot = ({ status, theme }) => {
  const color = getStatusColor(status, theme);
  return <span className="ot-status" style={{ background: color }} />;
};

const OrderTable = () => {
  const theme = useSelector((state) => state.app.theme);
  const rows = useMemo(() => mockData.orders, []);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(() => new Set());
  const [sortedOn, setSortedOn] = useState(false);
  const [sortDir, setSortDir] = useState("asc");
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => {
      const blob = [
        r.orderId,
        r.user?.name,
        r.project,
        r.address,
        r.date,
        r.status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return blob.includes(q);
    });
  }, [rows, query]);

  const sortByOrderId = useMemo(
    () => (arr) => {
      const parseNum = (id) =>
        parseInt(String(id).replace(/\D+/g, ""), 10) || 0;
      const s = arr.slice().sort((a, b) => {
        const va = parseNum(a.orderId);
        const vb = parseNum(b.orderId);
        return va === vb ? 0 : va < vb ? -1 : 1;
      });
      return sortDir === "asc" ? s : s.reverse();
    },
    [sortDir]
  );

  const working = useMemo(
    () => (sortedOn ? sortByOrderId(filtered) : filtered),
    [filtered, sortedOn, sortByOrderId]
  );

  const pageCount = Math.ceil(working.length / PAGE_SIZE) || 1;
  const start = Math.min(
    (page - 1) * PAGE_SIZE,
    Math.max(0, (pageCount - 1) * PAGE_SIZE)
  );
  const slice = working.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    setPage(1);
  }, [query, sortedOn, sortDir]);

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
      <div className="ot-toolbar">
        <div className="ot-tools">
          <button type="button" className="ot-icon-btn">
            <img src={AddIcon} alt="" width={16} height={16} />
          </button>
          <button type="button" className="ot-icon-btn">
            <img src={FilterIcon} alt="" width={16} height={16} />
          </button>
          <button
            type="button"
            className="ot-icon-btn"
            onClick={() => {
              setSortedOn(true);
              setSortDir((d) =>
                sortedOn ? (d === "asc" ? "desc" : "asc") : "asc"
              );
            }}
          >
            <img src={SortIcon} alt="Sort" width={16} height={16} />
          </button>
        </div>
        <div className="ot-search">
          <img src={SearchIcon} alt="" width={16} height={16} />
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search orders"
          />
        </div>
      </div>

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
                  <StatusDot status={r.status} theme={theme} />
                  <span style={{ color: getStatusColor(r.status, theme) }}>
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
          <img src={ArrowLeft} alt="Previous" width={12} height={12} />
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
          style={{ padding: "0px 4px" }}
        >
          <img src={ArrowRight} alt="Next" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};

export default OrderTable;
