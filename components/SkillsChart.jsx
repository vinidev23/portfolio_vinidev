"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { skills } from "@/data/projects";

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="bg-surface2 border border-border rounded-md px-3 py-2 font-mono text-xs text-ink shadow-panel">
      {p.name} — {p.level}%
    </div>
  );
}

export default function SkillsChart() {
  const sorted = [...skills].sort((a, b) => b.level - a.level);

  return (
    <div className="w-full h-[340px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
          barCategoryGap={14}
        >
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            dataKey="name"
            type="category"
            width={100}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#8A93A3", fontSize: 12, fontFamily: "var(--font-mono)" }}
          />
          <Tooltip cursor={{ fill: "#ffffff08" }} content={<CustomTooltip />} />
          <Bar dataKey="level" radius={[0, 6, 6, 0]} maxBarSize={14}>
            {sorted.map((entry, i) => (
              <Cell
                key={entry.name}
                fill={i === 0 ? "#3E7BFA" : "#3E7BFA99"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
