import { Link } from "react-router-dom";
import { studentResources } from "../../data/content";
import { Phone, MapPin } from "lucide-react";

export function StudentResources() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Ressources</p>
            <h1 className="h2">Les infos essentielles<span className="red-dot">.</span></h1>
            <p className="lead">
              Des dossiers complets pour comprendre les effets de la Puff, du Protoxyde d'azote, et le fonctionnement de ton cerveau.
            </p>
          </div>
        </div>

        <div className="resource-grid">
          {studentResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link to={`/eleve/ressources/${resource.id}`} key={resource.id} className="card card-link" style={{ minHeight: "auto", padding: 24, gap: 16 }}>
                <div className="resource-thumb" style={{ marginBottom: 16, background: "linear-gradient(135deg, #1e293b, #0f172a)" }} />
                <div>
                  <span className="kicker" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 8 }}><Icon size={14} /> {resource.type}</span>
                  <h3 style={{ margin: "0 0 8px" }}>{resource.title}</h3>
                  <p className="muted" style={{ margin: 0 }}>{resource.duration}</p>
                </div>
                <span className="arrow" style={{ marginTop: 8 }}>Consulter <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
              </Link>
            );
          })}
        </div>

        <div className="card" style={{ marginTop: 48, padding: 32, borderTop: "4px solid var(--ae-red)" }}>
          <h3 style={{ marginBottom: 24 }}>Contacts utiles</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontWeight: 600 }}>
                <Phone size={18} className="red" /> Drogues Info Service
              </div>
              <p style={{ margin: 0, color: "var(--ae-text)" }}>0 800 23 13 13<br/>(gratuit, anonyme, 8h-2h)</p>
              <a href="https://www.drogues-info-service.fr" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 8, color: "var(--ae-red)", fontWeight: 500, textDecoration: "underline" }}>
                Trouver un centre près de chez moi
              </a>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, fontWeight: 600 }}>
                <MapPin size={18} className="red" /> CJC
              </div>
              <p style={{ margin: 0, color: "var(--ae-text)" }}>Consultations Jeunes Consommateurs<br/>Sans rendez-vous, sans jugement.</p>
              <a href="https://addictions-france.org/dispositifs/consultations-jeunes-consommateurs-cjc/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", marginTop: 8, color: "var(--ae-red)", fontWeight: 500, textDecoration: "underline" }}>
                Trouver une consultation près de chez moi
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
