import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import Input from "../../../components/inputs";
import {useState, useEffect } from "react";
import axios from "axios";
import Activite from "../../register/Activite";

function InfoDemandeValide() {
  const selectedData = localStorage.getItem("selectedRechercheConsulationData");
    //const [Data, setData] = useState ([])
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const  parsedDataSelected = JSON.parse(selectedData as string);
    console.log("data affiché :", parsedDataSelected)
  

    const [selectedContribuable, setSelectedContribuable] = useState<any>({});
  
  
    // Récupérer les données du contribuable sélectionné depuis le backend
    useEffect(() => {
      axios.get('http://localhost:3500/etat/contribuable/valide')
        .then((response) => setSelectedContribuable(response.data))
        .catch((error) => console.error(error));
    }, [parsedDataSelected]);
  
    // Récupérer les données du véhicule associé au contribuable sélectionné
    useEffect(() => {
      if (selectedContribuable && selectedContribuable.numero_immatriculation) {
        axios.get(`http://localhost:3500/vehicle ? numero_immatriculation=${selectedContribuable.numero_immatriculation}`)
          .then((response) => setSelectedVehicle(response.data))
          .catch((error) => console.error(error));
      }
    },[selectedContribuable]);

    const HeaderVehicule = [ "Numéro vehicule" , "Genre" , "Marque" , "Type" , "Nbre Place", "Poids"]

    const DataVehicule = selectedVehicle.map((item:any) =>[
      item.numero_immatriulation,
      item.genre,
      item.marque,
      item.type,
      item.nombre_de_place,
      item.poid_a_vide,
      
    ]);
    console.log(DataVehicule) 
   
    useEffect(() => {
      if (selectedContribuable && selectedContribuable.numero_immatriculation) {
        axios.get(`http://localhost:3500/client/assujetissement/ ? id_contribuable=${selectedContribuable.id_contribuable}`)
          .then((response) => setSelectedVehicle(response.data))
          .catch((error) => console.error(error));
      }
    },[selectedContribuable]);
   
    // Récupérer les données du assujestissement associé au contribuable sélectionné
    const HeaderAssujetissement = ["Impôt" , "Année" , "Date assujetissement" , "Date début" , "Date fin" , "Actif","Exonoré", "Periode"]

    const DataAssujetissement =selectedContribuable.map ((item:any) =>
        [
          item.imposition,
          item.annee,
          item.date_assujestissement,
          item.periodiciten,
         
        ],
    )


    const contentCard = (
        <div className="m-4">
               <div className="text-[#959824] text-4xl text-center  font-semibold border-b-2 mt-2 m-4">CONSULTATION DU CONTRIBUABLE AYANT COMME RF : {parsedDataSelected.reference_fiscal}</div>
           <div className="flex flex-col bg-gray-20 m-4">
<div className="mt-6">
    <TitleH3 text="Contribuable actif"></TitleH3>
</div>
           

<div className="flex flex-row mt-6 justify-between">
  <Label text="Raison social" className="mt-4 "></Label>
  <Input type="text" placeholder="raison social " className="w-50 text-[18px] text-center"
  value={parsedDataSelected? parsedDataSelected.raison_social: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, raison_social : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nom commercial" className="mt-4 "></Label>
  <Input type="text" placeholder="Nom commercial " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nom_commercial: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nom_commercial : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Type" className="mt-4 "></Label>
  <Input type="text" placeholder="type" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.type: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, type : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Situation matrimoniale" className="mt-4 "></Label>
  <Input type="text" placeholder="Situation matrimoniale " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.situation_matrimoiniale: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, situation_matrimoiniale : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Sexe" className="mt-4 "></Label>
  <Input type="text" placeholder="Sexe " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.sexe: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, sexe : e.target.value })}
  ></Input>
</div>
               

<div className="flex flex-row mt-6 justify-between">
  <Label text="CIN" className="mt-4 "></Label>
  <Input type="text" placeholder="CIN " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cin: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, cin : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Délivrée le" className="mt-4 "></Label>
  <Input type="text" placeholder="Délivrée le " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_de_delivrance_cin: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_de_delivrance_cin : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="A" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.lieu_de_livrancecin: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, lieu_de_livrancecin : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Né(e) le" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_de_naissance: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, lieu_de_naissance : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Lieu de naissance" className="mt-4 "></Label>
  <Input type="text" placeholder="lieu de naissance" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.lieu_de_naissance: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, lieu_de_naissance : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Passport" className="mt-4 "></Label>
  <Input type="text" placeholder="Passport " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.numero_passport: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, numero_passport : e.target.value })}
  ></Input>
</div>
              

