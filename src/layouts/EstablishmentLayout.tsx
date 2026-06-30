import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { establishmentNav } from "../data/content";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export function EstablishmentLayout() {
  const location = useLocation();
  return (
    <div className="app-shell" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header nav={establishmentNav} ctaHref="/etablissement/contact" ctaLabel="Demander une intervention" />
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
