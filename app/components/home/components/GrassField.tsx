"use client";

import { useEffect, useRef } from "react";

export default function GrassField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = window.innerWidth;
    let h = window.innerHeight;

    canvas.width = w;
    canvas.height = h;

    let wind = 0;
    let targetWind = 0;

    window.addEventListener("mousemove", (e) => {
      targetWind += e.movementX * 0.01;
    });

    const blades = Array.from({ length: 900 }).map(() => ({
      x: Math.random() * w,
      height: 60 + Math.random() * 140,
      width: 1 + Math.random() * 2.5,
      baseTilt: (Math.random() - 0.5) * 0.3,
      offset: Math.random() * 1000,
      depth: Math.random(),
      angle: 0,
      velocity: 0,
    }));

    function drawBlade(b: any, time: number) {
      const baseY = h;

      const baseWind = Math.sin(time * 0.001 + b.offset) * 0.2;
      const targetAngle = baseWind + wind * 1.2 + b.baseTilt;

      b.velocity += (targetAngle - b.angle) * 0.08;
      b.velocity *= 0.85;
      b.angle += b.velocity;

      const tipX = b.x + Math.sin(b.angle) * b.height * 0.45;
      const tipY = baseY - b.height;

      const controlX =
        b.x + Math.sin(b.angle) * b.height * 0.3;
      const controlY = baseY - b.height * 0.5;

      // 🌿 NATURAL GRADIENT COLOR (KEY FIX)
      const base = 80 + b.depth * 100;

      const gradient = ctx.createLinearGradient(
        0,
        tipY,
        0,
        baseY
      );

      gradient.addColorStop(0, `rgb(40, ${base}, 40)`);
      gradient.addColorStop(1, `rgb(20, ${base + 40}, 20)`);

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.moveTo(b.x - b.width, baseY);
      ctx.quadraticCurveTo(controlX, controlY, tipX, tipY);
      ctx.quadraticCurveTo(
        controlX + b.width,
        controlY,
        b.x + b.width,
        baseY
      );
      ctx.closePath();
      ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      const time = Date.now();

      wind += (targetWind - wind) * 0.05;
      targetWind *= 0.92;
      targetWind = Math.max(-1.5, Math.min(1.5, targetWind));

      blades
        .sort((a, b) => a.depth - b.depth)
        .forEach((b) => drawBlade(b, time));

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
      className="fixed bottom-0 left-0 w-full md:h-[55vh] sm:h-[105vh] h-[55vh] z-[1] pointer-events-none"
    />
  );
}