<div className="flex flex-row mt-6 justify-between">
  <Label text="Forme juridique" className="mt-4 "></Label> 
  <Input type="text" placeholder="Forme juridique " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.forme_juridique: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, forme_juridique : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Regime fiscal " className="mt-4 "></Label>
  <Input type="text" placeholder="Regime fiscal  " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.regime_fiscal: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, regime_fiscal : e.target.value })}
  ></Input>
</div>       


<div className="flex flex-row mt-6 justify-between">
  <Label text="Date d'agrément" className="mt-4 "></Label>
  <Input type="text" placeholder="Date d'agrément " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_agrement: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_agrement : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Réference agrément" className="mt-4 "></Label>
  <Input type="text" placeholder="réference agrement " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.reference_agrement: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, refence_agrement  : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Période de grace" className="mt-4 "></Label>
  <Input type="text" placeholder="Période de grace " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.periode_grace: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, periode_grace : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Date de création" className="mt-4 "></Label>
  <Input type="text" placeholder="Date de création " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_creation: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_creation : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Capitale en Ariary" className="mt-4 "></Label>
  <Input type="text" placeholder="Capitale en Ariary " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.capital: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, capital : e.target.value })}
  ></Input>
</div>
            

<div className="flex flex-row mt-6 justify-between">
  <Label text="Activié" className="mt-4 "></Label>
  <Input type="text" placeholder="Activié " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.activite: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, activite : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Précision sur les activités" className="mt-4 "></Label>
  <Input type="text" placeholder="Précision sur les activités " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.activite.precision_activite: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, Activite : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nouvelle immatriculation" className="mt-4 "></Label>
  <Input type="text" placeholder="Nouvelle immatriculation " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nouvelle_immatricule: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nouvelle_immatricule : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Date immatriculation" className="mt-4 "></Label>
  <Input type="text" placeholder="Date immatriculation " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_immatricule: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_immatricule : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Registre de commerce" className="mt-4 "></Label>
  <Input type="text" placeholder="Registre de commerce " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.registre_commerce: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, registre_commerce : e.target.value })}
  ></Input>
</div>
              
<div className="flex flex-row mt-6 justify-between">
  <Label text="Date de registre" className="mt-4 "></Label>
  <Input type="text" placeholder="Date de registre " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_registre_commerce: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_registre_commerce : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="N° statistique" className="mt-4 "></Label>
  <Input type="text" placeholder="N° statistique " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.numero_statistique: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, numero_statistique : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Délivré le " className="mt-4 "></Label>
  <Input type="text" placeholder="Délivré le  " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_delivrance_statistique: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_delivrance_statistique : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="
  activités Stat" className="mt-4 "></Label>
  <Input type="text" placeholder="
  activités stat" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.activite_stat: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, activite_stat : e.target.value })}
  ></Input>
</div>
               
<div className="flex flex-row mt-6 justify-between">
  <Label text="Activité NORMA" className="mt-4 "></Label>
  <Input type="text" placeholder="Activité NORMA " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.norma: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, norma : e.target.value })}
  ></Input>
</div>
             
<div className="flex flex-row mt-6 justify-between">
  <Label text="Date début exercice" className="mt-4 "></Label>
  <Input type="text" placeholder="Date début exercice " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.debut_exercice: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, debut_exercice : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Date clôture exercice" className="mt-4 "></Label>
  <Input type="text" placeholder="Date clôture exercice " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cloture_exercice: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, cloture_exercice : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="N° Compte bancaire" className="mt-4 "></Label>
  <Input type="text" placeholder="N° Compte bancaire " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.numero_compte_bancaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, numero_compte_bancaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Résident" className="mt-4 "></Label>
  <Input type="text" placeholder="Résident " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.addresse: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, addresse : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Exporteur" className="mt-4 "></Label>
  <Input type="text" placeholder="Exporteur " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.export: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, export : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Importeur" className="mt-4 "></Label>
  <Input type="text" placeholder="Importeur " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.Importeur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, Importeur : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Province" className="mt-4 "></Label>
  <Input type="text" placeholder="Province " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Région" className="mt-4 "></Label>
  <Input type="text" placeholder="Région " className="w-50 text-[17px] text-center"
  value={ "BOENY"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="District" className="mt-4 "></Label>
  <Input type="text" placeholder="District " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA I"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Commune" className="mt-4 "></Label>
  <Input type="text" placeholder="Commune " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Fokontany" className="mt-4 "></Label>
  <Input type="text" placeholder="Fokontany " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.fokontany: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, fokontany : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse actuel (siège)" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.fokontany: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, fokontany : e.target.value })}
  ></Input>
</div>  
               
<div className="flex flex-row mt-6 justify-between">
  <Label text="Nom" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.Proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, Proprietaire : e.target.value })}
  ></Input>
