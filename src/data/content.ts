import {
  BookOpen,
  Building2,
  FileText,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  MessageCircle,
  Newspaper,
  Scale,
  ShieldCheck,
  Target,
  Users,
  Download,
  Brain,
  Lock,
  Gamepad2,
  LifeBuoy
} from "lucide-react";

export const brand = {
  name: "Alert’Élèves",
  signature: "Prévenir — Éduquer — Protéger",
  founder: "A.M.17",
  mainModule: "Module 01 — Nouveaux usages à risque"
};

export const establishmentNav = [
  { label: "Accueil", href: "/etablissement" },
  { label: "Interventions", href: "/etablissement/interventions" },
  { label: "Documents", href: "/etablissement/documents" },
  { label: "Actualités", href: "/etablissement/actualites" },
  { label: "Contact", href: "/etablissement/contact" }
];

export const studentNav = [
  { label: "Accueil", href: "/eleve" },
  { label: "Ressources", href: "/eleve/ressources" },
  { label: "Quiz", href: "/eleve/quiz-aide" },
  { label: "Aide", href: "/eleve/aide" }
];

export const establishmentTiles = [
  {
    title: "Interventions",
    text: "Des ateliers interactifs adaptés à chaque établissement.",
    href: "/etablissement/interventions",
    icon: Users
  },
  {
    title: "Documents",
    text: "Guides, fiches pratiques et supports téléchargeables.",
    href: "/etablissement/documents",
    icon: FileText
  },
  {
    title: "Actualités",
    text: "Veille juridique, prévention et informations utiles.",
    href: "/etablissement/actualites",
    icon: Newspaper
  },
  {
    title: "Espace élèves",
    text: "Des ressources et outils pensés pour prolonger l’intervention.",
    href: "/eleve",
    icon: GraduationCap
  }
];

export const modules = [
  {
    number: "01",
    title: "Nouveaux usages à risque",
    status: "Disponible",
    tags: ["Collège", "Lycée"],
    text: "Comprendre les mécanismes d’influence, les risques et les bons réflexes.",
    pillars: ["Santé", "Droit", "Influence", "Psychologie", "Responsabilité"],
    href: "/etablissement/interventions"
  },
  {
    number: "02",
    title: "Relations et climat scolaire",
    status: "À venir",
    tags: ["Collège", "Lycée"],
    text: "Prévenir les tensions, favoriser le respect et renforcer le dialogue.",
    pillars: ["Dialogue", "Respect", "Confiance"],
    href: "/etablissement/interventions"
  },
  {
    number: "03",
    title: "Citoyenneté & responsabilité",
    status: "À venir",
    tags: ["Collège", "Lycée"],
    text: "Comprendre ses droits, ses devoirs et agir pour le bien commun.",
    pillars: ["Droit", "Civisme", "Responsabilité"],
    href: "/etablissement/interventions"
  }
];

export const documentCategories = ["Tous", "Guides", "Fiches pratiques", "Supports d’intervention", "Cadre juridique"];

export const documents = [
  {
    title: "Guide d’accompagnement des établissements",
    meta: "PDF · 2,4 Mo",
    text: "Mettre en place une action de prévention claire et efficace.",
    category: "Guides",
    icon: Download
  },
  {
    title: "Fiche pratique — Réagir face à une situation à risque",
    meta: "PDF · 1,1 Mo",
    text: "Repérer, écouter et orienter les élèves.",
    category: "Fiches pratiques",
    icon: Download
  },
  {
    title: "Cadre juridique — Responsabilités & obligations",
    meta: "PDF · 1,8 Mo",
    text: "Repères pour les établissements scolaires.",
    category: "Cadre juridique",
    icon: Download
  },
  {
    title: "Kit d’animation — Module 01",
    meta: "PDF · 3,7 Mo",
    text: "Supports et déroulé détaillé de l’intervention.",
    category: "Supports d’intervention",
    icon: Download
  }
];

export const news = [
  {
    category: "Juridique",
    title: "Ce qui change pour les établissements scolaires",
    date: "12 mai 2024",
    text: "Points de vigilance et nouveaux repères pour les équipes éducatives."
  },
  {
    category: "Prévention",
    title: "Nouveaux comportements à risque : ce que montrent les études",
    date: "10 mai 2024",
    text: "Comprendre les signaux faibles et adapter les messages."
  },
  {
    category: "Éducation",
    title: "Climat scolaire : des leviers concrets pour agir efficacement",
    date: "8 mai 2024",
    text: "Des outils simples pour instaurer un dialogue utile."
  }
];

export const studentThemes = [
  {
    title: "Santé & bien-être",
    text: "Comprendre ton corps et tes limites.",
    icon: HeartPulse
  },
  {
    title: "Influence & choix",
    text: "Décrypter la pression sociale et les stratégies d’influence.",
    icon: Brain
  },
  {
    title: "Numérique",
    text: "Protéger ta vie privée et tes données.",
    icon: Lock
  },
  {
    title: "Relations & respect",
    text: "Mieux vivre ensemble au quotidien.",
    icon: Users
  },
  {
    title: "Droits & responsabilité",
    text: "Savoir ce que tu peux faire et demander.",
    icon: Scale
  }
];

export const studentResources = [
  {
    type: "Vidéo",
    title: "Comprendre l’influence et savoir dire non",
    duration: "8 min",
    icon: Target
  },
  {
    type: "Article",
    title: "Les réseaux sociaux : vrai ou faux ?",
    duration: "5 min de lecture",
    icon: BookOpen
  },
  {
    type: "Infographie",
    title: "Les bons réflexes au quotidien",
    duration: "1 min",
    icon: ShieldCheck
  },
  {
    type: "Podcast",
    title: "Paroles de jeunes : leurs expériences",
    duration: "12 min",
    icon: MessageCircle
  },
  {
    type: "Article",
    title: "Sommeil, stress, écran : trouver l’équilibre",
    duration: "4 min de lecture",
    icon: HeartPulse
  },
  {
    type: "Vidéo",
    title: "Agir quand on est témoin d’une situation",
    duration: "6 min",
    icon: LifeBuoy
  }
];

export const quizzes = [
  {
    title: "Influence & pression des autres",
    questions: "10 questions",
    icon: ShieldCheck
  },
  {
    title: "Vrai ou faux : le tabac",
    questions: "10 questions",
    icon: Target
  },
  {
    title: "Réseaux sociaux : bonnes pratiques",
    questions: "10 questions",
    icon: MessageCircle
  },
  {
    title: "Choix et responsabilité",
    questions: "8 questions",
    icon: Gamepad2
  }
];

export const proofItems = [
  { title: "Contenus validés", text: "Pensés pour un usage scolaire clair.", icon: ShieldCheck },
  { title: "Approche institutionnelle", text: "Un cadre sobre, lisible et rassurant.", icon: Building2 },
  { title: "Ressources utiles", text: "Documents, quiz et supports pour prolonger l’action.", icon: FileText }
];

export const helpContacts = [
  "Parler à un adulte de confiance",
  "Contacter l’équipe éducative",
  "Demander une orientation vers un professionnel",
  "Utiliser les numéros d’urgence si danger immédiat"
];
