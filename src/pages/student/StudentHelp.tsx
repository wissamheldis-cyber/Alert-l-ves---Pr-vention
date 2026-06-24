import { HelpCTA } from "../../components/HelpCTA";
import { helpContacts } from "../../data/content";
import { Helmet } from "react-helmet-async";
import { Phone, CheckCircle2 } from "lucide-react";

export function StudentHelp() {
  return (
    <>
      <Helmet>
        <title>Besoin d'aide — Alert’Élèves</title>
        <meta name="description" content="Découvrez vers qui vous tourner si vous avez besoin de conseils ou d'aide en urgence." />
      </Helmet>

      <main>
        <section className="container hero" style={{ minHeight: "auto", paddingBottom: "40px" }}>
          <div className="hero-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="kicker">Tu n'es pas seul(e)</p>
            <h1>
              Besoin d'aide ou de conseils ?<span className="red-dot">.</span>
            </h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              Si tu te poses des questions, si tu te sens en danger ou si tu t'inquiètes pour un ami,
              il existe toujours des solutions et des personnes à ton écoute.
            </p>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <div className="grid grid-3">
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Phone size={22} />
              </div>
              <h3 className="card-title">3018</h3>
              <p className="muted">
                Numéro national pour les victimes de cyberharcèlement et de violences numériques. Gratuit, anonyme et confidentiel.
              </p>
            </article>
            
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Phone size={22} />
              </div>
              <h3 className="card-title">119</h3>
              <p className="muted">
                Service National d'Accueil Téléphonique pour l'Enfance en Danger. Disponible 24h/24 et 7j/7.
              </p>
            </article>

            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Phone size={22} />
              </div>
              <h3 className="card-title">3114</h3>
              <p className="muted">
                Numéro national de prévention du suicide. Des professionnels à votre écoute 24h/24, 7j/7, gratuitement.
              </p>
            </article>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <div className="section-head">
            <div>
              <h2>Que peux-tu faire ?<span className="red-dot">.</span></h2>
            </div>
          </div>
          <div className="grid grid-2">
            {helpContacts.map((contact, index) => (
              <div key={index} className="document-row" style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 24px" }}>
                <CheckCircle2 size={24} className="red-dot" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "16px", fontWeight: 500 }}>{contact}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <HelpCTA />
        </section>
      </main>
    </>
  );
}
