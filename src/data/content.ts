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
    id: "influence-dire-non",
    type: "Vidéo",
    title: "Comprendre l’influence et savoir dire non",
    duration: "8 min",
    icon: Target,
    content: "Dans cette vidéo, nous analysons les mécanismes de pression sociale. Comment le groupe influence-t-il nos choix ? Comment s'affirmer sans se mettre en marge ? Tu découvriras des astuces pour dire non fermement tout en gardant tes amis."
  },
  {
    id: "reseaux-sociaux-vrai-faux",
    type: "Article",
    title: "Les réseaux sociaux : vrai ou faux ?",
    duration: "5 min de lecture",
    icon: BookOpen,
    content: "Il est facile de se faire piéger par les apparences sur les réseaux sociaux. Cet article décrypte la différence entre la réalité et la mise en scène (filtres, montage, sélection). Ne compare jamais ta vraie vie aux moments parfaits publiés par les autres."
  },
  {
    id: "bons-reflexes",
    type: "Infographie",
    title: "Les bons réflexes au quotidien",
    duration: "1 min",
    icon: ShieldCheck,
    content: "Une infographie simple : 1. Protège tes mots de passe. 2. Ne partage pas de photos sans accord. 3. Signale le harcèlement. 4. Fais des pauses d'écran. 5. Parle à un adulte en cas de doute."
  },
  {
    id: "paroles-de-jeunes",
    type: "Podcast",
    title: "Paroles de jeunes : leurs expériences",
    duration: "12 min",
    icon: MessageCircle,
    content: "Écoute les témoignages de Léa, Karim et Jules. Ils racontent comment ils ont fait face à une situation de harcèlement, comment ils s'en sont sortis et les leçons qu'ils en ont tirées. Un moment d'échange sans filtre."
  },
  {
    id: "sommeil-stress-ecrans",
    type: "Article",
    title: "Sommeil, stress, écran : trouver l’équilibre",
    duration: "4 min de lecture",
    icon: HeartPulse,
    content: "Les écrans modifient notre perception du temps et retardent l'endormissement à cause de la lumière bleue. L'impact sur ton humeur et tes notes est direct. Voici 3 méthodes pour déconnecter avant de dormir."
  },
  {
    id: "agir-temoin",
    type: "Vidéo",
    title: "Agir quand on est témoin d’une situation",
    duration: "6 min",
    icon: LifeBuoy,
    content: "La majorité des cas de harcèlement s'arrêtent si les témoins interviennent. Mais comment intervenir sans se mettre en danger ? Cette vidéo t'explique les bons réflexes (la méthode des 4D : Distraire, Déléguer, Documenter, Diriger)."
  }
];

