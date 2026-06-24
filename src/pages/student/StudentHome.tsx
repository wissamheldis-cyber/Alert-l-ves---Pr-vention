import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { HelpCTA } from "../../components/HelpCTA";
import { IconCard } from "../../components/IconCard";
import { StudentProofBand } from "../../components/StudentProofBand";
import { studentNav, studentThemes, quizzes } from "../../data/content";
import { Helmet } from "react-helmet-async";

export function StudentHome() {
  return (
    <div className="app-shell animate-fade-in">
      <Helmet>
        <title>Espace Élève — Alert’Élèves</title>
        <meta name="description" content="Accède à des ressources courtes, des quiz et trouve de l'aide rapidement sur les nouveaux usages à risque." />
      </Helmet>
      <Header nav={studentNav} />

      <main>
        <section className="container hero">
          <div className="hero-content">
            <p className="kicker">Espace élèves</p>
            <h1>
              Bienvenue<span className="red-dot">.</span><br />
              Ici, tu t’informes, tu comprends et tu passes à l’action.
            </h1>
            <p className="lead">
              Découvre des ressources, teste tes connaissances et trouve de l’aide si tu en as besoin.
            </p>
            <div className="actions">
              <Button href="/eleve/ressources" variant="secondary">Découvrir les ressources</Button>
              <Button href="/eleve/quiz-aide">Faire un quiz</Button>
            </div>
          </div>
          <div className="hero-visual student-visual" aria-hidden />
        </section>

        <StudentProofBand />

        <section className="section container">
          <div className="grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
            {studentThemes.map((theme) => (
              <IconCard key={theme.title} {...theme} />
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">Quiz à la une</p>
              <h2>{quizzes[0].title}<span className="red-dot">.</span></h2>
              <p>
                Évalue tes connaissances sur les risques liés au protoxyde d'azote de façon ludique et anonyme.
              </p>
            </div>
            <Button href="/eleve/quiz-aide" variant="primary">Lancer le quiz</Button>
          </div>
        </section>

        <section className="section container" style={{ paddingTop: 0 }}>
          <HelpCTA />
        </section>
      </main>
    </div>
  );
}
