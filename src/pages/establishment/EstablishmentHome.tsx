import { Button } from "../../components/Button";
import { Helmet } from "react-helmet-async";
import { CheckCircle2 } from "lucide-react";

export function EstablishmentHome() {
  return (
    <>
      <Helmet>
        <title>Espace Établissement — Alert’Élèves</title>
        <meta name="description" content="Découvrez les programmes de prévention, ressources et actualités destinés aux professionnels et établissements scolaires." />
      </Helmet>

      <main>
        <section className="container hero">
          <div className="hero-content">
            <p className="kicker">Prévention — Éducation — Confiance</p>
            <h1>
              Prévenir aujourd’hui<span className="red-dot">.</span><br />
              Protéger demain<span className="red-dot">.</span>
            </h1>
            <p className="lead">
              Alert’Élèves accompagne les établissements scolaires avec des programmes de prévention clairs,
              des ressources fiables et des outils adaptés à chaque âge.
            </p>
            <div className="actions">
              <Button href="/etablissement/interventions">Découvrir nos interventions</Button>
              <Button href="/etablissement/contact" variant="secondary">Demander une intervention</Button>
            </div>
          </div>
          <div className="hero-visual institution-visual" aria-hidden />
        </section>

        <section id="qui-sommes-nous" className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">Qui sommes-nous</p>
              <h2>L'histoire derrière Alert’Élèves<span className="red-dot">.</span></h2>
            </div>
          </div>

          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div className="card" style={{ padding: "2rem", lineHeight: 1.8, fontSize: "1.1rem" }}>
              <p style={{ marginTop: 0 }}>
                <strong>Alert’Élèves est une structure de prévention qui intervient dans les lycées et collèges de la région parisienne sur les risques liés aux addictions chez les jeunes.</strong>
              </p>
              <p>
                Le projet est né d’une expérience personnelle. À 17 ans, un diagnostic pulmonaire change ma vision des choses. Mon pneumologue m’explique alors ce que je consomme vraiment — ce que contient une puff, ce qu’elle fait au corps, pourquoi les jeunes sont particulièrement vulnérables. Ce déclic m’a donné une conviction : <em>ces informations, tous les jeunes doivent y avoir accès.</em>
              </p>
              <p>
                En parallèle, une plongée dans les stratégies marketing des industriels du tabac et de la cigarette électronique — témoignages de commerciaux, créateurs de contenu, mécanismes de ciblage des adolescents — vient compléter cette compréhension et nourrir le contenu des interventions.
              </p>
              <p style={{ marginBottom: 0 }}>
                Alert’Élèves c’est ça. Pas de morale. Pas de jugement. Des faits, des données officielles, et une approche pensée pour vraiment parler aux élèves — pas au-dessus d’eux.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem", background: "var(--ae-surface)", border: "none" }}>
              <h3 style={{ marginBottom: "1.5rem" }}>Notre méthode</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="red-dot" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ margin: 0, lineHeight: 1.6 }}>
                    Contenu basé sur des <strong>sources officielles</strong> (ANSM, OFDT, Inserm, Sénat).
                  </p>
                </div>
                
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="red-dot" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ margin: 0, lineHeight: 1.6 }}>
                    Interventions interactives : <strong>questions, mises en situation, déconstruction des idées reçues</strong>.
                  </p>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle2 className="red-dot" style={{ flexShrink: 0, marginTop: "0.2rem" }} />
                  <p style={{ margin: 0, lineHeight: 1.6 }}>
                    <strong>Témoignages de professionnels de santé</strong> intégrés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
