'use client';

import { useEffect, useRef } from 'react';

type NetNode = { x: number; y: number; vx: number; vy: number; phase: number };
type Pointer = { x: number; y: number; active: boolean };

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

export default function NeuralNetBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const context = c.getContext('2d');
    if (!context) return;

    const canvasEl = c as HTMLCanvasElement;
    const ctx = context as CanvasRenderingContext2D;

    // ---- ТОНКАЯ НАСТРОЙКА (увеличили плотность, толщину и скорость чуть-чуть)
    const DENSITY_DIVISOR = 11000;            // было 14000 → узлов БОЛЬШЕ
    const NODES_MIN = 110;
    const NODES_MAX = 240;

    const MAXDIST_FACTOR = 0.065;             // радиус связей (слегка меньше = чище при большей плотности)
    const MAXDIST_MIN = 95;
    const MAXDIST_MAX = 150;

    const FOCUS_RADIUS_FACTOR = 0.12;
    const FOCUS_MIN = 190;
    const FOCUS_MAX = 270;

    const BASE_LINE_WIDTH = 0.9;              // было 0.75 → чуть толще
    const BASE_LINE_ALPHA = 0.065;            // лёгкий прирост яркости для чёткости
    const FOCUS_LINE_ALPHA_BOOST = 0.24;      // усиление яркости в зоне курсора
    const FOCUS_LINE_WIDTH_BOOST = 0.55;      // было 0.35 → заметнее толще при наведении

    const NODE_BASE_R = 1.25;                 // точки крупнее
    const NODE_BASE_ALPHA = 0.34;
    const NODE_R_BOOST = 1.1;                 // рост радиуса в фокусе
    const NODE_ALPHA_BOOST = 0.55;

    const VEL = 0.05;                         // немного быстрее
    const DRIFT_X = 0.34;                     // синусоидальный дрейф: чуть быстрее
    const DRIFT_Y = 0.30;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const pointer: Pointer = { x: 0, y: 0, active: false };
    let nodes: NetNode[] = [];
    let maxDist = 120;
    let focusRadius = 200;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    function resize(): void {
      const rect = canvasEl.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      dpr = Math.min(window.devicePixelRatio || 1, 3);
      canvasEl.width = Math.floor(width * dpr);
      canvasEl.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const area = width * height;
      const target = clamp(Math.floor(area / DENSITY_DIVISOR), NODES_MIN, NODES_MAX);
      maxDist = clamp(Math.sqrt(area) * MAXDIST_FACTOR, MAXDIST_MIN, MAXDIST_MAX);
      focusRadius = clamp(Math.sqrt(area) * FOCUS_RADIUS_FACTOR, FOCUS_MIN, FOCUS_MAX);

      nodes = Array.from({ length: target }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-VEL, VEL),
        vy: rand(-VEL, VEL),
        phase: rand(0, Math.PI * 2),
      }));
    }

    function trackPointer(e: PointerEvent): void {
      const rect = canvasEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.active = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      pointer.x = x;
      pointer.y = y;
    }

    function tick(now: number): void {
      const t = now * 0.001;

      ctx.clearRect(0, 0, width, height);

      // узлы: плавный дрейф + мягкое притяжение к курсору
      for (const n of nodes) {
        n.x += n.vx + Math.sin(t * DRIFT_X + n.phase) * 0.02;
        n.y += n.vy + Math.cos(t * DRIFT_Y + n.phase) * 0.02;

        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < focusRadius) {
            const f = (1 - dist / focusRadius) * 0.3;
            n.x += dx * 0.0065 * f;
            n.y += dy * 0.0065 * f;
          }
        }

        // wrap
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      // связи
      ctx.lineCap = 'round';
      for (let i = 0; i < nodes.length; i++) {
        const ni = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nj = nodes[j];
          const dx = nj.x - ni.x;
          const dy = nj.y - ni.y;
          const dist = Math.hypot(dx, dy);
          if (dist > maxDist) continue;

          let alpha = BASE_LINE_ALPHA * (1 - dist / maxDist);
          let widthMul = BASE_LINE_WIDTH;

          if (pointer.active) {
            const mx = (ni.x + nj.x) * 0.5;
            const my = (ni.y + nj.y) * 0.5;
            const dpm = Math.hypot(pointer.x - mx, pointer.y - my);
            if (dpm < focusRadius) {
              const k = 1 - dpm / focusRadius;
              alpha += FOCUS_LINE_ALPHA_BOOST * k;
              widthMul += FOCUS_LINE_WIDTH_BOOST * k; // толще у курсора
            }
          }

          if (alpha > 0.01) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`; // cyan-400
            ctx.lineWidth = widthMul;                         // ~0.9–1.45
            ctx.beginPath();
            ctx.moveTo(ni.x, ni.y);
            ctx.lineTo(nj.x, nj.y);
            ctx.stroke();
          }
        }
      }

      // узлы (точки)
      for (const n of nodes) {
        let r = NODE_BASE_R;
        let alpha = NODE_BASE_ALPHA;
        if (pointer.active) {
          const d = Math.hypot(pointer.x - n.x, pointer.y - n.y);
          if (d < focusRadius) {
            const k = 1 - d / focusRadius;
            r += NODE_R_BOOST * k;
            alpha += NODE_ALPHA_BOOST * k;
          }
        }
        ctx.fillStyle = `rgba(129, 233, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', trackPointer);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', trackPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-bg" aria-hidden="true" />;
}
