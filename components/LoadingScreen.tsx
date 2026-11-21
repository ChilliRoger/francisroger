"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 2900; // ms until 100% (page.tsx removes the screen at 3300ms)
const BAR_WIDTH = 36;
const DONUT_W = 80;
const DONUT_H = 22;
const SHADES = ".,-~:;=!*#$@";
const RAIN_CHARS = "01<>/{}[]=+*#$%&ｱｲｳｴｵｶｷｸ";
const FONT_SIZE = 16;
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace";

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const donutRef = useRef<HTMLPreElement>(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const donut = donutRef.current;
    if (!canvas || !donut) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let drops: number[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const cols = Math.ceil(w / FONT_SIZE);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();
    let A = 0;
    let B = 0;
    let last = start;
    let lastRain = 0;
    let lastUi = 0;
    let raf = 0;

    const drawRain = (done: boolean) => {
      ctx.fillStyle = "rgba(0,0,0,0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${FONT_SIZE}px ${MONO}`;
      for (let i = 0; i < drops.length; i++) {
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;
        const ch = RAIN_CHARS[Math.floor(Math.random() * RAIN_CHARS.length)];
        // Trail glyph (previous head) in theme colour, new head bright white-ish.
        ctx.fillStyle = done ? "rgba(74,222,128,0.85)" : "rgba(168,85,247,0.85)";
        ctx.fillText(ch, x, y - FONT_SIZE);
        ctx.fillStyle = done ? "#dcfce7" : "#f3e8ff";
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const renderDonut = () => {
      const b = new Array(DONUT_W * DONUT_H).fill(" ");
      const z = new Array(DONUT_W * DONUT_H).fill(0);
      const sinA = Math.sin(A);
      const cosA = Math.cos(A);
      const cosB = Math.cos(B);
      const sinB = Math.sin(B);
      for (let j = 0; j < 6.28; j += 0.07) {
        const ct = Math.cos(j);
        const st = Math.sin(j);
        for (let i = 0; i < 6.28; i += 0.03) {
          const sp = Math.sin(i);
          const cp = Math.cos(i);
          const hh = ct + 2;
          const D = 1 / (sp * hh * sinA + st * cosA + 5);
          const t = sp * hh * cosA - st * sinA;
          const x = Math.floor(DONUT_W / 2 + 30 * D * (cp * hh * cosB - t * sinB));
          const y = Math.floor(DONUT_H / 2 + 15 * D * (cp * hh * sinB + t * cosB));
          const o = x + DONUT_W * y;
          const N = Math.floor(8 * ((st * sinA - sp * ct * cosA) * cosB - sp * ct * sinA - st * cosA - cp * ct * sinB));
          if (y > 0 && y < DONUT_H && x > 0 && x < DONUT_W && D > z[o]) {
            z[o] = D;
            b[o] = SHADES[N > 0 ? N : 0];
          }
        }
      }
      let out = "";
      for (let r = 0; r < DONUT_H; r++) out += b.slice(r * DONUT_W, (r + 1) * DONUT_W).join("") + "\n";
      donut.textContent = out;
    };

    const tick = (now: number) => {
      const elapsed = now - start;
      const dt = Math.min(64, now - last);
      last = now;

      const p = Math.min(100, (elapsed / DURATION) * 100);
      progressRef.current = p;
      const done = p >= 100;

      // Spin faster as loading progresses.
      const speed = 1 + p / 40;
      A += 0.0016 * dt * speed;
      B += 0.0009 * dt * speed;
      renderDonut();

      if (now - lastRain > 45) {
        lastRain = now;
        drawRain(done);
      }
      if (now - lastUi > 80 || done) {
        lastUi = now;
        setProgress(Math.round(p));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const done = progress >= 100;
  const filled = Math.round((progress / 100) * BAR_WIDTH);
  const bar = "#".repeat(filled) + ".".repeat(BAR_WIDTH - filled);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black overflow-hidden select-none"
      style={{ fontFamily: MONO }}
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Matrix-style rain */}
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full opacity-60" />

      {/* Darken the centre so the donut and text stay readable, vignette the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 45% at 50% 45%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%), radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Foreground */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <pre
          ref={donutRef}
          aria-hidden="true"
          className={`m-0 leading-[1] transition-colors duration-300 ${
            done ? "text-green-300" : "text-purple-300"
          }`}
          style={{
            // Scale with the viewport: 80 cols x 22 rows must fit width and height.
            fontSize: "max(5px, min(1.45vw, 2.6vh))",
            textShadow: done
              ? "0 0 12px rgba(74,222,128,0.9), 0 0 32px rgba(74,222,128,0.5)"
              : "0 0 10px rgba(168,85,247,0.9), 0 0 28px rgba(168,85,247,0.45)",
          }}
        />

        {/* ASCII progress bar */}
        <div
          className={`mt-8 text-xs sm:text-sm whitespace-pre transition-colors duration-300 ${
            done ? "text-green-300" : "text-purple-300"
          }`}
        >
          [<span className={done ? "text-green-400" : "text-purple-400"}>{bar}</span>]{" "}
          {String(progress).padStart(3, " ")}%
        </div>
      </div>
    </div>
  );
}
