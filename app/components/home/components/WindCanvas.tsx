"use client";

import { useEffect, useRef } from "react";

export default function WindCanvas() {
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

    /* 🌬️ STREAM LINES */
    const streams = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      length: 80 + Math.random() * 120,
      speed: 1 + Math.random() * 1.5,
      curve: Math.random() * 0.5,
      life: Math.random() * 1000,
    }));

    function getGradient(ctx: CanvasRenderingContext2D, s: any) {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      const gradient = ctx.createLinearGradient(
        s.x,
        s.y,
        s.x + s.length,
        s.y
      );

      if (isDark) {
        // 🌙 DARK MODE (unchanged feel)
        gradient.addColorStop(0, "rgba(134,239,172,0)");
        gradient.addColorStop(0.5, "rgba(134,239,172,0.25)");
        gradient.addColorStop(1, "rgba(134,239,172,0)");
      } else {
        // 🌞 LIGHT MODE → darker green
        gradient.addColorStop(0, "rgba(20,120,40,0)");
        gradient.addColorStop(0.5, "rgba(20,120,40,0.35)");
        gradient.addColorStop(1, "rgba(20,120,40,0)");
      }

      return gradient;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      streams.forEach((s) => {
        ctx.beginPath();

        let x = s.x;
        let y = s.y;

        ctx.moveTo(x, y);

        for (let i = 0; i < s.length; i += 10) {
          x += 10;

          y += Math.sin((x + s.life) * 0.01) * s.curve;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            y += (dy / dist) * 2;
          }

          ctx.lineTo(x, y);
        }

        // ✅ ONLY CHANGE → theme-aware gradient
        ctx.strokeStyle = getGradient(ctx, s);
        ctx.lineWidth = 1.2;

        ctx.stroke();

        s.x += s.speed;
        s.life += 2;

        if (s.x > w + 100) {
          s.x = -100;
          s.y = Math.random() * h;
        }
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