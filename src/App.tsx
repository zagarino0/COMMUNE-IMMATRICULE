
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/login";
import ResgisterPage from "./pages/register";
import DemandeDeMAJPage from "./pages/demandeDeMAJ/DemandNifValide";
import MAJRenseignementPage from "./pages/majRenseignement/majRenseignement";
import DemandeDeNIFAValiderPage from "./pages/demandeDeNIFAValider/DemandeDeNIFAValider";
import ZoneValidationPage from "./pages/zoneValidationDemandesContribuables/zoneValidation";
import SaisirMotifRejetPage from "./pages/saisirMotifRejet/saisirMotifRejet";
import DemandeDeMiseAJourPage from "./pages/demanDeMiseAJour/demandeDeMiseAJour";
import ValidationPage from "./pages/validation/validation";
import EspaceMembrePage from "./pages/espaceMembre/espaceMembre";
import VehiculePage from "./pages/vehicule/vehicule";
import ConsultationPage from "./pages/consultation/consultation";
import AutresOperationsPage from "./pages/autresOperations/autresOperations";
import EtatPage from "./pages/etat/etat";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<ResgisterPage />}></Route>
        <Route path="/majRenseignement" element={<MAJRenseignementPage />}></Route>
        <Route path="/demandeMiseAJour" element={<DemandeDeMAJPage />}></Route>
        <Route path="/demandeDeNIFValider" element={<DemandeDeNIFAValiderPage />}></Route>
        <Route path="/zonevalidation" element={<ZoneValidationPage />}></Route>
        <Route path="/saisirmotifrejet" element={<SaisirMotifRejetPage />}></Route>
        <Route path="/demandedemiseajour" element={<DemandeDeMiseAJourPage />}></Route>
        <Route path="/validation" element={<ValidationPage />}></Route>
        <Route path="/espacemembre" element={< EspaceMembrePage/>}></Route>
        <Route path="/vehicule" element={< VehiculePage/>}></Route>
        <Route path="/consultation" element={< ConsultationPage/>}></Route>
        <Route path="/autresoperations" element={< AutresOperationsPage/>}></Route>
        <Route path="/etat" element={< EtatPage/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App
