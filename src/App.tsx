import { Navigate, Route, Routes } from "react-router-dom";
import { GatePage } from "./pages/GatePage";
import { EstablishmentHome } from "./pages/establishment/EstablishmentHome";
import { EstablishmentInterventions } from "./pages/establishment/EstablishmentInterventions";
import { EstablishmentNews } from "./pages/establishment/EstablishmentNews";
import { EstablishmentDocuments } from "./pages/establishment/EstablishmentDocuments";
import { EstablishmentContact } from "./pages/establishment/EstablishmentContact";
import { StudentHome } from "./pages/student/StudentHome";
import { StudentResources } from "./pages/student/StudentResources";
import { StudentQuizAid } from "./pages/student/StudentQuizAid";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GatePage />} />

      <Route path="/etablissement" element={<EstablishmentHome />} />
      <Route path="/etablissement/interventions" element={<EstablishmentInterventions />} />
      <Route path="/etablissement/actualites" element={<EstablishmentNews />} />
      <Route path="/etablissement/documents" element={<EstablishmentDocuments />} />
      <Route path="/etablissement/contact" element={<EstablishmentContact />} />

      <Route path="/eleve" element={<StudentHome />} />
      <Route path="/eleve/ressources" element={<StudentResources />} />
      <Route path="/eleve/quiz-aide" element={<StudentQuizAid />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
