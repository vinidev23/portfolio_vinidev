"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#3E7BFA", "#8FB2FF", "#3DDC97", "#F2A93B"];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div className="bg-surface2 border border-border rounded-md px-3 py-2 font-mono text-xs text-ink shadow-panel">
      {p.name}: {p.value}%
    </div>
  );
}

function CustomLegend({ payload }) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {payload.map((entry, i) => (
        <li key={entry.value} className="flex items-center gap-2 font-mono text-xs text-muted">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: COLORS[i % COLORS.length] }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectStackMix({ data }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <div className="w-full sm:w-[160px] h-[160px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={70}
              paddingAngle={3}
              strokeWidth={0}
            >
              {data.map((entry, i) => (
                <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <CustomLegend payload={data.map((d) => ({ value: d.name }))} />
    </div>
  );
}
