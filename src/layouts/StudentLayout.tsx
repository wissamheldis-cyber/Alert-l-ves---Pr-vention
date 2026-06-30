import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { studentNav } from "../data/content";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition";

export function StudentLayout() {
  const location = useLocation();
  return (
    <div className="app-shell" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header nav={studentNav} />
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
