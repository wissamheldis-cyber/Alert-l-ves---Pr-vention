import { Button } from "../../components/Button";

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
            <ul style={{ lineHeight: 2, color: "rgba(255,255,255,.78)" }}>
              <li>Réponse sous 48h</li>
              <li>Intervention adaptée au niveau</li>
              <li>Devis personnalisé</li>
            </ul>
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
