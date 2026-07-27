"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = Array.from({ length: 40 }, (_, i) => {
  const base = Math.sin(i / 3) * 18 + Math.sin(i / 1.3) * 6;
  return { i, v: 50 + base + (i > 30 ? (i - 30) * 2 : 0) };
});

export default function SignalWave() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id="signalFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E7BFA" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#3E7BFA" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke="#8FB2FF"
          strokeWidth={1.5}
          fill="url(#signalFill)"
          isAnimationActive={true}
          animationDuration={1800}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
