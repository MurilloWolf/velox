"use client";

import { useEffect, useRef } from "react";

export default function MeshGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Colors from user
    const colors = ["#121212", "#212121", "#000c5a", "#d5fe46", "#f05a24"];

    const points = colors.map((color) => {
      const speed = 0.3 + Math.random() * 1.2; // Random speed between 0.3 and 1.5
      const angle = Math.random() * Math.PI * 2; // Random initial direction

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        radius: Math.min(canvas.width, canvas.height) * 0.6,
        // Random direction change parameters
        directionChangeTimer: Math.random() * 200 + 100,
        directionChangeCounter: 0,
        speed: speed,
      };
    });

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each gradient point
      points.forEach((point) => {
        point.directionChangeCounter++;
        if (point.directionChangeCounter >= point.directionChangeTimer) {
          const newAngle = Math.random() * Math.PI * 2;
          const newSpeed = 0.3 + Math.random() * 1.2;
          point.vx = Math.cos(newAngle) * newSpeed;
          point.vy = Math.sin(newAngle) * newSpeed;
          point.speed = newSpeed;
          point.directionChangeCounter = 0;
          point.directionChangeTimer = Math.random() * 200 + 100;
        }

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
          point.vx += (Math.random() - 0.5) * 0.2; // Add slight randomness to bounce
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
          point.vy += (Math.random() - 0.5) * 0.2; // Add slight randomness to bounce
        }

        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.radius
        );
        gradient.addColorStop(0, point.color + "CC");
        gradient.addColorStop(0.5, point.color + "66");
        gradient.addColorStop(1, point.color + "00");

        // Draw gradient
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#121212]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(60px)" }}
      />
      {children}
    </div>
  );
}
