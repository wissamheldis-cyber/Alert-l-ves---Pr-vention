import { ArrowRight, Newspaper } from "lucide-react";
import { news } from "../data/content";

export function NewsList() {
  return (
    <div className="module-list">
      {news.map((item) => (
        <article className="news-row" key={item.title}>
          <span className="icon-badge red">
            <Newspaper size={21} />
          </span>
          <div>
            <span className="kicker" style={{ marginBottom: 6, display: "block" }}>{item.category}</span>
            <h3 style={{ margin: "0 0 8px" }}>{item.title}</h3>
            <p className="muted" style={{ margin: 0 }}>{item.text}</p>
            <small className="muted">{item.date}</small>
          </div>
          <span className="arrow">
            Lire
            <ArrowRight size={18} />
          </span>
        </article>
      ))}
    </div>
  );
}
