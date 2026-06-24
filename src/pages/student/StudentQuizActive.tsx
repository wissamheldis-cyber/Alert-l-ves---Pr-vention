import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { quizzes } from "../../data/content";
import { Button } from "../../components/Button";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StudentQuizActive() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const quiz = quizzes.find((q) => q.id === id);
  
  if (!quiz) {
    return <Navigate to="/eleve/quiz-aide" replace />;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);

  useEffect(() => {
    if (isGeneratingSummary) {
      const timer = setTimeout(() => {
        setIsGeneratingSummary(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isGeneratingSummary]);

  // Fallback si le quiz n'a pas encore de questions
  if (!quiz.questions || quiz.questions.length === 0) {
    return (
      <main className="section container">
        <div className="card text-center" style={{ padding: "60px 20px" }}>
          <h2>Ce quiz est en cours de création.</h2>
          <p className="muted" style={{ margin: "20px 0" }}>Reviens plus tard pour tester tes connaissances sur ce sujet !</p>
          <Button onClick={() => navigate("/eleve/quiz-aide")}>Retour aux quiz</Button>
        </div>
      </main>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setHasSubmitted(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setIsFinished(true);
      setIsGeneratingSummary(true);
    }
  };

  const getSmiley = (currentScore: number, total: number) => {
    const ratio = currentScore / total;
    if (ratio === 1) return "🏆";
    if (ratio >= 0.8) return "🤩";
    if (ratio >= 0.6) return "😊";
    if (ratio >= 0.4) return "😐";
    if (ratio > 0) return "😕";
    return "😭";
  };

  if (isFinished) {
    return (
      <main className="section container">
        <motion.div 
          className="card" 
          style={{ padding: "60px 40px", maxWidth: 600, margin: "0 auto", marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "space-between" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div>
            <h1 className="h2" style={{ marginBottom: 16 }}>Quiz terminé !<span className="red-dot">.</span></h1>
            <p className="lead" style={{ margin: "0 0 24px" }}>
              Ton score : <strong>{score} / {quiz.questions.length}</strong>
            </p>
            <Button onClick={() => navigate("/eleve/quiz-aide")} variant="primary">
              Retour aux quiz
            </Button>
          </div>
          <motion.div 
            style={{ fontSize: "80px" }}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {getSmiley(score, quiz.questions.length)}
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isGeneratingSummary ? (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              style={{ textAlign: "center", padding: 24, maxWidth: 600, margin: "0 auto" }}
            >
              <div style={{ margin: "0 auto 16px", width: 24, height: 24, border: "3px solid var(--ae-border)", borderTopColor: "var(--ae-black)", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
              <p className="muted">Un résumé des notions importantes arrive...</p>
              <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </motion.div>
          ) : (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
              style={{ maxWidth: 600, margin: "0 auto", background: "linear-gradient(135deg, #f8fafc, #f1f5f9)", border: "1px solid #e2e8f0" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span className="icon-badge red">
                  <CheckCircle2 size={20} />
                </span>
                <h3 style={{ margin: 0 }}>À retenir absolument</h3>
              </div>
              <ul style={{ paddingLeft: 24, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 16 }}>
                {/* @ts-ignore - summaryPoints added to content */}
                {quiz.summaryPoints?.map((point: string, index: number) => {
                  const [title, ...rest] = point.split(" : ");
                  return (
                    <li key={index} style={{ lineHeight: 1.6, color: "var(--ae-text)" }}>
                      <strong>{title}</strong> {rest.length > 0 ? ` : ${rest.join(" : ")}` : ""}
                    </li>
                  );
                })}
              </ul>

              <div style={{ textAlign: "center", marginTop: 24, paddingTop: 24, borderTop: "1px solid #e2e8f0" }}>
                <Button href="/eleve/ressources" variant="dark">
                  Aller plus loin avec nos ressources
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    );
  }

  const isCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <main className="section container">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <button 
          onClick={() => navigate("/eleve/quiz-aide")}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "var(--ae-muted)", marginBottom: 32, fontWeight: 600 }}
        >
          <ArrowLeft size={18} /> Retour
        </button>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
          <span className="kicker">{quiz.title}</span>
          <span className="kicker" style={{ color: "var(--ae-text)" }}>
            Question {currentIndex + 1} / {quiz.questions.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card"
          >
            <h2 style={{ fontSize: 24, marginBottom: 32 }}>{currentQuestion.question}</h2>

          <div className="grid">
            {currentQuestion.options.map((option: string, index: number) => {
              let btnStyle = {
                padding: "20px 24px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "var(--ae-border)",
                borderRadius: "var(--radius-sm)",
                background: "white",
                cursor: hasSubmitted ? "default" : "pointer",
                textAlign: "left" as const,
                fontSize: 16,
                transition: "all 0.2s ease"
              };

              if (hasSubmitted) {
                if (index === currentQuestion.correctAnswer) {
                  btnStyle.borderColor = "#10b981";
                  btnStyle.background = "#ecfdf5";
                } else if (index === selectedOption) {
                  btnStyle.borderColor = "var(--ae-red)";
                  btnStyle.background = "var(--ae-red-soft)";
                }
              } else if (selectedOption === index) {
                btnStyle.borderColor = "var(--ae-black)";
              }

              return (
                <button
                  key={index}
                  style={btnStyle}
                  onClick={() => !hasSubmitted && setSelectedOption(index)}
                  disabled={hasSubmitted}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {hasSubmitted && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              style={{ marginTop: 32, padding: 24, borderRadius: "var(--radius-sm)", background: isCorrect ? "#ecfdf5" : "var(--ae-red-soft)", color: isCorrect ? "#065f46" : "#991b1b" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                <h3 style={{ margin: 0, fontSize: 18 }}>
                  {isCorrect ? "Bonne réponse !" : "Mauvaise réponse"}
                </h3>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6 }}>{currentQuestion.explanation}</p>
            </motion.div>
          )}

          <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
            {!hasSubmitted ? (
              <Button onClick={handleSubmit} disabled={selectedOption === null} variant="primary">
                Valider ma réponse
              </Button>
            ) : (
              <Button onClick={handleNext} variant="dark">
                {currentIndex < quiz.questions.length - 1 ? "Question suivante" : "Terminer le quiz"}
              </Button>
            )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
