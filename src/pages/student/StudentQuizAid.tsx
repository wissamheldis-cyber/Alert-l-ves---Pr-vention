import { HelpCTA } from "../../components/HelpCTA";
import { Button } from "../../components/Button";
import { quizzes } from "../../data/content";

export function StudentQuizAid() {
  return (
    <>
      <main className="section container">
        <div className="section-head">
          <div>
            <p className="kicker">Quiz</p>
            <h1 className="h2">Tester mes connaissances<span className="red-dot">.</span></h1>
            <p className="lead">
              Des quiz interactifs pour voir si tu connais vraiment ce que tu consommes, ou ce qu’on te cache.
            </p>
          </div>
        </div>

        <div className="grid grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 48 }}>
          {quizzes.map((quiz) => {
            const Icon = quiz.icon;
            return (
              <article className="card card-link" key={quiz.title} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 32 }}>
                <div>
                  <span className="icon-badge red" style={{ marginBottom: 16 }}>
                    <Icon size={24} />
                  </span>
                  <h3 className="card-title" style={{ fontSize: "1.5rem", marginBottom: 8 }}>{quiz.title}</h3>
                  <p className="muted" style={{ marginBottom: 24 }}>{quiz.questionsCount} questions</p>
                </div>
                <Button href={`/eleve/quiz/${quiz.id}`} variant="dark">Commencer le quiz</Button>
              </article>
            );
          })}
        </div>

        <section className="section" style={{ paddingBottom: 0 }}>
          <HelpCTA />
        </section>
      </main>
    </>
  );
}
