import { useEffect, useRef } from 'react';

const COLORS = ['#F5941F', '#9B2C8F', '#2E3A9B'];

export default function RollerCanvas({ size = 620 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    const strokes = COLORS.map((color, i) => ({
      progress: 0,
      speed: 0.006 + i * 0.002,
      color,
      yOff: -60 + i * 60,
      delay: i * 40,
      frame: 0,
    }));

    function drawStroke(s) {
      const cy = h * 0.5 + s.yOff;
      const amplitude = 150;
      ctx.save();
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 26;
      ctx.lineCap = 'round';
      ctx.globalAlpha = 0.85;
      ctx.beginPath();
      const steps = 80;
      const p = s.progress;
      for (let i = 0; i <= steps * p; i++) {
        const t = i / steps;
        const x = t * w;
        const y = cy + Math.sin(t * Math.PI * 1.4 + s.yOff * 0.02) * amplitude * Math.sin(t * Math.PI);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }

    let rafId;
    function animate() {
      ctx.clearRect(0, 0, w, h);
      strokes.forEach((s) => {
        s.frame++;
        if (s.frame > s.delay) {
          s.progress += s.speed;
          if (s.progress > 1.3) s.progress = -0.1;
        }
        drawStroke(s);
      });
      rafId = requestAnimationFrame(animate);
    }
    animate();

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="stroke-wrap">
      <canvas ref={canvasRef} id="strokeCanvas" width={size} height={size} />
    </div>
  );
}
