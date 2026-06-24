import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { establishmentNav } from "../data/content";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export function EstablishmentLayout() {
  const location = useLocation();
  return (
    <div className="app-shell">
      <Header nav={establishmentNav} ctaHref="/etablissement/contact" ctaLabel="Demander une intervention" />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>
    </div>
  );
}
