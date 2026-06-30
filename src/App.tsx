import { Navigate, Route, Routes } from "react-router-dom";
import { GatePage } from "./pages/GatePage";

import { EstablishmentLayout } from "./layouts/EstablishmentLayout";
import { EstablishmentHome } from "./pages/establishment/EstablishmentHome";
import { EstablishmentInterventions } from "./pages/establishment/EstablishmentInterventions";
import { EstablishmentNews } from "./pages/establishment/EstablishmentNews";
import { RipostArticle } from "./pages/establishment/RipostArticle";
import { EstablishmentDocuments } from "./pages/establishment/EstablishmentDocuments";
import { EstablishmentContact } from "./pages/establishment/EstablishmentContact";

import { StudentLayout } from "./layouts/StudentLayout";
import { StudentHome } from "./pages/student/StudentHome";
import { StudentResources } from "./pages/student/StudentResources";
import { StudentResourceActive } from "./pages/student/StudentResourceActive";
import { StudentQuizAid } from "./pages/student/StudentQuizAid";
import { StudentQuizActive } from "./pages/student/StudentQuizActive";
import { StudentHelp } from "./pages/student/StudentHelp";

import { LegalLayout } from "./layouts/LegalLayout";
import { MentionsLegales } from "./pages/legal/MentionsLegales";
import { CGV } from "./pages/legal/CGV";
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GatePage />} />

      <Route element={<EstablishmentLayout />}>
        <Route path="/etablissement" element={<EstablishmentHome />} />
        <Route path="/etablissement/interventions" element={<EstablishmentInterventions />} />
        <Route path="/etablissement/actualites" element={<EstablishmentNews />} />
        <Route path="/etablissement/actualites/ripost-2026" element={<RipostArticle />} />
        <Route path="/etablissement/documents" element={<EstablishmentDocuments />} />
        <Route path="/etablissement/contact" element={<EstablishmentContact />} />
      </Route>

      <Route element={<StudentLayout />}>
        <Route path="/eleve" element={<StudentHome />} />
        <Route path="/eleve/ressources" element={<StudentResources />} />
        <Route path="/eleve/ressources/:id" element={<StudentResourceActive />} />
        <Route path="/eleve/quiz-aide" element={<StudentQuizAid />} />
        <Route path="/eleve/quiz/:id" element={<StudentQuizActive />} />
        <Route path="/eleve/aide" element={<StudentHelp />} />
      </Route>

      <Route element={<LegalLayout />}>
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
