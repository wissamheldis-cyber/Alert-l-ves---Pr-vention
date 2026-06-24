import { Button } from "../../components/Button";
import { IconCard } from "../../components/IconCard";
import { ProofBand } from "../../components/ProofBand";
import { establishmentTiles, modules } from "../../data/content";
import { Helmet } from "react-helmet-async";

export function EstablishmentHome() {
  return (
    <>
      <Helmet>
        <title>Espace Établissement — Alert’Élèves</title>
        <meta name="description" content="Découvrez les programmes de prévention, ressources et actualités destinés aux professionnels et établissements scolaires." />
      </Helmet>

      <main>
        <section className="container hero">
          <div className="hero-content">
            <p className="kicker">Prévention — Éducation — Confiance</p>
            <h1>
              Prévenir aujourd’hui<span className="red-dot">.</span><br />
              Protéger demain<span className="red-dot">.</span>
            </h1>
            <p className="lead">
              Alert’Élèves accompagne les établissements scolaires avec des programmes de prévention clairs,
              des ressources fiables et des outils adaptés à chaque âge.
            </p>
            <div className="actions">
              <Button href="/etablissement/interventions">Découvrir nos programmes</Button>
              <Button href="/etablissement/documents" variant="secondary">Nos documents</Button>
            </div>
          </div>

          <div className="hero-visual institution-visual" aria-hidden />
        </section>

        <ProofBand />

        <section className="section container">
          <div className="grid grid-4">
            {establishmentTiles.map((tile) => (
              <IconCard key={tile.title} {...tile} />
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">Module à la une</p>
              <h2>{modules[0].title}<span className="red-dot">.</span></h2>
              <p>
                Une première prévention large et institutionnelle sur les nouveaux usages à risque,
                l’influence, la santé, le droit et la responsabilité.
              </p>
            </div>
            <Button href="/etablissement/interventions" variant="dark">Voir le module</Button>
          </div>
        </section>
      </main>
    </>
  );
}
