const COLORS = ["#3E7BFA", "#8FB2FF", "#3DDC97", "#F2A93B"];

export default function StackMixBar({ mix }) {
  return (
    <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-surface2">
      {mix.map((m, i) => (
        <div
          key={m.name}
          style={{ width: `${m.value}%`, backgroundColor: COLORS[i % COLORS.length] }}
          title={`${m.name}: ${m.value}%`}
        />
      ))}
    </div>
  );
}
