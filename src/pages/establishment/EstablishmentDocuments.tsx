import { Download, MonitorPlay } from "lucide-react";

export function EstablishmentDocuments() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Documents</p>
            <h1 className="h2">Documents & sources<span className="red-dot">.</span></h1>
            <p className="lead">
              Ressources pour préparer, suivre et prolonger une action de prévention.
            </p>
          </div>
        </div>
        
        <div className="grid">
          <div className="document-row">
            <div className="icon-badge red">
              <MonitorPlay size={24} />
            </div>
            <div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "4px" }}>
                <h3 style={{ margin: 0 }}>Présentation Interactive — Alert’Élèves</h3>
                <span style={{ fontSize: "12px", background: "var(--ae-red-soft)", color: "var(--ae-red)", padding: "2px 8px", borderRadius: "99px", fontWeight: "bold" }}>HTML</span>
              </div>
              <p className="muted" style={{ margin: 0, fontSize: "14px" }}>
                Diaporama complet (10 slides) incluant les modules Puff et Proto. Utilisable hors-ligne sur n'importe quel ordinateur.
              </p>
            </div>
            <a href="/presentation/index.html" download="presentation-alerteleves.html" className="btn btn-secondary" style={{ padding: "0 16px" }}>
              <Download size={18} />
              Télécharger
            </a>
          </div>

          <div className="card" style={{ padding: "2rem", textAlign: "center", border: "2px dashed var(--ae-border)", background: "transparent", marginTop: "1rem" }}>
            <h3 style={{ color: "var(--ae-muted)", fontSize: "1.2rem", margin: 0 }}>D'autres documents (fiches pratiques, guides) arriveront très prochainement...</h3>
          </div>
        </div>
      </main>
    </>
  );
}
