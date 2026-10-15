import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { HelpCTA } from "../../components/HelpCTA";
import { Helmet } from "react-helmet-async";
import { 
  BookOpen, 
  LifeBuoy, 
  Brain, 
  Play, 
  Flame, 
  Wind, 
  Skull, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export function StudentHome() {
  const [activeTab, setActiveTab] = useState<"puff" | "proto" | "ptc">("puff");

  const productData = {
    puff: {
      title: "La Puff",
      subtitle: "Arômes bonbons, format poche.",
      badge: "THÈME PRINCIPAL",
      badgeColor: "#ff4b4b",
      fact: "Une fiole 16K peut concentrer l'équivalent nicotinique de plus de 200 cigarettes.",
      danger: "Effets cardiovasculaires rapides et dépendance immédiate du cerveau adolescent.",
      quizId: "puff-mythes-realites"
    },
    proto: {
      title: "Le Protoxyde d'azote",
      subtitle: "Un gaz détourné pour 30 secondes de rire.",
      badge: "PREMIERS REPÈRES",
      badgeColor: "#a855f7",
      fact: "Destruction irréversible de la vitamine B12 essentielle à la gaine de myéline.",
      danger: "Paresthésies, paralysie progressive, risque de finir en fauteuil roulant.",
      quizId: "protoxyde-azote"
    },
    ptc: {
      title: "Le PTC / Vapoteuses modifiées",
      subtitle: "« Pète Ton Crâne » : cannabinoïdes de synthèse.",
      badge: "EXTRÊME DANGER",
      badgeColor: "#e10600",
      fact: "Ce n'est pas du CBD, mais des molécules chimiques créées en laboratoire.",
      danger: "Convulsions, perte de conscience brutale et hospitalisation en urgence dès la première taffe.",
      quizId: "ptc-drogues-synthese"
    }
  };

  const current = productData[activeTab];

  return (
    <>
      <Helmet>
        <title>Espace Élève - Alert’Élèves</title>
        <meta name="description" content="Accède à des ressources courtes, des quiz et trouve de l'aide rapidement sur les nouveaux usages à risque." />
      </Helmet>

      <main>
        {/* HERO SECTION AVEC WIDGET INTERACTIF SANS IMAGE */}
        <section className="container hero" style={{ alignItems: "stretch", padding: "clamp(36px, 5vw, 64px) 0" }}>
          
          {/* Colonne gauche : Titre & Actions principales */}
          <div className="hero-content" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <p className="kicker" style={{ margin: 0 }}>Espace élèves</p>
              <Link
                to="/eleve"
                style={{
                  background: "rgba(225, 6, 0, 0.08)",
                  border: "1px solid rgba(225, 6, 0, 0.25)",
                  color: "var(--ae-red, #e10600)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                <Play size={12} />
                <span>Revoir l'intro</span>
              </Link>
            </div>

            <h1>
              Ici, tu t’informes, tu comprends et tu passes à l’action<span className="red-dot">.</span>
            </h1>

            <p className="lead">
              Découvre des ressources sans tabou ni jugement, teste tes connaissances avec nos quiz et trouve de l’aide anonyme si tu en as besoin.
            </p>

            <div className="actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
              <Button href="/eleve/ressources" variant="secondary">Les infos essentielles</Button>
              <Button href="/eleve/quiz-aide" variant="primary">Tester mes connaissances</Button>
            </div>
          </div>

          {/* Colonne droite : WIDGET CARTE D'IMPACT & QUIZ EXPRESS (Remplace l'image) */}
          <div 
            style={{
              background: "linear-gradient(145deg, #121214 0%, #09090b 100%)",
              borderRadius: "var(--radius-xl, 26px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              padding: "clamp(20px, 3.5vw, 32px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "#ffffff",
              minHeight: "420px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Lueur d'ambiance en coin */}
            <div 
              style={{
                position: "absolute",
                top: "-20%",
                right: "-20%",
                width: "60%",
                height: "60%",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${current.badgeColor}25 0%, transparent 70%)`,
                filter: "blur(30px)",
                pointerEvents: "none",
                transition: "background 0.4s ease"
              }}
            />

            {/* Haut du widget : Sélecteur de produit à onglets */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span 
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: current.badgeColor,
                    background: `${current.badgeColor}18`,
                    border: `1px solid ${current.badgeColor}35`,
                    padding: "4px 10px",
                    borderRadius: "999px",
                    transition: "all 0.3s ease"
                  }}
                >
                  {current.badge}
                </span>

                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>
                  Repères express
                </span>
              </div>

              {/* Boutons d'onglets pour switcher de produit */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "20px" }}>
                <button
                  onClick={() => setActiveTab("puff")}
                  style={{
                    background: activeTab === "puff" ? "#ffffff" : "rgba(255,255,255,0.06)",
                    color: activeTab === "puff" ? "#0b0b0b" : "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "10px 6px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Flame size={15} style={{ color: activeTab === "puff" ? "var(--ae-red)" : "inherit" }} />
                  <span>Puff</span>
                </button>

                <button
                  onClick={() => setActiveTab("proto")}
                  style={{
                    background: activeTab === "proto" ? "#ffffff" : "rgba(255,255,255,0.06)",
                    color: activeTab === "proto" ? "#0b0b0b" : "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "10px 6px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Wind size={15} style={{ color: activeTab === "proto" ? "#7928ca" : "inherit" }} />
                  <span>Proto</span>
                </button>

                <button
                  onClick={() => setActiveTab("ptc")}
                  style={{
                    background: activeTab === "ptc" ? "#ffffff" : "rgba(255,255,255,0.06)",
                    color: activeTab === "ptc" ? "#0b0b0b" : "rgba(255,255,255,0.7)",
                    border: "none",
                    borderRadius: "12px",
                    padding: "10px 6px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    transition: "all 0.2s ease"
                  }}
                >
                  <Skull size={15} style={{ color: activeTab === "ptc" ? "var(--ae-red)" : "inherit" }} />
                  <span>PTC</span>
                </button>
              </div>

              {/* Fiche d'impact du produit sélectionné */}
              <div style={{ animation: "fadeInTab 0.3s ease" }} key={activeTab}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "0 0 4px", color: "#ffffff" }}>
                  {current.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", margin: "0 0 16px" }}>
                  {current.subtitle}
                </p>

                <div 
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    marginBottom: "12px"
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: current.badgeColor, letterSpacing: "0.06em", marginBottom: "4px" }}>
                    LE VRAI CHIFFRE
                  </div>
                  <p style={{ margin: 0, fontSize: "0.92rem", lineHeight: 1.5, color: "rgba(255,255,255,0.9)" }}>
                    {current.fact}
                  </p>
                </div>

                <div 
                  style={{
                    background: "rgba(225, 6, 0, 0.08)",
                    border: "1px solid rgba(225, 6, 0, 0.2)",
                    borderRadius: "14px",
                    padding: "12px 16px"
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--ae-red)", letterSpacing: "0.06em", marginBottom: "4px" }}>
                    CE QUE ÇA FAIT VRAIMENT
                  </div>
                  <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.45, color: "rgba(255,255,255,0.85)" }}>
                    {current.danger}
                  </p>
                </div>
              </div>
            </div>

            {/* Bas du widget : Bouton d'action directe vers le Quiz du produit */}
            <div style={{ marginTop: "24px", position: "relative", zIndex: 2 }}>
              <Link
                to={`/eleve/quiz/${current.quizId}`}
                style={{
                  background: "var(--ae-red, #e10600)",
                  color: "#ffffff",
                  borderRadius: "12px",
                  padding: "13px 20px",
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(225, 6, 0, 0.35)",
                  transition: "transform 0.15s ease"
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Sparkles size={16} />
                  <span>Tester mes connaissances sur ce sujet</span>
                </span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </section>

        {/* SECTION « JE COMMENCE ICI » */}
        <section id="start" className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">Je commence ici</p>
              <h2>Pourquoi Alert’Élèves ?<span className="red-dot">.</span></h2>
              <p style={{ maxWidth: 800, fontSize: "1.1rem", lineHeight: 1.6, marginTop: "1rem" }}>
                Alert’Élèves, c’est avant tout un espace créé pour te donner les vraies informations. Pas de jugement, pas de discours moralisateur. Juste des faits scientifiques, des données légales et médicales, pour que tu puisses faire tes propres choix en toute conscience face aux nouveaux produits (Puff, Protoxyde d'azote, PTC...).
              </p>
            </div>
          </div>

          <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
            
            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="icon-badge red"><Brain size={24} /></span>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>Les cours et ressources</h3>
              <p style={{ color: "var(--ae-text)", flex: 1, margin: 0 }}>
                Comprends comment fonctionne ton cerveau face aux addictions, et découvre les vrais effets de la Puff, du Protoxyde d'azote et du PTC.
              </p>
              <Button href="/eleve/ressources" variant="secondary" style={{ width: "fit-content" }}>Consulter les cours</Button>
            </div>

            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="icon-badge black"><LifeBuoy size={24} /></span>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>Ressources d'aide directe</h3>
              <p style={{ color: "var(--ae-text)", flex: 1, margin: 0 }}>
                Trouve un accompagnement gratuit et anonyme pour toi ou pour un proche qui en ressent le besoin.
              </p>
              <Button href="/eleve/aide" variant="primary" style={{ width: "fit-content" }}>Trouver de l'aide</Button>
            </div>

          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <HelpCTA />
        </section>
      </main>

      <style>{`
        @keyframes fadeInTab {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
