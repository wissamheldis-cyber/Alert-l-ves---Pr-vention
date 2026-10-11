import React, { useEffect, useState } from "react";
import { CinematicKeyframe } from "../data/cinematicTimeline";

interface CinematicCameraStageProps {
  currentFrame: CinematicKeyframe;
  prevFrame: CinematicKeyframe | null;
  progressInFrame: number; // 0 to 1
  isTransitioning: boolean;
  reducedMotion?: boolean;
}

export function CinematicCameraStage({
  currentFrame,
  prevFrame,
  progressInFrame,
  isTransitioning,
  reducedMotion = false
}: CinematicCameraStageProps) {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Preload current, previous and next images
    const urlsToPreload = [currentFrame.assetSrc];
    if (prevFrame) urlsToPreload.push(prevFrame.assetSrc);

    urlsToPreload.forEach((src) => {
      if (!imagesLoaded[src]) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded((prev) => ({ ...prev, [src]: true }));
        };
      }
    });
  }, [currentFrame, prevFrame]);

  // Compute camera motion interpolation for current frame
  const motion = currentFrame.cameraMotion;
  const t = reducedMotion ? 0 : progressInFrame;
  const currentScale = motion.startScale + (motion.endScale - motion.startScale) * t;
  const currentX = motion.startX + (motion.endX - motion.startX) * t;
  const currentY = motion.startY + (motion.endY - motion.startY) * t;
  const currentRotate = motion.startRotate + (motion.endRotate - motion.startRotate) * t;

  // Compute previous frame camera state if transitioning
  const prevMotion = prevFrame?.cameraMotion;
  const prevScale = prevMotion ? prevMotion.endScale : 1.0;
  const prevX = prevMotion ? prevMotion.endX : 0;
  const prevY = prevMotion ? prevMotion.endY : 0;
  const prevRotate = prevMotion ? prevMotion.endRotate : 0;

  // Environment ambient gradient based on theme
  const getAmbientGradient = (theme: string) => {
    switch (theme) {
      case "black-studio":
        return "radial-gradient(circle at 50% 50%, rgba(255, 117, 140, 0.08) 0%, rgba(5, 5, 5, 0.95) 70%, #000000 100%)";
      case "studio-to-warm":
        return "radial-gradient(circle at 65% 45%, rgba(245, 158, 11, 0.15) 0%, rgba(225, 6, 0, 0.08) 40%, #020202 90%)";
      case "warm-party":
        return "radial-gradient(circle at 70% 40%, rgba(168, 85, 247, 0.14) 0%, rgba(245, 158, 11, 0.12) 45%, #050505 100%)";
      case "hospital-cold":
        return "radial-gradient(circle at 50% 35%, rgba(2, 132, 199, 0.18) 0%, rgba(0, 112, 243, 0.08) 50%, #020610 100%)";
      case "return-party":
        return "radial-gradient(circle at 45% 55%, rgba(16, 185, 129, 0.14) 0%, rgba(245, 158, 11, 0.12) 50%, #030303 100%)";
      default:
        return "radial-gradient(circle at 50% 50%, #111111 0%, #000000 100%)";
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "min(460px, 86vw)",
        height: "min(460px, 86vw)",
        aspectRatio: "1 / 1",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: `
          0 25px 65px -10px rgba(0, 0, 0, 0.85),
          0 0 0 1px rgba(255, 255, 255, 0.12),
          0 0 50px ${currentFrame.insightColor ? `${currentFrame.insightColor}22` : "rgba(225, 6, 0, 0.15)"}
        `,
        background: "#050505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        isolation: "isolate",
        transition: "box-shadow 0.6s ease"
      }}
    >
      {/* Dynamic ambient backdrop illumination */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: getAmbientGradient(currentFrame.environmentTheme),
          zIndex: 1,
          transition: "background 0.8s ease"
        }}
      />

      {/* Subtle cinematic lens vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 50%, transparent 55%, rgba(0,0,0,0.65) 100%)",
          zIndex: 6,
          pointerEvents: "none"
        }}
      />

      {/* PREVIOUS KEYFRAME LAYER (for smooth cross-dissolve & match cut) */}
      {prevFrame && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            opacity: isTransitioning ? 0 : 0,
            transform: `translate3d(${prevX}%, ${prevY}%, 0) scale(${prevScale}) rotate(${prevRotate}deg)`,
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s ease-out",
            pointerEvents: "none"
          }}
        >
          <img
            src={prevFrame.assetSrc}
            alt={prevFrame.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: `${prevFrame.focalPoint.x}% ${prevFrame.focalPoint.y}%`
            }}
          />
        </div>
      )}

      {/* CURRENT KEYFRAME LAYER */}
      <div
        key={currentFrame.id}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          transform: `translate3d(${currentX}%, ${currentY}%, 0) scale(${currentScale}) rotate(${currentRotate}deg)`,
          transformOrigin: `${currentFrame.focalPoint.x}% ${currentFrame.focalPoint.y}%`,
          transition: reducedMotion
            ? "none"
            : isTransitioning
            ? "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease-out"
            : "none",
          willChange: "transform, opacity, filter"
        }}
        className={isTransitioning ? "cinematic-reveal" : ""}
      >
        <img
          src={currentFrame.assetSrc}
          alt={currentFrame.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: `${currentFrame.focalPoint.x}% ${currentFrame.focalPoint.y}%`,
            display: "block"
          }}
          loading="eager"
        />
      </div>

      {/* LENS FLARE / SOFT SPOTLIGHT REFLECTION (simulating studio & party lights) */}
      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "-15%",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${currentFrame.insightColor ? `${currentFrame.insightColor}30` : "rgba(255,255,255,0.15)"} 0%, transparent 70%)`,
          filter: "blur(20px)",
          zIndex: 4,
          pointerEvents: "none",
          mixBlendMode: "screen",
          opacity: currentFrame.environmentTheme === "black-studio" ? 0.7 : 0.9,
          transition: "opacity 0.6s ease"
        }}
      />

      {/* Bottom subtle gradient to anchor text and contrast */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "35%",
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
          zIndex: 5,
          pointerEvents: "none"
        }}
      />

      <style>{`
        @keyframes cinematicBlurClear {
          0% {
            filter: blur(10px) brightness(0.8);
            opacity: 0.3;
          }
          50% {
            filter: blur(3px) brightness(1.05);
            opacity: 0.85;
          }
          100% {
            filter: blur(0px) brightness(1);
            opacity: 1;
          }
        }

        .cinematic-reveal {
          animation: cinematicBlurClear 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}
