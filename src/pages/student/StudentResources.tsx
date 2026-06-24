import { useState } from "react";
import { Link } from "react-router-dom";
import { studentResources } from "../../data/content";

export function StudentResources() {
  const [activeTab, setActiveTab] = useState("Toutes");
  const tabs = ["Toutes", "Vidéos", "Articles", "Podcasts", "Infographies"];

  const filteredResources = activeTab === "Toutes" 
    ? studentResources 
    : studentResources.filter(r => r.type === activeTab.replace(/s$/, ""));
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Ressources</p>
            <h1 className="h2">Ressources<span className="red-dot">.</span></h1>
            <p className="lead">
              Des contenus clairs et fiables pour comprendre, réfléchir et te forger ton propre avis.
            </p>
          </div>
        </div>

        <div className="tabs">
          {tabs.map((tab) => (
            <button 
              className={`tab ${activeTab === tab ? "active" : ""}`} 
              key={tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="resource-grid">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link to={`/eleve/ressources/${resource.id}`} key={resource.id} className="card card-link" style={{ minHeight: "auto", padding: 24, gap: 16 }}>
                <div className="resource-thumb" style={{ marginBottom: 16 }} />
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
      </main>
    </>
  );
}
