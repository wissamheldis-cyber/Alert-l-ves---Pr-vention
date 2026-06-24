import { NewsList } from "../../components/NewsList";

export function EstablishmentNews() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Veille & informations</p>
            <h1 className="h2">Actualités & veille<span className="red-dot">.</span></h1>
            <p className="lead">
              Informations utiles pour les équipes éducatives : prévention, cadre juridique,
              climat scolaire et ressources institutionnelles.
            </p>
          </div>
        </div>
        <div className="tabs">
          {["Toutes", "Juridique", "Prévention", "Éducation", "Partenaires"].map((tab, index) => (
            <button className={`tab ${index === 0 ? "active" : ""}`} key={tab}>
              {tab}
            </button>
          ))}
        </div>
        <NewsList />
      </main>
    </>
  );
}
