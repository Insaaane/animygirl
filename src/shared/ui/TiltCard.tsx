"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  maxTilt?: number;
};

export function TiltCard({ children, className, maxTilt = 6, onPointerLeave, onPointerMove, ...props }: TiltCardProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const element = rootRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const updateTilt = () => {
      frameRef.current = 0;
      const x = pointerRef.current.x - 0.5;
      const y = pointerRef.current.y - 0.5;

      element.style.setProperty("--tilt-x", `${(x * maxTilt * 2).toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${(-y * maxTilt * 2).toFixed(2)}deg`);
    };

    const requestTilt = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(updateTilt);
    };

    const handleWindowPointerMove = (event: globalThis.PointerEvent) => {
      pointerRef.current = {
        x: Math.min(1, Math.max(0, event.clientX / window.innerWidth)),
        y: Math.min(1, Math.max(0, event.clientY / window.innerHeight)),
      };
      requestTilt();
    };

    const resetTilt = () => {
      pointerRef.current = { x: 0.5, y: 0.5 };
      requestTilt();
    };

    window.addEventListener("pointermove", handleWindowPointerMove, { passive: true });
    window.addEventListener("blur", resetTilt);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("blur", resetTilt);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }

      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
    };
  }, [maxTilt]);

  return (
    <div
      ref={rootRef}
      className={className ? `${className} tilt-card` : "tilt-card"}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...props}
    >
      {children}
    </div>
  );
}