</div>        

<div className="flex flex-row mt-6 justify-between">
  <Label text="Type CIN" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.type_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, type_proprietaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nom propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nom_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nom_proprietaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="CIN Propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cin_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, cin_proprietaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse Propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.adresse_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, adresse_proprietaire : e.target.value })}
  ></Input>
</div>              

<div className="flex flex-row mt-6 justify-between">
  <Label text="Tél propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder="Tél propriétaire " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.tel_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, tel_proprietaire : e.target.value })}
  ></Input>
</div>        

<div className="flex flex-row mt-6 justify-between">
  <Label text="RF Propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nif_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nif_proprietaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre Salairié" className="mt-4 "></Label>
  <Input type="text" placeholder="Nombre Salairié " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nombre_salarie: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nombre_salarie : e.target.value })}
  ></Input>
</div>
              

<div className="mt-8 text-center border-2 p-4 bg-[#959824] text-[#ffff]">
                    <TitleH3 text="Coordonnées Géographiques"></TitleH3>
                </div>
                
<div className="flex flex-row mt-6 justify-between p-3">
  <Label text="Logitude" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.logitude: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, logitude : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between p-3">
  <Label text="Latitude" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.latitude: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, latitude : e.target.value })}
  ></Input>
</div>
        
    
                <div className="mt-6 text-center border-2 p-4 bg-[#959824] text-[#ffff]">
                    <TitleH3 text="Etablissement / Lieu d'exploitation n° 1"></TitleH3>
                </div>

                <div className="flex flex-row mt-6 justify-between">
  <Label text="Nom commercial" className="mt-4 "></Label>
  <Input type="text" placeholder="Nom commercial " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nom_commercial: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nom_commercial : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="
  activités " className="mt-4 "></Label>
  <Input type="text" placeholder="
  activités " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.activite: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, activite : e.target.value })}
  ></Input>
</div>
               
<div className="flex flex-row mt-6 justify-between">
  <Label text="
  activités Principales" className="mt-4 "></Label>
  <Input type="text" placeholder="
  activités Principale " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.activite_principal: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, activite_principal : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Type" className="mt-4 "></Label>
  <Input type="text" placeholder="type" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.type: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, type : e.target.value })}
  ></Input>
</div>    

<div className="flex flex-row mt-6 justify-between">
  <Label text="Province" className="mt-4 "></Label>
  <Input type="text" placeholder="Province " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Région" className="mt-4 "></Label>
  <Input type="text" placeholder="Région " className="w-50 text-[17px] text-center"
  value={"BOENY"}></Input>
</div>
              
<div className="flex flex-row mt-6 justify-between">
  <Label text="District" className="mt-4 "></Label>
  <Input type="text" placeholder="District " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA I"}></Input>
</div>
              
<div className="flex flex-row mt-6 justify-between">
  <Label text="Commune" className="mt-4 "></Label>
  <Input type="text" placeholder="Commune " className="w-50 text-[17px] text-center"
  value={"MAHAJANGA"}></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Fokontany" className="mt-4 "></Label>
  <Input type="text" placeholder="Fokontany " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.fokontany: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, fokontany : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse " className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.adresse: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, adresse : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse actuel (siège)" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.fokontany: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, fokontany : e.target.value })}
  ></Input>
</div>  
          
<div className="flex flex-row mt-6 justify-between">
  <Label text="N° statistique" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.numero_statistique: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, numero_statistique : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Délivré le " className="mt-4 "></Label>
  <Input type="text" placeholder="Délivré le  " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_delivrance_statistique: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_delivrance_statistique : e.target.value })}
  ></Input>
</div>
          
<div className="flex flex-row mt-6 justify-between">
  <Label text="Date Ouverture " className="mt-4 "></Label>
  <Input type="text" placeholder="Date Ouverture " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_ouverture: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_ouverture : e.target.value })}
  ></Input>
</div>     

<div className="flex flex-row mt-6 justify-between">
  <Label text="Date Fermeture (cessation) " className="mt-4 "></Label>
  <Input type="text" placeholder="Date Fermeture (cessation) " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.date_fermeture: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, date_fermeture : e.target.value })}
  ></Input>
</div>    

<div className="flex flex-row mt-6 justify-between">
  <Label text="Téléphone 1" className="mt-4 "></Label>
  <Input type="text" placeholder="Téléphone " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.tel_proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, tel_proprietaire : e.target.value })}
  ></Input>
</div>    

