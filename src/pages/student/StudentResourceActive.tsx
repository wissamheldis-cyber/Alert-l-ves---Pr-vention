import { useParams, Navigate, useNavigate } from "react-router-dom";
import { studentResources } from "../../data/content";
import { ArrowLeft, PlayCircle, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function StudentResourceActive() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(0);
  
  const resource = studentResources.find((r) => r.id === id);
  
  if (!resource) {
    return <Navigate to="/eleve/ressources" replace />;
  }

  const Icon = resource.icon;
  const isVideoOrPodcast = resource.type === "Vidéo" || resource.type === "Podcast";

  const renderContent = () => {
    if (Array.isArray(resource.content)) {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {resource.content.map((section: any, idx: number) => {
            const isOpen = openSectionIndex === idx;
            return (
              <div 
                key={idx} 
                style={{ 
                  border: "1px solid var(--ae-border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden"
                }}
              >
                <button
                  onClick={() => setOpenSectionIndex(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 20px",
                    background: isOpen ? "var(--ae-surface)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    fontWeight: 600,
                    fontSize: 16,
                    color: "var(--ae-title)",
                    transition: "background 0.2s ease"
                  }}
                >
                  {section.title}
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ padding: "0 20px 20px", color: "var(--ae-text)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                        {section.body}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <p style={{ lineHeight: 1.8, fontSize: 18, color: "var(--ae-text)", whiteSpace: "pre-wrap" }}>
        {resource.content as string}
      </p>
    );
  };

  return (
    <main className="section container">
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <button 
          onClick={() => navigate("/eleve/ressources")}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", color: "var(--ae-muted)", marginBottom: 32, fontWeight: 600 }}
        >
          <ArrowLeft size={18} /> Retour aux ressources
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="icon-badge red">
              <Icon size={20} />
            </span>
            <span className="kicker" style={{ margin: 0 }}>{resource.type} · {resource.duration}</span>
          </div>

          <h1 className="h2" style={{ marginBottom: 32 }}>{resource.title}</h1>

          {isVideoOrPodcast ? (
            <div 
              style={{ 
                width: "100%", 
                aspectRatio: "16/9", 
                background: "linear-gradient(135deg, #1e293b, #0f172a)", 
                borderRadius: "var(--radius-lg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 32,
                boxShadow: "var(--shadow-card)",
                cursor: "pointer",
                color: "white"
              }}
            >
              <div style={{ textAlign: "center" }}>
                <PlayCircle size={64} style={{ marginBottom: 16, opacity: 0.8 }} />
                <p style={{ margin: 0, fontWeight: 500, opacity: 0.8 }}>Clique pour lancer la lecture</p>
              </div>
            </div>
          ) : (
            <div 
              style={{ 
                width: "100%", 
                height: "240px", 
                background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)", 
                borderRadius: "var(--radius-lg)",
                marginBottom: 32,
                boxShadow: "var(--shadow-soft)"
              }}
            />
          )}

          <div className="card" style={{ padding: "32px 40px", background: "white" }}>
            <h3 style={{ marginBottom: 24 }}>À propos de ce contenu</h3>
            {renderContent()}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
