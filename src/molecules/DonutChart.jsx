import React, { useMemo, useState } from "react";
import { mockData } from "@/models/mockData";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const currency = (n) => `$${n.toFixed(2)}`;

const DonutChart = () => {
  const data = useMemo(() => mockData.salesChannels, []);
  const [active, setActive] = useState(0);
  const theme = useSelector((state) => state.app.theme);

  const COLORS = {
    Direct: theme === "light" ? "#1C1C1C" : "#C6C6F9",
    Affiliate: "#BAEDBD",
    Sponsored: "#95A4FC",
    "E-mail": "#B1E3FF",
  };
  return (
    <section className="donut-card">
      <h3 className="donut-title">Total Sales</h3>
      <div>
        <div className="donut-chart">
          <ResponsiveContainer>
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="channel"
                innerRadius={36}
                outerRadius={54}
                strokeWidth={6}
                stroke="var(--surface)"
                paddingAngle={3}
                startAngle={90}
                endAngle={-270}
                onMouseLeave={() => setActive(active)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.channel}
                    fill={COLORS[entry.channel] || "#ccc"}
                    onMouseEnter={() => setActive(index)}
                  />
                ))}
              </Pie>
              <Tooltip
                cursor={false}
                contentStyle={{
                  background: theme === "light" ? "var(--surface)" : "white",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
                formatter={(value, name) => [currency(value), name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="donut-legend">
          {data.map((d) => (
            <li key={d.channel} className="donut-row">
              <span className="legend-left">
                <span
                  className="dot"
                  style={{ background: COLORS[d.channel] || "#ccc" }}
                />
                <span className="name">{d.channel}</span>
              </span>
              <span className="value">{currency(d.amount)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DonutChart;
