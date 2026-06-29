import { Button } from "../../components/Button";
import { HelpCTA } from "../../components/HelpCTA";
import { Helmet } from "react-helmet-async";
import { BookOpen, LifeBuoy, Brain } from "lucide-react";

export function StudentHome() {
  return (
    <>
      <Helmet>
        <title>Espace Élève - Alert’Élèves</title>
        <meta name="description" content="Accède à des ressources courtes, des quiz et trouve de l'aide rapidement sur les nouveaux usages à risque." />
      </Helmet>

      <main>
        <section className="container hero">
          <div className="hero-content">
            <p className="kicker">Espace élèves</p>
            <h1>
              Ici, tu t’informes, tu comprends et tu passes à l’action<span className="red-dot">.</span>
            </h1>
            <p className="lead">
              Découvre des ressources, teste tes connaissances et trouve de l’aide si tu en as besoin.
            </p>
            <div className="actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button href="/eleve/ressources" variant="secondary">Les infos essentielles</Button>
              <Button href="/eleve/quiz-aide" variant="secondary">Tester mes connaissances</Button>
              <Button href="#start" variant="primary">Je commence ici</Button>
            </div>
          </div>
          <div className="hero-visual student-visual" aria-hidden />
        </section>

        <section id="start" className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">Je commence ici</p>
              <h2>Pourquoi Alert’Élèves ?<span className="red-dot">.</span></h2>
              <p style={{ maxWidth: 800, fontSize: "1.1rem", lineHeight: 1.6, marginTop: "1rem" }}>
                Alert’Élèves, c’est avant tout un espace créé pour te donner les vraies informations. Pas de jugement, pas de discours moralisateur. Juste des faits scientifiques, des données légales et médicales, pour que tu puisses faire tes propres choix en toute conscience face aux nouveaux produits (Puff, Protoxyde d'azote...).
              </p>
            </div>
          </div>

          <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
            
            <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="icon-badge red"><Brain size={24} /></span>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>Les cours et ressources</h3>
              <p style={{ color: "var(--ae-text)", flex: 1, margin: 0 }}>
                Comprends comment fonctionne ton cerveau face aux addictions, et découvre les vrais effets de la Puff et du Protoxyde d'azote.
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
    </>
  );
}
