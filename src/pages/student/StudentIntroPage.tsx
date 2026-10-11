import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  X, 
  AlertTriangle, 
  Flame, 
  Wind, 
  Skull, 
  HelpCircle,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

type StorySlide = {
  id: number;
  badge?: string;
  badgeColor?: string;
  theme?: "puff" | "proto" | "ptc" | "dark";
  title: string;
  subtitle?: string;
  highlightText?: string;
  isActionScreen?: boolean;
  imagePlaceholder?: {
    label: string;
    description: string;
    accentColor: string;
    icon: any;
  };
};

const slides: StorySlide[] = [
  // Écran 0 · Fond noir
  {
    id: 0,
    theme: "dark",
    title: "Tu veux savoir ce qu'il y a vraiment dedans ?",
    subtitle: "Ce qu'on ne te dit pas sur les puffs, le proto et le PTC.",
    imagePlaceholder: {
      label: "MYSTÈRE & RÉVÉLATIONS",
      description: "Ce qu'il y a vraiment à l'intérieur",
      accentColor: "#e10600",
      icon: AlertTriangle
    }
  },

  // LA PUFF
  // Écran 1 · Une puff pastel, lumière douce et chaude, presque mignonne
  {
    id: 1,
    badge: "LA PUFF · 1/3",
    badgeColor: "#ff758c",
    theme: "puff",
    title: "Elle a l'air inoffensive.",
    subtitle: "Parfum barbe à papa, pastel, format poche. Presque mignonne.",
    imagePlaceholder: {
      label: "IMAGE : PUFF PASTEL",
      description: "Lumière douce et chaude, format bonbon presque mignon",
      accentColor: "#ff758c",
      icon: Flame
    }
  },

  // Écran 2 · La même puff, démontée, toutes les pièces qui flottent
  {
    id: 2,
    badge: "LA PUFF · 2/3",
    badgeColor: "#ff4b4b",
    theme: "puff",
    title: "Batterie. Résistance. Nicotine.",
    subtitle: "Un circuit électronique, des métaux chauffés, un solvant chimique.",
    imagePlaceholder: {
      label: "IMAGE : PUFF DÉMONTÉE",
      description: "Toutes les pièces qui flottent : batterie, résistance, liquide",
      accentColor: "#ff4b4b",
      icon: Flame
    }
  },

  // Écran 3 · Fond noir, chiffre géant en rouge
  {
    id: 3,
    badge: "LA PUFF · 3/3",
    badgeColor: "#e10600",
    theme: "puff",
    highlightText: "+ de 200 cigarettes.",
    title: "La nicotine d'une puff 16K.",
    subtitle: "Autant de nicotine que 10 paquets entiers concentrés dans une seule fiole.",
    imagePlaceholder: {
      label: "CHIFFRE CHOC : 16K PUFF",
      description: "Équivalent nicotine : 200+ cigarettes concentrées",
      accentColor: "#e10600",
      icon: AlertTriangle
    }
  },

  // LE PROTO
  // Écran 4 · Début : soirée, ballons colorés, néons, silhouettes floues
  {
    id: 4,
    badge: "LE PROTO · 1/2",
    badgeColor: "#7928ca",
    theme: "proto",
    title: "Ça commence par un ballon.",
    subtitle: "Entre potes, un fou rire de 30 secondes en soirée.",
    imagePlaceholder: {
      label: "IMAGE : SOIRÉE & BALLONS",
      description: "Ambiance fête, néons, ballons colorés",
      accentColor: "#a855f7",
      icon: Wind
    }
  },

  // Écran 5 · Fin : couloir d'hôpital vide, fauteuil roulant, lumière froide
  {
    id: 5,
    badge: "LE PROTO · 2/2",
    badgeColor: "#0070f3",
    theme: "proto",
    title: "Ça peut finir sans pouvoir marcher.",
    subtitle: "Atteintes neurologiques sévères, moelle épinière endommagée, perte de motricité.",
    imagePlaceholder: {
      label: "IMAGE : COULOIR D'HÔPITAL",
      description: "Lumière froide, fauteuil roulant, séquelles motrices",
      accentColor: "#0070f3",
      icon: Wind
    }
  },

  // LE PTC
  // Écran 6 · Début : une vapoteuse qui passe de main en main, lumière violette
  {
    id: 6,
    badge: "LE PTC · 1/2",
    badgeColor: "#9333ea",
    theme: "ptc",
    title: "On t'a dit que c'était comme une puff.",
    subtitle: "« Pète Ton Crâne » : un liquide synthétique inconnu versé dans un réservoir.",
    imagePlaceholder: {
      label: "IMAGE : VAPOTEUSE & PTC",
      description: "Passe de main en main, ambiance violette",
      accentColor: "#9333ea",
      icon: Skull
    }
  },

  // Écran 7 · Fin : salle d'attente des urgences vide, lumière blanche
  {
    id: 7,
    badge: "LE PTC · 2/2",
    badgeColor: "#e10600",
    theme: "ptc",
    highlightText: "Une taffe.",
    title: "Les urgences.",
    subtitle: "Convulsions, perte de conscience, arrêt cardio-respiratoire.",
    imagePlaceholder: {
      label: "IMAGE : SALLE DES URGENCES",
      description: "Lumière blanche chirurgicale, coma ou malaise brutal",
      accentColor: "#e10600",
      icon: Skull
    }
  },

  // Écran 8 · Fond noir - Fin
  {
    id: 8,
    theme: "dark",
    title: "Maintenant tu sais.",
    subtitle: "Le reste, c'est toi qui décides.",
    isActionScreen: true,
    imagePlaceholder: {
      label: "LE CHOIX T'APPARTIENT",
      description: "Prendre conscience et agir en autonomie",
      accentColor: "#ffffff",
      icon: HelpCircle
    }
  }
];

