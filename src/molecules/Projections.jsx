import React, { useMemo } from "react";
import { mockData } from "@/models/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatMillions = (n) => `${Math.round(n / 1_000_000)}M`;

const Projections = () => {
  const chartData = useMemo(
    () =>
      mockData.monthly.map((d) => ({
        name: d.month,
        actual: d.revenue,
        cap: Math.max(0, d.projection - d.revenue),
      })),
    []
  );

  const yMax = useMemo(() => {
    const max = Math.max(
      ...mockData.monthly.map((d) => Math.max(d.revenue, d.projection))
    );
    const up = Math.ceil(max / 10_000_000) * 10_000_000;
    return Math.max(30_000_000, up);
  }, []);

  return (
    <section className="proj-card">
      <h3 className="proj-title">Projections vs Actuals</h3>
      <div style={{ width: "100%", height: 360 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} barCategoryGap={24}>
            <CartesianGrid
              vertical={false}
              stroke="var(--border)"
              strokeOpacity={0.6}
            />
            <XAxis
              dataKey="name"
              tick={{ fill: "var(--text-muted)", fontSize: 14 }}
              tickLine={false}
              axisLine={{ stroke: "var(--border)" }}
            />
            <YAxis
              domain={[0, 30000000]}
              ticks={[0, 10000000, 20000000, 30000000]}
              tickFormatter={formatMillions}
              tick={{ fill: "var(--text-muted)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                color: "var(--text)",
              }}
              labelStyle={{ color: "var(--text)", fontWeight: 700 }}
              formatter={(value, key) => {
                if (key === "actual") return [formatMillions(value), "Actual"];
                if (key === "cap")
                  return [formatMillions(value + 0), "Projection Top-Up"];
                return [value, key];
              }}
            />
            <Bar
              dataKey="actual"
              stackId="a"
              fill="var(--bar-actual)"
              radius={[0, 0, 8, 8]}
            />
            <Bar
              dataKey="cap"
              stackId="a"
              fill="var(--bar-proj)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Projections;
