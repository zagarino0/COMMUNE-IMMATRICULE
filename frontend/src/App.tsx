
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/login";
import ResgisterPage from "./pages/register";
import DemandeDeMAJPage from "./pages/validation/demandeDeMAJ/DemandNifValide";
import MAJRenseignementPage from "./pages/majRenseignement/majRenseignement";
import DemandeDeNIFAValiderPage from "./pages/validation/demandeDeNIFAValider/DemandeDeNIFAValider";
import ZoneValidationPage from "./pages/zoneValidationDemandesContribuables/zoneValidation";
import SaisirMotifRejetPage from "./pages/saisirMotifRejet/saisirMotifRejet";
import DemandeDeMiseAJourPage from "./pages/demanDeMiseAJour/demandeDeMiseAJour";
import ValidationPage from "./pages/validation/validation";
import EspaceMembrePage from "./pages/espaceMembre/espaceMembre";
import VehiculePage from "./pages/vehicule/vehicule";
import ConsultationPage from "./pages/consultation/consultation";
import AutresOperationsPage from "./pages/autresOperations/autresOperations";
import EtatPage from "./pages/etat/etat";
import AjouterUnCompteOperateurPage from "./pages/espaceMembre/ajouterUnCompteOperateur/AjouterUnCompteOperateur";
import GererLesComptesOperateurDeVotreCentrePage from "./pages/espaceMembre/gererLesCompte/GererLesComptesOperateur";
import DebloquerUnComptePage from "./pages/espaceMembre/debloquerUnCompteContribuable/DebloquerUnCompte";
import TelechargerLeGuidePage from "./pages/telechargerLeGuide/TelechargerLeGuide";
import ModifierMotDePassePage from "./pages/espaceMembre/modifierMotDePasse/ModifierMotDePasse";
import AjoutVehiculePage from "./pages/vehicule/ajoutVehicule/AjoutVehiculePage";
import RectificationVehiculePage from "./pages/vehicule/RectificationVehiculesContribuablesNifonline/RectificationVehiculePage";
import RechercheContribuablePage from "./pages/consultation/rechercheContribuable/RechercheContribuable";
import RectificationPrincipauxPage from "./pages/validation/rectificationPrincipauxRenseignement/RectificationPrincipauxPage";
import ConsultationContribuableBloque from "./pages/consultation/consulationContribuablesBloqué/Consultation";
import HIstoriqueContribuable from "./pages/consultation/consultationHistoriqueContribuable/HIstoriqueContribuable";
import  AjoutReferenceFiscal from "./pages/validation/AjoutReferenceFiscal/AjoutReferenceFiscal";
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
        <Route path="/ajoutcompteoperateur" element={< AjouterUnCompteOperateurPage/>}></Route>
        <Route path="/gerercompte" element={< GererLesComptesOperateurDeVotreCentrePage/>}></Route>
        <Route path="/debloquercompte" element={< DebloquerUnComptePage/>}></Route>
        <Route path="/telechargerleguide" element={< TelechargerLeGuidePage/>}></Route>
        <Route path="/modifierlemotdepasse" element={< ModifierMotDePassePage/>}></Route>
        <Route path="/consulteraction" element={< ConsultationPage/>}></Route>
        <Route path="/ajoutvehicule" element={< AjoutVehiculePage/>}></Route>
        <Route path="/rectificationvehicule" element={< RectificationVehiculePage/>}></Route>
        <Route path="/recherchecontribuable" element={< RechercheContribuablePage/>}></Route>
        <Route path="/rectificationprincipauxrenseignementcontribuable" element={< RectificationPrincipauxPage/>}></Route>
        <Route path="/consultationContribuableBloque" element={< ConsultationContribuableBloque/>}></Route>
        <Route path="/consultationhistorique" element={< HIstoriqueContribuable/>}></Route>
        <Route path="/AjoutReferenceFiscal" element={< AjoutReferenceFiscal/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App