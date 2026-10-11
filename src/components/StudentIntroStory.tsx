import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronRight, 
  ChevronLeft, 
  X, 
  AlertTriangle, 
  Flame, 
  Wind, 
  Skull, 
  HelpCircle
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
  backgroundStyle: React.CSSProperties;
};

const slides: StorySlide[] = [
  // Écran 0 · Fond noir
  {
    id: 0,
    theme: "dark",
    title: "Tu veux savoir ce qu'il y a vraiment dedans ?",
    subtitle: "Ce qu'on ne te dit pas sur les puffs, le proto et le PTC.",
    backgroundStyle: {
      backgroundColor: "#050505",
      backgroundImage: "radial-gradient(circle at 50% 50%, #1c0606 0%, #000000 100%)"
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
    backgroundStyle: {
      background: "linear-gradient(145deg, #1f1124 0%, #2b1020 50%, #0d060e 100%)",
      boxShadow: "inset 0 0 100px rgba(255, 117, 140, 0.15)"
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
    backgroundStyle: {
      background: "linear-gradient(160deg, #140d16 0%, #1f0b12 50%, #050505 100%)"
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
    backgroundStyle: {
      backgroundColor: "#030101",
      backgroundImage: "radial-gradient(circle at 50% 40%, rgba(225, 6, 0, 0.22) 0%, #020202 90%)"
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
    backgroundStyle: {
      background: "linear-gradient(135deg, #1b0a2e 0%, #0f051d 60%, #000000 100%)"
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
    backgroundStyle: {
      background: "linear-gradient(180deg, #09131f 0%, #050c14 60%, #000000 100%)"
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
    backgroundStyle: {
      background: "linear-gradient(145deg, #240b36 0%, #130420 60%, #000000 100%)"
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
    backgroundStyle: {
      background: "linear-gradient(180deg, #1a0005 0%, #110003 50%, #020202 100%)"
    }
  },

  // Écran 8 · Fond noir - Fin
  {
    id: 8,
    theme: "dark",
    title: "Maintenant tu sais.",
    subtitle: "Le reste, c'est toi qui décides.",
    isActionScreen: true,
    backgroundStyle: {
      backgroundColor: "#050505",
      backgroundImage: "radial-gradient(circle at 50% 50%, #171717 0%, #050505 100%)"
    }
  }
];

interface StudentIntroStoryProps {
  onClose: () => void;
}

export function StudentIntroStory({ onClose }: StudentIntroStoryProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);

  const totalSteps = slides.length;
  const currentSlide = slides[currentStep];

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
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

  // Gestion des touches clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep]);

  return (
    <div 
      className="story-modal-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "clamp(10px, 2.5vh, 24px)",
        animation: "storyFadeIn 0.25s ease-out"
      }}
    >
      {/* Conteneur format Carré (aspect-ratio 1:1) / Story Card adaptée */}
      <div 
        className="story-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "520px",
          height: "min(520px, 92vh)",
          aspectRatio: "1 / 1",
          borderRadius: "26px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#ffffff",
          overflow: "hidden",
          userSelect: "none",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12)",
          ...currentSlide.backgroundStyle,
          transition: "background 0.35s ease"
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* HEADER / STORY PROGRESS BAR & BOUTON PASSER */}
        <div 
          style={{
            padding: "16px 18px 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 10,
            background: "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)"
          }}
        >
          {/* Barres de progression segments */}
          <div style={{ display: "flex", gap: "4px", width: "100%" }}>
            {slides.map((s, index) => (
              <div 
                key={s.id}
                onClick={() => setCurrentStep(index)}
                style={{
                  flex: 1,
                  height: "3px",
                  borderRadius: "999px",
                  background: index < currentStep 
                    ? "#ffffff" 
                    : index === currentStep 
                      ? "var(--ae-red, #e10600)" 
                      : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "background 0.2s ease"
                }}
              />
            ))}
          </div>

          {/* En-tête : Badge d'étape + Bouton Passer */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              {currentSlide.badge ? (
                <span 
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: currentSlide.badgeColor || "#fff",
                    padding: "3px 8px",
                    borderRadius: "999px",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    border: `1px solid ${currentSlide.badgeColor ? `${currentSlide.badgeColor}40` : "rgba(255,255,255,0.2)"}`
                  }}
                >
                  {currentSlide.badge}
                </span>
              ) : (
                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
                  Alert'Élèves
                </span>
              )}
            </div>

            <button 
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                borderRadius: "999px",
                padding: "4px 12px",
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                backdropFilter: "blur(6px)"
              }}
            >
              <span>Passer</span>
              <X size={13} />
            </button>
          </div>
        </div>

        {/* CONTENU DU SLIDE */}
        <div 
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem 1.5rem",
            width: "100%",
            position: "relative",
            zIndex: 5,
            overflowY: "auto"
          }}
        >
          {/* ÉCRAN 0 : HOOK INITIAL */}
          {currentStep === 0 && (
            <div style={{ animation: "storyContentIn 0.35s ease", maxWidth: "420px" }}>
              <div 
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(225,6,0,0.15)",
                  color: "var(--ae-red, #e10600)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 1.25rem",
                  border: "1px solid rgba(225,6,0,0.3)"
                }}
              >
                <AlertTriangle size={28} />
              </div>

              <h1 
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.18,
                  marginBottom: "0.85rem",
                  color: "#ffffff"
                }}
              >
                Tu veux savoir ce qu'il y a vraiment dedans ?
              </h1>

              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.72)", marginBottom: "1.75rem", lineHeight: 1.5 }}>
                {currentSlide.subtitle}
              </p>

              <button 
                onClick={handleNext}
                style={{
                  background: "var(--ae-red, #e10600)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  padding: "13px 28px",
                  fontSize: "1rem",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(225,6,0,0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease"
                }}
              >
                <span>Montre-moi</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* ÉCRAN 3 : GRAND CHIFFRE CHOC EN ROUGE */}
          {currentStep === 3 && (
            <div style={{ animation: "storyScaleUp 0.35s ease", maxWidth: "420px" }}>
              <div 
                style={{
                  fontSize: "clamp(2.3rem, 6.5vw, 3.4rem)",
                  fontWeight: 900,
                  color: "var(--ae-red, #e10600)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.04em",
                  marginBottom: "0.85rem",
                  textShadow: "0 0 35px rgba(225,6,0,0.5)"
                }}
              >
                Plus de 200 cigarettes.
              </div>

              <h2 
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 1.7rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.75rem"
                }}
              >
                La nicotine d'une puff 16K.
              </h2>

              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", margin: "0 auto", lineHeight: 1.5 }}>
                {currentSlide.subtitle}
              </p>
            </div>
          )}

          {/* ÉCRAN 7 : UNE TAFFE. LES URGENCES. */}
          {currentStep === 7 && (
            <div style={{ animation: "storyScaleUp 0.35s ease", maxWidth: "420px" }}>
              <div 
                style={{
                  fontSize: "clamp(2.6rem, 7.5vw, 3.8rem)",
                  fontWeight: 900,
                  color: "var(--ae-red, #e10600)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: "0.35rem",
                  textShadow: "0 0 30px rgba(225,6,0,0.45)"
                }}
              >
                Une taffe.
              </div>

              <h2 
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 3rem)",
                  fontWeight: 900,
                  color: "#ffffff",
                  marginBottom: "0.85rem"
                }}
              >
                Les urgences.
              </h2>

              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", margin: "0 auto", lineHeight: 1.5 }}>
                {currentSlide.subtitle}
              </p>
            </div>
          )}

          {/* ÉCRAN 8 : OUTRO & 3 CHOIX DE L'ÉLÈVE */}
          {currentStep === 8 && (
            <div style={{ animation: "storyContentIn 0.35s ease", width: "100%", maxWidth: "380px" }}>
              <h2 
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  marginBottom: "0.35rem",
                  color: "#ffffff"
                }}
              >
                Maintenant tu sais<span style={{ color: "var(--ae-red)" }}>.</span>
              </h2>

              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginBottom: "1.25rem", fontWeight: 500 }}>
                Le reste, c'est toi qui décides.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "9px", width: "100%" }}>
                <button 
                  onClick={() => {
                    onClose();
                    navigate("/eleve/ressources");
                  }}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "11px",
                    padding: "11px 16px",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backdropFilter: "blur(6px)",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span>Aller plus loin</span>
                  <ChevronRight size={17} />
                </button>

                <button 
                  onClick={() => {
                    onClose();
                    navigate("/eleve/quiz-aide");
                  }}
                  style={{
                    background: "var(--ae-red, #e10600)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "11px",
                    padding: "11px 16px",
                    fontSize: "0.92rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 6px 18px rgba(225,6,0,0.35)",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span>Faire le quiz</span>
                  <ChevronRight size={17} />
                </button>

                <button 
                  onClick={() => {
                    onClose();
                    navigate("/eleve/aide");
                  }}
                  style={{
                    background: "transparent",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "11px",
                    padding: "10px 16px",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span>Besoin d'en parler ?</span>
                  <HelpCircle size={17} />
                </button>
              </div>
            </div>
          )}

          {/* ÉCRANS STANDARDS : 1, 2, 4, 5, 6 */}
          {currentStep !== 0 && currentStep !== 3 && currentStep !== 7 && currentStep !== 8 && (
            <div style={{ animation: "storyContentIn 0.35s ease", maxWidth: "420px" }}>
              <div style={{ marginBottom: "1rem" }}>
                {currentSlide.theme === "puff" && (
                  <div style={{ display: "inline-block", padding: "10px", borderRadius: "16px", background: "rgba(255, 117, 140, 0.15)", color: "#ff758c" }}>
                    <Flame size={32} />
                  </div>
                )}
                {currentSlide.theme === "proto" && (
                  <div style={{ display: "inline-block", padding: "10px", borderRadius: "16px", background: "rgba(121, 40, 202, 0.15)", color: "#a855f7" }}>
                    <Wind size={32} />
                  </div>
                )}
                {currentSlide.theme === "ptc" && (
                  <div style={{ display: "inline-block", padding: "10px", borderRadius: "16px", background: "rgba(225, 6, 0, 0.15)", color: "var(--ae-red)" }}>
                    <Skull size={32} />
                  </div>
                )}
              </div>

              <h2 
                style={{
                  fontSize: "clamp(1.45rem, 3.8vw, 2.1rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  marginBottom: "0.65rem",
                  color: "#ffffff"
                }}
              >
                {currentSlide.title}
              </h2>

              {currentSlide.subtitle && (
                <p 
                  style={{
                    fontSize: "clamp(0.88rem, 2vw, 1.05rem)",
                    color: "rgba(255,255,255,0.72)",
                    margin: "0 auto",
                    lineHeight: 1.5
                  }}
                >
                  {currentSlide.subtitle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* FOOTER : NAVIGATION */}
        <div 
          style={{
            padding: "10px 18px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
            background: "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)"
          }}
        >
          <button 
            onClick={handlePrev}
            disabled={currentStep === 0}
            style={{
              background: "transparent",
              color: currentStep === 0 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.8)",
              border: "none",
              cursor: currentStep === 0 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "6px 8px"
            }}
          >
            <ChevronLeft size={17} />
            <span>Précédent</span>
          </button>

          {currentStep < totalSteps - 1 && currentStep !== 0 && (
            <button 
              onClick={handleNext}
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "999px",
                padding: "7px 18px",
                fontSize: "0.85rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                backdropFilter: "blur(6px)"
              }}
            >
              <span>Suivant</span>
              <ChevronRight size={15} />
            </button>
          )}

          <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
            {currentStep + 1} / {totalSteps}
          </div>
        </div>
      </div>

      {/* STYLES ANIMATIONS & RESPONSIVE */}
      <style>{`
        @keyframes storyFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes storyContentIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes storyScaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 600px) {
          .story-card {
            max-width: 100% !important;
            height: min(480px, 92vh) !important;
            aspect-ratio: auto !important;
            border-radius: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
