import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { CINEMATIC_TIMELINE, CinematicKeyframe } from "../../data/cinematicTimeline";
import { CinematicCameraStage } from "../../components/CinematicCameraStage";

export function StudentIntroPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressInFrame, setProgressInFrame] = useState(0); // 0 to 1
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Check prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const totalFrames = CINEMATIC_TIMELINE.length;
  const currentFrame: CinematicKeyframe = CINEMATIC_TIMELINE[currentIndex];
  const prevFrame: CinematicKeyframe | null = prevIndex !== null ? CINEMATIC_TIMELINE[prevIndex] : null;

  // Frame timing loop for smooth virtual camera travel & auto progression
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(performance.now());
  const touchStartXRef = useRef<number | null>(null);

  const goToNextFrame = useCallback(() => {
    if (currentIndex < totalFrames - 1) {
      setPrevIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
      setProgressInFrame(0);
      startTimeRef.current = performance.now();
      setTimeout(() => setIsTransitioning(false), 700);
    } else {
      setIsFinished(true);
      setIsPlaying(false);
    }
  }, [currentIndex, totalFrames]);

  const goToPrevFrame = useCallback(() => {
    if (currentIndex > 0) {
      setPrevIndex(currentIndex);
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
      setProgressInFrame(0);
      startTimeRef.current = performance.now();
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [currentIndex]);

  const jumpToFrame = (index: number) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setProgressInFrame(0);
    startTimeRef.current = performance.now();
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleSkipIntro = () => {
    localStorage.setItem("alert_eleves_student_intro_seen", "true");
    navigate("/eleve/accueil");
  };

  // Main animation loop
  useEffect(() => {
    if (isFinished) return;

    const frameDurationMs = currentFrame.durationSeconds * 1000;
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      if (!isPlaying) {
        animFrameRef.current = requestAnimationFrame(tick);
        return;
      }

      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / frameDurationMs, 1);
      setProgressInFrame(progress);

      if (progress >= 1) {
        goToNextFrame();
      } else {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [currentIndex, isPlaying, isFinished, currentFrame.durationSeconds, goToNextFrame]);

  // Click on screen to advance / rewind (Tap to navigate)
  const handleScreenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a") || target.closest(".no-advance")) {
      return;
    }

    const { clientX } = e;
    const width = window.innerWidth;

    // Left 25% rewinds, rest advances
    if (clientX < width * 0.25 && currentIndex > 0) {
      goToPrevFrame();
    } else {
      goToNextFrame();
    }
  };

  // Touch Swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      goToNextFrame();
    } else if (diff < -45) {
      goToPrevFrame();
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space" || e.key === "Enter") {
        e.preventDefault();
        goToNextFrame();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevFrame();
      } else if (e.key === "Escape") {
        handleSkipIntro();
      } else if (e.key.toLowerCase() === "p") {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextFrame, goToPrevFrame]);

  return (
    <>
      <Helmet>
        <title>Alert’Élèves · Expérience Élève</title>
        <meta 
          name="description" 
          content="Une traversée cinématographique interactive : découvrez la réalité sur la puff, le protoxyde d'azote et le PTC." 
        />
      </Helmet>

      {/* IMMERSIVE CINEMATIC STAGE OVERLAY */}
      <div
        onClick={handleScreenClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          background: "#030303",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "clamp(12px, 2.5vh, 28px) clamp(16px, 3.5vw, 36px)",
          color: "#ffffff",
          fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
          overflow: "hidden",
          cursor: isFinished ? "default" : "pointer",
          userSelect: "none"
        }}
      >
        {/* ========================================================
            TOP BAR : PROGRESSION CINÉMATIQUE & COMMANDES
           ======================================================== */}
        <header
          className="no-advance"
          style={{
            width: "100%",
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 20
          }}
        >
          {/* Timeline segmented progress bar */}
          <div style={{ display: "flex", gap: "4px", width: "100%" }}>
            {CINEMATIC_TIMELINE.map((frame, idx) => {
              const isPast = idx < currentIndex;
              const isCurrent = idx === currentIndex;
              const segmentProgress = isPast ? 1 : isCurrent ? progressInFrame : 0;

              return (
                <div
                  key={frame.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    jumpToFrame(idx);
                  }}
                  style={{
                    flex: 1,
                    height: "3.5px",
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.2)",
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${segmentProgress * 100}%`,
                      background: isCurrent ? "var(--ae-red, #e10600)" : "#ffffff",
                      borderRadius: "999px",
                      transition: isCurrent ? "none" : "width 0.2s ease"
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Navigation header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "0.9rem", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
                Alert'Élèves
              </span>
              <span
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: currentFrame.insightColor || "#ffffff",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  border: `1px solid ${currentFrame.insightColor ? `${currentFrame.insightColor}40` : "rgba(255,255,255,0.2)"}`
                }}
              >
                {currentFrame.eyebrow}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Play / Pause toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying((prev) => !prev);
                }}
                title={isPlaying ? "Mettre en pause (P)" : "Reprendre (P)"}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "999px",
                  padding: "6px 10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  backdropFilter: "blur(8px)"
                }}
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              </button>

              {/* Passer l'intro */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkipIntro();
                }}
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backdropFilter: "blur(8px)"
                }}
              >
                <span>Passer</span>
                <X size={13} />
              </button>
            </div>
          </div>
        </header>


        {/* ========================================================
            ZONE CENTRALE : LE STAGE DE LA CAMÉRA & LE TEXTE
           ======================================================== */}
        <main
          style={{
            width: "100%",
            maxWidth: "520px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "auto 0",
            zIndex: 10
          }}
        >
          {/* Si on a atteint l'écran final de conclusion */}
          {isFinished ? (
            <div
              className="no-advance"
              style={{
                background: "linear-gradient(145deg, #121212 0%, #080808 100%)",
                border: "1px solid rgba(255, 255, 255, 0.18)",
                borderRadius: "28px",
                padding: "clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)",
                textAlign: "center",
                width: "100%",
                maxWidth: "460px",
                boxShadow: "0 25px 65px rgba(0,0,0,0.8), 0 0 45px rgba(225, 6, 0, 0.15)",
                animation: "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "50%",
                  background: "rgba(225, 6, 0, 0.15)",
                  color: "var(--ae-red, #e10600)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 1.25rem",
                  border: "1px solid rgba(225, 6, 0, 0.3)"
                }}
              >
                <Sparkles size={28} />
              </div>

              <h2
                style={{
                  fontSize: "clamp(1.7rem, 4.5vw, 2.2rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.15,
                  margin: "0 0 8px",
                  color: "#ffffff"
                }}
              >
                Maintenant tu sais<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
              </h2>

              <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.78)", marginBottom: "2rem", lineHeight: 1.5 }}>
                Le reste, c'est toi qui décides. Accède aux ressources pour t'informer, tester tes réflexes ou trouver de l'aide.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                <button
                  onClick={() => {
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/ressources");
                  }}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    borderRadius: "14px",
                    padding: "13px 18px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <BookOpen size={18} style={{ color: "var(--ae-red)" }} />
                    En savoir plus (Les dossiers)
                  </span>
                  <ChevronRight size={18} />
                </button>

                <button
                  onClick={() => {
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/quiz-aide");
                  }}
                  style={{
                    background: "var(--ae-red, #e10600)",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "14px 18px",
                    fontSize: "0.98rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    boxShadow: "0 8px 24px rgba(225,6,0,0.35)",
                    transition: "all 0.15s ease"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} />
                    Faire le quiz
                  </span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => {
                    localStorage.setItem("alert_eleves_student_intro_seen", "true");
                    navigate("/eleve/aide");
                  }}
                  style={{
                    background: "transparent",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: "14px",
                    padding: "12px 18px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <HelpCircle size={18} />
                    Besoin d'en parler ou d'aider un ami
                  </span>
                  <ChevronRight size={16} />
                </button>

                <button
                  onClick={() => {
                    setIsFinished(false);
                    jumpToFrame(0);
                    setIsPlaying(true);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.45)",
                    fontSize: "0.85rem",
                    marginTop: "10px",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Revoir l'introduction depuis le début</span>
                </button>
              </div>
            </div>
          ) : (
            /* STAGE ACTIF : CAMÉRA VIRTUELLE + TEXTE */
            <>
              {/* Le cadre de la caméra avec l'image cinématographique */}
              <CinematicCameraStage
                currentFrame={currentFrame}
                prevFrame={prevFrame}
                progressInFrame={progressInFrame}
                isTransitioning={isTransitioning}
                reducedMotion={reducedMotion}
              />

              {/* Texte sous l'image */}
              <div
                key={currentFrame.id}
                className="cinematic-text-fade"
                style={{
                  marginTop: "clamp(16px, 2.5vh, 24px)",
                  textAlign: "center",
                  width: "100%",
                  padding: "0 12px"
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 4vw, 1.95rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.035em",
                    lineHeight: 1.15,
                    margin: "0 0 8px",
                    color: "#ffffff"
                  }}
                >
                  {currentFrame.title}
                </h2>

                <p
                  style={{
                    fontSize: "clamp(0.92rem, 2.2vw, 1.05rem)",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.55,
                    margin: "0 auto",
                    maxWidth: "460px"
                  }}
                >
                  {currentFrame.narrativeText}
                </p>
              </div>
            </>
          )}
        </main>


        {/* ========================================================
            FOOTER : INDICATEUR INTERACTIF & REBOBINE
           ======================================================== */}
        <footer
          className="no-advance"
          style={{
            width: "100%",
            maxWidth: "640px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "6px",
            zIndex: 20
          }}
        >
          {/* Bouton Précédent */}
          {currentIndex > 0 && !isFinished ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevFrame();
              }}
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.55)",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                padding: "6px 8px"
              }}
            >
              <ChevronLeft size={16} />
              <span>Précédent</span>
            </button>
          ) : (
            <div />
          )}

          {/* Indication interactive */}
          {!isFinished && (
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
              {isPlaying ? "Lecture automatique · Clique pour avancer" : "En pause · Clique pour avancer"}
            </div>
          )}

          {/* Compteur de plans */}
          <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>
            {currentIndex + 1} / {totalFrames}
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes textFadeIn {
          0% {
            opacity: 0.2;
            transform: translateY(6px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }

        .cinematic-text-fade {
          animation: textFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
