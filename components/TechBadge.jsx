export default function TechBadge({ label, variant = "default" }) {
  const styles =
    variant === "accent"
      ? "border-accent/40 text-accent2 bg-accent/10"
      : "border-border text-muted bg-surface2";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-mono ${styles}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
}
