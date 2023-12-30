import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";

function VoirContribuableDetail() {


    const HeaderVehicule = [ "Numéro vehicule" , "Genre" , "Marque" , "Type" , "Nbre Place" , "DMC" , "Poids"]
    
    const DataVehicule = [
        ["none" , "none" , "none","none","none","none","none"],
    ]

    const HeaderAssujetissement = ["Impôt" , "Année" , "Date assujetissement" , "Date début" , "Date fin" , "Actif","Exonoré", "Periode"]

    const DataAssujetissement = [
        ["none","none","none","none","none","none","none","none"],
    ]
    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Consultation du contribuable ayant comme RF : référence fiscal</div>
           <div className="flex flex-col bg-gray-20 m-4">
<div className="mt-6">
    <TitleH3 text="Contribuable actif"></TitleH3>
</div>
                <div className="flex justify-between mt-6">
                    <Label text="Raison social"></Label>
                    <Label text="Raison social"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom commercial"></Label>
                    <Label text="Nom commercial"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type"></Label>
                    <Label text="Type"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Situation matrimoniale"></Label>
                    <Label text="Situation matrimoniale"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Sexe"></Label>
                    <Label text="Sexe"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN"></Label>
                    <Label text="CIN"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivrée le"></Label>
                    <Label text="délivrée le"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="A"></Label>
                    <Label text="A"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Né(e) le"></Label>
                    <Label text="Né(e) "></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="A"></Label>
                    <Label text="A"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Passport"></Label>
                    <Label text="Passport"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Associé majoritaire"></Label>
                    <Label text="Associé majoritaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="RF Social"></Label>
                    <Label text="RF Social"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Forme juridique"></Label>
                    <Label text="Forme juridique"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Régime Fiscal"></Label>
                    <Label text="Régime Fiscal"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date d'agrément"></Label>
                    <Label text="Date d'agrément"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Réf agrément"></Label>
                    <Label text="Réf agrément"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Période de grace"></Label>
                    <Label text="Période de grace"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date de création"></Label>
                    <Label text="Date de création"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Capital en Ar"></Label>
                    <Label text="Capital en Ar"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activités"></Label>
                    <Label text="Activités"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Précision sur les activités"></Label>
                    <Label text="Précision sur les activités"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nouvelle immatriculation"></Label>
                    <Label text="Nouvelle immatriculation"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date immatriculation"></Label>
                    <Label text="Date immatriculation"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Registre de commerce"></Label>
                    <Label text="Registre de commerce"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date de registre"></Label>
                    <Label text="Date de registre"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° statistique"></Label>
                    <Label text="N° statistique"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivré le"></Label>
                    <Label text="Délivré le"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité stat"></Label>
                    <Label text="Activité stat"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité NORAMA"></Label>
                    <Label text="Activité NORAMA"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date début exercice"></Label>
                    <Label text="Date début exercice"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date clôture exercice"></Label>
                    <Label text="Date clôture exercice"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° Compte bancaire"></Label>
                    <Label text="N° Compte bancaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Résident"></Label>
                    <Label text="Résident"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Exporteur"></Label>
                    <Label text="Exporteur"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Importeur"></Label>
                    <Label text="Importeur"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Province"></Label>
                    <Label text="Province"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Région"></Label>
                    <Label text="Région"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="District"></Label>
                    <Label text="District"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Commune"></Label>
                    <Label text="Commune"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fokontany"></Label>
                    <Label text="Fokontany"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse actuel (siège)"></Label>
                    <Label text="Adresse actuel (siège)"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Proprietaire"></Label>
                    <Label text="Proprietaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type Propriétaire"></Label>
                    <Label text="Type Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom Propriétaire"></Label>
                    <Label text="Nom Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN Propriétaire"></Label>
                    <Label text="CIN Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse Propriétaire"></Label>
                    <Label text="Adresse Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél Propriétaire"></Label>
                    <Label text="Tél Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="RF Propriétaire"></Label>
                    <Label text="RF Propriétaire"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nombre Salarié"></Label>
                    <Label text="Nombre Salarié"></Label>
                </div>
                <div className="mt-6">
                    <TitleH3 text="Coordonnées Géographiques"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Longitude"></Label>
                    <Label text="Longitude"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Latitude"></Label>
                    <Label text="Latitude"></Label>
                </div>
                <div className="mt-6">
                    <TitleH3 text="Etablissement / Lieu d'exploitation n° 1"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom commercial"></Label>
                    <Label text="Nom commercial"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activités"></Label>
                    <Label text="Activités"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité Princ"></Label>
                    <Label text="Activité Princ"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type"></Label>
                    <Label text="Type"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Province"></Label>
                    <Label text="Province"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Région"></Label>
                    <Label text="Région"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="District"></Label>
                    <Label text="District"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Commune"></Label>
                    <Label text="Commune"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fokontany"></Label>
                    <Label text="Fokontany"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <Label text="Adresse"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fax"></Label>
                    <Label text="Fax"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° statistique"></Label>
                    <Label text="N° statistique"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivré le"></Label>
                    <Label text="Délivré le"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date Ouverture"></Label>
                    <Label text="Date Ouverture"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date fermeture (cessation)"></Label>
                    <Label text="Date fermeture (cessation)"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Téléphone 1"></Label>
                    <Label text="Téléphone 1"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Autre téls"></Label>
                    <Label text="Autre téls"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <Label text="E-mail"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Dimension"></Label>
                    <Label text="Dimension"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nombre(s) Salarié(s)"></Label>
                    <Label text="Nombre(s) Salarié(s)"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Exporteur"></Label>
                    <Label text="Exporteur"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Importeur"></Label>
                    <Label text="Importeur"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Propriétaire"></Label>
                    <Label text="Propriétaire"></Label>
                </div>
                <div className="mt-6">
                    <TitleH3 text="Dirigant n° 1"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom"></Label>
                    <Label text="Nom"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fonction"></Label>
                    <Label text="Fonction"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN"></Label>
                    <Label text="CIN"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Passport"></Label>
                    <Label text="Passport"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <Label text="Adresse"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Autre activité"></Label>
                    <Label text="Autre activité"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Résident"></Label>
                    <Label text="Résident"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <Label text="E-mail"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél"></Label>
                    <Label text="Tél"></Label>
                </div>
                <div className="mt-6">
                    <TitleH3 text="Interlocuteur"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom"></Label>
                    <Label text="Nom"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Titre"></Label>
                    <Label text="Titre"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <Label text="Adresse"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél"></Label>
                    <Label text="Tél"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél 2"></Label>
                    <Label text="Tél 2"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél 3"></Label>
                    <Label text="Tél 3"></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <Label text="E-mail"></Label>
                </div>
                <div className="mt-6">
                <TitleH3 text="Liste des vehicules"></TitleH3>
                </div>
                <div className="mt-6">
                    <Table headers={HeaderVehicule} data={DataVehicule}></Table>
                </div>
                <div className="mt-6">
                <TitleH3 text="Liste des Assujetissements"></TitleH3>
                </div>
                <div className="mt-6">
                    <Table headers={HeaderAssujetissement} data={DataAssujetissement}></Table>
                </div>
                <div className="mt-6 flex justify-between">
                    <Label text="CF Gestionnaire"></Label>
                    <Label text="CF Gestionnaire"></Label>
                </div>
                <div className="mt-6 flex justify-between">
                    <Label text="CF Validateur"></Label>
                    <Label text="CF Validateur"></Label>
                </div>

                <div className="mt-12 flex justify-between">
                <button  className="flex flex-row mt-6"><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Imprimer la fiche d'informations" className="text-xs"></TitleH3></button>
                <button  className="flex flex-row mt-6"><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Imprimer Détail " className="text-xs"></TitleH3></button>
                </div>
          </div>
           </div>



    )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[1000px] h-[5000px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default VoirContribuableDetail