'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LeafParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flipX: number;
  flipSpeedX: number;
  swayAngle: number;
  swaySpeed: number;
  swayWidth: number;
  opacity: number;
  type: 'sal' | 'bamboo' | 'banyan' | 'fern';
  color: string;
  veinColor: string;
}

interface FireflyParticle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
  baseAlpha: number;
  color: 'emerald' | 'amber' | 'gold';
}

interface BirdParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  wingPhase: number;
  wingSpeed: number;
  opacity: number;
  active: boolean;
  respawnTimer: number;
}

export default function FallingLeavesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Forest leaf palette - tropical greens, sage, golden amber, autumn jungle hues
    const leafColors = [
      { fill: '#047857', vein: '#065f46' }, // deep emerald
      { fill: '#059669', vein: '#047857' }, // jungle green
      { fill: '#10b981', vein: '#059669' }, // vibrant green
      { fill: '#4d7c0f', vein: '#3f6212' }, // olive foliage
      { fill: '#d97706', vein: '#b45309' }, // dried autumn teak/sal amber
      { fill: '#f59e0b', vein: '#d97706' }, // golden forest leaf
      { fill: '#65a30d', vein: '#4d7c0f' }, // fresh lime canopy leaf
    ];

    const leafTypes: Array<'sal' | 'bamboo' | 'banyan' | 'fern'> = ['sal', 'bamboo', 'banyan', 'fern'];

    // Balanced number of leaves
    const leafCount = Math.min(Math.floor(width / 45), 36);
    const leaves: LeafParticle[] = [];

    for (let i = 0; i < leafCount; i++) {
      const palette = leafColors[Math.floor(Math.random() * leafColors.length)];
      leaves.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 14 + 10,
        speedY: Math.random() * 0.75 + 0.45,
        speedX: (Math.random() - 0.5) * 0.45,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.025,
        flipX: Math.random() * Math.PI,
        flipSpeedX: Math.random() * 0.03 + 0.015,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.012,
        swayWidth: Math.random() * 1.6 + 0.6,
        opacity: Math.random() * 0.35 + 0.35,
        type: leafTypes[Math.floor(Math.random() * leafTypes.length)],
        color: palette.fill,
        veinColor: palette.vein,
      });
    }

    // Glowing Jungle Fireflies (जुगनू)
    const fireflyCount = Math.min(Math.floor(width / 50), 28);
    const fireflies: FireflyParticle[] = [];
    const colors: Array<'emerald' | 'amber' | 'gold'> = ['emerald', 'amber', 'gold'];

    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 1.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.35 - 0.1, // slightly rising upward
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.035 + 0.02,
        baseAlpha: Math.random() * 0.4 + 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Gliding Forest Birds (Hornbill & Parakeet silhouettes)
    const birds: BirdParticle[] = [
      {
        x: -80,
        y: Math.random() * (height * 0.35) + 40,
        vx: Math.random() * 1.2 + 1.8,
        vy: (Math.random() - 0.5) * 0.3,
        scale: Math.random() * 0.25 + 0.55,
        wingPhase: 0,
        wingSpeed: 0.12,
        opacity: 0.65,
        active: true,
        respawnTimer: 0,
      },
      {
        x: -240,
        y: Math.random() * (height * 0.3) + 70,
        vx: Math.random() * 1.1 + 1.6,
        vy: (Math.random() - 0.5) * 0.25,
        scale: Math.random() * 0.2 + 0.45,
        wingPhase: 0.5,
        wingSpeed: 0.14,
        opacity: 0.55,
        active: true,
        respawnTimer: 0,
      }
    ];

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Leaf drawing helpers
    const drawSalLeaf = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size);
      c.bezierCurveTo(size * 0.6, -size * 0.5, size * 0.6, size * 0.5, 0, size);
      c.bezierCurveTo(-size * 0.6, size * 0.5, -size * 0.6, -size * 0.5, 0, -size);
      c.closePath();
      c.fill();

      c.beginPath();
      c.moveTo(0, -size * 0.9);
      c.lineTo(0, size * 0.9);
      c.stroke();
    };

    const drawBambooLeaf = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size * 1.3);
      c.bezierCurveTo(size * 0.25, -size * 0.3, size * 0.25, size * 0.5, 0, size * 1.3);
      c.bezierCurveTo(-size * 0.25, size * 0.5, -size * 0.25, -size * 0.3, 0, -size * 1.3);
      c.closePath();
      c.fill();

      c.beginPath();
      c.moveTo(0, -size * 1.1);
      c.lineTo(0, size * 1.1);
      c.stroke();
    };

    const drawBanyanLeaf = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size);
      c.bezierCurveTo(size * 0.8, -size * 0.3, size * 0.7, size * 0.7, 0, size * 0.9);
      c.bezierCurveTo(-size * 0.7, size * 0.7, -size * 0.8, -size * 0.3, 0, -size);
      c.closePath();
      c.fill();

      c.beginPath();
      c.moveTo(0, -size * 0.8);
      c.lineTo(0, size * 0.8);
      c.stroke();
    };

    const drawFernLeaf = (c: CanvasRenderingContext2D, size: number) => {
      c.beginPath();
      c.moveTo(0, -size * 1.2);
      c.lineTo(0, size * 1.2);
      c.stroke();

      for (let s = -size * 0.8; s < size * 0.8; s += size * 0.3) {
        c.beginPath();
        c.moveTo(0, s);
        c.quadraticCurveTo(size * 0.45, s - 2, size * 0.4, s + 3);
        c.moveTo(0, s);
        c.quadraticCurveTo(-size * 0.45, s - 2, -size * 0.4, s + 3);
        c.stroke();
      }
    };

    // Wild Forest Bird Drawing
    const drawBird = (c: CanvasRenderingContext2D, b: BirdParticle) => {
      c.save();
      c.translate(b.x, b.y);
      c.scale(b.scale, b.scale);
      c.fillStyle = `rgba(8, 35, 24, ${b.opacity})`;

      const wingSpan = Math.sin(b.wingPhase) * 11;

      // Body
      c.beginPath();
      c.ellipse(0, 0, 9, 3, 0.08, 0, Math.PI * 2);
      c.fill();

      // Head & sharp beak
      c.beginPath();
      c.moveTo(7, -1);
      c.lineTo(15, 0.5);
      c.lineTo(7, 2);
      c.closePath();
      c.fill();

      // Left wing flapping
      c.beginPath();
      c.moveTo(-2, 0);
      c.quadraticCurveTo(-4, -13 + wingSpan, -18, -9 + wingSpan * 1.2);
      c.quadraticCurveTo(-11, -3 + wingSpan * 0.5, -4, 0);
      c.closePath();
      c.fill();

      // Right wing flapping
      c.beginPath();
      c.moveTo(0, 0);
      c.quadraticCurveTo(-2, 11 - wingSpan, -16, 8 - wingSpan * 1.2);
      c.quadraticCurveTo(-9, 3 - wingSpan * 0.5, -2, 0);
      c.closePath();
      c.fill();

      c.restore();
    };

    // Glowing Firefly Drawing with Radial Halo
    const drawFirefly = (c: CanvasRenderingContext2D, f: FireflyParticle) => {
      const currentAlpha = Math.max(0, f.baseAlpha * (0.2 + 0.8 * Math.sin(f.phase)));
      if (currentAlpha <= 0.05) return;

      const glowRadius = f.radius * 4.5;
      const grad = c.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowRadius);

      if (f.color === 'emerald') {
        grad.addColorStop(0, `rgba(52, 211, 153, ${currentAlpha})`);
        grad.addColorStop(0.4, `rgba(16, 185, 129, ${currentAlpha * 0.45})`);
        grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      } else if (f.color === 'amber') {
        grad.addColorStop(0, `rgba(251, 191, 36, ${currentAlpha})`);
        grad.addColorStop(0.4, `rgba(217, 119, 6, ${currentAlpha * 0.45})`);
        grad.addColorStop(1, 'rgba(217, 119, 6, 0)');
      } else {
        grad.addColorStop(0, `rgba(245, 158, 11, ${currentAlpha})`);
        grad.addColorStop(0.4, `rgba(16, 185, 129, ${currentAlpha * 0.3})`);
        grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      }

      c.fillStyle = grad;
      c.beginPath();
      c.arc(f.x, f.y, glowRadius, 0, Math.PI * 2);
      c.fill();

      // Core white pinpoint
      c.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.95})`;
      c.beginPath();
      c.arc(f.x, f.y, f.radius * 0.75, 0, Math.PI * 2);
      c.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Render Fireflies (Behind leaves)
      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i];
        f.phase += f.phaseSpeed;
        f.x += f.vx + Math.sin(f.phase * 0.8) * 0.25;
        f.y += f.vy;

        // Wrap boundaries
        if (f.x < -20) f.x = width + 20;
        if (f.x > width + 20) f.x = -20;
        if (f.y < -20) f.y = height + 20;
        if (f.y > height + 20) f.y = -20;

        // Mouse gentle repulsion
        const dx = f.x - mouseX;
        const dy = f.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          const force = (80 - dist) / 80;
          f.x += (dx / dist) * force * 1.5;
          f.y += (dy / dist) * force * 1.5;
        }

        drawFirefly(ctx, f);
      }

      // 2. Render Gliding Wild Birds
      for (let b = 0; b < birds.length; b++) {
        const bird = birds[b];
        if (bird.active) {
          bird.wingPhase += bird.wingSpeed;
          bird.x += bird.vx;
          bird.y += bird.vy + Math.sin(bird.wingPhase * 0.5) * 0.35;

          drawBird(ctx, bird);

          if (bird.x > width + 100) {
            bird.active = false;
            bird.respawnTimer = Math.floor(Math.random() * 400 + 300); // 5 to 12 seconds respawn
          }
        } else {
          bird.respawnTimer--;
          if (bird.respawnTimer <= 0) {
            bird.active = true;
            bird.x = -100;
            bird.y = Math.random() * (height * 0.35) + 40;
            bird.vx = Math.random() * 1.1 + 1.7;
            bird.vy = (Math.random() - 0.5) * 0.3;
            bird.scale = Math.random() * 0.25 + 0.45;
          }
        }
      }

      // 3. Render Falling Leaves
      for (let i = 0; i < leaves.length; i++) {
        const l = leaves[i];

        l.swayAngle += l.swaySpeed;
        l.x += l.speedX + Math.sin(l.swayAngle) * l.swayWidth;
        l.y += l.speedY;

        l.rotation += l.rotationSpeed;
        l.flipX += l.flipSpeedX;

        // Interactive wind gust to cursor
        const dx = l.x - mouseX;
        const dy = l.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          l.x += (dx / dist) * force * 2.5;
          l.y += (dy / dist) * force * 2.5;
        }

        if (l.y > height + 40) {
          l.y = -30;
          l.x = Math.random() * width;
        }
        if (l.x > width + 40) l.x = -30;
        if (l.x < -40) l.x = width + 30;

        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rotation);
        const scaleX = Math.cos(l.flipX);
        ctx.scale(scaleX, 1);

        ctx.globalAlpha = l.opacity;
        ctx.fillStyle = l.color;
        ctx.strokeStyle = l.veinColor;
        ctx.lineWidth = 1;

        if (l.type === 'sal') {
          drawSalLeaf(ctx, l.size);
        } else if (l.type === 'bamboo') {
          drawBambooLeaf(ctx, l.size);
        } else if (l.type === 'banyan') {
          drawBanyanLeaf(ctx, l.size);
        } else {
          drawFernLeaf(ctx, l.size);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [enabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}