export const quizzes = [
  {
    id: "influence",
    title: "Influence & pression des autres",
    questionsCount: "10 questions",
    icon: ShieldCheck,
    summaryPoints: [
      "Le droit de dire non : C'est la base du respect de soi. Céder à la pression pour s'intégrer finit toujours par te causer du tort.",
      "Le conformisme et l'effet de groupe : Ton entourage peut influencer tes décisions sans que tu t'en rendes compte. Apprends à prendre du recul.",
      "L'inaction est une forme de complicité : Si tu es témoin de harcèlement, signaler et en parler est le meilleur moyen de casser la dynamique.",
      "L'affirmation de soi : Exprimer ton désaccord calmement montre ta maturité et peut même inciter d'autres élèves silencieux à te suivre."
    ],
    questions: [
      {
        question: "Un ami insiste pour que tu partages une rumeur sur les réseaux sociaux. Que fais-tu ?",
        options: [
          "Je partage sans réfléchir, c'est mon ami.",
          "Je refuse poliment et lui explique que c'est du cyberharcèlement.",
          "Je partage mais avec un faux compte.",
          "Je bloque mon ami immédiatement."
        ],
        correctAnswer: 1,
        explanation: "Refuser et expliquer est la meilleure approche. Partager une rumeur participe au cyberharcèlement et peut avoir de graves conséquences."
      },
      {
        question: "Qu'est-ce que la 'pression sociale' au collège ou au lycée ?",
        options: [
          "Le fait d'avoir trop de devoirs et d'évaluations.",
          "L'influence que le groupe exerce sur toi pour que tu fasses comme eux.",
          "Une nouvelle tendance sur TikTok très populaire.",
          "La pression atmosphérique dans la cour de récréation."
        ],
        correctAnswer: 1,
        explanation: "La pression sociale est l'influence exercée par le groupe (les amis, la classe) qui te pousse à agir ou penser comme eux, parfois contre ta volonté."
      },
      {
        question: "Tu vois quelqu'un se faire insulter en ligne, mais tu ne le connais pas bien. Quelle est ta responsabilité ?",
        options: [
          "Je ne fais rien, ce ne sont pas mes affaires.",
          "Je signale le contenu à la plateforme et j'en parle à un adulte.",
          "Je rejoins la discussion pour voir ce qu'il se passe.",
          "Je lui envoie un message privé pour me moquer."
        ],
        correctAnswer: 1,
        explanation: "Être spectateur sans rien faire, c'est laisser le harcèlement continuer. Signaler et en parler est le meilleur moyen d'arrêter la situation."
      },
      {
        question: "Un camarade te propose de sécher les cours pour traîner en ville. Que fais-tu ?",
        options: [
          "J'accepte, c'est l'occasion de s'amuser.",
          "Je refuse car je sais que ça peut me causer des ennuis.",
          "J'y vais mais je demande à un autre ami de couvrir mon absence.",
          "Je le dénonce immédiatement au CPE."
        ],
        correctAnswer: 1,
        explanation: "Refuser est la décision responsable. Sécher les cours n'est pas une solution et peut entraîner des sanctions."
      },
      {
        question: "Tes amis se moquent de la tenue vestimentaire d'un nouvel élève. Quelle est la meilleure réaction ?",
        options: [
          "Je rigole avec eux pour ne pas être exclu du groupe.",
          "Je dis clairement que je ne trouve pas ça drôle et je change de sujet.",
          "Je prends une photo pour la mettre en story.",
          "Je vais insulter l'élève avec eux."
        ],
        correctAnswer: 1,
        explanation: "Ne pas participer aux moqueries et exprimer son désaccord montre ton indépendance et ton respect pour les autres."
      },
      {
        question: "Si tout ton groupe d'amis a tort sur un sujet grave, as-tu le droit d'avoir un avis différent ?",
        options: [
          "Non, la majorité a toujours raison.",
          "Oui, tu as ton libre arbitre et le droit de penser par toi-même.",
          "Seulement si le professeur est d'accord.",
          "Je dois me forcer à penser comme eux."
        ],
        correctAnswer: 1,
        explanation: "Le libre arbitre est essentiel. Ce n'est pas parce que 'tout le monde le fait' que c'est une bonne chose ou que c'est vrai."
      },
      {
        question: "Qu'est-ce que l'effet de groupe (ou conformisme) ?",
        options: [
          "Un nouveau sport collectif.",
          "La tendance à modifier son comportement pour qu'il corresponde à celui du groupe.",
          "Le fait de travailler en équipe sur un projet.",
          "Le sentiment d'être seul même au milieu d'une foule."
        ],
        correctAnswer: 1,
        explanation: "L'effet de groupe pousse parfois à agir contre ses propres valeurs par peur d'être rejeté par les autres."
      },
      {
        question: "Tu es témoin d'une bagarre dans la cour. Quelqu'un crie 'Filmez !'. Que dois-tu faire ?",
        options: [
          "Je sors mon téléphone et je filme.",
          "Je m'éloigne ou je vais prévenir un adulte (pion, professeur).",
          "Je me bats aussi.",
          "J'encourage ceux qui se battent."
        ],
        correctAnswer: 1,
        explanation: "Filmer et diffuser une agression est un délit (complicité de violence ou happy slapping). Prévenir un adulte est le bon réflexe."
      },
      {
        question: "Un ami t'incite à voler un petit objet dans un magasin 'juste pour le défi'. Que faire ?",
        options: [
          "Je le fais pour prouver que je n'ai pas peur.",
          "Je refuse, c'est du vol et c'est illégal, même pour un 'défi'.",
          "Je lui dis de le faire lui-même.",
          "Je fais semblant de voler."
        ],
        correctAnswer: 1,
        explanation: "Savoir dire non à un acte illégal prouve ta maturité. La pression d'un défi ne justifie jamais un vol."
      },
      {
        question: "Comment dire 'non' à un ami de manière efficace sans forcément le vexer ?",
        options: [
          "En l'insultant.",
          "En donnant une excuse bidon.",
          "En disant 'Non, je ne le sens pas' fermement mais calmement.",
          "En arrêtant de lui parler pour toujours."
        ],
        correctAnswer: 2,
        explanation: "Un vrai ami comprendra un 'non' ferme et honnête s'il est exprimé calmement. S'il insiste trop, c'est lui qui manque de respect."
      }
    ]
  },
  {
    id: "tabac",
    title: "Vrai ou faux : le tabac et les puffs",
    questionsCount: "10 questions",
    icon: Target,
    summaryPoints: [
      "L'illusion de la détente : Le tabac n'apaise pas le stress, il soulage seulement le manque de nicotine qu'il a lui-même créé.",
      "Les puffs, un piège marketing : Avec leurs goûts sucrés et leur design, elles sont conçues pour rendre les jeunes dépendants le plus tôt possible.",
      "Un budget colossal parti en fumée : Fumer coûte en moyenne plus de 350€ par mois, un budget qui pourrait servir à tes projets.",
      "Pas de consommation sans risque : Même fumer occasionnellement modifie ton cerveau (qui est en plein développement) et endommage ton corps."
    ],
    questions: [
      {
        question: "Fumer occasionnellement (le week-end par exemple) ne rend pas dépendant. Vrai ou faux ?",
        options: [
          "Vrai, il faut fumer tous les jours pour être accro.",
          "Faux, la dépendance à la nicotine peut s'installer très rapidement, même occasionnellement."
        ],
        correctAnswer: 1,
        explanation: "Le cerveau adolescent est particulièrement sensible à la nicotine. La dépendance peut s'installer en quelques semaines, même avec une faible consommation."
      },
      {
        question: "La cigarette électronique jetable (puff) est totalement inoffensive pour la santé.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. Les puffs contiennent des substances chimiques, parfois de la nicotine à fort dosage, et habituent le geste. Elles sont un tremplin vers le tabagisme."
      },
      {
        question: "Fumer aide à réduire le stress de manière durable.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. La sensation d'apaisement est due au manque de nicotine qui se dissipe. En réalité, le tabac augmente le niveau d'anxiété global."
      },
      {
        question: "Le tabac est la première cause de mort évitable en France.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 0,
        explanation: "Vrai. Le tabac cause environ 75 000 décès par an en France (cancers, maladies cardiovasculaires)."
      },
      {
        question: "La chicha est moins nocive que la cigarette car la fumée passe dans l'eau.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. Une séance de chicha équivaut à fumer plusieurs dizaines de cigarettes. L'eau ne filtre pas le goudron ni le monoxyde de carbone."
      },
      {
        question: "Combien coûte environ un paquet de cigarettes en France aujourd'hui ?",
        options: [
          "Environ 5 euros.",
          "Environ 12 euros."
        ],
        correctAnswer: 1,
        explanation: "À environ 12 euros le paquet, fumer un paquet par jour représente un budget de plus de 350 euros par mois !"
      },
      {
        question: "Le tabagisme passif (respirer la fumée des autres) n'est pas vraiment dangereux.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. Le tabagisme passif tue des milliers de personnes par an et augmente les risques de maladies respiratoires chez ceux qui le subissent."
      },
      {
        question: "Les puffs au goût fruité et sucré (fraise, bonbon) ciblent particulièrement quel public ?",
        options: [
          "Les adultes qui veulent arrêter de fumer.",
          "Les adolescents et les jeunes, pour les rendre dépendants."
        ],
        correctAnswer: 1,
        explanation: "Le marketing des puffs avec leurs goûts sucrés et couleurs vives vise clairement à attirer les jeunes pour initier une nouvelle génération à la nicotine."
      },
      {
        question: "Arrêter de fumer avant 30 ans permet d'annuler presque tous les risques liés au tabac pour la santé.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 0,
        explanation: "Vrai. Plus on arrête tôt, plus le corps récupère vite. À long terme, l'espérance de vie redevient presque identique à celle d'un non-fumeur."
      },
      {
        question: "Que trouve-t-on dans la fumée d'une cigarette traditionnelle ?",
        options: [
          "Seulement de la nicotine et du tabac naturel.",
          "Plus de 4000 substances chimiques, dont de l'ammoniac, du goudron et du polonium (radioactif)."
        ],
        correctAnswer: 1,
        explanation: "La combustion du tabac libère des milliers de substances toxiques qui détruisent les poumons et l'organisme."
      }
    ]
  },
  {
    id: "reseaux",
    title: "Réseaux sociaux : bonnes pratiques",
    questionsCount: "10 questions",
    icon: MessageCircle,
    summaryPoints: [
      "Rien ne s'efface vraiment : Tout ce que tu publies (photos, commentaires) constitue ton 'empreinte numérique' qui peut te suivre pendant des années.",
      "Le droit à l'image est strict : Tu ne peux pas publier la photo de quelqu'un sans son accord explicite, même si c'est pour rire.",
      "Le cyberharcèlement est un délit : La loi punit très sévèrement les insultes en ligne, les menaces et le partage de contenus intimes.",
      "Protège ta vie privée : Ne donne jamais tes mots de passe, n'accepte pas les inconnus, et bloque tout profil toxique sans hésiter."
    ],
    questions: [
      {
        question: "Est-il prudent d'accepter tous les amis ou followers qu'on te propose sur un réseau social ?",
        options: [
          "Oui, ça fait plus de visibilité.",
          "Non, il faut accepter uniquement les personnes que l'on connaît dans la vraie vie."
        ],
        correctAnswer: 1,
        explanation: "Accepter des inconnus t'expose à des risques (arnaques, vols d'informations, personnes mal intentionnées)."
      },
      {
        question: "Le droit à l'image, c'est quoi ?",
        options: [
          "Le droit de prendre des photos de tout le monde.",
          "L'obligation de demander l'accord d'une personne avant de prendre et publier sa photo."
        ],
        correctAnswer: 1,
        explanation: "Publier la photo d'un ami sans son accord est interdit, même si la photo te semble drôle ou inoffensive."
      },
      {
        question: "Que dois-tu faire si tu reçois un message menaçant d'un profil inconnu ?",
        options: [
          "Je réponds par une insulte.",
          "Je bloque le profil, je fais une capture d'écran et j'en parle à un adulte."
        ],
        correctAnswer: 1,
        explanation: "Ne jamais répondre à la haine. Capturer la preuve et bloquer est la méthode la plus sûre."
      },
      {
        question: "Si tu supprimes une photo de ton compte Instagram ou Snapchat, disparaît-elle complètement d'Internet ?",
        options: [
          "Oui, immédiatement.",
          "Non, quelqu'un a pu faire une capture d'écran, et les données restent sur des serveurs."
        ],
        correctAnswer: 1,
        explanation: "Sur Internet, rien ne s'efface vraiment. Il faut toujours réfléchir avant de publier (c'est ton empreinte numérique)."
      },
      {
        question: "Le cyberharcèlement (insultes répétées en ligne) est puni par la loi.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 0,
        explanation: "Vrai. C'est un délit puni de lourdes amendes et de peines de prison, même pour les mineurs."
      },
      {
        question: "Ton mot de passe (Snapchat, Insta, TikTok) peut-il être partagé avec ton/ta petit(e) ami(e) ou ton meilleur ami ?",
        options: [
          "Oui, pour prouver qu'on a confiance.",
          "Non, un mot de passe est strictement personnel."
        ],
        correctAnswer: 1,
        explanation: "Même en toute confiance, donner son mot de passe, c'est perdre le contrôle de son identité numérique. Personne ne devrait le demander."
      },
      {
        question: "Un temps d'écran excessif (surtout le soir) peut-il impacter ton sommeil ?",
        options: [
          "Oui, la lumière bleue retarde l'endormissement.",
          "Non, ça aide à se détendre."
        ],
        correctAnswer: 0,
        explanation: "La lumière des écrans fait croire au cerveau qu'il fait encore jour. Il est conseillé de couper les écrans 1 heure avant de dormir."
      },
      {
        question: "Qu'est-ce qu'une 'fake news' ?",
        options: [
          "Une fausse information créée pour tromper ou manipuler le public.",
          "Une nouvelle mise à jour sur une application."
        ],
        correctAnswer: 0,
        explanation: "Il est crucial de vérifier ses sources (croiser les infos) avant de croire ou partager une nouvelle choquante."
      },
      {
        question: "En France, quelle est l'âge de la 'majorité numérique' pour s'inscrire seul(e) sur un réseau social ?",
        options: [
          "13 ans",
          "15 ans"
        ],
        correctAnswer: 1,
        explanation: "En France, la loi fixe la majorité numérique à 15 ans. En dessous, l'accord des parents est légalement requis pour traiter tes données."
      },
      {
        question: "Si on t'envoie une photo intime (nudes) de quelqu'un d'autre sans son accord. Que fais-tu ?",
        options: [
          "Je la transfère à mes amis pour qu'ils voient.",
          "Je ne transfère surtout pas, je la supprime et je conseille à la victime de porter plainte."
        ],
        correctAnswer: 1,
        explanation: "Transférer ce type d'image fait de toi un complice de cyberviolences et de 'revenge porn', ce qui est un délit."
      }
    ]
  },
  {
    id: "choix",
    title: "Choix et responsabilité",
    questionsCount: "10 questions",
    icon: Gamepad2,
    summaryPoints: [
      "Liberté rime avec Responsabilité : Ta liberté d'expression s'arrête là où commencent les droits et la dignité des autres.",
      "La loi s'applique aussi aux mineurs : Dès que tu as la capacité de discernement, tu es responsable pénalement et civilement de tes actes.",
      "L'effet amplificateur d'Internet : Partager ou liker une insulte te rend complice aux yeux de la justice.",
      "L'excuse de 'la blague' ne fonctionne jamais : La justice ne regarde pas l'intention de 'juste rigoler', elle regarde les dégâts réels causés."
    ],
    questions: [
      {
        question: "La liberté d'expression permet de dire absolument tout ce que l'on veut, même d'insulter quelqu'un.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. La liberté d'expression a des limites fixées par la loi : les insultes, la diffamation et l'incitation à la haine sont interdites."
      },
      {
        question: "À partir de quel âge un mineur peut-il être tenu pour pénalement responsable de ses actes en France ?",
        options: [
          "À 18 ans seulement.",
          "Dès qu'il est capable de discernement (souvent vers 10-13 ans)."
        ],
        correctAnswer: 1,
        explanation: "Un mineur doté de discernement peut être sanctionné par la justice. Les peines s'adaptent selon l'âge (mesures éducatives ou sanctions pénales)."
      },
      {
        question: "Relayer ou 'retweeter' une insulte grave, c'est aussi grave que de l'avoir écrite soi-même.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 0,
        explanation: "Vrai. La justice considère que diffuser publiquement un message haineux te rend complice et responsable de la propagation."
      },
      {
        question: "Prendre une décision responsable, c'est avant tout :",
        options: [
          "Faire ce qui nous fait plaisir dans l'instant.",
          "Réfléchir aux conséquences de ses actes pour soi-même et pour les autres."
        ],
        correctAnswer: 1,
        explanation: "La responsabilité implique d'assumer ses actes et de comprendre que notre liberté s'arrête là où commence celle des autres."
      },
      {
        question: "Si on te provoque verbalement, répondre par la violence physique est considéré comme de la légitime défense.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. La légitime défense doit être proportionnelle et immédiate face à une attaque physique. Répondre à un mot par un coup est une agression."
      },
      {
        question: "Qu'est-ce que le 'libre arbitre' ?",
        options: [
          "La capacité à choisir librement par soi-même, sans être contrôlé par les autres.",
          "Un arbitre de foot qui n'est rattaché à aucun club."
        ],
        correctAnswer: 0,
        explanation: "Avoir son libre arbitre, c'est savoir résister à la pression du groupe et prendre ses propres décisions en conscience."
      },
      {
        question: "L'expression 'C'était juste pour rigoler' est-elle une excuse valable devant le directeur ou un juge en cas de harcèlement ?",
        options: [
          "Oui, si l'intention n'était pas méchante.",
          "Non, on regarde les conséquences sur la victime, pas l'intention de départ."
        ],
        correctAnswer: 1,
        explanation: "Ce qui compte, ce sont les dégâts causés. Le harcèlement est souvent banalisé par les agresseurs comme étant 'un jeu'."
      },
      {
        question: "Aider un camarade en difficulté ou isolé dans la cour est un acte de...",
        options: [
          "Faiblesse.",
          "Responsabilité citoyenne et de courage."
        ],
        correctAnswer: 1,
        explanation: "Intervenir (sans se mettre en danger) ou aller chercher de l'aide montre une grande maturité et un esprit de solidarité."
      },
      {
        question: "Les règles de vie du collège ou du lycée (le règlement intérieur) servent uniquement à punir les élèves.",
        options: [
          "Vrai",
          "Faux"
        ],
        correctAnswer: 1,
        explanation: "Faux. Elles servent avant tout à organiser la vie en communauté et à garantir la sécurité et le respect de chacun."
      },
      {
        question: "Si je casse du matériel au collège intentionnellement, qui doit payer ?",
        options: [
          "C'est gratuit, l'État paie.",
          "Mes parents (ou responsables légaux) peuvent devoir rembourser les dégâts."
        ],
        correctAnswer: 1,
        explanation: "Les parents sont civilement responsables des actes de leurs enfants mineurs. Les dégradations coûtent cher et pénalisent tout l'établissement."
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
