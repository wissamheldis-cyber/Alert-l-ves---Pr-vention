import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

type HeaderProps = {
  nav: Array<{ label: string; href: string }>;
  ctaHref?: string;
  ctaLabel?: string;
};

export function Header({ nav, ctaHref, ctaLabel }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Retour au choix d’espace">
          <img src="/assets/AElogo.png" className="logo-mark" alt="" />
          <span>Alert’Élèves</span>
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          {ctaHref && ctaLabel ? (
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          ) : null}
        </div>

        <button 
          className="mobile-menu-btn" 
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          {ctaHref && ctaLabel && (
            <div style={{ marginTop: "16px" }}>
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
