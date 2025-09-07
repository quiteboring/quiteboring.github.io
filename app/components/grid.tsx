"use client";

import { useEffect, useState } from "react";

export function Grid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 transition duration-300 overflow-hidden">
      <div
        className="interactive-grid absolute h-56 w-56"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          backgroundPosition: `${-mousePosition.x}px ${-mousePosition.y}px`,
          backgroundImage:
            "linear-gradient(to right, #1d4260 1px, transparent 1px), linear-gradient(to bottom, #1d4260 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(farthest-side, black, transparent)",
        }}
      />
    </div>
  );
}

