import { Button } from "../../components/Button";
import { Mail, Phone } from "lucide-react";

export function EstablishmentContact() {
  return (
    <>
      <main className="section container">
        <div className="split">
          <div className="split-dark">
            <p className="kicker">Contact</p>
            <h1 className="h2">Demander une intervention<span className="red-dot">.</span></h1>
            <p style={{ color: "rgba(255,255,255,.72)" }}>
              Notre équipe vous accompagne pour construire une intervention adaptée
              à votre établissement.
            </p>
            <ul style={{ lineHeight: 2, color: "rgba(255,255,255,.78)", marginBottom: "3rem" }}>
              <li>Réponse sous 48h</li>
              <li>Intervention adaptée au niveau</li>
              <li>Devis personnalisé</li>
            </ul>

            <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
              <h3 style={{ color: "white", marginBottom: "1.5rem" }}>Nous contacter directement</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="mailto:contact@alerteleves.fr" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none" }}>
                  <Mail size={20} className="red" />
                  <span>contact@alerteleves.fr</span>
                </a>
                <a href="tel:+33100000000" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "white", textDecoration: "none" }}>
                  <Phone size={20} className="red" />
                  <span>01 00 00 00 00</span>
                </a>
              </div>
            </div>
          </div>

          <div className="split-panel">
            <form className="form">
              <input className="input" placeholder="Nom de l’établissement" />
              <input className="input" placeholder="Votre nom et prénom" />
              <input className="input" placeholder="Votre fonction" />
              <input className="input" placeholder="Email professionnel" />
              <input className="input" placeholder="Téléphone" />
              <select className="select" defaultValue="">
                <option value="" disabled>Niveau(x) concerné(s)</option>
                <option>Collège</option>
                <option>Lycée</option>
                <option>Collège et lycée</option>
              </select>
              <textarea className="textarea" placeholder="Votre besoin, contexte, calendrier souhaité..." />
              <Button type="submit">Envoyer ma demande</Button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
