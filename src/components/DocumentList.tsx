import { Download } from "lucide-react";
import { documentCategories, documents } from "../data/content";

export function DocumentList() {
  return (
    <>
      <div className="tabs">
        {documentCategories.map((category, index) => (
          <button className={`tab ${index === 0 ? "active" : ""}`} key={category}>
            {category}
          </button>
        ))}
      </div>

      <div className="module-list">
        {documents.map((doc) => (
          <article className="document-row" key={doc.title}>
            <span className="icon-badge">
              <Download size={20} />
            </span>
            <div>
              <h3 style={{ margin: "0 0 8px" }}>{doc.title}</h3>
              <p className="muted" style={{ margin: 0 }}>{doc.text}</p>
              <small className="muted">{doc.meta}</small>
            </div>
            <button className="btn btn-secondary" aria-label={`Télécharger ${doc.title}`}>
              Télécharger
              <Download size={16} />
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