<div className="flex flex-row mt-6 justify-between">
  <Label text=" Autre Téléphone " className="mt-4 "></Label>
  <Input type="text" placeholder="Téléphone " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.autre_telephone: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, autre_telephone : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Email" className="mt-4 "></Label>
  <Input type="text" placeholder="@email" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.email: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, email : e.target.value })}
  ></Input>
</div>  
<div className="flex flex-row mt-6 justify-between">
  <Label text="Dimesion" className="mt-4 "></Label>
  <Input type="text" placeholder=" " className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.dimension: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, dimension : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre(s) salarié(s)" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nombre_salarie: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nombre_salarie : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Exportateur" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.exportateur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, exportateur : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Importeur" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.importeur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, importeur : e.target.value })}
  ></Input>
</div>   

<div className="flex flex-row mt-6 justify-between">
  <Label text="Propriétaire" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.Proprietaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, Proprietaire : e.target.value })}
  ></Input>
</div>         
           
               
                <div className="mt-6 text-center border-2 p-4 bg-[#959824] text-[#ffff]">
                    <TitleH3 text="Dirigant n° 1"></TitleH3>
                </div>

                <div className="flex flex-row mt-6 justify-between">
  <Label text="Nom" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nom_dirigent: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nom_dirigent : e.target.value })}
  ></Input>
</div>  


<div className="flex flex-row mt-6 justify-between">
  <Label text="Fonction" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.fonction: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, fonction : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="CIN" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cin: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, cin : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Passport" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.passport: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, passport : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse" className="mt-4 "></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.adresse: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, adresse : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Autre activité" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.autre_activite: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, autre_activite : e.target.value })}
  ></Input>
</div>  

<div className="flex flex-row mt-6 justify-between">
  <Label text="Résident" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.resident: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, resident : e.target.value })}
  ></Input>
</div>
             

<div className="flex flex-row mt-6 justify-between">
  <Label text="E-mail" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="@mail" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.email: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, email : e.target.value })}
  ></Input>
</div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="Téléphone" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.telephone: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, telephone : e.target.value })}
  ></Input>
</div>
                
                <div className="mt-6 text-center border-2 p-4 bg-[#959824] text-[#ffff] ">
                    <TitleH3 text="Interlocuteur"></TitleH3>
                </div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Nom" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.nom_iterlocuteur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, nom_iterlocuteur : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Titre" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.titre_interlocuteur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, titre_interlocuteur : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="Adresse" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.adresse_interlocuteur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, adresse_interlocuteur : e.target.value })}
  ></Input>
</div>
         
<div className="flex flex-row mt-6 justify-between">
  <Label text="Téléphone" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.telephone_interlocuteur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, telephone_interlocuteur : e.target.value })}
  ></Input>
</div>
             
<div className="flex flex-row mt-6 justify-between">
  <Label text="E-mail" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.email_interlocuteur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected, email_interlocuteur : e.target.value })}
  ></Input>
</div>       

                  {/**table vehicule */}
                <div className="mt-6 text-center border-2 p-4 bg-[#959824] text-[#ffff]">
                <TitleH3 text="Liste des vehicules"></TitleH3>
                </div>
                <div className="mt-6 overflow-y-auto px-20 ">
                    <Table headers={HeaderVehicule} data={DataVehicule} className=" overflow-y-auto border item-center bg-black w-[1140px]" ></Table>
                </div>

                {/**table assujestissement */}
                <div className="mt-6 text-center border-2 p-4 bg-[#959824] text-[#ffff]">
                <TitleH3 text="Liste des Assujetissements"></TitleH3>
                </div>
                <div className="mt-6 overflow-y-auto px-20">
                    <Table headers={HeaderAssujetissement} data={DataAssujetissement} className="overflow-y-auto border item-center text-center w-[1150px]"></Table>
                </div>


<div className="flex flex-row mt-6 justify-between">
  <Label text="CF Gestionnaire" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="CF Gestionnaire" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cf_gestionnaire: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected,cf_gestionnaire : e.target.value })}
  ></Input>
</div>

<div className="flex flex-row mt-6 justify-between">
  <Label text="CF Validateur" className="mt-4  text-[17px]"></Label>
  <Input type="text" placeholder="CF Validateur" className="w-50 text-[17px] text-center"
  value={parsedDataSelected? parsedDataSelected.cf_validateur: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>({ ...parsedDataSelected,cf_validateur : e.target.value })}
  ></Input>
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
   <div className="overflow-y-auto h-[700px] mt-20 mb-20 border">
   <Card contentCard={contentCard} className="w-[1400px] h-[7320px] mt-10 border "></Card> 
   </div>
   </MainLayout>
  )
}

export default InfoDemandeValide