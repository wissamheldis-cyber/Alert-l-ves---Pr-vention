import { Gavel, Bell, BarChart3 } from "lucide-react";

export function EstablishmentNews() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Veille & informations</p>
            <h1 className="h2">Actualités & veille<span className="red-dot">.</span></h1>
            <p className="lead">
              Restez informés des dernières évolutions légales, des chiffres clés et des nouveautés de la plateforme.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr" }}>
          
          <article className="card" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", background: "linear-gradient(to right, #fff, #fff1f2)", borderLeft: "4px solid var(--ae-red)" }}>
            <div className="icon-badge red" style={{ flexShrink: 0 }}>
              <Gavel size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Loi RIPOST (2026) : Ce qui change</h3>
              <p style={{ color: "var(--ae-text)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Votée pour lutter contre les nouveaux comportements addictifs en milieu scolaire, la loi RIPOST (Responsabilité, Information, Prévention, Orientation, Soutien et Traitement) entrera en vigueur en septembre 2026. Elle oblige notamment les établissements à organiser deux séances de prévention obligatoires par an sur les usages à risque.
              </p>
              <a href="#" style={{ color: "var(--ae-red)", fontWeight: 600, textDecoration: "underline" }}>Lire le résumé de la loi</a>
            </div>
          </article>

          <article className="card" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
            <div className="icon-badge black" style={{ flexShrink: 0 }}>
              <BarChart3 size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Chiffres clés récents (OFDT)</h3>
              <p style={{ color: "var(--ae-text)", lineHeight: 1.6, marginBottom: "1rem" }}>
                Selon la dernière enquête ESCAPAD, bien que le tabagisme quotidien diminue, on observe une hausse significative de l'expérimentation de la Puff chez les jeunes de moins de 15 ans. Le Protoxyde d'azote devient par ailleurs la troisième substance psychoactive la plus consommée chez les étudiants.
              </p>
              <a href="https://www.ofdt.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ae-red)", fontWeight: 600, textDecoration: "underline" }}>Consulter les rapports OFDT</a>
            </div>
          </article>

          <article className="card" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
            <div className="icon-badge black" style={{ flexShrink: 0 }}>
              <Bell size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Nouveautés Alert’Élèves</h3>
              <p style={{ color: "var(--ae-text)", lineHeight: 1.6, marginBottom: "1rem" }}>
                L'Espace Élèves vient de faire peau neuve avec deux nouveaux modules interactifs (Cerveau & Addictions) et des quiz anonymes pour s'auto-évaluer. Vous pouvez orienter vos élèves vers cet espace en toute confiance, le contenu y est strictement informatif et non moralisateur.
              </p>
            </div>
          </article>

        </div>
      </main>
    </>
  );
}
