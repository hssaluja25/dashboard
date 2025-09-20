import React, { useMemo } from "react";
import { mockData } from "@/models/mockData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const formatMillions = (n) => `${Math.round(n / 1_000_000)}M`;

const RevenueChart = () => {
  const data = useMemo(() => {
    const { labels, datasets } = mockData.revenues;
    const proj = datasets.find((d) => d.label.toLowerCase().includes("actual"));
    const solid = datasets.find((d) => d.label.toLowerCase().includes("solid"));
    const dashed = datasets.find((d) =>
      d.label.toLowerCase().includes("dashed")
    );

    return labels.map((label, i) => ({
      name: label,
      projection: proj?.data?.[i] != null ? proj.data[i] * 1_000_000 : null,
      actual: solid?.data?.[i] != null ? solid.data[i] * 1_000_000 : null,
      actualFuture:
        dashed?.data?.[i] != null ? dashed.data[i] * 1_000_000 : null,
    }));
  }, []);

  return (
    <section className="proj-card">
      <div className="proj-title">
        <span className="proj-h">Revenue</span>
        <span className="title-sep" aria-hidden="true" />
        <span className="title-item">
          <span className="title-dot dot-actual" />
          <span>
            Current Week <strong>$58,211</strong>
          </span>
        </span>
        <span className="title-item">
          <span className="title-dot dot-proj" />
          <span>
            Previous Week <strong>$68,768</strong>
          </span>
        </span>
      </div>
      <section className="rev-card">
        <div style={{ width: "100%", height: 230 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 8, right: 8, bottom: 8, left: 0 }}
            >
              <defs>
                <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--text)"
                    stopOpacity={0.08}
                  />
                  <stop offset="100%" stopColor="var(--text)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                vertical={false}
                stroke="var(--border)"
                strokeOpacity={0.5}
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "var(--text-muted)", fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: "var(--border)" }}
              />
              <YAxis
                domain={[0, 30000000]}
                ticks={[0, 10000000, 20000000, 30000000]}
                tickFormatter={formatMillions}
                tick={{ fill: "var(--text-muted)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ stroke: "var(--border)", strokeDasharray: "3 3" }}
                contentStyle={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
                labelStyle={{ color: "var(--text)", fontWeight: 700 }}
                formatter={(val, key) => {
                  if (key === "projection")
                    return [formatMillions(val), "Projection"];
                  if (key === "actual") return [formatMillions(val), "Actual"];
                  if (key === "actualFuture")
                    return [formatMillions(val), "Forecast"];
                  return [val, key];
                }}
              />

              <Area
                type="natural"
                dataKey="actual"
                stroke="none"
                fill="url(#revFill)"
                activeDot={false}
                isAnimationActive={true}
              />

              <Line
                type="natural"
                dataKey="projection"
                stroke="var(--line-proj)"
                strokeWidth={3}
                dot={false}
                activeDot={false}
                strokeLinecap="round"
                strokeLinejoin="round"
                animationDuration={700}
                animationEasing="ease-out"
              />

              <Line
                type="natural"
                dataKey="actual"
                stroke="var(--text)"
                strokeWidth={3}
                dot={false}
                strokeLinecap="round"
                strokeLinejoin="round"
                animationDuration={700}
                animationEasing="ease-out"
              />

              <Line
                type="natural"
                dataKey="actualFuture"
                stroke="var(--text)"
                strokeWidth={3}
                strokeDasharray="6 8"
                dot={false}
                isAnimationActive={false}
                strokeLinecap="round"
                strokeLinejoin="round"
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </section>
  );
};

export default RevenueChart;
