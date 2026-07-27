"use client";

import { useEffect, useState } from "react";

export default function TypedName({ text = "Vinícius Martin" }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let erasing = false;
    let timeout;

    const tick = () => {
      if (!erasing) {
        i++;
        setDisplay(text.substring(0, i));
        if (i === text.length) {
          erasing = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        i--;
        setDisplay(text.substring(0, i));
        if (i === 0) erasing = false;
      }
      timeout = setTimeout(tick, erasing ? 45 : 90);
    };

    timeout = setTimeout(tick, 90);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span>
      {display}
      <span className="inline-block w-[2px] h-[0.9em] bg-accent align-middle ml-1 animate-blink" />
    </span>
  );
}
