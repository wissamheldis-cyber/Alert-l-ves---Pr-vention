import { useEffect, useRef } from "react";

export function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ targetX: -9999, targetY: -9999, currentX: -9999, currentY: -9999 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (glowRef.current) {
        glowRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation avec inertie / lerp fluide
    const updateGlow = () => {
      const { targetX, targetY, currentX, currentY } = posRef.current;
      if (targetX !== -9999) {
        if (currentX === -9999) {
          posRef.current.currentX = targetX;
          posRef.current.currentY = targetY;
        } else {
          posRef.current.currentX += (targetX - currentX) * 0.08;
          posRef.current.currentY += (targetY - currentY) * 0.08;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${posRef.current.currentX}px, ${posRef.current.currentY}px, 0)`;
        }
      }
      animFrameRef.current = requestAnimationFrame(updateGlow);
    };

    animFrameRef.current = requestAnimationFrame(updateGlow);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        // Subtile texture & dégradé pour la profondeur
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(240, 243, 246, 0.8) 0%, rgba(255, 255, 255, 0) 70%),
          radial-gradient(circle at 100% 100%, rgba(245, 246, 248, 0.6) 0%, rgba(255, 255, 255, 0) 50%)
        `,
        pointerEvents: "none"
      }}
      aria-hidden="true"
    >
      {/* Subtile grille de profondeur très estompée */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          opacity: 0.7
        }}
      />

      {/* Grosse lueur douce avec très faible opacité qui suit le curseur */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          top: -350,
          left: -350,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(225, 6, 0, 0.065) 0%, rgba(225, 6, 0, 0.025) 40%, rgba(0, 0, 0, 0) 75%)",
          filter: "blur(40px)",
          opacity: 0,
          transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform, opacity",
          pointerEvents: "none"
        }}
      />
    </div>
  );
}
