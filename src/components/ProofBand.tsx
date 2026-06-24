import { proofItems } from "../data/content";

export function ProofBand() {
  return (
    <section className="band">
      <div className="container proof-grid">
        {proofItems.map((item) => {
          const Icon = item.icon;
          return (
            <div className="proof-item" key={item.title}>
              <span className="icon-badge">
                <Icon size={21} />
              </span>
              <div>
                <strong>{item.title}</strong>
                <p className="muted" style={{ margin: "6px 0 0" }}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