export function StudentIntroPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);

  const totalSteps = slides.length;
  const currentSlide = slides[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("alert_eleves_student_intro_seen", "true");
    navigate("/eleve/accueil");
  };

  // Clic n'importe où sur l'écran pour avancer (sauf sur le dernier écran avec les 3 boutons ou sur Passer)
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si l'utilisateur clique sur un bouton interactif ou un lien, ne pas intercepter
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }

    const { clientX } = e;
    const screenWidth = window.innerWidth;

    // Clic dans les 25% gauches de l'écran = retour en arrière
    if (clientX < screenWidth * 0.25 && currentStep > 0) {
      handlePrev();
    } else if (currentStep < totalSteps - 1) {
      // Clic ailleurs = avancer au suivant
      handleNext();
    }
  };

  // Gestion du Swipe tactile
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        handleComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep]);

  const IconComp = currentSlide.imagePlaceholder?.icon || AlertTriangle;

  return (
    <>
      <Helmet>
        <title>Alert’Élèves · Expérience Élève</title>
        <meta name="description" content="Tu veux savoir ce qu'il y a vraiment dedans ? Découvrez la vérité sur la puff, le proto et le PTC." />
      </Helmet>

      {/* CONTENEUR PLEIN ÉCRAN - CLIC PARTOUT POUR DÉFILER */}
      <div 
        onClick={handleScreenClick}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          background: "#080808",
          backgroundImage: `
            radial-gradient(circle at 50% 20%, rgba(225, 6, 0, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(30, 30, 30, 0.5) 0%, transparent 60%)
          `,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(12px, 3vh, 24px) clamp(16px, 4vw, 32px)",
          color: "#ffffff",
          fontFamily: "'Outfit', system-ui, sans-serif",
          overflow: "hidden",
          cursor: currentStep < totalSteps - 1 ? "pointer" : "default",
          userSelect: "none"
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* TOP BAR : Barres de progression + Bouton Passer */}
        <header 
          style={{
            width: "100%",
            maxWidth: "580px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 10
          }}
        >
          {/* Barres de progression segments */}
          <div style={{ display: "flex", gap: "5px", width: "100%" }}>
            {slides.map((s, index) => (
              <div 
                key={s.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentStep(index);
                }}
                style={{
                  flex: 1,
                  height: "3.5px",
                  borderRadius: "999px",
                  background: index < currentStep 
                    ? "#ffffff" 
                    : index === currentStep 
                      ? "var(--ae-red, #e10600)" 
                      : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "background 0.25s ease"
                }}
              />
            ))}
          </div>

          {/* Navigation supérieure */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }}>
                Alert'Élèves
              </span>
              {currentSlide.badge && (
                <span 
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: currentSlide.badgeColor || "#fff",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    border: `1px solid ${currentSlide.badgeColor ? `${currentSlide.badgeColor}40` : "rgba(255,255,255,0.2)"}`
                  }}
                >
                  {currentSlide.badge}
                </span>
              )}
            </div>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleComplete();
              }}
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "999px",
                padding: "6px 14px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s"
              }}
            >
              <span>Passer l'intro</span>
              <X size={14} />
            </button>
          </div>
        </header>


        {/* LE CADRE CENTRAL INTERACTIF AVEC TRANSITION FLOU -> CLAIR */}
        <main 
          key={currentStep}
          className="story-blur-transition"
          style={{
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto 0"
          }}
        >
          {/* 1 · CADRE DE L'IMAGE (Format carré) */}
          <div 
            style={{
              width: "min(330px, 66vw)",
              height: "min(330px, 66vw)",
              aspectRatio: "1 / 1",
              borderRadius: "24px",
              background: "linear-gradient(145deg, #181818 0%, #111111 60%, #0d0d0d 100%)",
              border: `1.5px solid ${currentSlide.badgeColor ? `${currentSlide.badgeColor}40` : "rgba(255,255,255,0.15)"}`,
              boxShadow: `0 20px 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 45px ${currentSlide.badgeColor ? `${currentSlide.badgeColor}20` : "transparent"}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              padding: "1.5rem",
              textAlign: "center"
            }}
          >
            {/* Lueur d'ambiance */}
            <div 
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, ${currentSlide.badgeColor || "#e10600"}25 0%, transparent 70%)`,
                pointerEvents: "none"
              }}
            />

            {/* Chiffre choc si écran 3 ou 7 */}
            {currentStep === 3 ? (
              <div style={{ position: "relative", zIndex: 2 }}>
                <div 
                  style={{
                    fontSize: "clamp(2.5rem, 7vw, 3.8rem)",
                    fontWeight: 900,
                    color: "var(--ae-red, #e10600)",
                    lineHeight: 1,
                    textShadow: "0 0 35px rgba(225,6,0,0.7)"
                  }}
                >
                  +200
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 800, marginTop: "8px", color: "#fff", letterSpacing: "0.05em" }}>
                  CIGARETTES
                </div>
              </div>
            ) : currentStep === 7 ? (
              <div style={{ position: "relative", zIndex: 2 }}>
                <div 
                  style={{
                    fontSize: "clamp(2.4rem, 6.5vw, 3.4rem)",
                    fontWeight: 900,
                    color: "var(--ae-red, #e10600)",
                    lineHeight: 1.05,
                    textShadow: "0 0 35px rgba(225,6,0,0.7)"
                  }}
                >
                  1 TAFFE.
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 900, marginTop: "6px", color: "#fff" }}>
                  URGENCES
                </div>
              </div>
            ) : (
              /* Icône & Espace d'illustration pour votre future image */
              <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                <div 
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "20px",
                    background: `${currentSlide.imagePlaceholder?.accentColor || "#e10600"}18`,
                    border: `1px solid ${currentSlide.imagePlaceholder?.accentColor || "#e10600"}35`,
                    color: currentSlide.imagePlaceholder?.accentColor || "#e10600",
                    display: "grid",
                    placeItems: "center"
                  }}
                >
                  <IconComp size={36} />
                </div>
                
                <span 
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(0,0,0,0.45)",
                    padding: "4px 10px",
                    borderRadius: "999px"
                  }}
                >
                  {currentSlide.imagePlaceholder?.label}
                </span>
                
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", maxWidth: "210px", lineHeight: 1.4 }}>
                  {currentSlide.imagePlaceholder?.description}
                </span>
              </div>
            )}
          </div>


          {/* 2 · TEXTE JUSTE EN DESSOUS */}
          <div 
            style={{
              marginTop: "clamp(18px, 3vh, 26px)",
              textAlign: "center",
              width: "100%",
              padding: "0 10px"
            }}
          >
            <h2 
              style={{
                fontSize: "clamp(1.5rem, 4.2vw, 2.1rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                margin: "0 0 8px",
                color: "#ffffff"
              }}
            >
              {currentSlide.title}
            </h2>

            {currentSlide.subtitle && (
              <p 
                style={{
                  fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.5,
                  margin: "0 auto",
                  maxWidth: "440px"
                }}
              >
                {currentSlide.subtitle}
              </p>
            )}

            {/* Écran 8 uniquement : les 3 boutons de choix finaux */}
            {currentStep === 8 && (
              <div 
                style={{
                  marginTop: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                  width: "100%",
                  maxWidth: "360px",
                  marginInline: "auto"
                }}
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/ressources");
                  }}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "12px",
                    padding: "11px 18px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <span>Aller plus loin</span>
                  <ChevronRight size={17} />
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/quiz-aide");
                  }}
                  style={{
                    background: "var(--ae-red, #e10600)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "12px",
                    padding: "11px 18px",
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 6px 20px rgba(225,6,0,0.35)"
                  }}
                >
                  <span>Faire le quiz</span>
                  <ChevronRight size={17} />
                </button>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/aide");
                  }}
                  style={{
                    background: "transparent",
                    color: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "12px",
                    padding: "10px 18px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <span>Besoin d'en parler ?</span>
                  <HelpCircle size={17} />
                </button>
              </div>
            )}
          </div>
        </main>


        {/* FOOTER DISCRET : Indication de tap/clic & Compteur */}
        <footer 
          style={{
            width: "100%",
            maxWidth: "580px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "6px",
            zIndex: 10
          }}
        >
          {/* Bouton retour en arrière subtil */}
          {currentStep > 0 ? (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.5)",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                padding: "6px 10px"
              }}
            >
              <ChevronLeft size={16} />
              <span>Retour</span>
            </button>
          ) : (
            <div />
          )}

          {/* Indication visuelle */}
          <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", fontWeight: 500, letterSpacing: "0.02em" }}>
            {currentStep < totalSteps - 1 ? "Clique sur l'écran pour avancer" : "Choisis une option"}
          </div>

          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
            {currentStep + 1} / {totalSteps}
          </div>
        </footer>
      </div>

      {/* TRANSITION FLOU À CLAIR (BLUR TO CLEAR) */}
      <style>{`
        @keyframes blurToClear {
          0% {
            filter: blur(14px);
            opacity: 0.2;
            transform: scale(0.96);
          }
          50% {
            filter: blur(5px);
            opacity: 0.7;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
            transform: scale(1);
          }
        }

        .story-blur-transition {
          animation: blurToClear 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: filter, opacity, transform;
        }
      `}</style>
    </>
  );
}
