"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  trail: { x: number; y: number; alpha: number }[];
}

export default function FlurryBackground() {
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

    // Color palette inspired by classic Mac Flurry + requested neons
    const colors = [
      "rgba(255, 100, 150, 0.8)", // Pink
      "rgba(100, 150, 255, 0.8)", // Blue
      "rgba(150, 255, 100, 0.8)", // Green
      "rgba(255, 200, 100, 0.8)", // Orange
      "rgba(200, 100, 255, 0.8)", // Purple
      "rgba(100, 255, 255, 0.8)", // Cyan
      // Neon additions
      "rgba(0, 12, 90, 0.95)", // #000c5a - deep neon blue
      "rgba(240, 90, 36, 0.95)", // #f05a24 - neon orange
      "rgba(213, 254, 70, 0.95)", // #d5fe46 - neon lime
    ];

    const particles: Particle[] = [];

    // Create initial particles
    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.6; // slightly varied base speed

      return {
        // Spawn at a random position across the canvas
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Velocity points in a random direction
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: Math.random() * 400 + 300,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        trail: [],
      };
    };

    // Initialize particles
    for (let i = 0; i < 12; i++) {
      particles.push(createParticle());
    }

    let animationId: number;

    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Add smooth curves to movement
        const time = Date.now() * 0.001;
        particle.vx += Math.sin(time + index) * 0.02;
        particle.vy += Math.cos(time + index) * 0.02;

        // Limit velocity
        const maxSpeed = 4;
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Add to trail
        particle.trail.push({
          x: particle.x,
          y: particle.y,
          alpha: 1,
        });

        // Limit trail length
        if (particle.trail.length > 50) {
          particle.trail.shift();
        }

        // Draw trail
        particle.trail.forEach((point, i) => {
          const alpha =
            (i / particle.trail.length) *
            (1 - particle.life / particle.maxLife);
          const size = particle.size * (i / particle.trail.length);

          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace("0.8", String(alpha * 0.8));
          ctx.fill();

          // Add glow effect
          ctx.shadowBlur = 15;
          ctx.shadowColor = particle.color;
        });

        ctx.shadowBlur = 0;

        // Draw main particle
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // turn off shadow for following draws
        ctx.shadowBlur = 0;

        // Reset particle if it dies or goes off screen
        if (
          particle.life > particle.maxLife ||
          particle.x < -200 ||
          particle.x > canvas.width + 200 ||
          particle.y < -200 ||
          particle.y > canvas.height + 200
        ) {
          particles[index] = createParticle();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-black -z-50"
      style={{ touchAction: "none" }}
    />
  );
}
