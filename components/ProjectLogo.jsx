"use client";

import { useState } from "react";

export default function ProjectLogo({ src, alt, size = 40 }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className="shrink-0 rounded-lg border border-dashed border-border bg-surface2 flex items-center justify-center"
      >
        <span className="font-mono text-[9px] text-faint">logo</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className="shrink-0 rounded-lg border border-border object-cover bg-surface2"
    />
  );
}
