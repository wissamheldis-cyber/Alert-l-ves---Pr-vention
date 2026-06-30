import { Link } from "react-router-dom";
import { ArrowRight, Gavel } from "lucide-react";

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
            <div style={{ flex: 1 }}>
              <span style={{
                display: "inline-block",
                background: "var(--ae-red)",
                color: "white",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                marginBottom: "0.75rem"
              }}>
                Décryptage légal · Juin 2026
              </span>
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                Projet de loi RIPOST 2026 : ce que les établissements doivent anticiper
              </h3>
              <p style={{ color: "var(--ae-text)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Le projet de loi RIPOST vise à renforcer la réponse publique face à plusieurs phénomènes qui touchent les jeunes, dont l'usage détourné du protoxyde d'azote. Le texte prévoit notamment de durcir les sanctions liées à l'inhalation hors cadre médical, à la vente illégale, au transport sans motif légitime et à la conduite après consommation. Pour les collèges et lycées, le cadre actuel impose déjà une information annuelle sur les conduites addictives : l'enjeu est désormais de mettre en place une prévention plus claire, plus régulière et réellement adaptée aux usages des élèves.
              </p>
              <Link
                to="/etablissement/actualites/ripost-2026"
                style={{
                  color: "var(--ae-red)",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                Lire notre décryptage <ArrowRight size={15} />
              </Link>
            </div>
          </article>

        </div>
      </main>
    </>
  );
}
