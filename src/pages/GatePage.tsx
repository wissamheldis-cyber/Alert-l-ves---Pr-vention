import { ArrowRight, Building2, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import React, { useState, MouseEvent, useRef } from "react";

function ParallaxCard({ to, theme, icon: Icon, title, text, onNavigate }: any) {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      role="button"
      tabIndex={0}
      className={`choice-card ${theme === "dark" ? "dark-choice" : theme === "red" ? "red-choice" : ""}`}
      style={{ transform, transition: "transform 0.15s ease-out", position: "relative" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => onNavigate(to, e)}
      onKeyDown={(e) => e.key === "Enter" && onNavigate(to, e as any)}
    >
      <div 
        className="glare" 
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, white, transparent 60%)`,
          opacity: glare.opacity,
          pointerEvents: "none",
          transition: "opacity 0.2s ease",
          borderRadius: "inherit"
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <span className="icon-badge">
          <Icon size={24} />
        </span>
        <h2 style={{ marginTop: 22 }}>{title}</h2>
        <p className={theme === "white" ? "muted" : ""}>{text}</p>
      </div>
      <div style={{ marginTop: "32px", display: "flex", justifyContent: "flex-start", position: "relative", zIndex: 1 }}>
        {theme === "white" ? (
          <span className="btn btn-dark" style={{ pointerEvents: "none" }}>
            Entrer <ArrowRight size={20} />
          </span>
        ) : theme === "red" ? (
          <span className="btn btn-secondary" style={{ pointerEvents: "none", color: "var(--ae-red)", border: "none", background: "white" }}>
            Entrer <ArrowRight size={20} />
          </span>
        ) : (
          <span className="arrow">
            Entrer <ArrowRight size={20} />
          </span>
        )}
      </div>
    </div>
  );
}

export function GatePage() {
  const [exitingTo, setExitingTo] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (to: string, e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setExitingTo(to);
    setTimeout(() => {
      navigate(to);
    }, 600);
  };

  return (
    <main className={`gate animate-fade-in ${exitingTo ? "pointer-events-none" : ""}`}>
      <Helmet>
        <title>Alert’Élèves - Portail de choix</title>
        <meta name="description" content="Choisissez votre espace Alert’Élèves (Établissements & adultes ou Élèves) pour accéder aux programmes, documents et ressources." />
      </Helmet>
      
      <section className={`gate-card ${exitingTo ? "fade-out" : ""}`} aria-labelledby="gate-title" style={{ transition: "opacity 0.3s ease" }}>
        <div className="gate-logo">
          <img src="/assets/AElogo.png" alt="Alert’Élèves" />
          <p className="kicker" style={{ marginTop: 24 }}>Prévention - Éducation - Confiance</p>
          <h1 id="gate-title" className="h2">Bienvenue<span className="red-dot">.</span></h1>
          <p className="lead" style={{ marginInline: "auto", textAlign: "center" }}>
            Choisissez votre espace pour accéder à un contenu adapté à vos besoins.
          </p>
        </div>

        <div className="choice-grid">
          <ParallaxCard
            to="/etablissement"
            theme="red"
            icon={Building2}
            title="Espace établissement & parents"
            text="Programmes, documents, actualités et demande d’intervention."
            onNavigate={handleNavigate}
          />
          <ParallaxCard
            to="/eleve"
            theme="white"
            icon={Users}
            title="Espace élèves"
            text="Ressources, quiz, contenus courts et outils pour comprendre et agir."
            onNavigate={handleNavigate}
          />
        </div>
      </section>

      {exitingTo && (
        <div className="blur-overlay">
          <h2>Bienvenue<span className="red-dot">.</span></h2>
        </div>
      )}
    </main>
  );
}
