import { ArrowRight, FileText } from "lucide-react";
import { modules } from "../data/content";
import { Link } from "react-router-dom";

export function ModuleList() {
  return (
    <div className="module-list">
      {modules.map((module) => (
        <Link className="module-row" to={module.href} key={module.number}>
          <span className="icon-badge red">
            <FileText size={22} />
          </span>
          <div>
            <span className="kicker" style={{ marginBottom: 6, display: "block" }}>Module {module.number}</span>
            <h3 style={{ margin: "0 0 8px" }}>{module.title}</h3>
            <p className="muted" style={{ margin: 0 }}>{module.text}</p>
          </div>
          <span className="arrow">
            {module.status}
            <ArrowRight size={18} />
          </span>
        </Link>
      ))}
    </div>
  );
}
