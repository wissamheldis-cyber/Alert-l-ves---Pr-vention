export type ActId = "act-1" | "act-2" | "act-3" | "act-4" | "conclusion";

export interface CinematicKeyframe {
  id: string;
  act: ActId;
  assetFile: string;
  assetSrc: string;
  name: string;
  eyebrow: string;
  title: string;
  narrativeText?: string;
  highlightText?: string;
  insightBadge?: string;
  insightColor?: string;
  focalPoint: { x: number; y: number }; // 0 to 100 percentage
  cameraMotion: {
    startScale: number;
    endScale: number;
    startX: number; // percentage translate
    endX: number;
    startY: number;
    endY: number;
    startRotate: number; // deg
    endRotate: number;
  };
  transitionType: "reveal-fade" | "mask-dissolve" | "spatial-shift" | "match-cut" | "depth-focus";
  environmentTheme: "black-studio" | "studio-to-warm" | "warm-party" | "hospital-cold" | "return-party";
  durationSeconds: number;
}

export const CINEMATIC_TIMELINE: CinematicKeyframe[] = [
  // -------------------------------------------------------------
  // ACT I — LA PUFF
  // -------------------------------------------------------------
  {
    id: "frame-a",
    act: "act-1",
    assetFile: "a.jpg",
    assetSrc: "/assets/intro/a.jpg",
    name: "L'Apparence Initiale",
    eyebrow: "LA PUFF · 1/3",
    title: "Elle a l'air inoffensive.",
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
  {
    id: "frame-b",
    act: "act-1",
    assetFile: "b.jpg",
    assetSrc: "/assets/intro/b.jpg",
    name: "Révélation Interne",
    eyebrow: "LA PUFF · 2/3",
    title: "Batterie. Résistance. Nicotine.",
    insightBadge: "DÉMONTÉE",
    insightColor: "#ff4b4b",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.05,
      endScale: 1.12,
      startX: 0,
      endX: 0.5,
      startY: -1,
      endY: -2,
      startRotate: 0.5,
      endRotate: -0.5
    },
    transitionType: "mask-dissolve",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },
  {
    id: "frame-c",
    act: "act-1",
    assetFile: "c.jpg",
    assetSrc: "/assets/intro/c.jpg",
    name: "Vue Éclatée",
    eyebrow: "LA PUFF · 2/3",
    title: "Batterie. Résistance. Nicotine.",
    insightBadge: "EN PIÈCES",
    insightColor: "#f43f5e",
    focalPoint: { x: 50, y: 52 },
    cameraMotion: {
      startScale: 1.02,
      endScale: 1.08,
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
  {
    id: "frame-e",
    act: "act-1",
    assetFile: "e.jpg",
    assetSrc: "/assets/intro/e.jpg",
    name: "Équivalence Nicotine",
    eyebrow: "LA PUFF · 3/3",
    highlightText: "Plus de 200 cigarettes.",
    title: "La nicotine d'une puff 16K.",
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
  {
    id: "frame-d",
    act: "act-1",
    assetFile: "d.jpg",
    assetSrc: "/assets/intro/d.jpg",
    name: "Réassemblage",
    eyebrow: "LA PUFF",
    title: "Batterie. Résistance. Nicotine.",
    insightBadge: "RECONSTITUTION",
    insightColor: "#ff758c",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.07,
      endScale: 1.02,
      startX: 0.5,
      endX: 0,
      startY: -1.5,
      endY: 0,
      startRotate: 0.3,
      endRotate: 0
    },
    transitionType: "mask-dissolve",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },
  {
    id: "frame-ef",
    act: "act-1",
    assetFile: "ef.jpg",
    assetSrc: "/assets/intro/ef.jpg",
    name: "Puff Scellée",
    eyebrow: "LA PUFF",
    title: "Elle a l'air inoffensive.",
    insightBadge: "INTACTE",
    insightColor: "#ffffff",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.0,
      endScale: 1.05,
      startX: 0,
      endX: 0,
      startY: 0,
      endY: 1,
      startRotate: 0,
      endRotate: -0.2
    },
    transitionType: "reveal-fade",
    environmentTheme: "black-studio",
    durationSeconds: 3.5
  },

  // -------------------------------------------------------------
  // ACTE II — LA TRANSITION SOIRÉE
  // -------------------------------------------------------------
  {
    id: "frame-f",
    act: "act-2",
    assetFile: "f.jpg",
    assetSrc: "/assets/intro/f.jpg",
    name: "La Main",
    eyebrow: "LA SOIRÉE",
    title: "Ça commence entre potes.",
    insightBadge: "EN SOIRÉE",
    insightColor: "#f59e0b",
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
    environmentTheme: "studio-to-warm",
    durationSeconds: 3.5
  },
  {
    id: "frame-g",
    act: "act-2",
    assetFile: "g.jpg",
    assetSrc: "/assets/intro/g.jpg",
    name: "Le Geste",
    eyebrow: "LA SOIRÉE",
    title: "On t'a dit que c'était rien.",
    insightBadge: "LE GROUPE",
    insightColor: "#d97706",
    focalPoint: { x: 48, y: 46 },
    cameraMotion: {
      startScale: 1.1,
      endScale: 1.0,
      startX: 2,
      endX: 0,
      startY: 2,
      endY: 0,
      startRotate: 0.3,
      endRotate: 0
    },
    transitionType: "spatial-shift",
    environmentTheme: "warm-party",
    durationSeconds: 3.5
  },

  // -------------------------------------------------------------
  // ACTE III — LE PROTO
  // -------------------------------------------------------------
  {
    id: "frame-h",
    act: "act-3",
    assetFile: "h.jpg",
    assetSrc: "/assets/intro/h.jpg",
    name: "Le Ballon",
    eyebrow: "LE PROTO · 1/2",
    title: "Ça commence par un ballon.",
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
    transitionType: "spatial-shift",
    environmentTheme: "warm-party",
    durationSeconds: 3.5
  },

  // -------------------------------------------------------------
  // ACTE IV — L'HÔPITAL & LE PTC
  // -------------------------------------------------------------
  {
    id: "frame-i",
    act: "act-4",
    assetFile: "i.jpg",
    assetSrc: "/assets/intro/i.jpg",
    name: "La Bascule",
    eyebrow: "LE PROTO · 2/2",
    title: "Ça peut finir sans pouvoir marcher.",
    insightBadge: "LES RISQUES",
    insightColor: "#0284c7",
    focalPoint: { x: 50, y: 50 },
    cameraMotion: {
      startScale: 1.04,
      endScale: 1.1,
      startX: 0,
      endX: 1,
      startY: -1,
      endY: -2,
      startRotate: 0.4,
      endRotate: -0.3
    },
    transitionType: "mask-dissolve",
    environmentTheme: "hospital-cold",
    durationSeconds: 3.5
  },
  {
    id: "frame-j",
    act: "act-4",
    assetFile: "j.jpg",
    assetSrc: "/assets/intro/j.jpg",
    name: "L'Hôpital",
    eyebrow: "LE PROTO · 2/2",
    title: "Ça peut finir sans pouvoir marcher.",
    insightBadge: "SÉQUELLES",
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
  {
    id: "frame-k",
    act: "act-4",
    assetFile: "k.jpg",
    assetSrc: "/assets/intro/k.jpg",
    name: "Le PTC",
    eyebrow: "LE PTC",
    title: "On t'a dit que c'était comme une puff.",
    highlightText: "Une taffe. Les urgences.",
    insightBadge: "LE PTC",
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
