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
    // Use first 4 months as "actual" (solid), then dashed forecast from projection.
    const cutoff = 3; // index of Apr in the provided mock data
    return mockData.monthly.map((d, i) => ({
      name: d.month,
      projection: d.projection,
      actual: i <= cutoff ? d.revenue : null,
      actualFuture: i > cutoff ? d.projection : null,
    }));
  }, []);

  return (
    <section className="rev-card">
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 8, right: 8, bottom: 8, left: 0 }}
          >
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--text)" stopOpacity={0.08} />
                <stop offset="100%" stopColor="var(--text)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="var(--border)" strokeOpacity={0.5} />
            <XAxis
              dataKey="name"
              tick={{ fill: "var(--text-muted)", fontSize: 16 }}
              tickLine={false}
              axisLine={{ stroke: "var(--border)" }}
            />
            <YAxis
              domain={[0, 30_000_000]}
              ticks={[0, 10_000_000, 20_000_000, 30_000_000]}
              tickFormatter={formatMillions}
              tick={{ fill: "var(--text-muted)", fontSize: 16 }}
              axisLine={{ stroke: "var(--border)" }}
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
                if (key === "projection") return [formatMillions(val), "Projection"];
                if (key === "actual") return [formatMillions(val), "Actual"];
                if (key === "actualFuture") return [formatMillions(val), "Forecast"];
                return [val, key];
              }}
            />

            {/* Soft fill under the actual line */}
            <Area
              type="monotone"
              dataKey="actual"
              stroke="none"
              fill="url(#revFill)"
              activeDot={false}
              isAnimationActive={true}
            />

            {/* Blue projection curve */}
            <Line
              type="monotone"
              dataKey="projection"
              stroke="var(--line-proj)"
              strokeWidth={6}
              dot={false}
              activeDot={false}
            />

            {/* Solid actual to cutoff */}
            <Line
              type="monotone"
              dataKey="actual"
              stroke="var(--text)"
              strokeWidth={6}
              dot={false}
            />

            {/* Dashed continuation */}
            <Line
              type="monotone"
              dataKey="actualFuture"
              stroke="var(--text)"
              strokeWidth={6}
              strokeDasharray="6 8"
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueChart;
