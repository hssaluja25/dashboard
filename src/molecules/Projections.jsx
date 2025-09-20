import React, { useEffect, useMemo, useRef, useState } from "react";
import { mockData } from "@/models/mockData";

const formatMillions = (n) => `${Math.round(n / 1_000_000)}M`;

const Projections = () => {
  const data = mockData.monthly;
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(null); // {x,y,item}
  const wrapRef = useRef(null);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const height = 300;
  const axisPad = 48; // left space for y labels

  const maxY = useMemo(() => {
    const v = Math.max(...data.map((d) => Math.max(d.revenue, d.projection)));
    const up = Math.ceil(v / 10_000_000) * 10_000_000; // round to 10M
    return Math.max(30_000_000, up); // at least 30M like mock
  }, [data]);

  const yPct = (val) => (val / maxY) * 100;
  const ticks = [0, maxY / 3, (2 * maxY) / 3, maxY];

  return (
    <section className="proj-card" ref={wrapRef}>
      <h3 className="proj-title">Projections vs Actuals</h3>
      <div className="proj-plot" style={{ height }}>
        {/* Grid lines and tick labels */}
        {ticks.map((t, i) => (
          <React.Fragment key={i}>
            <div
              className="proj-gridline"
              style={{ top: `${100 - yPct(t)}%`, left: axisPad, right: 0 }}
            />
            <div
              className="proj-tick"
              style={{ top: `calc(${100 - yPct(t)}% - 8px)` }}
            >
              {formatMillions(t)}
            </div>
          </React.Fragment>
        ))}

        {/* Bars */}
        <div className="proj-bars" style={{ left: axisPad }}>
          {data.map((d, i) => {
            const actualPct = yPct(d.revenue);
            const projPct = yPct(d.projection);
            const capPct = Math.max(0, projPct - actualPct);
            const delay = i * 60;
            return (
              <div className="bar-col" key={d.month}>
                <div
                  className={`bar-stack ${mounted ? "animate-in" : ""}`}
                  style={{
                    height: `${projPct}%`,
                    transitionDelay: `${delay}ms`,
                  }}
                  onMouseEnter={(e) => {
                    const bbox = wrapRef.current?.getBoundingClientRect();
                    setHover({
                      x: e.clientX - (bbox?.left ?? 0),
                      y: e.clientY - (bbox?.top ?? 0),
                      item: d,
                    });
                  }}
                  onMouseMove={(e) => {
                    const bbox = wrapRef.current?.getBoundingClientRect();
                    setHover(
                      (h) =>
                        h && {
                          ...h,
                          x: e.clientX - (bbox?.left ?? 0),
                          y: e.clientY - (bbox?.top ?? 0),
                        }
                    );
                  }}
                  onMouseLeave={() => setHover(null)}
                >
                  <div
                    className="bar-actual"
                    style={{ height: `${actualPct}%` }}
                  />
                  <div className="bar-proj" style={{ height: `${capPct}%` }} />
                </div>
                <div className="proj-month">{d.month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {hover && (
        <div
          className="proj-tooltip"
          style={{ left: hover.x + 12, top: hover.y - 12 }}
          onMouseLeave={() => setHover(null)}
        >
          <div className="tt-title">{hover.item.month}</div>
          <div className="tt-row">
            <span className="swatch sw-actual" /> Actual:{" "}
            {formatMillions(hover.item.revenue)}
          </div>
          <div className="tt-row">
            <span className="swatch sw-proj" /> Projection:{" "}
            {formatMillions(hover.item.projection)}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projections;
