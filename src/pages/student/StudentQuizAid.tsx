import { Header } from "../../components/Header";
import { HelpCTA } from "../../components/HelpCTA";
import { Button } from "../../components/Button";
import { quizzes, studentNav } from "../../data/content";

export function StudentQuizAid() {
  return (
    <div className="app-shell">
      <Header nav={studentNav} />

      <main className="section container">
        <section className="card" style={{ marginBottom: 28, background: "linear-gradient(135deg, #fff, #fff7f7)" }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div>
              <p className="kicker">Quiz</p>
              <h1 className="h2">Teste tes connaissances<span className="red-dot">.</span></h1>
              <p className="lead">
                Des quiz interactifs pour apprendre en progressant à ton rythme.
              </p>
            </div>
            <Button href="/eleve/quiz-aide" variant="secondary">Voir tous les quiz</Button>
          </div>
        </section>

        <div className="grid grid-4">
          {quizzes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <article className="card card-link" key={quiz.title}>
                <div>
                  <span className="icon-badge red">
                    <Icon size={21} />
                  </span>
                  <h3 className="card-title">{quiz.title}</h3>
                  <p className="muted">{quiz.questions}</p>
                </div>
                <Button variant="dark">Commencer</Button>
              </article>
            );
          })}
        </div>

        <section className="section" style={{ paddingBottom: 0 }}>
          <HelpCTA />
        </section>
      </main>
    </div>
  );
}
