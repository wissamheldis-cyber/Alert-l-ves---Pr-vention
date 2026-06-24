import { LifeBuoy } from "lucide-react";
import { Button } from "./Button";

export function HelpCTA() {
  return (
    <section className="card help-cta">
      <div className="section-head" style={{ marginBottom: 0 }}>
        <div>
          <div className="icon-badge red">
            <LifeBuoy size={22} />
          </div>
          <h2 style={{ marginTop: 18 }}>Besoin d’aide ou envie d’en parler ?</h2>
          <p className="muted">
            Tu n’es pas seul. Des professionnels et des adultes de confiance peuvent t’écouter.
          </p>
        </div>
        <Button href="/eleve/quiz-aide" variant="secondary">
          Accéder à l’aide
        </Button>
      </div>
    </section>
  );
}
