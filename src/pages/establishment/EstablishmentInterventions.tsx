import { Button } from "../../components/Button";
import { Clock, Users, BookOpen, Presentation } from "lucide-react";

export function EstablishmentInterventions() {
  return (
    <>
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
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "4rem" }}>
            
            {/* Module Puff */}
            <div className="card" style={{ padding: "2rem", display: "grid", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Module Puff - Cigarette électronique<span className="red-dot">.</span></h2>
              </div>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", borderBottom: "1px solid var(--ae-border)", paddingBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Clock size={18} className="red" /> Durée : 1h30</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Users size={18} className="red" /> Public : collégiens et lycéens</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}><BookOpen size={18} /> Contenu</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ae-text)" }}>
                    Mécanismes d’addiction, impacts santé, marketing ciblé, cadre légal, outils concrets.
                  </p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}><Presentation size={18} /> Format</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ae-text)" }}>
                    Exposé interactif, questions, mises en situation, déconstruction des idées reçues et Kahoot final.
                  </p>
                </div>
              </div>
            </div>

            {/* Module Proto */}
            <div className="card" style={{ padding: "2rem", display: "grid", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem" }}>Module Proto - Protoxyde d’azote<span className="red-dot">.</span></h2>
              </div>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", borderBottom: "1px solid var(--ae-border)", paddingBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Clock size={18} className="red" /> Durée : 1h</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Users size={18} className="red" /> Public : collégiens et lycéens</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}><BookOpen size={18} /> Contenu</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ae-text)" }}>
                    Effets sur le système nerveux, risques immédiats et long terme, cadre légal, mythes déconstruits, gestes d’urgence.
                  </p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}><Presentation size={18} /> Format</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ae-text)" }}>
                    Exposé interactif, scènes narratives, déconstruction des mythes, questions et quiz.
                  </p>
                </div>
              </div>
            </div>

            {/* Les deux modules */}
            <div className="card" style={{ padding: "2rem", display: "grid", gap: "1.5rem", background: "linear-gradient(135deg, #1e293b, #0f172a)", color: "white" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.8rem", color: "white" }}>Les deux modules combinés<span className="red-dot">.</span></h2>
              </div>
              
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Clock size={18} className="red" /> Durée : 2h30</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}><Users size={18} className="red" /> Public : collégiens et lycéens</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "white" }}><BookOpen size={18} /> Contenu</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
                    Une intervention complète sur les deux produits les plus consommés par les jeunes aujourd’hui.
                  </p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "white" }}><Presentation size={18} /> Format</h4>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
                    Exposé interactif, vidéos, mises en situation, déconstruction des idées reçues, Kahoot.
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          <div className="card" style={{ padding: "3rem", textAlign: "center", borderTop: "4px solid var(--ae-red)" }}>
            <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Tarif : sur demande</h3>
            <p style={{ maxWidth: "600px", margin: "0 auto 2rem auto", color: "var(--ae-text)", lineHeight: 1.6 }}>
              Chaque établissement a des besoins spécifiques. Contactez-nous pour recevoir une proposition détaillée et un devis adapté à votre structure et au nombre d'élèves concernés.
            </p>
            <Button href="/etablissement/contact" variant="primary">Demander une intervention</Button>
          </div>

        </section>
      </main>
    </>
  );
}
