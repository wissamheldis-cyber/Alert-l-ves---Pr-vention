import { Helmet } from "react-helmet-async";
import { Phone, MapPin, Globe } from "lucide-react";

export function StudentHelp() {
  return (
    <>
      <Helmet>
        <title>Contacts utiles - Alert’Élèves</title>
        <meta name="description" content="Découvrez vers qui vous tourner si vous avez besoin de conseils ou d'aide en urgence." />
      </Helmet>

      <main>
        <section className="container hero" style={{ minHeight: "auto", paddingBottom: "40px" }}>
          <div className="hero-content" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="kicker">Tu n'es pas seul(e)</p>
            <h1>
              Contacts utiles<span className="red-dot">.</span>
            </h1>
            <p className="lead" style={{ marginInline: "auto" }}>
              Si tu te poses des questions, si tu te sens en danger ou si tu t'inquiètes pour un ami,
              il existe toujours des solutions et des personnes à ton écoute. Gratuitement et anonymement.
            </p>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <div className="grid grid-3">
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Phone size={22} />
              </div>
              <h3 className="card-title">Drogues Info Service</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Des professionnels à ton écoute pour répondre à tes questions sur n'importe quel produit.
              </p>
              <p style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--ae-red)", margin: 0 }}>
                0 800 23 13 13
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--ae-muted)" }}>Gratuit, anonyme, 8h-2h</p>
            </article>
            
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <MapPin size={22} />
              </div>
              <h3 className="card-title">CJC</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Consultations Jeunes Consommateurs. Des lieux d'accueil pour faire le point, sans jugement, avec ou sans tes parents.
              </p>
              <a href="https://www.drogues-info-service.fr" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--ae-red)", textDecoration: "underline" }}>
                Trouver le centre près de chez moi
              </a>
            </article>

            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Globe size={22} />
              </div>
              <h3 className="card-title">S'informer en ligne</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Retrouve toutes les informations officielles sur les produits, leurs effets et la loi sur le site officiel.
              </p>
              <a href="https://www.drogues-info-service.fr" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--ae-red)", textDecoration: "underline" }}>
                drogues-info-service.fr
              </a>
            </article>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <div className="card" style={{ background: "linear-gradient(135deg, #fee2e2, #fecaca)", border: "none" }}>
            <h3 style={{ color: "#991b1b" }}>En cas d'urgence médicale</h3>
            <p style={{ color: "#7f1d1d", marginBottom: 16 }}>
              Si une personne est inconsciente, fait un malaise ou ne respire plus correctement après avoir consommé un produit :
            </p>
            <ul style={{ color: "#7f1d1d", fontWeight: 500, paddingLeft: 20 }}>
              <li>Vérifie qu'elle respire.</li>
              <li>Mets-la en Position Latérale de Sécurité (sur le côté).</li>
              <li>Appelle immédiatement le <strong>15</strong> ou le <strong>112</strong>.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
