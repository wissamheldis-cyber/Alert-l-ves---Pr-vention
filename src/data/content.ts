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
  signature: "Prévenir - Éduquer - Protéger",
  founder: "A.M.17",
  mainModule: "Module 01 - Nouveaux usages à risque"
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
    title: "Fiche pratique - Réagir face à une situation à risque",
    meta: "PDF · 1,1 Mo",
    text: "Repérer, écouter et orienter les élèves.",
    category: "Fiches pratiques",
    icon: Download
  },
  {
    title: "Cadre juridique - Responsabilités & obligations",
    meta: "PDF · 1,8 Mo",
    text: "Repères pour les établissements scolaires.",
    category: "Cadre juridique",
    icon: Download
  },
  {
    title: "Kit d’animation - Module 01",
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
    id: "cerveau",
    type: "Article",
    title: "Comment marche ton cerveau",
    duration: "4 min de lecture",
    icon: Brain,
    content: `Lis ça en premier. Ça t’aidera à comprendre tout le reste.

La dopamine - l’hormone du “recommence”
Dans ton cerveau il y a une molécule qui s’appelle la dopamine. C’est pas l’hormone du bonheur comme on le croit souvent - c’est l’hormone du “recommence”. Chaque fois que tu fais quelque chose qui te procure du plaisir (manger, scroller, rigoler), ton cerveau libère de la dopamine. Son message c’est pas “c’était bien” - c’est “refais-le”.

C’est pour ça que tu relances une partie après une défaite, que tu scrolles TikTok alors que tu voulais juste regarder une vidéo, ou que tu rouvres le frigo sans avoir faim. Ton cerveau a noté ce qui t’a fait du bien, et il te le repropose - automatiquement.

Le frein - le cortex préfrontal
Ton cerveau a aussi un frein : le cortex préfrontal. C’est lui qui te permet de réfléchir, de freiner une impulsion, de dire non.

Sauf qu’il est pas terminé avant 25 ans. À l’adolescence, le circuit de la dopamine tourne à plein régime mais le frein est encore en construction.

C’est pas un défaut. C’est pour ça que t’apprends une langue, un sport ou une compétence plus vite maintenant. Mais c’est aussi pour ça que les automatismes - bons ou mauvais - s’installent plus vite.

L’automatisme - quand c’est plus un choix
Quand tu répètes un geste assez souvent, ton cerveau finit par le faire sans que tu y penses. Comme le trajet maison-lycée, ou déverrouiller ton téléphone.

Le problème c’est que ça marche aussi pour les mauvaises habitudes. Et quand tu dois te convaincre que tu gères - souvent, tu gères pas.

Si tu ressens un besoin spécifique dans les mêmes situations (stress, pause, soirée, ennui) - c’est plus un choix. C’est un automatisme.

(Source : Inserm)`
  },
  {
    id: "puff",
    type: "Dossier interactif",
    title: "PUFF - Les infos essentielles",
    duration: "5 min",
    icon: Target,
    content: [
      {
        title: "💨 Ce que tu inhales vraiment",
        body: "L’aérosol d’une puff, c’est pas de l’air. Il contient plus de 100 substances toxiques et jugées préoccupantes par les autorités sanitaires. Ça touche les poumons et le cœur - qu’il y ait de la nicotine ou pas.\n\n(Source : ANSES, rapport 2026)"
      },
      {
        title: "🧠 Ce que ça fait à ton cerveau",
        body: "Le sel de nicotine d’une puff atteint ton cerveau en 10 à 20 secondes. Il déclenche une libération massive de dopamine - bien plus forte que la nourriture ou un jeu vidéo. Ton cerveau note, enregistre, et crée un automatisme puissant.\n\nLa nicotine peut figer ce circuit. Ton cerveau peut rester câblé comme un cerveau d’ado, même une fois adulte. Elle dégrade ton comportement, ton attention et ta capacité d’apprentissage.\n\nEt pour devenir dépendant, pas besoin d’années. En quelques mois, ton cerveau est accroché.\n\n(Source : Inserm)"
      },
      {
        title: "🎯 Pourquoi c’est pensé pour toi",
        body: "Les arômes servent à deux choses : donner l’impression que c’est inoffensif, et masquer le goût des produits chimiques. L’OMS a recensé plus de 15 000 arômes différents.\n\nCe produit n’a pas été créé pour aider un fumeur adulte à arrêter. Couleurs pastel, forme discrète, prix entre 10 et 15€ - c’est le budget d’un lycéen. L’OMS a dénoncé cette manœuvre comme clairement destinée aux adolescents.\n\n10-15€ ça a l’air de rien. Mais x4 par mois, c’est 60€ par mois et 720€ par an. Un petit achat devient un abonnement invisible.\n\n(Sources : OMS, OFDT)"
      },
      {
        title: "⚖️ Ce que dit la loi",
        body: "Depuis le 25 février 2025, la vente de puffs est interdite en France. 2e pays de l’UE à les interdire, avec la Belgique.\n\nAmende : jusqu’à 100 000€. Récidive : 200 000€.\n\nLa loi est là pour protéger, pas pour punir.\n\n(Source : Légifrance, loi n° 2025-175)"
      },
      {
        title: "🌍 Et l’environnement",
        body: "Chaque puff jetée ne se recycle pas. À l’intérieur : batterie au lithium, plastique, métaux lourds. Des déchets dangereux."
      }
    ]
  },
  {
    id: "proto",
    type: "Dossier interactif",
    title: "PROTO - Les infos essentielles",
    duration: "7 min",
    icon: ShieldCheck,
    content: [
      {
        title: "🔬 C’est quoi le proto",
        body: "Formule chimique : N₂O. Protoxyde d’azote. Gaz incolore, sans odeur, légèrement sucré. Utilisé par les chirurgiens comme anesthésiant et par les pâtissiers dans les siphons à chantilly.\n\nDeux domaines auxquels on fait confiance - c’est exactement pour ça que personne se méfie.\n\nEn 2017 : petites cartouches de 8g à 2€. En 2025 : bonbonnes de 600g, tanks de 2 kg, goûts fruités, 15-20€. Le même marketing que la puff. Sauf que là c’est un gaz anesthésiant.\n\n(Source : Santé Publique France, 2025)"
      },
      {
        title: "🧠 Ce que ça fait dans ton corps",
        body: "Le N₂O remplace l’oxygène dans tes poumons. En même temps, il se fixe sur des récepteurs cérébraux - les mêmes que la morphine - et déclenche de la dopamine. C’est une privation ET une activation du circuit de récompense en même temps.\n\nEn parallèle, le proto détruit la myéline - la gaine protectrice qui entoure tous tes nerfs, comme l’isolant d’un câble électrique. Sans elle, les messages entre ton cerveau et ton corps passent mal, ou plus du tout.\n\nIl bloque aussi la vitamine B12, le carburant de tes nerfs. Elle est toujours là, mais elle marche plus.\n\nPremiers signes : fourmis dans les mains et les pieds, faiblesse musculaire, difficultés à marcher. Ça peut arriver des semaines après - sans que tu fasses le lien.\n\n(Sources : MILDECA, Protoside / CHU Lille, 2025)"
      },
      {
        title: "⚡ Les risques immédiats",
        body: "Inhalation directe depuis une bonbonne : le gaz sort à -40°C. Brûlures internes.\n\nDebout quand tu inhales : perte d’équilibre, chute. Carrelage, coin de table.\n\nLe proto supprime le réflexe de toux. Si tu vomis pendant l’inhalation : fausse route, asphyxie.\n\nLes complications arrivent aussi bien après des mois qu’après quelques soirées. Ça dépend de ton taux de B12 de base. Personne peut prédire. Personne.\n\n(Source : ANSM, 2024)"
      },
      {
        title: "📊 Les chiffres",
        body: "5,8% des lycéens en ont déjà consommé. 14% des 18-24 ans. Signalements d’intoxications multipliés par 3 entre 2020 et 2023. 74% des signalements = une hospitalisation.\n\nUn consommateur sur deux en a pris en conduisant.\n\n(Sources : OFDT, MILDECA, Santé Publique France, Groupama, ARS Occitanie)"
      },
      {
        title: "💀 Des histoires vraies",
        body: "Yohan - 19 ans. Trois mois, seulement en soirée. Arrêt cardiaque. Décédé en 2018.\n\nPierre - 24 ans. Quelques bonbonnes le week-end. Paralysé des jambes. Aujourd’hui il fait 40 mètres sans béquilles.\n\nMathis - 19 ans. Piéton sur un passage clouté. Percuté par un conducteur sous proto. Décédé sur place. Il n’avait rien consommé."
      },
      {
        title: "🚫 Les mythes",
        body: "“30 secondes donc c’est rien” → Les dégâts mettent 6 semaines à sortir.\n\n“Tout le monde le fait” → Ça crée l’illusion, pas la sécurité.\n\n“B12 en comprimés = ça compense” → Le proto la bloque. Comprimés = seau percé.\n\n“Ça vient de la cuisine” → L’origine change rien à ce que ça fait.\n\n“C’est légal donc safe” → La loi RIPOST arrive. Inhaler = 1 an de prison.\n\n“Ça rend pas accro” → Même chose dite sur les opioïdes."
      },
      {
        title: "⚖️ La loi",
        body: "2021 : interdiction de vente aux mineurs. Jamais vraiment appliquée.\n\n2026 : loi RIPOST (adoptée au Sénat le 26 mai 2026, en attente de l’Assemblée) :\nInhaler → 1 an, 3 750€. Transporter → 2 ans, 7 500€. Conduire → 3 ans, 9 000€. Vente aux particuliers → interdite.\n\n(Sources : Sénat, Ministère de l’Intérieur, 2026)"
      },
      {
        title: "🆘 Urgence - 3 gestes",
        body: "1. Vérifier qu’il respire - main sur le ventre.\n2. Inconscient mais respire → PLS. Sur le côté, genou plié, main sous la joue, bouche vers le bas.\n3. Appeler le 15 ou 112. Rester en ligne. Rester avec lui.\n\n📞 Drogues Info Service - 0800 23 13 13 (gratuit, anonyme, 8h-2h)\n📍 CJC - Sans rendez-vous, sans jugement → drogues-info-service.fr"
      }
    ]
  }
];

