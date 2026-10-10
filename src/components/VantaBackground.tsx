import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVy: number;   // vitesse de montée de base
  radius: number;
  opacity: number;
  opacitySpeed: number;
  gravity: number;
  dying: boolean;
}

function createParticle(
  canvasWidth: number,
  canvasHeight: number,
  spreadY = false
): Particle {
  const radius = Math.random() * 2.5 + 0.8;
  const baseVy = -(Math.random() * 0.65 + 0.25);
  return {
    x: Math.random() * canvasWidth,
    y: spreadY ? Math.random() * canvasHeight : canvasHeight + Math.random() * 60,
    vx: 0,
    vy: baseVy,
    baseVy,
    radius,
    opacity: spreadY ? Math.random() * 0.7 + 0.2 : 0.05,
    opacitySpeed: (Math.random() * 0.003 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
    gravity: Math.random() * 0.005 + 0.001,
    dying: false,
  };
}

export function VantaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 200;
    const LINK_DISTANCE = 130;
    const MOUSE_RADIUS = 120;      // zone d'influence de la souris
    const MOUSE_FORCE = 2.2;       // intensité de la répulsion

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Suivi souris
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999, active: false };
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // Init particules sur toute la page
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(canvas.width, canvas.height, true)
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // ── Liaisons ─────────────────────────────────────────────────
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * Math.min(a.opacity, b.opacity) * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(225, 6, 0, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // ── Liaisons souris → particules proches ─────────────────────
      if (mouse.active) {
        for (const p of particles) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const alpha = (1 - dist / MOUSE_RADIUS) * p.opacity * 0.7;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(225, 6, 0, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Point curseur
        const cursorGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 18);
        cursorGrad.addColorStop(0, "rgba(225, 6, 0, 0.35)");
        cursorGrad.addColorStop(1, "rgba(225, 6, 0, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = cursorGrad;
        ctx.fill();
      }

      // ── Mise à jour et dessin des particules ─────────────────────
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Fade-out en haut
        if (p.y < 40 && !p.dying) p.dying = true;

        if (p.dying) {
          p.opacity -= 0.014;
          if (p.opacity <= 0) {
            particles[i] = createParticle(canvas.width, canvas.height, false);
            continue;
          }
        } else {
          p.opacity += p.opacitySpeed;
          if (p.opacity > 0.82) { p.opacity = 0.82; p.opacitySpeed *= -1; }
          if (p.opacity < 0.1)  { p.opacity = 0.1;  p.opacitySpeed *= -1; }
        }

        // ── Répulsion souris ──────────────────────────────────────
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mouse.active && mDist < MOUSE_RADIUS && mDist > 0) {
          const force = (1 - mDist / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx += (mdx / mDist) * force * 0.08;
          p.vy += (mdy / mDist) * force * 0.08;
        }

        // Retour progressif vers vitesse de base (amortissement)
        p.vx *= 0.92;                          // freinage horizontal
        p.vy = p.vy * 0.96 + p.baseVy * 0.04; // retour vers montée naturelle

        // Pesanteur légère
        p.vy += p.gravity;
        if (p.vy > -0.06) p.vy = -0.06;       // montée minimale garantie

        p.x += p.vx;
        p.y += p.vy;

        // Wrap horizontal
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        // Dessin halo + cœur
        const haloR = p.radius * 3;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
        grad.addColorStop(0,    `rgba(235, 10, 0, ${p.opacity})`);
        grad.addColorStop(0.45, `rgba(210, 0, 0, ${p.opacity * 0.5})`);
        grad.addColorStop(1,    "rgba(180, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 90, 70, ${p.opacity})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        background: "#f8f5f5",
      }}
      aria-hidden="true"
    />
  );
}
