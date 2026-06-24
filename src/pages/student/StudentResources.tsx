import { Header } from "../../components/Header";
import { studentNav, studentResources } from "../../data/content";

export function StudentResources() {
  return (
    <div className="app-shell">
      <Header nav={studentNav} />

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
          {["Toutes", "Vidéos", "Articles", "Podcasts", "Infographies"].map((tab, index) => (
            <button className={`tab ${index === 0 ? "active" : ""}`} key={tab}>
              {tab}
            </button>
          ))}
        </div>

        <div className="resource-grid">
          {studentResources.map((resource) => {
            const Icon = resource.icon;
            return (
              <article className="card" key={resource.title}>
                <div className="resource-thumb" />
                <span className="kicker">{resource.type}</span>
                <h3>{resource.title}</h3>
                <p className="muted">{resource.duration}</p>
                <span className="arrow">Ouvrir</span>
              </article>
            );
          })}
        </div>
      </main>
    </div>
  );
}
