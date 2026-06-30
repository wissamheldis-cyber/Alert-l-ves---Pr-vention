import { Outlet, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Footer } from "../components/Footer";

export function LegalLayout() {
  return (
    <div className="app-shell" style={{ background: "#f8fafc", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "white", padding: "1.5rem", borderBottom: "1px solid var(--ae-border)", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto", display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--ae-text)", textDecoration: "none", fontWeight: 500 }}>
            <ArrowLeft size={18} /> Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="container" style={{ flex: 1, maxWidth: 800, margin: "0 auto", padding: "4rem 1.5rem", background: "white", boxShadow: "var(--shadow-card)", borderRadius: "var(--radius-xl)", marginTop: "2rem", marginBottom: "4rem" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
