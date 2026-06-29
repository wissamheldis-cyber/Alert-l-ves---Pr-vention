import { Gavel } from "lucide-react";

export function EstablishmentNews() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Informations</p>
            <h1 className="h2">Actualités<span className="red-dot">.</span></h1>
            <p className="lead">
              Restez informés des dernières évolutions légales.
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

        </div>
      </main>
    </>
  );
}
