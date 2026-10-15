export type ActId = "puff" | "proto" | "ptc";

export interface CinematicKeyframe {
  id: string;
  act: ActId;
  assetFile: string;
  assetSrc: string;
  name: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  highlightText?: string;
  insightBadge?: string;
  insightColor?: string;
  focalPoint: { x: number; y: number }; // 0 to 100 percentage
  cameraMotion: {
    startScale: number;
    endScale: number;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    startRotate: number;
    endRotate: number;
  };
  transitionType: "reveal-fade" | "mask-dissolve" | "spatial-shift" | "match-cut" | "depth-focus";
  environmentTheme: "black-studio" | "studio-to-warm" | "warm-party" | "hospital-cold" | "return-party";
  durationSeconds: number;
}

export const CINEMATIC_TIMELINE: CinematicKeyframe[] = [
  // =============================================================
  // 1. LA PUFF (3 écrans clés du client)
  // =============================================================

  // Écran 1 · a.jpg : Puff pastel, mignonne
  {
    id: "puff-1",
    act: "puff",
    assetFile: "a.jpg",
    assetSrc: "/assets/intro/a.jpg",
    name: "La Puff",
    eyebrow: "LA PUFF · 1/3",
    title: "Elle a l'air inoffensive.",
    subtitle: "Parfum bonbon, couleurs pastel, format poche.",
    insightBadge: "LA PUFF",
    insightColor: "#ff758c",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.0,
      endScale: 1.06,
      startX: 0,
      endX: 0,
      startY: 0,
      endY: -1,
      startRotate: 0,
      endRotate: 0.5
    },
    transitionType: "reveal-fade",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },

  // Écran 2 · c.jpg : Puff démontée, pièces qui flottent
  {
    id: "puff-2",
    act: "puff",
    assetFile: "c.jpg",
    assetSrc: "/assets/intro/c.jpg",
    name: "Puff démontée",
    eyebrow: "LA PUFF · 2/3",
    title: "Batterie. Résistance. Nicotine.",
    subtitle: "Un circuit électronique, des métaux chauffés, un solvant chimique.",
    insightBadge: "DÉMONTÉE",
    insightColor: "#ff4b4b",
    focalPoint: { x: 50, y: 52 },
    cameraMotion: {
      startScale: 1.02,
      endScale: 1.09,
      startX: -1,
      endX: 1,
      startY: 0,
      endY: -1.5,
      startRotate: -0.5,
      endRotate: 0
    },
    transitionType: "spatial-shift",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },

  // Écran 3 · e.jpg : Chiffre géant en rouge + 200 cigarettes
  {
    id: "puff-3",
    act: "puff",
    assetFile: "e.jpg",
    assetSrc: "/assets/intro/e.jpg",
    name: "Nicotine 16K",
    eyebrow: "LA PUFF · 3/3",
    highlightText: "Plus de 200 cigarettes.",
    title: "La nicotine d'une puff 16K.",
    subtitle: "Autant de nicotine que 10 paquets entiers dans une seule fiole.",
    insightBadge: "LE CHOC",
    insightColor: "#e10600",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.0,
      endScale: 1.07,
      startX: 0,
      endX: 0,
      startY: 0,
      endY: -2,
      startRotate: 0,
      endRotate: 0.3
    },
    transitionType: "depth-focus",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },

  // =============================================================
  // 2. LE PROTO (2 écrans clés du client)
  // =============================================================

  // Écran 4 · h.jpg : Soirée, ballons colorés, néons
  {
    id: "proto-1",
    act: "proto",
    assetFile: "h.jpg",
    assetSrc: "/assets/intro/h.jpg",
    name: "Le Ballon",
    eyebrow: "LE PROTO · 1/2",
    title: "Ça commence par un ballon.",
    subtitle: "Entre potes, un fou rire de 30 secondes en soirée.",
    insightBadge: "LE PROTO",
    insightColor: "#a855f7",
    focalPoint: { x: 52, y: 48 },
    cameraMotion: {
      startScale: 1.02,
      endScale: 1.09,
      startX: -2,
      endX: 0,
      startY: 0,
      endY: -1,
      startRotate: 0,
      endRotate: 0.4
    },
    transitionType: "mask-dissolve",
    environmentTheme: "warm-party",
    durationSeconds: 3.5
  },

  // Écran 5 · j.jpg : Couloir d'hôpital, fauteuil roulant
  {
    id: "proto-2",
    act: "proto",
    assetFile: "j.jpg",
    assetSrc: "/assets/intro/j.jpg",
    name: "L'Hôpital",
    eyebrow: "LE PROTO · 2/2",
    title: "Ça peut finir sans pouvoir marcher.",
    subtitle: "Atteintes neurologiques sévères, perte de motricité.",
    insightBadge: "LES RISQUES",
    insightColor: "#0070f3",
    focalPoint: { x: 50, y: 44 },
    cameraMotion: {
      startScale: 1.0,
      endScale: 1.08,
      startX: 0,
      endX: 0,
      startY: 0,
      endY: -2,
      startRotate: -0.3,
      endRotate: 0
    },
    transitionType: "depth-focus",
    environmentTheme: "hospital-cold",
    durationSeconds: 3.5
  },

  // =============================================================
  // 3. LE PTC (2 écrans clés du client)
  // =============================================================

  // Écran 6 · f.jpg : Vapoteuse qui passe de main en main en soirée
  {
    id: "ptc-1",
    act: "ptc",
    assetFile: "f.jpg",
    assetSrc: "/assets/intro/f.jpg",
    name: "Vapoteuse modifiée",
    eyebrow: "LE PTC · 1/2",
    title: "On t'a dit que c'était comme une puff.",
    subtitle: "« Pète Ton Crâne » : un liquide synthétique inconnu dans un réservoir.",
    insightBadge: "LE PTC",
    insightColor: "#9333ea",
    focalPoint: { x: 50, y: 52 },
    cameraMotion: {
      startScale: 1.02,
      endScale: 1.08,
      startX: 0,
      endX: -1,
      startY: 1,
      endY: 0,
      startRotate: -0.2,
      endRotate: 0.3
    },
    transitionType: "mask-dissolve",
    environmentTheme: "warm-party",
    durationSeconds: 3.5
  },

  // Écran 7 · k.jpg : Une taffe. Les urgences.
  {
    id: "ptc-2",
    act: "ptc",
    assetFile: "k.jpg",
    assetSrc: "/assets/intro/k.jpg",
    name: "Les Urgences",
    eyebrow: "LE PTC · 2/2",
    highlightText: "Une taffe.",
    title: "Les urgences.",
    subtitle: "Convulsions, perte de conscience brutale, coma.",
    insightBadge: "DANGER IMMÉDIAT",
    insightColor: "#e10600",
    focalPoint: { x: 48, y: 48 },
    cameraMotion: {
      startScale: 1.08,
      endScale: 1.0,
      startX: 1,
      endX: 0,
      startY: -1,
      endY: 0,
      startRotate: 0,
      endRotate: -0.2
    },
    transitionType: "match-cut",
    environmentTheme: "return-party",
    durationSeconds: 3.5
  }
];

export const TOTAL_STORY_DURATION = CINEMATIC_TIMELINE.reduce((acc, f) => acc + f.durationSeconds, 0);
