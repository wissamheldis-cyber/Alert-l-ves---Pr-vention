import { ShieldCheck, CheckCircle, HeartPulse } from "lucide-react";

export function StudentProofBand() {
  return (
    <section className="band">
      <div className="container">
        <div className="proof-grid">
          <div className="proof-item">
            <span className="icon-badge red">
              <ShieldCheck size={22} />
            </span>
            <div>
              <h3 style={{ fontSize: 16, marginBottom: 4 }}>100% Confidentiel</h3>
              <p className="muted" style={{ fontSize: 13 }}>Rien de ce que vous lisez ou faites ici n'est partagé ou tracé.</p>
            </div>
          </div>
          
          <div className="proof-item">
            <span className="icon-badge">
              <CheckCircle size={22} />
            </span>
            <div>
              <h3 style={{ fontSize: 16, marginBottom: 4 }}>Contenus Validés</h3>
              <p className="muted" style={{ fontSize: 13 }}>Toutes nos ressources sont approuvées par des experts.</p>
            </div>
          </div>

          <div className="proof-item">
            <span className="icon-badge">
              <HeartPulse size={22} />
            </span>
            <div>
              <h3 style={{ fontSize: 16, marginBottom: 4 }}>Toujours à l'écoute</h3>
              <p className="muted" style={{ fontSize: 13 }}>Des numéros et contacts disponibles 24h/24, 7j/7.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
