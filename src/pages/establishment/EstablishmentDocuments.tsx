import { DocumentList } from "../../components/DocumentList";

export function EstablishmentDocuments() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Documents</p>
            <h1 className="h2">Documents & ressources<span className="red-dot">.</span></h1>
            <p className="lead">
              Guides, fiches pratiques, supports d’intervention et ressources pour préparer,
              suivre et prolonger une action de prévention.
            </p>
          </div>
        </div>
        <DocumentList />
      </main>
    </>
  );
}
