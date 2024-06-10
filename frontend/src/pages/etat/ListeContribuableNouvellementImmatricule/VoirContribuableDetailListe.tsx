import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { useState, useEffect } from "react";
import axios from "axios";

function VoirContribuableDetailListe() {
    const selectedData = localStorage.getItem("selectedRechercheConsulationData");
    const  parsedDataSelected = JSON.parse(selectedData as string);
    console.log("data affiché :", parsedDataSelected)

    const [vehicule, setVehicule] = useState([]);
    const [assujetissements, setAssujetissements] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    
useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/consultation/contribuable/debloque')
      .then((response) => setVehicule(response.data))
      .catch((error) => console.error(error));
  }, []);
    const HeaderVehicule = [ "Numéro vehicule" , "Genre" , "Marque" , "Type" , "Nbre Place" , "DMC" , "Poids"]
    const Data = vehicule.filter((item:any)=>
        item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
        );
    const DataVehicule = Data.map((item : any) => [
        item.num_vehicule,
        item.genre,
        item.marque,
        item.type,
        item.nbre_place,
        item.dmc,
        item.poids
    ]) 
        
    
    useEffect(() => {
        // Récupérer les données depuis le backend
        axios.get('http://localhost:3500/contribuable/:id_contribuable')
          .then((response) => setAssujetissements(response.data))
          .catch((error) => console.error(error));
      }, []);
    const HeaderAssujetissement = ["Impôt" , "Année" , "Date assujetissement" , "Date début" , "Date fin" , "Actif","Exonoré", "Periode"]
      const data = assujetissements.filter((item:any)=>
        item.id_contribuable && item.id_contribuable .toLowerCase().includes(searchTerm.toLowerCase())
    );
    const DataAssujetissement = data.map((item : any) => [
        item.immatriculation,
        item.année,
        item.date_assujetissement,
        item.date_courant,
        item.date_fin,
        item.actif,
        item.exonere,
        item.periode
    ])
  
    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-4xl  font-semibold border-b-2 px-8 mt-4">CONSULTATION DU CONTRIBUABLE AYANT COMME RF : {parsedDataSelected.reference_fiscal}</div>
            <div className="mt-6">
                    <TitleH3 text="Contribuable actif : "></TitleH3>
               </div>
           <div className="flex flex-col border-4 bg-gray-20 p-14 m-4 w-[1100px]">
              
                <div className="flex justify-between mt-6">
                    <Label text="Raison social"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.raison_social :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom commercial"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.nom_commercial:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.type:""}/>
                </div>
                  <div className="flex justify-between mt-6">
                    <Label text="Situation matrimoniale"></Label>
                    <Label text={parsedDataSelected.situationmatrimoinial}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Sexe"></Label>
                    <input value ={ parsedDataSelected ? parsedDataSelected.sexe:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.cin: ""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivrée le"></Label>
                    <input value ={parsedDataSelected ? parsedDataSelected.date_de_delivrance_cin:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="A"></Label>
                    <input value ={parsedDataSelected ? parsedDataSelected.lieu_de_livrancecin:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Né(e) le"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_de_naissance:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="A"></Label>
                    <input value ={parsedDataSelected ? parsedDataSelected.lieu_de_naissance:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Passport"></Label>
                    <input value ={parsedDataSelected ? parsedDataSelected.numero_passport:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Associé majoritaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.association_majoritaire:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="RF Social"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.reference_fiscale_social:""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Forme juridique"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.forme_juridique : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Régime Fiscal"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.regime_fiscal : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date d'agrément"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.date_agrement : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Réf agrément"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.reference_agrement :""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Période de grace"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.periode_grace : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date de création"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.date_creation : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Capital en Ar"></Label>
                    <Label text={parsedDataSelected ? parsedDataSelected.capital : ""}></Label>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activités"></Label>
                    <input  value ={parsedDataSelected? parsedDataSelected.activites :""}/>             </div>
                <div className="flex justify-between mt-6">
                    <Label text="Précision sur les activités"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.precision_activites :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nouvelle immatriculation"></Label>
               <input value={parsedDataSelected? parsedDataSelected.nouvelle_immatriculation :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date immatriculation"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_immatriculation :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Registre de commerce"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.registre_commerce :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date de registre"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_registre_commerce :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° statistique"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.num_statistique :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivré le"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_delivrance_stat :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité stat"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.activite_stat :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité NORAMA"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.activite_norama :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date début exercice"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_cloture_exercice :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date clôture exercice"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.date_cloture_exercice :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° Compte bancaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.num_compte_bancaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Résident"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.resident :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Exporteur"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.exporteur :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Importeur"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.importeur :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Province"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.province :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Région"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.region :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="District"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.district :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Commune"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.commune :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fokontany"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.fonkotany :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse actuel (siège)"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.adresse_actuelle :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Proprietaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type Propriétaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.type_proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom Propriétaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.nom_proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN Propriétaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.cin_proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse Propriétaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.adresse_proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél Propriétaire"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.tel_proprietaire :""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="RF Propriétaire"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.rf_proprietaire :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nombre Salarié"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.nombre_salaries :"" }/>
                </div>

                {/**Coordonnées Géographiques */}
                <div className="mt-6">
                    <TitleH3 text="Coordonnées Géographiques"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Longitude"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.longitude :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Latitude"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.latitude :"" }/>
                </div>

                      {/**etablissement n° 1 */}
                <div className="mt-6">
                    <TitleH3 text="Etablissement / Lieu d'exploitation n° 1"></TitleH3>
                </div>
                <div className="mt-6">
                    <Table headers={HeaderVehicule} data={DataVehicule}></Table>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom commercial"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.nom_commercial :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activités"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.activite :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Activité Princ"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.activite_principal :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Type"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.type :"" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Province"></Label>
                    <input value={"Mahajanga"}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Région"></Label>
                    <input value={"Boeny"}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="District"></Label>
                    <input value={"Mahajanga I"}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Commune"></Label>
                    <input value={"Mahajanga I"}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fokontany"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.fonkotany : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.adresse : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fax"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.fax : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="N° statistique"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.num_stat : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Délivré le"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.date_delivrance_stat : "" } />
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date Ouverture"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.date_ouverture : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Date fermeture (cessation)"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.date_fermeture : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Téléphone 1"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.tel_1 : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Autre téls"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.autre_tels : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.email : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Dimension"></Label>
                   <input value={ parsedDataSelected ? parsedDataSelected.dimension : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nombre(s) Salarié(s)"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.nbre_salarie : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Exporteur"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.exporteur : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Importeur"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.importeur : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Propriétaire"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.proprietaire : "" }/>
                </div>

                {/**dirigant n° 1 */}
                <div className="mt-6">
                    <TitleH3 text="Dirigant n° 1"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.nom : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Fonction"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.fonction : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="CIN"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.cin : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Passport"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.passport : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.adresse : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Autre activité"></Label>
                   <input value={ parsedDataSelected ? parsedDataSelected.autre_activite : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Résident"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.resident : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.email : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.telephone : "" }/>
                </div>

                {/**interlocuteur */}
                <div className="mt-6">
                    <TitleH3 text="Interlocuteur"></TitleH3>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Nom"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.nom : ""}/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Titre"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.titre : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Adresse"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.adresse : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="Tél"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.telephone : "" }/>
                </div>
                <div className="flex justify-between mt-6">
                    <Label text="E-mail"></Label>
                    <input value={ parsedDataSelected ? parsedDataSelected.email : "" }/>
                </div>

                {/**vehicule */}
                <div className="mt-6">
                <TitleH3 text="Liste des vehicules"></TitleH3>
                </div>
                <div className="mt-6">
                    <Table headers={HeaderVehicule} data={DataVehicule}></Table>
                </div>

                {/**assujetissements */}
                <div className="mt-6">
                <TitleH3 text="Liste des Assujetissements"></TitleH3>
                </div>
                <div className="mt-6">
                    <Table headers={HeaderAssujetissement} data={DataAssujetissement}></Table>
                </div>
                <div className="mt-6 flex justify-between">
                    <Label text="CF Gesti"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.cf_gesti : ""}/>
                </div>
                <div className="mt-6 flex justify-between">
                    <Label text="CF Validateur"></Label>
                    <input value={parsedDataSelected ? parsedDataSelected.cf_validateur : ""} />
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
   <div className="overflow-y-auto h-[500px] mt-20 mb-8 ">
   <Card contentCard={contentCard} className="w-[1300px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default VoirContribuableDetailListe