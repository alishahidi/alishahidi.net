'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  enabled?: boolean;
  opacity?: number;
}

export function MatrixRain({ enabled = true, opacity = 0.1 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced-motion preference: render nothing / no animation
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    // Characters to use
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');

    // Column settings
    const fontSize = 14;
    let drops: number[] = [];

    // Size the canvas and (re)build the columns to fill the current width
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / fontSize);
      const next = Array(columns).fill(1);
      // preserve existing drop positions where possible
      for (let i = 0; i < Math.min(drops.length, columns); i++) next[i] = drops[i];
      drops = next;
    };
    resize();
    window.addEventListener('resize', resize);

    // Animation
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Plasma cyan stardust (distant, faint — overall opacity from canvas wrapper)
      ctx.fillStyle = '#48dfe3';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly after it falls off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
}
