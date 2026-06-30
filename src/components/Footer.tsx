import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#0b0b0b", color: "rgba(255, 255, 255, 0.7)", padding: "4rem 2rem 2rem", marginTop: "auto" }}>
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "3rem" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ color: "white", fontSize: "1.5rem", margin: 0 }}>
              Alert'Élèves<span className="red-dot">.</span>
            </h2>
            <p style={{ lineHeight: 1.6, maxWidth: "300px" }}>
              L'information et la prévention sur les addictions et les nouveaux usages à risques (Puff, Protoxyde d'azote), sans jugement.
            </p>
            <a href="mailto:contact@alerteleves.com" style={{ color: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 600 }}>
              contact@alerteleves.com <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ color: "white", fontSize: "1.1rem", margin: 0, fontWeight: 600 }}>Raccourcis</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Portail principal</Link>
              <Link to="/etablissement" style={{ color: "inherit", textDecoration: "none" }}>Espace Établissement</Link>
              <Link to="/eleve" style={{ color: "inherit", textDecoration: "none" }}>Espace Élève</Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ color: "white", fontSize: "1.1rem", margin: 0, fontWeight: 600 }}>Informations Légales</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link to="/mentions-legales" style={{ color: "inherit", textDecoration: "none" }}>Mentions Légales</Link>
              <Link to="/cgv" style={{ color: "inherit", textDecoration: "none" }}>Conditions Générales de Vente (CGV)</Link>
              <Link to="/politique-confidentialite" style={{ color: "inherit", textDecoration: "none" }}>Politique de Confidentialité</Link>
            </div>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.9rem" }}>
          <p style={{ margin: 0 }}>&copy; {currentYear} Alert'Élèves. Tous droits réservés.</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span>Prévention</span>
            <span>&bull;</span>
            <span>Éducation</span>
            <span>&bull;</span>
            <span>Accompagnement</span>
          </div>
        </div>

        {/* Crédit discret du créateur */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-1rem" }}>
          <a
            href="https://grifz-studio-v-1.vercel.app/fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: "280px",
              height: "48px",
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              const logo = e.currentTarget.querySelector(".grifz-logo") as HTMLElement;
              const label = e.currentTarget.querySelector(".grifz-label") as HTMLElement;
              if (logo) { logo.style.opacity = "0"; logo.style.transform = "scale(0.85)"; }
              if (label) { label.style.opacity = "1"; label.style.transform = "translateY(0)"; }
            }}
            onMouseLeave={e => {
              const logo = e.currentTarget.querySelector(".grifz-logo") as HTMLElement;
              const label = e.currentTarget.querySelector(".grifz-label") as HTMLElement;
              if (logo) { logo.style.opacity = "0.2"; logo.style.transform = "scale(1)"; }
              if (label) { label.style.opacity = "0"; label.style.transform = "translateY(4px)"; }
            }}
          >
            {/* Logo visible par défaut — centré */}
            <img
              className="grifz-logo"
              src="/images/grifz-logo-black.png"
              alt="GRIFZ Studio"
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.2,
                position: "absolute",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            />
            {/* Texte visible au hover — centré */}
            <span
              className="grifz-label"
              style={{
                position: "absolute",
                whiteSpace: "nowrap",
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0,
                transform: "translateY(4px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                pointerEvents: "none",
              }}
            >
              Site réalisé par GRIFZ Studio
            </span>
          </a>
        </div>


      </div>
    </footer>
  );
}
