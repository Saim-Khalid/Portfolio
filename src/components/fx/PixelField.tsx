import { useEffect, useRef } from 'react';

type RGB = [number, number, number];

const CELL = 18; // grid pitch in CSS px
const SIZE = 3; // pixel square size
const RADIUS = 150; // cursor influence radius

/** Read an HSL triplet CSS variable ("166 64% 64%") and convert to RGB. */
function readColor(name: string): RGB {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const [h, s, l] = raw.split(/\s+/).map((v) => parseFloat(v));
  const sat = s / 100;
  const lig = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sat * Math.min(lig, 1 - lig);
  const f = (n: number) => lig - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

/**
 * Field of tiny squares that twinkle, glow around the cursor and get
 * swept by occasional "data pulse" waves. Pauses off-screen and renders
 * a single static frame when the user prefers reduced motion.
 */
const PixelField = ({ className = '' }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let seeds: Float32Array = new Float32Array(0);
    let primary: RGB = readColor('--primary');
    let lilac: RGB = readColor('--lilac');
    let base: RGB = readColor('--muted-foreground');
    const pointer = { x: -9999, y: -9999, active: false };
    let pulse = { y: -1, speed: 0 };
    let raf = 0;
    let running = false;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      seeds = new Float32Array(cols * rows);
      for (let i = 0; i < seeds.length; i++) seeds[i] = Math.random();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;

      // Launch a new horizontal pulse every few seconds
      if (pulse.y < 0 && Math.random() < 0.004) pulse = { y: 0, speed: 2 + Math.random() * 2 };
      if (pulse.y >= 0) {
        pulse.y += pulse.speed;
        if (pulse.y > height + 60) pulse.y = -1;
      }

      for (let r = 0; r < rows; r++) {
        const y = r * CELL;
        for (let c = 0; c < cols; c++) {
          const x = c * CELL;
          const seed = seeds[r * cols + c];

          // Ambient twinkle
          let alpha = 0.05 + 0.07 * (0.5 + 0.5 * Math.sin(time * (0.6 + seed) + seed * 40));
          let glow = 0;

          if (pointer.active) {
            const dx = x - pointer.x;
            const dy = y - pointer.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < RADIUS) glow = Math.max(glow, (1 - d / RADIUS) ** 2);
          }
          if (pulse.y >= 0) {
            const dp = Math.abs(y - pulse.y);
            if (dp < 40 && seed > 0.55) glow = Math.max(glow, (1 - dp / 40) * 0.6);
          }

          alpha += glow * 0.85;
          const tint = seed > 0.8 ? lilac : primary;
          const rr = base[0] + (tint[0] - base[0]) * glow;
          const gg = base[1] + (tint[1] - base[1]) * glow;
          const bb = base[2] + (tint[2] - base[2]) * glow;
          ctx.fillStyle = `rgba(${rr | 0},${gg | 0},${bb | 0},${alpha})`;
          const s = SIZE + glow * 2;
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.y >= 0 && pointer.y <= rect.height;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    // Re-read colours when the theme class on <html> flips
    const themeObserver = new MutationObserver(() => {
      primary = readColor('--primary');
      lilac = readColor('--lilac');
      base = readColor('--muted-foreground');
      if (reduceMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    visibility.observe(canvas);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    resizeObserver.observe(canvas);

    resize();
    draw(0);
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      stop();
      themeObserver.disconnect();
      visibility.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
};

export default PixelField;
