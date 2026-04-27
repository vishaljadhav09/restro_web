"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({ children, className = "", direction = "up", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cls = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";
    el.classList.add(cls);
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [direction, delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
