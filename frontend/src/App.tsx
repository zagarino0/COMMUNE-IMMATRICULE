
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/login";
import DemandeDeMAJPage from "./pages/validation/demandeDeMAJ/DemandNifValide";
import MAJRenseignementPage from "./pages/majRenseignement/majRenseignement";
import DemandeDeNIFAValiderPage from "./pages/validation/demandeDeNIFAValider/DemandeDeNIFAValider";
import ZoneValidationPage from "./pages/zoneValidationDemandesContribuables/zoneValidation";
import SaisirMotifRejetPage from "./pages/validation/ValidationDemandeImmatriculation/saisirMotifRejet/saisirMotifRejet";
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
import ConsulterActionUtilisateur from "./pages/espaceMembre/ConsulterActionUtilisateur/ConsulterActionUtilisateur";
import RelanceDeffaillant from "./pages/autresOperations/RelanceDeffaillants/RelanceDeffaillant";
import ValidationDemandeImmatriculation from "./pages/validation/ValidationDemandeImmatriculation/ValidationDemandeImmatriculation";
import Assujetissement from "./pages/validation/ValidationDemandeImmatriculation/Assujetissement/Assujetissement";
import DemandeValidationNif from "./pages/validation/demandeDeNIFAValider/DemandeValidationNif";
import RectificationVehicule from "./pages/vehicule/RectificationVehiculesContribuablesNifonline/RectificationVehicule";
import TelechargementVehicule from "./pages/vehicule/TelechargementVehiculeNIFOnline/TelechargementVehicule";
import MiseJourCaracteristiqueVehicule from "./pages/vehicule/MiseJourCaracteristiqueVehicule/MiseJourCaracteristiqueVehicule";
import MJAVehicule from "./pages/vehicule/MiseJourCaracteristiqueVehicule/MJAVehicule";
import ConsultationVehicule from "./pages/vehicule/ConsultationVehicule/ConsultationVehicule";
import ConsultationVehiculeNum from "./pages/vehicule/ConsultationVehicule/ConsultationVehiculeNum";
import ConsultationHistoriqueVehicule from "./pages/vehicule/ConsultationVehicule/ConsultationHistoriqueVehicule";
import VoirContribuableDetail from "./pages/consultation/rechercheContribuable/VoirContribuableDetail";
import ConsultationHistoriqueRF from "./pages/consultation/consultationHistoriqueContribuable/ConsultationHistoriqueRF";
import ConsulterListeDemandeValide from "./pages/consultation/ConsulterListeDemandeValider/ConsulterListeDemandeValide";
import BlocageAdministratif from "./pages/autresOperations/BlocageAdministratif/BlocageAdministratif";
import CessationActivite from "./pages/autresOperations/CessationActivite/CessationActivite";
import CessationInformation from "./pages/autresOperations/CessationActivite/CessationInformation";
import RepriseActivite from "./pages/autresOperations/RepriseActivite/RepriseActivite";
import ImpressionDuplicataCessation from "./pages/etat/ImpressionDuplicataCessation/ImpressionDuplicataCessation";
import ListeNIFDelivre from "./pages/etat/ListeNIFDelivre/ListeNIFDelivre";
import DeblocageAdministratif from "./pages/autresOperations/DeblocageAdministratif/DeblocageAdministratif";
import ConsulationContribuableDebloque from "./pages/consultation/ConsulationContribuableDebloque/ConsulationContribuableDebloque";
import ConsulterListeMJRValider from "./pages/consultation/ConsulteListeMJRValider/ConsulterListeMJRValider";
import LivreMotPassDelivre from "./pages/etat/ListeMotPassDelivre/LivreMotPassDelivre";
import ListeActif from "./pages/etat/ListeActif/ListeActif";
import ListeReprise from "./pages/etat/ListeReprise/ListeReprise";
import ListeContribuableVeilleuse from "./pages/etat/ListeContribuableVeilleuse/ListeContribuableVeilleuse";
import ListeProtocolaire from "./pages/etat/ListeProtocolaire/ListeProtocolaire";
import EtatpaimentMobile from "./pages/etat/EtatPaimentMobile/EtatpaimentMobile";
import ListePaimentMobileBanking from "./pages/etat/EtatPaimentMobile/ListePaimentMobileBanking";
import RecuperationDeclarationMobileBaking from "./pages/etat/EtatPaimentMobile/RecuperationDeclarationMobileBaking";
import { ResgisterPage } from "./pages/register";
import ActivitePersPysique from "./pages/register/ActivitePersMoral";
import SiegePersPhysique from "./pages/register/SiegePersPhysique";
import AutrePersPhysique from "./pages/register/AutrePersPhysique";
import ListeContribuableSuspendu from "./pages/etat/ListeContribuableSuspendu/ListeContribuableSuspendu";
import ListeContribuableRadie from "./pages/etat/ListeContribuableRadie/ListeContribuableRadie";
import ListeDemandeImmatriculationRejete from "./pages/etat/ListeDemandeImmatriculationRejete/ListeDemandeImmatriculationRejete";
import ListeDemandeMJRRejete from "./pages/etat/ListeDemandeMJRRejete/ListeDemandeMJRRejete";
import ListeContribuableNouvellementImmatricule from "./pages/etat/ListeContribuableNouvellementImmatricule/ListeContribuableNouvellementImmatricule";
import ListeAttestation from "./pages/etat/ListeAttestation/ListeAttestation";
import ListeCarteRegularite from "./pages/etat/ListeCarteRegularite/ListeCarteRegularite";
import ListeUtilisateur from "./pages/etat/ListeUtlisateur/ListeUtilisateur";
import RepriseInfo from "./pages/autresOperations/RepriseActivite/RepriseInfo";
function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
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
        <Route path="/RelanceDeffaillant" element={<RelanceDeffaillant/>}></Route>
        <Route path="/ValidationDemandeImmatriculation" element={<ValidationDemandeImmatriculation/>}></Route>
        <Route path="/Assujetissement" element={<Assujetissement/>}></Route>
        <Route path="/DemandeValidationNif" element={<DemandeValidationNif/>}></Route>
        <Route path="/RectificationVehiculeRF" element={<RectificationVehicule/>}></Route>
        <Route path="/TelechargementVehicule" element={<TelechargementVehicule/>}></Route>
        <Route path="/MiseJourCaracteristiqueVehicule" element={<MiseJourCaracteristiqueVehicule/>}></Route>
        <Route path="/MJAVehicule" element={<MJAVehicule/>}></Route>
        <Route path="/ConsultationVehicule" element={<ConsultationVehicule/>}></Route>
        <Route path="/ConsultationVehiculeNum" element={<ConsultationVehiculeNum/>}></Route>  
        <Route path="/ConsultationHistoriqueVehicule" element={<ConsultationHistoriqueVehicule/>}></Route>  
        <Route path="/VoirContribuableDetail" element={<VoirContribuableDetail/>}></Route>  
        <Route path="/HIstoriqueContribuable" element={<HIstoriqueContribuable/>}></Route> 
        <Route path="/ConsultationHistoriqueRF" element={<ConsultationHistoriqueRF/>}></Route> 
        <Route path="/ConsulterListeDemandeValide" element={<ConsulterListeDemandeValide/>}></Route>  
        <Route path="/BlocageAdministratif" element={<BlocageAdministratif/>}></Route> 
        <Route path="/CessationActivite" element={<CessationActivite/>}></Route> 
        <Route path="/CessationInformation" element={<CessationInformation/>}></Route> 
        <Route path="/RepriseActivite" element={<RepriseActivite/>}></Route>
        <Route path="/ImpressionDuplicataCessation" element={<ImpressionDuplicataCessation/>}></Route>
        <Route path="/ListeNIFDelivre" element={<ListeNIFDelivre/>}></Route>  
        <Route path="/DeblocageAdministratif" element={<DeblocageAdministratif/>}></Route>
        <Route path="/ConsulationContribuableDebloque" element={<ConsulationContribuableDebloque/>}></Route> 
        <Route path="/ConsulterListeMJRValider" element={<ConsulterListeMJRValider/>}></Route>
        <Route path="/LivreMotPassDelivre" element={<LivreMotPassDelivre/>}></Route>   
        <Route path="/ListeActif" element={<ListeActif/>}></Route>
        <Route path="/ListeReprise" element={<ListeReprise/>}></Route>
        <Route path="/ListeContribuableVeilleuse" element={<ListeContribuableVeilleuse/>}></Route>
        <Route path="/ListeProtocolaire" element={<ListeProtocolaire/>}></Route>
        <Route path="/EtatpaimentMobile" element={<EtatpaimentMobile/>}></Route>
        <Route path="/ListePaimentMobileBanking" element={<ListePaimentMobileBanking/>}></Route>
        <Route path="/RecuperationDeclarationMobileBaking" element={<RecuperationDeclarationMobileBaking/>}></Route>
        <Route path="/ActivitePersPysique" element={<ActivitePersPysique/>}></Route>
        <Route path="/SiegePersPhysique" element={<SiegePersPhysique/>}></Route>
        <Route path="/AutrePersPhysique" element={<AutrePersPhysique/>}></Route>
        <Route path="/ListeContribuableSuspendu" element={<ListeContribuableSuspendu/>}></Route>
        <Route path="/ListeContribuableRadie" element={<ListeContribuableRadie/>}></Route>*
        <Route path="/ListeDemandeImmatriculationRejete" element={<ListeDemandeImmatriculationRejete/>}></Route>
        <Route path="/ListeDemandeMJRRejete" element={<ListeDemandeMJRRejete/>}></Route>
        <Route path="/ListeContribuableNouvellementImmatricule" element={<ListeContribuableNouvellementImmatricule/>}></Route>
        <Route path="/ListeAttestation" element={<ListeAttestation/>}></Route>
        <Route path="/ListeCarteRegularite" element={<ListeCarteRegularite/>}></Route>
        <Route path="/ListeUtilisateur" element={<ListeUtilisateur/>}></Route>
        <Route path="/RepriseInfo" element={<RepriseInfo/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>        

      </Routes>
    </Router>
    </>
  )
}

export default App
