import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Flame, 
  Wind, 
  Skull, 
  Brain, 
  Wrench, 
  Eye, 
  Scale, 
  ShieldAlert, 
  Compass, 
  HelpCircle, 
  FileCheck2, 
  CheckCircle2, 
  Clock, 
  Users2, 
  GraduationCap, 
  ArrowRight, 
  Mail, 
  Phone, 
  Building, 
  MapPin, 
  AlertCircle, 
  Loader2,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Send
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function EstablishmentHome() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    nom: "",
    fonction: "",
    etablissement: "",
    ville: "",
    niveaux: "",
    nbClasses: "",
    email: "",
    telephone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));

    try {
      const res = await fetch("https://formspree.io/f/xvgovjpb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          nom: "",
          fonction: "",
          etablissement: "",
          ville: "",
          niveaux: "",
          nbClasses: "",
          email: "",
          telephone: "",
          message: ""
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("organiser-intervention");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Alert’Élèves · Prévention en collège et lycée</title>
        <meta 
          name="description" 
          content="Une séance de prévention que vos élèves retiennent. Interventions de prévention en collège et lycée, en Île-de-France." 
        />
      </Helmet>

      <main style={{ color: "#0d0d0d" }}>
        
        {/* ========================================================
            1 · HAUT DE PAGE
           ======================================================== */}
        <section 
          style={{
            position: "relative",
            minHeight: "560px",
            display: "flex",
            alignItems: "center",
            padding: "5rem 1.5rem",
            background: "linear-gradient(135deg, rgba(13,13,13,0.85) 0%, rgba(20,20,20,0.68) 100%), url('/images/etablissement_accueil.jpg') center/cover no-repeat",
            borderRadius: "var(--radius-lg, 24px)",
            margin: "1rem auto 3rem",
            overflow: "hidden",
            color: "#ffffff"
          }}
          className="container"
        >
          <div style={{ maxWidth: "780px", position: "relative", zIndex: 2 }}>
            <div 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                marginBottom: "1.5rem",
                border: "1px solid rgba(255,255,255,0.2)"
              }}
            >
              <MapPin size={15} style={{ color: "var(--ae-red, #e10600)" }} />
              Île-de-France · Collège & Lycée
            </div>

            <h1 
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                color: "#ffffff",
                marginBottom: "1.5rem"
              }}
            >
              Une séance de prévention que vos élèves retiennent<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
            </h1>

            <p 
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.88)",
                marginBottom: "2.5rem",
                fontWeight: 400,
                maxWidth: "640px"
              }}
            >
              Interventions de prévention en collège et lycée, en Île-de-France.
            </p>

            <div>
              <button 
                onClick={scrollToContact}
                style={{
                  background: "var(--ae-red, #e10600)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "14px",
                  padding: "16px 32px",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 10px 25px rgba(225, 6, 0, 0.35)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <span>Échanger sur votre projet</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>


        {/* ========================================================
            2 · L'INTERVENTION
           ======================================================== */}
        <section className="container" style={{ padding: "3rem 1.5rem" }}>
          
          <div style={{ maxWidth: "860px", marginBottom: "3.5rem" }}>
            <span 
              style={{
                color: "var(--ae-red, #e10600)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em"
              }}
            >
              2 · L'intervention
            </span>
            <h2 
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                margin: "0.75rem 0 1.25rem"
              }}
            >
              La puff au lycée. Le proto en soirée. Le PTC banalisé<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
            </h2>
            
            {/* Badges d'intervention */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "1rem" }}>
              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0,0,0,0.06)",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  fontWeight: 600
                }}
              >
                <Clock size={16} style={{ color: "var(--ae-red)" }} />
                2 h
              </span>
              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0,0,0,0.06)",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  fontWeight: 600
                }}
              >
                <Users2 size={16} style={{ color: "var(--ae-red)" }} />
                Une classe
              </span>
              <span 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0,0,0,0.06)",
                  padding: "8px 16px",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  fontWeight: 600
                }}
              >
                <GraduationCap size={16} style={{ color: "var(--ae-red)" }} />
                Collège et lycée
              </span>
            </div>
          </div>

          {/* LES CARTES */}
          <div style={{ marginBottom: "4.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--ae-muted, #5f6673)" }}>
              Les cartes
            </h3>
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem"
              }}
            >
              {/* Carte 1 */}
              <div 
                style={{
                  background: "white",
                  border: "2px solid #e10600",
                  borderRadius: "20px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0 12px 30px rgba(225,6,0,0.06)"
                }}
              >
                <div 
                  style={{
                    background: "rgba(225,6,0,0.1)",
                    color: "var(--ae-red)",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    width: "fit-content",
                    marginBottom: "1rem"
                  }}
                >
                  Thème principal
                </div>
                <h4 style={{ fontSize: "1.45rem", fontWeight: 800, margin: "0 0 0.75rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Flame size={24} style={{ color: "var(--ae-red)" }} />
                  La puff, en profondeur
                </h4>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#333", margin: 0 }}>
                  Une dose de nicotine énorme. Des effets à long terme encore inconnus.
                </p>
              </div>

              {/* Carte 2 */}
              <div 
                style={{
                  background: "white",
                  border: "1px solid var(--ae-border, #dfe2e6)",
                  borderRadius: "20px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.03)"
                }}
              >
                <div 
                  style={{
                    background: "#f0f2f5",
                    color: "#555",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    width: "fit-content",
                    marginBottom: "1rem"
                  }}
                >
                  Premiers repères
                </div>
                <h4 style={{ fontSize: "1.45rem", fontWeight: 800, margin: "0 0 0.75rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Wind size={24} style={{ color: "#0b0b0b" }} />
                  Le protoxyde d'azote
                </h4>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#333", margin: 0 }}>
                  Un gaz de cuisine. Des nerfs qui lâchent, ou pire.
                </p>
              </div>

              {/* Carte 3 */}
              <div 
                style={{
                  background: "white",
                  border: "1px solid var(--ae-border, #dfe2e6)",
                  borderRadius: "20px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.03)"
                }}
              >
                <div 
                  style={{
                    background: "#f0f2f5",
                    color: "#555",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    width: "fit-content",
                    marginBottom: "1rem"
                  }}
                >
                  Premiers repères
                </div>
                <h4 style={{ fontSize: "1.45rem", fontWeight: 800, margin: "0 0 0.75rem", display: "flex", alignItems: "center", gap: "10px" }}>
                  <Skull size={24} style={{ color: "var(--ae-red)" }} />
                  Les drogues de synthèse
                </h4>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "#333", margin: 0 }}>
                  Ça ressemble à une puff. Ce n'en est pas une.
                </p>
              </div>
            </div>
          </div>

          {/* LE DÉROULÉ */}
          <div style={{ marginBottom: "4.5rem" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem" }}>
              Le déroulé de la séance
            </h3>

            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem"
              }}
            >
              {[
                {
                  icon: Brain,
                  title: "Le cerveau",
                  desc: "Le circuit dopaminergique : comment une habitude devient une addiction, sans qu'on s'en rende compte."
                },
                {
                  icon: Wrench,
                  title: "La puff, démontée",
                  desc: "Ce qu'elle contient vraiment, ses effets à court terme, et ce qu'on ignore encore sur le long terme."
                },
                {
                  icon: Eye,
                  title: "Le marketing",
                  desc: "Arômes, couleurs, prix, réseaux sociaux : comment on les cible."
                },
                {
                  icon: Scale,
                  title: "La loi",
                  desc: "Ce qui est interdit, et qui risque quoi."
                },
                {
                  icon: Wind,
                  title: "Le protoxyde d'azote",
                  desc: "Premiers repères : ce que ça fait vraiment, au-delà des idées reçues."
                },
                {
                  icon: ShieldAlert,
                  title: "Les drogues de synthèse",
                  desc: "Premiers repères : le PTC et les produits qui se font passer pour des puffs."
                },
                {
                  icon: Compass,
                  title: "Reprendre la main",
                  desc: "Comment s'en sortir, comment aider un proche, et vers qui se tourner."
                },
                {
                  icon: HelpCircle,
                  title: "Le quiz final",
                  desc: "Pour voir ce qu'ils ont retenu."
                }
              ].map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={idx}
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid var(--ae-border, #dfe2e6)",
                      borderRadius: "16px",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.02)"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div 
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: idx === 0 || idx === 1 ? "var(--ae-red-soft, #fff0ef)" : "rgba(0,0,0,0.04)",
                          color: idx === 0 || idx === 1 ? "var(--ae-red, #e10600)" : "var(--ae-black, #0b0b0b)",
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 700
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <h4 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>
                        {step.title}
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.55, color: "var(--ae-muted, #5f6673)" }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AVANT / PENDANT / APRÈS */}
          <div 
            style={{
              background: "#0b0b0b",
              color: "#ffffff",
              borderRadius: "24px",
              padding: "clamp(2rem, 4vw, 3rem)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.12)"
            }}
          >
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
                alignItems: "center"
              }}
            >
              <div>
                <span style={{ color: "var(--ae-red, #e10600)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  Avant
                </span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0.5rem 0", color: "#fff" }}>
                  Questionnaire anonyme
                </h4>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  5 minutes pour cerner les usages et habitudes réelles des élèves.
                </p>
              </div>

              <div style={{ position: "relative" }}>
                <span style={{ color: "var(--ae-red, #e10600)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  Pendant
                </span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0.5rem 0", color: "#fff" }}>
                  2 h d'intervention
                </h4>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Vidéos, échanges directs sans tabou et quiz interactif.
                </p>
              </div>

              <div>
                <span style={{ color: "var(--ae-red, #e10600)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase" }}>
                  Après
                </span>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0.5rem 0", color: "#fff" }}>
                  Le bilan de la classe
                </h4>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Synthèse et indicateurs envoyés directement par e-mail à l'équipe.
                </p>
              </div>
            </div>

            <p style={{ marginTop: "2rem", marginBottom: 0, paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              * Autres formats possibles sur demande.
            </p>
          </div>

        </section>


        {/* ========================================================
            3 · AVEC QUOI VOS ÉLÈVES REPARTENT
           ======================================================== */}
        <section className="container" style={{ padding: "4rem 1.5rem" }}>
          
          <div style={{ maxWidth: "800px", marginBottom: "3rem" }}>
            <span 
              style={{
                color: "var(--ae-red, #e10600)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em"
              }}
            >
              3 · Les acquis
            </span>
            <h2 
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.15,
                margin: "0.75rem 0 1rem"
              }}
            >
              Avec quoi vos élèves repartent<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "var(--ae-muted, #5f6673)", margin: 0, lineHeight: 1.6 }}>
              Des clés concrètes pour comprendre ce qu'on leur vend, et savoir réagir.
            </p>
          </div>

          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem"
            }}
          >
            {/* Colonne 1 : Ils comprennent */}
            <div 
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                border: "1px solid var(--ae-border, #dfe2e6)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <span 
                  style={{
                    background: "var(--ae-red-soft, #fff0ef)",
                    color: "var(--ae-red, #e10600)",
                    padding: "8px",
                    borderRadius: "12px",
                    display: "flex"
                  }}
                >
                  <Brain size={24} />
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                  Ils comprennent
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Comment l'addiction s'installe
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    La dopamine, un cerveau encore en construction, et pourquoi ça va si vite à leur âge.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Comment on les cible
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Arômes, couleurs, prix, réseaux sociaux. Un marketing pensé pour eux.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Les risques, à court et à long terme
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Pour la puff, le proto et les drogues de synthèse, au-delà des idées reçues.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Ce que dit la loi
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Ce qui est interdit, qui risque quoi, et ce qui change avec la loi RIPOST.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Ils savent faire */}
            <div 
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem 2rem",
                border: "1px solid var(--ae-border, #dfe2e6)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                <span 
                  style={{
                    background: "rgba(0,0,0,0.06)",
                    color: "#0b0b0b",
                    padding: "8px",
                    borderRadius: "12px",
                    display: "flex"
                  }}
                >
                  <ShieldCheck size={24} />
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>
                  Ils savent faire
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Dire non sans se mettre à l'écart
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Répondre à la pression du groupe sans perdre la face.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Aider un proche
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Repérer quand un ami ne va pas bien, et savoir vers qui l'orienter.
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.35rem" }}>
                    Savoir vers qui se tourner
                  </h4>
                  <p style={{ margin: 0, color: "var(--ae-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    L'infirmière de l'établissement, des numéros gratuits et anonymes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* ========================================================
            4 · QUI EST DERRIÈRE
           ======================================================== */}
        <section className="container" style={{ padding: "3rem 1.5rem 5rem" }}>
          
          <div 
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(247,247,245,0.9) 100%)",
              border: "1px solid var(--ae-border, #dfe2e6)",
              borderRadius: "24px",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              boxShadow: "0 14px 36px rgba(0,0,0,0.04)"
            }}
          >
            <span 
              style={{
                color: "var(--ae-red, #e10600)",
                fontWeight: 800,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em"
              }}
            >
              4 · L'association
            </span>
            <h2 
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: "0.75rem 0 1.5rem"
              }}
            >
              Qui est derrière Alert’Élèves<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1.1rem", lineHeight: 1.75, color: "#222", maxWidth: "860px" }}>
              <p style={{ margin: 0 }}>
                <strong>Alert'Élèves</strong> est une association de prévention des conduites addictives chez les jeunes, fondée par <strong>Anass Abdel Rahman</strong>.
              </p>
              <p style={{ margin: 0 }}>
                Elle est née d'un constat : <strong>les puffs se sont installées dans les collèges et les lycées bien plus vite que la prévention</strong>.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Notre approche :</strong> parler aux élèves franchement, sans morale ni jugement, avec des informations vérifiées et sourcées.
              </p>
              <p style={{ margin: 0, color: "var(--ae-muted)" }}>
                Alert'Élèves intervient auprès des établissements publics et privés d'Île-de-France.
              </p>
            </div>
          </div>

        </section>


        {/* ========================================================
            5 · ORGANISER UNE INTERVENTION (FORMULAIRE)
           ======================================================== */}
        <section id="organiser-intervention" className="container" style={{ padding: "0 1.5rem 5rem" }}>
          
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              background: "white",
              borderRadius: "28px",
              border: "1px solid var(--ae-border, #dfe2e6)",
              overflow: "hidden",
              boxShadow: "0 18px 45px rgba(0,0,0,0.06)"
            }}
          >
            {/* Panneau gauche */}
            <div 
              style={{
                background: "#0b0b0b",
                color: "#ffffff",
                padding: "clamp(2.5rem, 5vw, 4rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span style={{ color: "var(--ae-red, #e10600)", fontWeight: 800, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                  5 · Contact
                </span>
                <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.04em", margin: "0.75rem 0 1.5rem", color: "#fff" }}>
                  Organiser une intervention<span style={{ color: "var(--ae-red, #e10600)" }}>.</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6, fontSize: "1.05rem", marginBottom: "2rem" }}>
                  Vous souhaitez planifier une session dans votre collège ou lycée en Île-de-France ? Remplissez ce formulaire et nous reviendrons vers vous sous 48h.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a href="mailto:contact@alerteleves.com" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none" }}>
                    <Mail size={18} style={{ color: "var(--ae-red, #e10600)" }} />
                    <span>contact@alerteleves.com</span>
                  </a>
                  <a href="tel:+33614766965" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff", textDecoration: "none" }}>
                    <Phone size={18} style={{ color: "var(--ae-red, #e10600)" }} />
                    <span>06 14 76 69 65</span>
                  </a>
                </div>
              </div>

              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                  Vos informations servent uniquement à répondre à votre demande.
                </p>
              </div>
            </div>

            {/* Panneau droite : Le formulaire */}
            <div style={{ padding: "clamp(2.5rem, 5vw, 4rem)" }}>
              {status === "success" ? (
                <div 
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "3rem 1rem",
                    gap: "1.25rem",
                    height: "100%"
                  }}
                >
                  <CheckCircle2 size={64} style={{ color: "var(--ae-red, #e10600)" }} />
                  <h3 style={{ fontSize: "1.6rem", fontWeight: 800, margin: 0 }}>
                    Demande transmise avec succès !
                  </h3>
                  <p style={{ color: "var(--ae-muted)", lineHeight: 1.6, maxWidth: "380px", margin: 0 }}>
                    Merci. Nous avons bien reçu votre demande et nous vous contacterons sous 48h pour échanger sur les créneaux et modalités.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    style={{
                      marginTop: "1rem",
                      background: "#0b0b0b",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px 22px",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      cursor: "pointer"
                    }}
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Nom complet *
                      </label>
                      <input 
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        placeholder="Ex : M. Dupont"
                        className="input"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Fonction *
                      </label>
                      <input 
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        required
                        placeholder="Ex : Chef d'établissement, CPE, Infirmière"
                        className="input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Établissement *
                      </label>
                      <input 
                        name="etablissement"
                        value={formData.etablissement}
                        onChange={handleChange}
                        required
                        placeholder="Nom du collège / lycée"
                        className="input"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Ville *
                      </label>
                      <input 
                        name="ville"
                        value={formData.ville}
                        onChange={handleChange}
                        required
                        placeholder="Ville (en Île-de-France)"
                        className="input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Niveau(x) *
                      </label>
                      <select 
                        name="niveaux"
                        value={formData.niveaux}
                        onChange={handleChange}
                        required
                        className="select"
                      >
                        <option value="" disabled>Sélectionner un niveau</option>
                        <option value="Collège (4e / 3e)">Collège (4e / 3e)</option>
                        <option value="Lycée (Seconde, Première, Terminale)">Lycée (2nde, 1ère, Terminale)</option>
                        <option value="Collège et Lycée">Collège et Lycée</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Nombre de classes *
                      </label>
                      <input 
                        name="nbClasses"
                        value={formData.nbClasses}
                        onChange={handleChange}
                        required
                        placeholder="Ex : 2 classes de 3e"
                        className="input"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        E-mail *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="adresse@ac-versailles.fr"
                        className="input"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                        Téléphone (facultatif)
                      </label>
                      <input 
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        className="input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, marginBottom: "6px" }}>
                      Message (période souhaitée, précisions...)
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Indiquez vos contraintes ou vos attentes particulières..."
                      className="textarea"
                      style={{ minHeight: "100px" }}
                    />
                  </div>

                  {status === "error" && (
                    <div 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "#fff1f2",
                        color: "var(--ae-red)",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        fontSize: "0.9rem"
                      }}
                    >
                      <AlertCircle size={18} />
                      Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter par e-mail.
                    </div>
                  )}

                  <div style={{ marginTop: "0.5rem" }}>
                    <button 
                      type="submit"
                      disabled={status === "loading"}
                      style={{
                        background: "var(--ae-red, #e10600)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "12px",
                        padding: "14px 28px",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                        justifyContent: "center",
                        transition: "opacity 0.2s"
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Envoyer</span>
                        </>
                      )}
                    </button>
                    <p style={{ fontSize: "0.8rem", color: "var(--ae-muted)", textAlign: "center", marginTop: "10px", marginBottom: 0 }}>
                      Vos informations servent uniquement à répondre à votre demande.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </section>

      </main>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
