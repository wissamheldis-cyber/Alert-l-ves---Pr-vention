import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ModuleList } from "../../components/ModuleList";
import { establishmentNav } from "../../data/content";

export function EstablishmentInterventions() {
  return (
    <div className="app-shell">
      <Header nav={establishmentNav} ctaHref="/etablissement/contact" ctaLabel="Demander une intervention" />

      <main>
        <section className="container section">
          <div className="section-head">
            <div>
              <p className="kicker">Programmes</p>
              <h1 className="h2">Nos interventions<span className="red-dot">.</span></h1>
              <p className="lead">
                Des modules conçus pour répondre aux enjeux d’aujourd’hui et accompagner les jeunes
                dans un cadre clair, fiable et adapté au milieu scolaire.
              </p>
            </div>
            <Button href="/etablissement/contact">Demander une intervention</Button>
          </div>

          <div className="split" style={{ marginBottom: 28 }}>
            <div className="split-dark">
              <p className="kicker">Module 01</p>
              <h2>Nouveaux usages à risque<span className="red-dot">.</span></h2>
              <p style={{ color: "rgba(255,255,255,.72)" }}>
                Une approche multidisciplinaire : santé, droit, influence, psychologie,
                responsabilité et choix éclairés.
              </p>
              <div className="actions">
                <Button href="/etablissement/contact">Programmer ce module</Button>
              </div>
            </div>
            <div className="split-panel">
              <h3>Objectifs du module</h3>
              <div className="grid grid-2" style={{ marginTop: 18 }}>
                {["Comprendre", "Identifier", "Développer son esprit critique", "Adopter les bons réflexes"].map((item) => (
                  <article className="card flat" key={item}>
                    <strong>{item}</strong>
                    <p className="muted">Un objectif pédagogique clair et mesurable.</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <ModuleList />
        </section>
      </main>
    </div>
  );
}
