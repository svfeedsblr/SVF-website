"use client";

import { useEffect, useRef } from "react";

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    let mouse = { x: w / 2, y: h / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    /* ✨ PARTICLES */
    const particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      size: Math.random() * 2 + 0.5,
    }));

    function flow(x: number, y: number, t: number) {
      return {
        x: Math.cos((y + t) * 0.002) * 0.35 + 0.6,
        y: Math.sin((x + t) * 0.002) * 0.15,
      };
    }

    function getColor() {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      return isDark
        ? "rgba(134,239,172,0.32)"
        : "rgba(20,140,40,0.42)";
    }

    function draw() {
      // 🔥 STRONGER CLEAN FADE (fix blur buildup)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.08)"; // ⬅️ increased from 0.04 → 0.08
      ctx.fillRect(0, 0, w, h);

      // IMPORTANT: reset mode before drawing particles
      ctx.globalCompositeOperation = "lighter";

      const t = Date.now();
      const color = getColor();

      particles.forEach((p) => {
        const f = flow(p.x, p.y, t);

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let mx = 0;
        let my = 0;

        if (dist < 120) {
          const force = (120 - dist) / 120;
          mx = (dx / dist) * force * 2;
          my = (dy / dist) * force * 2;
        }

        p.vx = f.x + mx;
        p.vy = f.y + my;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x > w) p.x = 0;
        if (p.x < 0) p.x = w;
        if (p.y > h) p.y = 0;
        if (p.y < 0) p.y = h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    window.addEventListener("resize", () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
}