export const quizzes = [
  {
    id: "puff",
    title: "QUIZ PUFF",
    questionsCount: "10 questions",
    icon: Target,
    summaryPoints: [
      "Le sel de nicotine de la puff atteint ton cerveau en 10 à 20 secondes, déclenchant une libération massive de dopamine.",
      "L'aérosol contient plus de 100 substances toxiques. C'est loin d'être simplement de la 'vapeur d'eau'.",
      "Avec ses goûts sucrés et ses couleurs pastel, la puff a été conçue spécifiquement pour rendre les jeunes dépendants.",
      "La France a interdit la vente de puffs (loi votée début 2025) car elles représentent un danger sanitaire et écologique majeur."
    ],
    questions: [
      {
        question: "Tu penses tout savoir sur la puff ?\n\nQ1. La dopamine, c’est quoi exactement ?",
        options: [
          "L’hormone du bonheur",
          "L’hormone du “recommence”",
          "L’hormone du stress",
          "L’hormone de la mémoire"
        ],
        correctAnswer: 1,
        explanation: "La dopamine ne dit pas “c’était bien”, elle dit “refais-le”. C’est pour ça que tu relances une partie ou que tu scrolles sans t’arrêter."
      },
      {
        question: "Q2. En combien de temps le sel de nicotine d’une puff atteint-il ton cerveau ?",
        options: [
          "1 minute",
          "10 à 20 secondes",
          "5 minutes",
          "Immédiatement"
        ],
        correctAnswer: 1,
        explanation: "En 10 à 20 secondes, la nicotine est dans ton cerveau et déclenche une libération massive de dopamine."
      },
      {
        question: "Q3. Que contient l’aérosol d’une puff ?",
        options: [
          "De la vapeur d’eau",
          "De l’air parfumé",
          "Plus de 100 substances toxiques",
          "Uniquement de la nicotine"
        ],
        correctAnswer: 2,
        explanation: "L’ANSES a identifié 106 substances jugées préoccupantes. Ça touche les poumons et le cœur, même sans nicotine."
      },
      {
        question: "Q4. Le cortex préfrontal - le “frein” du cerveau - finit de se construire à quel âge ?",
        options: [
          "16 ans",
          "18 ans",
          "21 ans",
          "25 ans"
        ],
        correctAnswer: 3,
        explanation: "Avant 25 ans, le circuit de la dopamine tourne à fond mais le frein est encore en construction. C’est pour ça que les automatismes s’installent si vite à ton âge."
      },
      {
        question: "Q5. Combien d’arômes de puff l’OMS a-t-elle recensés dans le monde ?",
        options: [
          "500",
          "3 000",
          "15 000",
          "50 000"
        ],
        correctAnswer: 2,
        explanation: "Plus de 15 000 arômes. Ils servent à masquer les produits chimiques et à rendre le produit inoffensif en apparence."
      },
      {
        question: "Q6. La puff a été conçue pour :",
        options: [
          "Aider les fumeurs adultes à arrêter",
          "Un usage médical",
          "Attirer des non-fumeurs, notamment les jeunes",
          "Remplacer les médicaments anti-tabac"
        ],
        correctAnswer: 2,
        explanation: "Couleurs pastel, goûts sucrés, prix de 10-15€ - c’est le budget d’un lycéen. L’OMS a dénoncé cette manœuvre comme destinée aux ados."
      },
      {
        question: "Q7. En combien de temps peut-on devenir dépendant à la nicotine d’une puff ?",
        options: [
          "Plusieurs années",
          "Au moins un an",
          "Quelques mois",
          "C’est impossible avec une puff"
        ],
        correctAnswer: 2,
        explanation: "Pas besoin d’années. En quelques mois, ton cerveau est accroché à la nicotine."
      },
      {
        question: "Q8. Depuis quand la vente de puffs est-elle interdite en France ?",
        options: [
          "Janvier 2024",
          "Septembre 2024",
          "Février 2025",
          "Juin 2025"
        ],
        correctAnswer: 2,
        explanation: "Depuis le 25 février 2025. La France est le 2e pays de l’UE à les interdire, après la Belgique."
      },
      {
        question: "Q9. Quelle est l’amende maximale pour la vente d’une puff en France ?",
        options: [
          "10 000€",
          "50 000€",
          "100 000€",
          "500 000€"
        ],
        correctAnswer: 2,
        explanation: "100 000€ en première infraction. 200 000€ en récidive."
      },
      {
        question: "Q10. Que contient une puff jetée dans la nature ?",
        options: [
          "Du plastique recyclable",
          "Rien de dangereux",
          "Batterie au lithium, plastique et métaux lourds",
          "Uniquement du plastique"
        ],
        correctAnswer: 2,
        explanation: "Chaque puff jetée est un déchet dangereux. Rien n’est recyclable dedans."
      }
    ]
  },
  {
    id: "proto",
    title: "QUIZ PROTO",
    questionsCount: "7 questions",
    icon: ShieldCheck,
    summaryPoints: [
      "Le protoxyde d'azote est détourné de son usage légal (médecine/pâtisserie).",
      "Il inactive la vitamine B12, indispensable pour protéger tes nerfs (la myéline).",
      "Les dommages nerveux peuvent apparaître des semaines après sans que tu fasses le lien direct.",
      "Conduire après avoir consommé du proto est puni comme la conduite sous stupéfiants."
    ],
    questions: [
      {
        question: "Le proto, c’est juste du gaz hilarant ? 7 questions pour découvrir ce que personne t’a expliqué.\n\nQ1. Le protoxyde d’azote est utilisé légalement dans quels domaines ?",
        options: [
          "La médecine et la pâtisserie",
          "La médecine et le sport",
          "L’agriculture et l’industrie",
          "Uniquement la médecine"
        ],
        correctAnswer: 0,
        explanation: "Les chirurgiens l’utilisent comme anesthésiant, les pâtissiers dans les siphons à chantilly. C’est pour ça que personne se méfie."
      },
      {
        question: "Q2. Qu’est-ce que la myéline ?",
        options: [
          "Une hormone du cerveau",
          "La gaine protectrice qui entoure les nerfs",
          "Un type de neurone",
          "Une substance présente dans le sang"
        ],
        correctAnswer: 1,
        explanation: "C’est comme l’isolant d’un câble électrique. Sans elle, les messages entre ton cerveau et ton corps passent mal, ou plus du tout."
      },
      {
        question: "Q3. Quelle vitamine le proto bloque-t-il dans le corps ?",
        options: [
          "Vitamine C",
          "Vitamine D",
          "Vitamine B12",
          "Vitamine A"
        ],
        correctAnswer: 2,
        explanation: "Le proto rend la B12 inactive. Elle est toujours là mais elle marche plus. Et c’est elle qui protège tes nerfs."
      },
      {
        question: "Q4. En combien de temps les dommages nerveux du proto peuvent-ils apparaître ?",
        options: [
          "Immédiatement",
          "Quelques semaines",
          "Au moins un an",
          "Uniquement après 5 ans"
        ],
        correctAnswer: 1,
        explanation: "Fourmis dans les pieds, faiblesse, troubles de la marche - ça peut sortir des semaines après, sans que tu fasses le lien."
      },
      {
        question: "Q5. À quelle température sort le gaz si on inhale directement depuis une bonbonne ?",
        options: [
          "0°C",
          "-10°C",
          "-40°C",
          "-100°C"
        ],
        correctAnswer: 2,
        explanation: "Moins 40 degrés. Ça brûle la bouche, la gorge et les poumons de l’intérieur."
      },
      {
        question: "Q6. Comment s’appelle la loi en cours de vote contre le proto ?",
        options: [
          "Loi PROTECT",
          "Loi RIPOST",
          "Loi PRÉVENIR",
          "Loi SÉCURITÉ JEUNES"
        ],
        correctAnswer: 1,
        explanation: "Adoptée par le Sénat en mai 2026, en attente de l’Assemblée nationale."
      },
      {
        question: "Q7. Que prévoit la loi RIPOST pour la conduite sous proto ?",
        options: [
          "Simple amende de 200€",
          "Retrait de permis uniquement",
          "3 ans de prison et 9 000€ d’amende",
          "Aucune sanction spécifique"
        ],
        correctAnswer: 2,
        explanation: "Conduire après avoir consommé du proto sera puni comme la conduite sous stupéfiants."
      }
    ]
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
