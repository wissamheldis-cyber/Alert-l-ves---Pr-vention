export type ActId = "act-1" | "act-2" | "act-3" | "act-4" | "conclusion";

export interface CinematicKeyframe {
  id: string;
  act: ActId;
  assetFile: string;
  assetSrc: string;
  name: string;
  eyebrow: string;
  title: string;
  narrativeText: string;
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
  notes?: string;
}

export const CINEMATIC_TIMELINE: CinematicKeyframe[] = [
  // -------------------------------------------------------------
  // ACT I — LE STUDIO NOIR : L'OBJET
  // -------------------------------------------------------------
  {
    id: "frame-a",
    act: "act-1",
    assetFile: "a.jpg",
    assetSrc: "/assets/intro/a.jpg",
    name: "L'Apparence Initiale",
    eyebrow: "ACTE I · LA DÉCOUVERTE DU PRODUIT",
    title: "Elle a l'air inoffensive.",
    narrativeText: "Un design épuré, des couleurs pastel douces, un format miniature qui se glisse dans la paume. Conçue pour ressembler à un accessoire ludique.",
    insightBadge: "STUDIO NOIR · VUE INITIALE",
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
    eyebrow: "ACTE I · SOUS LA COQUE",
    title: "Ce qui se cache à l'intérieur.",
    narrativeText: "La coque devient translucide. Derrière le plastique coloré apparaît un assemblage industriel : réservoir d'e-liquide, conduit thermique et microprocesseur.",
    insightBadge: "STRUCTURE INTERNE DÉVOILÉE",
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
    name: "Vue Éclatée des Composants",
    eyebrow: "ACTE I · VUE ÉCLATÉE",
    title: "Batterie. Résistance. Métaux.",
    narrativeText: "Les pièces s'écartent de l'axe central : accumulateur lithium-ion, résistance métallique chauffée à haute température, solvants chimiques et nicotine hautement dosée.",
    insightBadge: "DÉCOMPOSITION TECHNIQUE",
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
    name: "Comparaison Symbolique de Nicotine",
    eyebrow: "ACTE I · CHARGE NICOTINIQUE",
    title: "Une concentration invisible.",
    narrativeText: "Les sels de nicotine permettent d'inhaler des doses massives sans la brûlure du tabac traditionnel. Le réservoir concentre l'équivalent nicotinique de multiples paquets conventionnels.",
    insightBadge: "REPRÉSENTATION COMPARATIVE",
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
    name: "Réassemblage des Éléments",
    eyebrow: "ACTE I · LE RETOUR À L'UNITÉ",
    title: "Les pièces se reconstituent.",
    narrativeText: "Chaque composant réintègre sa place. L'embout rejoint le corps, la coque se referme. L'objet reprend son apparence trompeuse d'un seul bloc compact.",
    insightBadge: "RÉALIGNEMENT D'AXE",
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
    name: "Puff Réassemblée & Stabilisée",
    eyebrow: "ACTE I · PRÉPARATION AU RÉEL",
    title: "Intacte. Posée sur la table.",
    narrativeText: "La puff est de nouveau scellée. Le studio noir commence imperceptiblement à laisser deviner les contours d'une surface physique.",
    insightBadge: "VUE STABILISÉE",
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
  // ACTE II — LA TRANSITION MAJEURE : LE STUDIO VERS LA SOIRÉE
  // -------------------------------------------------------------
  {
    id: "frame-f",
    act: "act-2",
    assetFile: "f.jpg",
    assetSrc: "/assets/intro/f.jpg",
    name: "La Main dans le Cadre",
    eyebrow: "ACTE II · LA TRANSITION VERS LE RÉEL",
    title: "Le studio n'était qu'un voile.",
    narrativeText: "Une main entre dans le champ et s'approche de la puff. Au même instant, le fond noir se dissout : une soirée chaleureuse apparaît en arrière-plan. L'objet était déjà là.",
    insightBadge: "TRANSITION D'ENVIRONNEMENT",
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
    name: "Recul Caméra : La Soirée Dévoilée",
    eyebrow: "ACTE II · LE CONTEXTE SOCIAL",
    title: "Le geste partagé.",
    narrativeText: "La caméra recule. Nous découvrons les visages : un jeune homme prend l'appareil et le tend à une amie. La banalisation s'installe dans le groupe.",
    insightBadge: "RECUL DE CHAMP · GROUPE",
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
  // ACTE III — L'ENVIRONNEMENT SOCIAL ET LE BALLON
  // -------------------------------------------------------------
  {
    id: "frame-h",
    act: "act-3",
    assetFile: "h.jpg",
    assetSrc: "/assets/intro/h.jpg",
    name: "La Personne au Ballon",
    eyebrow: "ACTE III · LE PROTOXYDE D'AZOTE",
    title: "Ça commence par un ballon.",
    narrativeText: "La caméra pivote dans la même pièce vers une jeune femme assise. Entre rires et musique, le protoxyde d'azote semble n'être qu'un jeu de soirée anodin.",
    insightBadge: "DÉVIATION D'ATTENTION",
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
  // ACTE IV — BASCULE HOSPITALIÈRE & RETOUR MATCH-CUT
  // -------------------------------------------------------------
  {
    id: "frame-i",
    act: "act-4",
    assetFile: "i.jpg",
    assetSrc: "/assets/intro/i.jpg",
    name: "Basculement de l'Atmosphère",
    eyebrow: "ACTE IV · TRANSFORMATION CINÉMATIQUE",
    title: "L'atmosphère s'inverse.",
    narrativeText: "La caméra contourne le sujet par l'arrière. Les néons chaleureux s'éteignent. La silhouette reste la même, mais les murs deviennent un couloir clinique froid.",
    insightBadge: "PIVOT CONTINU · SILHOUETTE",
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
    name: "La Pause Clinique",
    eyebrow: "ACTE IV · LA VULNÉRABILITÉ DU CORPS",
    title: "Quand les nerfs lâchent.",
    narrativeText: "Assise dans un fauteuil roulant, elle tourne lentement le visage. Les atteintes neurologiques et la perte de motricité ne sont pas une fiction.",
    insightBadge: "RAPPROCHÉ CLINIQUE",
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
    name: "Refocalisation Finale & Deuxième Appareil",
    eyebrow: "ACTE IV · LE RETOUR AU PRÉSENT",
    title: "On t'a dit que c'était comme une puff.",
    narrativeText: "Retour instantané dans la pièce. La caméra refait le point sur une autre jeune femme au fond : un liquide synthétique inconnu, une vapeur pâle, un risque immédiat.",
    insightBadge: "MATCH-CUT · REFOCALISATION",
    insightColor: "#10b981",
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
