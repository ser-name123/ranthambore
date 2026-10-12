'use client';

import React, { useEffect, useRef } from 'react';

interface Firefly {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacitySpeed: number;
  baseOpacity: number;
  color: string;
}

export default function FireflyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const colors = [
      'rgba(245, 158, 11, ', // amber
      'rgba(234, 88, 12, ',  // orange
      'rgba(251, 191, 36, ', // gold
      'rgba(253, 224, 71, ', // bright firefly yellow
    ];

    const fireflyCount = Math.min(Math.floor(width / 35), 45);
    const fireflies: Firefly[] = [];

    for (let i = 0; i < fireflyCount; i++) {
      const baseOp = Math.random() * 0.5 + 0.2;
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.45 + 0.15), // gently rising upwards like embers
        opacity: baseOp,
        opacitySpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        baseOpacity: baseOp,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i];

        // Opacity pulsing
        f.opacity += f.opacitySpeed;
        if (f.opacity > 0.9 || f.opacity < 0.15) {
          f.opacitySpeed = -f.opacitySpeed;
        }

        // Mouse reaction (gentle repulsion)
        const dx = f.x - mouseX;
        const dy = f.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          f.x += (dx / dist) * force * 1.5;
          f.y += (dy / dist) * force * 1.5;
        }

        // Movement
        f.x += f.speedX + Math.sin(Date.now() * 0.001 + i) * 0.2;
        f.y += f.speedY;

        // Wrap around boundaries
        if (f.y < -10) {
          f.y = height + 10;
          f.x = Math.random() * width;
        }
        if (f.x < -10) f.x = width + 10;
        if (f.x > width + 10) f.x = -10;

        // Draw soft glow
        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 3.5);
        gradient.addColorStop(0, f.color + f.opacity + ')');
        gradient.addColorStop(0.4, f.color + (f.opacity * 0.4) + ')');
        gradient.addColorStop(1, f.color + '0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw glowing bright core
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(f.opacity + 0.2, 1)})`;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1] w-full h-full opacity-80"
      aria-hidden="true"
    />
  );
}
