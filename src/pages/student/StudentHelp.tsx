import { Helmet } from "react-helmet-async";
import { Phone, MapPin, AlertCircle, HeartPulse } from "lucide-react";

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
          <div className="grid grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <AlertCircle size={22} />
              </div>
              <h3 className="card-title">🚨 Urgences</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                15 (SAMU) ou 112
              </p>
            </article>

            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <Phone size={22} />
              </div>
              <h3 className="card-title">📞 Drogues Info Service</h3>
              <p style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--ae-red)", margin: 0 }}>
                0 800 23 13 13
              </p>
              <p className="muted" style={{ marginTop: 8 }}>
                Gratuit, anonyme, tous les jours 8h-2h
              </p>
            </article>
            
            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <MapPin size={22} />
              </div>
              <h3 className="card-title">📍 CJC (Consultations Jeunes Consommateurs)</h3>
              <p className="muted" style={{ marginBottom: 16 }}>
                Certaines structures prennent sans rendez-vous, renseignez-vous. Confidentiel, gratuit et des professionnels peuvent t’aider sans jugement. Allez sur le site drogues-info-service ou Maps pour savoir lequel est le plus à proximité de chez vous.
              </p>
            </article>

            <article className="card flat" style={{ border: "1px solid var(--ae-border)" }}>
              <div className="icon-badge red" style={{ marginBottom: 16 }}>
                <HeartPulse size={22} />
              </div>
              <h3 className="card-title">📞 Fil Santé Jeunes</h3>
              <p style={{ fontWeight: 700, fontSize: "1.2rem", color: "var(--ae-red)", margin: 0 }}>
                0 800 235 236
              </p>
            </article>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <div className="card" style={{ background: "linear-gradient(135deg, #fee2e2, #fecaca)", border: "none" }}>
            <h3 style={{ color: "#991b1b" }}>En cas d’urgence médicale</h3>
            <p style={{ color: "#7f1d1d", marginBottom: 16 }}>
              Si une personne est inconsciente, fait un malaise ou ne respire pas normalement après avoir consommé un produit :
            </p>
            <ol style={{ color: "#7f1d1d", fontWeight: 500, paddingLeft: 20, marginBottom: 16 }}>
              <li style={{ marginBottom: 8 }}>Vérifie si elle respire normalement.</li>
              <li style={{ marginBottom: 8 }}>Appelle immédiatement le <strong>15</strong> ou le <strong>112</strong>.</li>
              <li style={{ marginBottom: 8 }}>Si elle est inconsciente mais respire normalement, mets-la en Position Latérale de Sécurité.</li>
              <li style={{ marginBottom: 8 }}>Si elle ne respire pas normalement, commence les gestes de réanimation si tu sais les faire, et suis les consignes du médecin régulateur au téléphone.</li>
            </ol>
            <p style={{ color: "#7f1d1d", fontWeight: 600, margin: 0 }}>
              Ne la fais pas boire, ne la fais pas manger, ne la laisse pas seule.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
