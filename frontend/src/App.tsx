
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
import Rectification from "./pages/validation/rectificationPrincipauxRenseignement/Rectification";
import TelechargementFichierExport from "./pages/validation/TelechargementFichierExpotNIFonline/TelechargementFichierExport";
import HomePage from "./pages/Home/HomePage";
import Immatriculation from "./pages/Immatriculation/Immatriculation";
import Activite from "./pages/register/Activite";
import Siege from "./pages/register/Siege";
import Interlocuteur from "./pages/register/Interlocuteur";
import Etablissement from "./pages/register/Etablissement";
import Associe from "./pages/register/Associe";
import Dirigeant from "./pages/register/Dirigeant";
import Autre from "./pages/register/Autre";
import LoginClient from "./pages/login/LoginClient";
import Declaration from "./pages/majRenseignement/Declaration";
import Annexe from "./pages/majRenseignement/Annexe";
import Paiment from "./pages/majRenseignement/Paiment";
import ConsulterActionUtilisateur from "./pages/espaceMembre/ConsulterActionUtilisateur/ConsulterActionUtilisateur";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Declaration" element={<Declaration/>}></Route>
        <Route path="/Annexe" element={<Annexe/>}></Route>
        <Route path="/Paiment" element={<Paiment/>}></Route>
        <Route path="/Activite" element={<Activite/>}></Route>
        <Route path="/Activite" element={<Activite/>}></Route>        
        <Route path="/Siege" element={<Siege/>}></Route>
        <Route path="/Interlocuteur" element={<Interlocuteur/>}></Route>
        <Route path="/Etablissement" element={<Etablissement/>}></Route>
        <Route path="/Associe" element={<Associe/>}></Route>
        <Route path="/Dirigeant" element={<Dirigeant/>}></Route>
        <Route path="/Autre" element={<Autre/>}></Route>
        <Route path="/Immatriculation" element={<Immatriculation/>}></Route>
        <Route path="/loginAdmin" element={<LoginPage />}></Route>
        <Route path="/LoginClient" element={<LoginClient />}></Route>
        <Route path="/register" element={<ResgisterPage />}></Route>
        <Route path="/majRenseignement" element={<MAJRenseignementPage />}></Route>
        <Route path="/demandeMiseAJour" element={<DemandeDeMAJPage />}></Route>
        <Route path="/demandeDeNIFValider" element={<DemandeDeNIFAValiderPage />}></Route>
        <Route path="/zonevalidation" element={<ZoneValidationPage />}></Route>
        <Route path="/saisirmotifrejet" element={<SaisirMotifRejetPage />}></Route>
        <Route path="/demandedemiseajour" element={<DemandeDeMiseAJourPage />}></Route>
        <Route path="/validation" element={<ValidationPage />}></Route>
        <Route path="/espacemembre" element={< EspaceMembrePage/>}></Route>
        <Route path="/ConsulterActionUtilisateur" element={< ConsulterActionUtilisateur/>}></Route>
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
        <Route path="/Rectification" element={< Rectification/>}></Route>
        <Route path="/TelechargementFichierExport" element={< TelechargementFichierExport/>}></Route>

        <Route path="*" element={<ErrorPage />}></Route>        
      </Routes>
    </Router>
    </>
  )
}

export default App
