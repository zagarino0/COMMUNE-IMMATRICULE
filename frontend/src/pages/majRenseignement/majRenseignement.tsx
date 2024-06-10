
import {HiOutlineInformationCircle} from "react-icons/hi"
import {ImStatsDots} from "react-icons/im"
import {FaUniversity} from "react-icons/fa"
import {BiBody} from "react-icons/bi"
import {MdOpenInNew, MdOutlineZoomInMap, MdPermIdentity, MdZoomOutMap} from "react-icons/md"
import {IoIosPerson} from "react-icons/io"
import Layout from "./Layout"
import { useLocation } from "react-router-dom"
import { AiFillCar, AiOutlineSave } from "react-icons/ai"
import { useEffect, useState } from "react"
import Input from "../../components/inputs"
import { Label } from "../../components/label/label"
import Checkbox from "../../components/common/checkbox"
import { RiArrowGoBackFill, RiDeleteBinLine, RiSubtractFill } from "react-icons/ri"
import Table from "../../components/table/table"
import { IoAdd, IoSettingsOutline } from "react-icons/io5"
import Select from "../../components/inputs/selectInput"
import axios from "axios"
import { BsPencil } from "react-icons/bs"
// interface Etablissement{
//   activite: string,
//   adresse: string ,
//   autre_telephone : string ,
//   commune : string ,
//   date_ouverture : string ,
//   district : string ,
//   email : string,
//   fax : string ,
//   fokontany : string ,
//   id : number,
//   id_contribuable : string ,
//   nom_commercial : string ,
//   proprietaire_local : string ,
//   province : string ,
//   region : string ,
//   telephone_1 : string ,
//   titre : string 
// }

// interface Actionnaire {
//   action_ou_actionnaire : string ,
//   adresse_actionnaire : string ,
//   associe_activite_actionnaire : boolean ,
//   autre_activite_actionnaire : string ,
//   email_actionnaire : string ,
//   fonction_actionnaire : string ,
//   id : number ,
//   id_contribuable : string ,
//   nif_actionnaire : string ,
//   nom_actionnaire : string ,
//   numero_actionnaire : string ,
//   resident_actionnaire : boolean ,
//   type : string  ,
//   associe_unique_actionnaire : string,
//   cin_passeport_actionnaire: string,
// }

function MAJRenseignementPage() {
const location = useLocation();
const [add , setAdd] = useState(false);
const [value , setValue] = useState<{
  personne_physique:boolean,
  personne_morale:boolean,
  personne_etrangere:boolean,
  associe_unique:boolean,
  resident:boolean,
  avec_rf: boolean,
  salarie : boolean,
  aucune : boolean,
  numimmatriculation_v:string,
       marque_v:string,
       type_v:string,
       genre_v:string,
       puissance_v:string,
       nbplacecartegrise_v:string,
       nbplacelicence_v:string,
       chargeutile_v:string,
       datemisecirculation_v:string,
       poidsavide_v:string,
       hikaramana_v:string,
       datedebut_v:string,
       nifproprietaire_v:string,
       centregestion_v:string,
       ancnifproprietaire_v:string,
       exploitation_v:string,
       datevalidlic_v:string,
       categ_v:string,
       souscateg_v: string,
       zone_v:string,
       age_v:string,
}>({
  personne_physique:false,
  personne_morale:false,
  personne_etrangere:false,
  associe_unique:false,
  resident: true ,
  avec_rf: false,
  salarie: false,
  aucune : false,
  numimmatriculation_v:"",
       marque_v:"",
       type_v:"",
       genre_v:"",
       puissance_v:"",
       nbplacecartegrise_v:"",
       nbplacelicence_v:"",
       chargeutile_v:"",
       datemisecirculation_v:"",
       poidsavide_v:"",
       hikaramana_v:"",
       datedebut_v:"",
       nifproprietaire_v:"",
       centregestion_v:"",
       ancnifproprietaire_v:"",
       exploitation_v:"",
       datevalidlic_v:"",
       categ_v:"",
       souscateg_v: "",
       zone_v:"",
       age_v:"",
})
const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);
const handleCheckboxChange = (checked: boolean) => {
  setIsChecked(checked);
};
const handleCheckboxChangeSecond = (checked: boolean) => {
    setIsChecked2nd(checked);
  };
 
  const options = [
    { value: 'référence', label: 'Choisissez dans la liste' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'Référence fiscal', label: 'Référence fiscal' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];

  const handleOptionChange = () => {
    
  };

const headers = ["Type association", "Nom association", "Fonction", "Résident", "N° CIN", "N° Passport", "Autra act.", "RF Pers. moral", "Nom Pers.physique", "Adresse", "Associe", "Action en"];
const data = [
  ["none", "none", "none", "none"],
 
];

const [bool , setBool] = useState<{
  Principaux_renseignement : boolean,
  activite : boolean,
  siege: boolean,
  associe: boolean,
  etablissement:boolean,
  dirigeant:boolean,
  vehicule:boolean,
  interlocuteur:boolean
}>({
  Principaux_renseignement : false,
  activite: false,
  siege: false,
  associe: false,
  etablissement: false,
  dirigeant:false,
  vehicule:false,
  interlocuteur:false
})

// const HandlePersonePhysique  = (checked:boolean) => {  
//   setValue({
//     ...value,
//     personne_physique: checked,
//   });
// };
// const HandlePersoneMorale  = (checked:boolean) => {  
//   setValue({
//     ...value,
//     personne_morale: checked,
//   });
// };
// const HandlePersoneEtrangere = (checked:boolean) => {  
//   setValue({
//     ...value,
//     personne_etrangere: checked,
//   });
// };

const userContribuableData = localStorage.getItem("userContribuableData");
const [ContribuableData, setContribuableData] = useState(
  JSON.parse(userContribuableData as string)
);


const {activite} = ContribuableData ;
const {siege} = ContribuableData;
const {actionnaire} = ContribuableData;
const {etablissement} = ContribuableData;  
const {dirigeant} = ContribuableData ;
// const {autre} =ContribuableData ;
const {interlocuteur} = ContribuableData ;

console.log(ContribuableData)

 //Modification Renseignement Général
 const HandleRenseignementGeneralModifie = async () =>{
   
  if (ContribuableData){
  
    const RenseignementGeneral = {
    "reference_fiscal" : ContribuableData.reference_fiscal,
     "id": ContribuableData.id,
     "raison_social": ContribuableData.raison_social ,
     "type" : ContribuableData.type,
     "situation_matrimoniale": ContribuableData.situation_matrimoiale,
     "sexe": ContribuableData.sexe ,
     "etranger": ContribuableData.etranger,
     "cin" : ContribuableData.cin,
     "date_de_delivrance_cin" : ContribuableData.date_de_delivrance_cin,
     "lieu_de_delivrance_cin": ContribuableData.lieu_de_delivrance_cin,
     "numero_passport": ContribuableData.numero_passport ,
     "date_de_delivrance_passeport": ContribuableData.date_de_delivrance_passport,
     "date_de_naissance": ContribuableData.date_de_naissance , 
     "lieu_de_naissance": ContribuableData.lieu_de_naissance ,
     "forme_juridique" : ContribuableData.forme_juridique ,
     "regime_fiscal": ContribuableData.regime_fiscal,
     "date_creation": ContribuableData.date_creation,
     "capital" : ContribuableData.capital,
     "RIB": ContribuableData.RIB,
     "numero_compte_banquaire": ContribuableData.numero_compte_banquaire,
    
    }
  
    try {
      // Make a POST request to your server endpoint
      const response = await axios.put(`http://localhost:3500/contribuable/avalide`, RenseignementGeneral);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
      alert(" renseignements sur le contribuable Modifié")
     
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert(`erreur modification ${error}`)
    }
    }
  
    }


    // Modifie activité contribuable 
const HandleModifieActivite = async () =>{

  //Modofication activité 
  if(activite){
  
    const Activite = {    
      "id_contribuable": ContribuableData.id ,
      "id_activite" : activite[0]?.id_activite ,
      "activite": activite[0]?.activite ,
      "precision_activite": activite[0]?.precision_activite,
      "statistique" : activite[0]?.statistique,
      "numero_statistique": activite[0]?.numero_statistique,
      "date_delivrance_statistique": activite[0]?.date_delivrance_statistique,
      "registre_commerce": activite[0]?.registre_commerce,
      "date_registre_commerce": activite[0]?.date_registre_commerce,
      "debut_exercice": activite[0]?.debut_exercice,
      "cloture_exercice": activite[0]?.cloture_exercice,
      "nif": activite[0]?.nif,
      "nombre_salarie": activite[0]?.nombre_salarie
  
    }
  try {
    // Make a POST request to your server endpoint
    const response = await axios.put(`http://localhost:3500/activite/avalide/${activite[0]?.id_activite}`, Activite);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   alert("Activité Modifié")
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert(`Erreur activité ${error}`)
  }
  
  }
  
  }

  // Modificaton siege 
  const HandleModifieSiege = async () => {
    // Modification siege 
  if(siege){
    const DataSiege = {
      "id_contribuable": ContribuableData.id ,
      "id_siege": siege[0]?.id_siege,
      "adresse_actuel" : siege[0]?.adresse_actuel,
      "fokontany": siege[0]?.fokontany ,
      "commune": siege[0]?.commune,
      "district": siege[0]?.district,
      "region": siege[0]?.region ,
      "province": siege[0]?.province,
      
    }
    try {
      // Make a POST request to your server endpoint
      const response = await axios.put(`http://localhost:3500/siege/avalide/${siege[0]?.id_siege}`, DataSiege);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
    
     alert("Siège Modifié")
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert(`Erreur siege ${error}`)
    }
    }
  
  }
  

  //Modification Donné selectionner 
const HandleModifieActionnaire = async () => {
  
  
  // Modification Actionnaire 
  if(DataSelectedAssocie){
  
    const DataActionnaire = {
      "id_contribuable": ContribuableData.id ,
      "action_ou_actionnaire" : DataSelectedAssocie.action_ou_actionnaire,
      "adresse_actionnaire": DataSelectedAssocie.adresse_actionnaire,
      "associe_unique_actionnaire": DataSelectedAssocie.associe_unique_actionnaire,
      "cin_passeport_actionnaire": DataSelectedAssocie.cin_passeport_actionnaire,
      "email_actionnaire": DataSelectedAssocie.email_actionnaire ,
      "fonction_actionaire": DataSelectedAssocie.fonction_actionnaire,
      "id_actionnaire": DataSelectedAssocie.id_actionnaire,
      "nif_actionnaire": DataSelectedAssocie.nif_actionnaire,
      "nom_actionnaire": DataSelectedAssocie.nom_actionnaire,
      "numero_actionnaire": DataSelectedAssocie.numero_actionnaire ,
      "resident_actionnaire": DataSelectedAssocie.resident_actionnaire,
      "type": DataSelectedAssocie.type 
      
    }
    try {
  
      // Make a POST request to your server endpoint
      const response = await axios.put(`http://localhost:3500/actionnaire/avalide/${actionnaire.id_actionnaire}`, DataActionnaire);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
    
     alert("Associé Modifié")
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert(`Erreur Associé : ${error}`)
    }
    }
  
    } 
  
    // data selected Etablissement  table 
 const [selectedRowIndexEtablissement, setSelectedRowIndexEtablissement] = useState(null);
 const [DataSelectedEtablisement, setDataSelectedEtablissment] = useState<any>([]);


  // Modifie etablissement
  const HandleModifieEtablissement = async () => {
    if (etablissement){
      const EtablissementData  = {
       "activite" : DataSelectedEtablisement.activite ,
       "adresse" : DataSelectedEtablisement.adresse ,
       "autre_telephone" : DataSelectedEtablisement.autre_telephone,
       "commune": DataSelectedEtablisement.commune,
       "date_ouverture": DataSelectedEtablisement.date_ouverture,
       "district": DataSelectedEtablisement.district,
       "email": DataSelectedEtablisement.email ,
       "fax": DataSelectedEtablisement.fax ,
       "fokontany": DataSelectedEtablisement.fokontany,
        "id": DataSelectedEtablisement.id ,
        "id_contribuable" : ContribuableData.id ,
        "nom_commercial" : DataSelectedEtablisement.nom_commercial ,
        "proprietaire_local": DataSelectedEtablisement.proprietaire_local,
        "province" : DataSelectedEtablisement.province ,
        "region": DataSelectedEtablisement.region ,
        "telephone_1" : DataSelectedEtablisement.telephone_1,
        "titre": DataSelectedEtablisement.titre
      }
      try {
  
        // Make a POST request to your server endpoint
        const response = await axios.put(`http://localhost:3500/etablissement/avalide/${etablissement.id}`, EtablissementData);
      
        // Check the response status or do something with the response
        console.log("Server Response:", response.data);
      
       alert("Etablissement Modifié")
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert(`Error Etablissement : ${error}`)
      } 
  
    }
  }
  
console.log(activite)


// const handleSituationMatrimonialeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const newSituationMatrimoniale = e.target.value;

//   // Update the local state
//   setContribuableData((prevContribuableData : object) => ({
//     ...prevContribuableData,
//     situationmatrimoniale: newSituationMatrimoniale,
//   }));

//   // Update local storage with the new value
//   localStorage.setItem(
//     "userContribuableData",
//     JSON.stringify({
//       ...ContribuableData,
//       situationmatrimoniale: newSituationMatrimoniale,
//     })
//   );
// };


// const handleRaisonSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const newSituationMatrimoniale = e.target.value;

//   // Update the local state
//   setContribuableData((prevContribuableData : object) => ({
//     ...prevContribuableData,
//     raison_social: newSituationMatrimoniale,
//   }));

 
// };


// Fokontany 
const Fokontany = [
  "MANGA",
  "AMBOVOALANANA", 
  "TSARAMANDROSO AMBANY",    
  "TSARAMANDROSO AMBONY",
   "MAHAVOKY SUD",
   "MANJARISOA",
   "MORAFENO",
   "MAHABIBOKELY",
    "ABATTOIR\/MAROVATO",
    "MANGARIVOTRA",
    "ARANTA",
    "ANTANIMASAJA",
    "MAHATSINJO",
    "TANAMBAO SOTEMA",
     "AMBOHIMANDAMINA",
      "ANTANIMALANDY",
      "AMBONDRONA",
      "FIOFIO",
      "AMBALAVOLA",
      "ANTANAMBAO AMBALAVATO",
      "TSARARANO AMBONY",
     "TSARARANO ANOSIKELY",
      "TSARARANO AMBANY",
      "AMBOROVY",
      "MAHAVOKY NORD",
     
]

  // associe Table 
  const HeadersAssocie = ["Type association" , "Nom actionnaire" , "Fonction" , " Résident" , "N° CIN ou Passport" , " Adresse Actionnaire" , "Autre activité " , " Référence contribuable " , "Référence fiscal actionnaire" , "Action ou actionnaire" , "associe unique" , "Email actionnaire" , "numéro actionnaire" , "Gérant" , "CIN / Passport Gérant" , "Siege","supprimer" , "modifier"]
  const DataAssocie = actionnaire ? actionnaire.map((item :any )=>[item.type , item.nom_actionnaire , item.fonction_actionnaire , item.resident_actionnaire , item.cin_passport_actionnaire , item.adresse_actionnaire , item.autre_activite_actionnaire , item.id_contribuable , item.nif_actionnaire , item.action_ou_actionnaire , item.associe_unique_actionnaire, item.email_actionnaire , item.numero_actionnaire , item.gerant  , item.cin_passport_gerant , item.siege , 
  <span
    key={item.id} // Make sure to use a unique key
    className='cursor-pointer'
    onClick={() =>{window}}
  >
    <RiDeleteBinLine />
  </span>,
    <span
     key={`edit-${item.code}`} // Make sure to use a unique key
     className='cursor-pointer'
     onClick={() => {
     window     }}
   >
     <BsPencil />
   </span>]) : [];

  // const Activite  = ContribuableData.activite

// data selected associe table 
const [selectedRowIndexAssocie, setSelectedRowIndexAssocie] = useState(null);
const [DataSelectedAssocie , setDataSelectedAssocie] = useState<any>([]);


const [isStorageUpdatedAssocie, setIsStorageUpdatedAssocie] = useState(false);

  useEffect(() => {
     console.log(DataSelectedAssocie)
     setIsStorageUpdatedAssocie(false);
  }, [DataSelectedAssocie, isStorageUpdatedAssocie]);
  
  const handleSelectedDataTableAssocie = (rowIndex: any) => {
    // Check if the clicked row is already selected
    if (rowIndex === selectedRowIndexAssocie) {
      // If selected, unselect it
      setSelectedRowIndexAssocie(null);
      setDataSelectedAssocie([]);
    } else {
      // If not selected, select it
      setSelectedRowIndexAssocie(rowIndex);
      const selectedRowDataAssocie = actionnaire[rowIndex];
      setDataSelectedAssocie(selectedRowDataAssocie);
      console.log("selected:", DataSelectedAssocie);
    }
  };
  
  const DeleteAssocieData = async (rowIndex: key) => {
    try {
      // Check if the clicked row is already selected
      if (rowIndex === selectedRowIndexAssocie) {
        // If selected, unselect it
        setSelectedRowIndexAssocie(null);
        setDataSelectedAssocie([]);
      } else {
        // If not selected, select it
        setSelectedRowIndexAssocie(rowIndex);
        const selectedRowDataAssocie = actionnaire[rowIndex];
        setDataSelectedAssocie(selectedRowDataAssocie);
        console.log("selected:", DataSelectedAssocie);
  
        // Optional: You can include a confirmation dialog before deleting
        const isConfirmed = window.confirm("Vous êtes sûr de supprimer cette actionnaire ?");
  
        if (isConfirmed) {
          // Perform the deletion
          const response = await axios.delete(`http://localhost:3500/actionnaire/avalide/${selectedRowDataAssocie.id}`);
          console.log("data deleted", response.data);
          alert(`Actionnaire suprimer`)
          // Optionally, you may want to update your local state or refresh the data after deletion
          // Example: Assuming you have an 'updateData' function to refresh the data
          // updateData();
        }
      }
    } catch (error) {
      console.error('Erreur lors de la sélection :', error);
      alert(`Erreur supression actionnaire : ${error} `)
    }
  };
  


  // Interlocuteur  Modification 
const HandleModifieInterlocuteur = async () => {
  // Modification siege 
if(interlocuteur){
  const DataInterlocuteur = {
    "id_contribuable": ContribuableData.id ,
    "id_interlocuteur": interlocuteur[0]?.id_interlocuteur,
    "nom_interlocuteur" : interlocuteur[0]?.nom_interlocuteur,
    "titre_interlocuteur": interlocuteur[0]?.titre_interlocuteur,
    "adresse_interlocuteur": interlocuteur[0]?.adresse_interlocuteur,
    "telephone_interlocuteur": interlocuteur[0]?.telephone_interlocuteur,
    "email_interlocuteur": interlocuteur[0]?.email_interlocuteur,
  }
  console.log( "Interlocuteur" , DataInterlocuteur)
  try {
    // Make a POST request to your server endpoint
    const response = await axios.put(`http://localhost:3500/interlocuteur/avalide/${interlocuteur[0]?.id_interlocuteur}`, DataInterlocuteur);
    
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   alert("Interlocuetur Modifié")
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert(`Erreur modification interlocuteur : ${error}`)
  }
  }

}

  
  const handleSelectedDataTableEtablissment = (rowIndex: any) => {
    // Check if the clicked row is already selected
    const isRowSelected = rowIndex === selectedRowIndexEtablissement;
  
    // If the row is selected, unselect it
    if (isRowSelected) {
      setSelectedRowIndexEtablissement(null);
      setDataSelectedEtablissment([]);
    } else {
      // If the row is not selected, select it
      setSelectedRowIndexEtablissement(rowIndex);
      const selectedRowDataEtablissment = etablissement[rowIndex];
      setDataSelectedEtablissment(selectedRowDataEtablissment);
    }
  
    console.log("selected :", DataSelectedEtablisement);
  };


   // Etablissement table 
 const Headersetablissement  = ["activité" ,"adresse" , "commune" ,"fokontany" , "district", "province" , "date ouverture", "email" , "fax", "identifiant contribuable" , "nom commercial" ,"proprietaire local" , "region" , "téléphone" , "titre" ,"supprimer" , "modifier"]
 const DataEtablissment = etablissement ? etablissement.map((item :any)=>[item.activite , item.adresse , item.commune , item.fokontany , item.district , item.province ,item.date_ouverture , item.email , item.fax , item.id_contribuable , item.nom_commercial , <Checkbox checked={item.proprietaire_local} onChange={()=>window}></Checkbox> , item.region , item.telephone_1 , item.titre ,
<span
    key={item.id} // Make sure to use a unique key
    className='cursor-pointer'
    onClick={() =>{window}}
  >
    <RiDeleteBinLine />
  </span>,
    <span
     key={`edit-${item.id}`} // Make sure to use a unique key
     className='cursor-pointer'
     onClick={() =>  window}
   >
     <BsPencil />
   </span>]) : [];



 // Table dirigeant
 const HeaderDirigent = ["Nom" , "fonction" , "cin" , "passport" , "RF" , "email" , "telephone" ,"supprimer" , "modifier"]
 const datadirigeant = dirigeant ? dirigeant.map((item:any)=>[item.nom ,item.fonction , item.cin , item.passport , item.rf , item.email , item.telephone , 
  <span
    key={item.id} // Make sure to use a unique key
    className='cursor-pointer'
    onClick={() =>{window}}
  >
    <RiDeleteBinLine />
  </span>,
    <span
     key={`edit-${item.id}`} // Make sure to use a unique key
     className='cursor-pointer'
     onClick={() => window}
   >
     <BsPencil />
   </span>]
 ): [];


 // data selected Dirigeant  table 
const [selectedRowIndexDirigeant, setSelectedRowIndexDirigeant] = useState(null);
const [DataSelectedDirigeant, setDataSelectedDirigeant] = useState<any>([]);


const [isStorageUpdatedDirigeant, setIsStorageUpdatedDirigeant] = useState(false);

  useEffect(() => {
     console.log(DataSelectedDirigeant)
     setIsStorageUpdatedDirigeant(false);
  }, [DataSelectedDirigeant, isStorageUpdatedDirigeant]);
  
  const handleSelectedDataTableDirigeant = (rowIndex: any) => {
    // Check if the clicked row is already selected
    const isRowSelected = rowIndex === selectedRowIndexDirigeant;
  
    // If the row is selected, unselect it
    if (isRowSelected) {
      setSelectedRowIndexDirigeant(null);
      setDataSelectedDirigeant([]);
    } else {
      // If the row is not selected, select it
      setSelectedRowIndexDirigeant(rowIndex);
      const selectedRowDataDirigeant = dirigeant[rowIndex];
      setDataSelectedDirigeant(selectedRowDataDirigeant);
    }
  
    console.log("selected :", DataSelectedDirigeant);
  };
  

  // Modification Dirigeant 
const HandleModificationDirigeant = async () => {
   
  if(dirigeant){
    const DataDirigeant = {
      "id_contribuable": ContribuableData.id ,
      "adresse": DataSelectedDirigeant.adresse,
      "associe_unique" : DataSelectedDirigeant.associe_unique,
      "aucune": DataSelectedDirigeant.aucune,
      "avec_rf": DataSelectedDirigeant.avec_rf,
      "cin": DataSelectedDirigeant.cin,
      "email": DataSelectedDirigeant.email,
      "fonction": DataSelectedDirigeant.fonction,
      "id": DataSelectedDirigeant.id,
      "nom": DataSelectedDirigeant.nom,
      "passport": DataSelectedDirigeant.passport,
      "resident": DataSelectedDirigeant.resident,
      "rf": DataSelectedDirigeant.rf,
      "salarie": DataSelectedDirigeant.salarie,
      "telephone": DataSelectedDirigeant.telephone,
    }
    console.log( "Dirigeant :" , DataDirigeant)
    try {
      // Make a POST request to your server endpoint
      const response = await axios.put(`http://localhost:3500/dirigeant/avalide/${DataSelectedDirigeant.id}`, DataDirigeant);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
    
     alert("Dirigeant Modifié");
    
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert(`Erreur modification dirigeant : ${error}`)
    }
    }
}

 

const ContentCardInformation =(
<div className="flex items-center justify-center p-2">
  <div className="flex flex-col">

  <div className="flex flex-col overflow-y-auto h-[500px] w-[700px] ">
<div className="p-2 mx-4">
<h1 className=" text-2xl font-semibold">Modifications des renseignements permanents</h1>
<div className="py-1">1. CLiquer sur l'entête de chaque groupe</div>
<div className="py-1">2. Effectuer les modifications possibles</div>
<div className="py-1">3. CLiquer sur "Obtenier le code de validation"</div>
  </div>
  <div onClick={()=>setBool({...bool , Principaux_renseignement:true})} className=" w-full bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <HiOutlineInformationCircle className="text-xl  font-semibold"></HiOutlineInformationCircle>
  Principaux renseignements
  </div>
  { bool.Principaux_renseignement === true && (
    <div className="flex justify-enter  bg-gray-200 w-full p-4">
<div className=" flex flex-col ">
        <div className="flex justify-between mt-6">
          <Label text=" Raison Social" />
          <Input type="text"
          value={ContribuableData? ContribuableData.raison_social : ""}
         onChange={(e)=>setContribuableData({...ContribuableData , raison_social : e.target.value})}
         />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Type" />
          <div className="flex justify-between">
          <label className="">
    <input
      type="radio"
      value="Personne physique"
      className='mr-2'
      checked={  ContribuableData.type === "Personne physique"}
      onChange={() => setContribuableData({ ...ContribuableData, type: "Personne physique" })}
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="Personne morale"
      className='mr-2'
      checked={ContribuableData.type === "Personne morale"}
      onChange={() => setContribuableData({ ...ContribuableData, type: "Personne morale" })}
    />
    Personne morale
  </label>
          </div>
        </div>
        { ContribuableData.type === "Personne physique" && (
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Situation matrimoniale "></Label>
    <Input
      type="text"
      value={ContribuableData ? ContribuableData.situation_matrimoiniale : ""}
      onChange={(e)=> setContribuableData({...ContribuableData , situation_matrimoniale : e.target.value})}     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Sexe "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Masculin" checked={ContribuableData.sexe === "Masculin"} onChange={()=>setContribuableData({...ContribuableData , sexe : "Masculin" })} ></Checkbox>
    <Checkbox label="Feminin" checked={ContribuableData.sexe === "Feminin"} onChange={()=>setContribuableData({...ContribuableData , sexe : "Feminin" })}></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Etranger "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" checked={ContribuableData.etranger === true} onChange={()=>setContribuableData({...ContribuableData , etranger : true })} ></Checkbox>
    <Checkbox label="Non" onChange={()=>setContribuableData({...ContribuableData , etranger : false })} checked={ContribuableData.etranger === false}></Checkbox>
    </div>
  </div>
  { ContribuableData.etranger === false && (
    <>
      <div className='flex justify-between mt-6 '>
    <Label text="CIN"></Label>
    <Input
      type="text" 
      value={ContribuableData?ContribuableData.cin : ""}
      onChange={(e)=>setContribuableData({...ContribuableData , cin : e.target.value})}
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={ContribuableData?ContribuableData.date_de_delivrance_cin : ""}
      onChange={(e)=> setContribuableData({...ContribuableData , date_de_delivrance_cin : e.target.value})}
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance"></Label>
    <Input
      type="text"
       value={ContribuableData?ContribuableData.lieu_de_delivrance_cin : ""} 
       onChange={(e)=>setContribuableData({...ContribuableData , lieu_de_delivrance_cin : e.target.value})}    
    ></Input>
  </div>
    </>
  )

  }
    { ContribuableData.etranger === true && (
    <>
      <div className='flex justify-between mt-6 '>
    <Label text="Numéro passport"></Label>
    <Input
      type="text" 
      value={ContribuableData?ContribuableData.numero_passport : ""}
      onChange={(e)=> setContribuableData({...ContribuableData , numero_passport : e.target.value})}
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={ContribuableData?ContribuableData.date_de_delivrance_passeport: ""}
      onChange={(e)=> setContribuableData({...ContribuableData , date_de_delivrance_passeport : e.target.value})}
    ></Input>
  </div>
 
    </>
  )

  }
  <div className='flex justify-between mt-6 '>
    <Label text="Date naissance"></Label>
    <Input
      type="date" 
       value={ContribuableData?ContribuableData.date_de_naissance : ""} 
       onChange={(e)=> setContribuableData({...ContribuableData , date_de_naissance  : e.target.value})}   
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance "></Label>
    <Input
      type="text" 
      value={ContribuableData? ContribuableData.lieu_de_naissance : ""} 
      onChange={(e)=> setContribuableData({...ContribuableData , lieu_de_naissance : e.target.value })}   
    ></Input>
  </div>
  </div>
)}
        <div className="flex justify-between mt-6">
          <Label text="Forme juridique" />
          <Input type="text" 
          value={ContribuableData?ContribuableData.forme_juridique : ""}
          onChange={(e)=> setContribuableData({...ContribuableData , forme_juridique : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Régime Fiscale" />
          <Input type="text"
          value={ContribuableData? ContribuableData.regime_fiscal : ""}
          onChange={(e)=>setContribuableData({...ContribuableData , regime_fiscal : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Création" />
          <Input type="date"
          value={ContribuableData? ContribuableData.date_creation : ""}
          onChange={(e)=> setContribuableData({...ContribuableData , date_creation : e.target.value})}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Capital en Ar" />
          <Input type="text"
          value={ContribuableData? ContribuableData.capital : ""}
          onChange={(e)=>setContribuableData({...ContribuableData , capital : e.target.value})}
          />
        </div>
        <div className='flex justify-between mt-6 '>
    <Label text="RIB "></Label>
    <div className="flex justify-between w-[300px]">
    <Checkbox label="Disponible" onChange={()=>setContribuableData({...ContribuableData , RIB : "Disponible"})} checked={ContribuableData.RIB === "Disponible"}></Checkbox>
    <Checkbox label="Pas encore" onChange={()=>setContribuableData({...ContribuableData , RIB : "Pas encore"})} checked={ContribuableData.RIB === "Pas encore"}></Checkbox>
    </div>
    
  </div>
  <div className="flex justify-between mt-6">
          <Label text="Compte bancaire" />
          <Input type="text"
          value={ContribuableData? ContribuableData.numero_compte_bancaire : ""}
          onChange={(e)=>setContribuableData({...ContribuableData , numero_compte_bancaire : e.target.value})}
          />
        </div>
        <div className="flex justify-between"> 
        
        <button onClick={HandleRenseignementGeneralModifie}   className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave  className="text-2xl mr-2"/>Modifier</button>         
        <button onClick={()=> setBool({...bool , Principaux_renseignement: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
        </div>
    </div>
</div>
  )

  }
  <div  onClick={()=>setBool({...bool , activite:true })} className="w-full bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <ImStatsDots className="text-xl mx-2"></ImStatsDots>
  Activités
  </div>
  { bool.activite === true && (
    <div className="flex justify-center">
    <div className="flex flex-col bg-gray-200 p-4 w-full">
    <div className="flex justify-between mt-6">
          <Label text="Activités " />
          <Input type="text" 
        value={activite ? activite[0]?.activite :""}
        onChange={(e) => {
          const newActivite = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            activite: [
              {
                ...prevData.activite[0],
                activite: newActivite
              }
            ]
          }));
        }
        }     />
        </div>
        
 
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Précision sur les activités "></Label>
    <Input
      type="text" 
         value={activite ? activite[0]?.precision_activite: ""}
         onChange={(e) => {
          const newActivite = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            activite: [
              {
                ...prevData.activite[0],
                precision_activite: newActivite
              }
            ]
          }));
        }
        } 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Numéro d'identification Fiscal"></Label>
    <Input
      type="text" 
         value={activite ? activite[0]?.nif: "" }
         onChange={(e) => {
          const newActivite = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            activite: [
              {
                ...prevData.activite[0],
                nif: newActivite
              }
            ]
          }));
        }
        } 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Numéro statistique "></Label>
    <div className="flex flex-col">
    <div className="flex justify-between w-[300px]">
    <Checkbox label="Disponible" onChange={()=>setContribuableData({...ContribuableData , activite : {...ContribuableData.activite , statistique : true}})} checked={activite.statistique === true} ></Checkbox>
    <Checkbox label="Pas encore Disponible" onChange={()=>setContribuableData({...ContribuableData , activite : {...ContribuableData.activite , statistique : false }})} checked={activite.statistique === false} ></Checkbox>
    </div>
    { activite.statistique === true && (
      <Input
      type="text"
      value={activite[0]?.numero_statistique}
      onChange={(e) => {
        const newActivite = e.target.value;
        setContribuableData((prevData : any) => ({
          ...prevData,
          activite: [
            {
              ...prevData.activite[0],
              numero_statistique: newActivite
            }
          ]
        }));
      }
      } 
      className="mt-2"     
    ></Input>
    )
    }
    </div>
  </div>

  <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance statistique "></Label>
    <Input
      type="date"
      value={activite ? activite[0]?.date_delivrance_statistique : ""}
      onChange={(e) => {
        const newActivite = e.target.value;
        setContribuableData((prevData : any) => ({
          ...prevData,
          activite: [
            {
              ...prevData.activite[0],
              date_delivrance_statistique: newActivite
            }
          ]
        }));
      }
      } 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Registre de commerce"></Label>
    <Input
      type="text"
       value={activite ? activite[0]?.registre_commerce : ""}
       onChange={(e) => {
        const newActivite = e.target.value;
        setContribuableData((prevData : any) => ({
          ...prevData,
          activite: [
            {
              ...prevData.activite[0],
              registre_commerce: newActivite
            }
          ]
        }));
      }
      } 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Date de registre de commerce"></Label>
    <Input
      type="date"  
       value={activite ? activite[0]?.date_registre_commerce : ""}
       onChange={(e) => {
        const newActivite = e.target.value;
        setContribuableData((prevData : any) => ({
          ...prevData,
          activite: [
            {
              ...prevData.activite[0],
              date_registre_commerce: newActivite
            }
          ]
        }));
      }
      } 
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Début de l'exercice comptable  "></Label>
    <Input
      type="date"
       value={activite ? activite[0]?.debut_exercice : ""}
       onChange={(e) => {
        const newActivite = e.target.value;
        setContribuableData((prevData : any) => ({
          ...prevData,
          activite: [
            {
              ...prevData.activite[0],
              debut_exercice: newActivite
            }
          ]
        }));
      }
      } 
    ></Input>
  </div>
  </div>

        <div className="flex justify-between mt-6">
          <Label text="Clôture de l'exercice comptable" />
          <Input type="date" 
           value={ activite ?activite[0]?.cloture_exercice : ""}
           onChange={(e) => {
            const newActivite = e.target.value;
            setContribuableData((prevData : any) => ({
              ...prevData,
              activite: [
                {
                  ...prevData.activite[0],
                  cloture_exercice: newActivite
                }
              ]
            }));
          }
          } 
          />
        </div>
   
        <div className="flex justify-between mt-6">
          <Label text="Nombre salarié" />
          <Input type="text"
          value={activite?activite[0]?.nombre_salarie : ""}
          onChange={(e) => {
            const newActivite = e.target.value;
            setContribuableData((prevData : any) => ({
              ...prevData,
              activite: [
                {
                  ...prevData.activite[0],
                  nombre_salarie: newActivite
                }
              ]
            }));
          }
          } 
           />
        </div>
<div className="flex justify-between">
<button onClick={HandleModifieActivite} className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"/>Modifier</button>
<button onClick={()=> setBool({...bool , activite: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>

</div>   
    </div>
        </div>
  )

  }
  <div onClick={()=> setBool({...bool , siege: true})} className=" bg-white w-full py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer  ">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Siège
  </div>
  { bool.siege === true && (
    <div className=" flex justify-center ">
    <div className="flex flex-col bg-gray-200 p-4  w-full ">
    <div className="flex justify-between  mt-6">
            <Label text="Adresse actuelle (siège) " />
            <Input type="text" 
            value={siege?siege[0]?.adresse_actuel : ""}
            onChange={(e) => {
              const newSiege = e.target.value;
              setContribuableData((prevData : any) => ({
                ...prevData,
                siege: [
                  {
                    ...prevData.siege[0],
                    adresse_actuel: newSiege
                  }
                ]
              }));
            }
            } 
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Fokontany"></Label>
      <Input
        type="text"    
        value={ siege ? siege[0]?.fokontany : ""}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            siege: {
              ...ContribuableData.siege,  
              fokontany: e.target.value  
            }
          })
        }
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Commune "></Label>
      <Input
        type="text"
        value={siege ? siege[0]?.commune : "" }
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            siege: {
              ...ContribuableData.siege,  
              commune: e.target.value  
            }
          })
        } 
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="District "></Label>
      <Input
        type="text"     
        value={siege? siege[0]?.district : ""}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            siege: {
              ...ContribuableData.siege,  
              district: e.target.value  
            }
          })
        }
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Région"></Label>
      <Input
        type="text"     
        value={siege ? siege[0]?.region : ""}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
           siege: {
              ...ContribuableData.siege,  
              region: e.target.value  
            }
          })
        }
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Province "></Label>
      <Input
        type="text" 
        value={siege ? siege[0]?.province : ""}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            siege: {
              ...ContribuableData.siege,  
              province: e.target.value  
            }
          })
        } 
      ></Input>
    </div>
    <div className="flex justify-between">      
    <button onClick={HandleModifieSiege}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave  className="text-2xl mr-2"/> Modifier</button>
    <button onClick={()=> setBool({...bool , siege: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
    </div>
    </div>
    </div>

    </div>
  )
  }
  { ContribuableData.type === "Personne morale" ? (
  <>
 <div onClick={()=>setBool({...bool , associe:true })} className=" bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <BiBody className="text-xl mx-2"></BiBody>
  Associé
  </div>
  { bool.associe === true && (
    <div className="flex justify-center w-[620px]  bg-gray-200  p-4">
      <div className="flex flex-col " >
      { add === true && ( 
            <div className=" flex justify-center">
 <div className="flex flex-col">
 <div className='flex justify-between mt-6 '>
    <Label text="Type d'associés / Actionnaires"></Label>
    <div className="flex justify-between ">
    <Checkbox label="Personne physique" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , type : "Personne physique"})} checked={DataSelectedAssocie.type === "Personne physique"}></Checkbox>
    <Checkbox label="Personne morale" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , type : "Personne morale"})} checked={DataSelectedAssocie.type ==="Personne morale"}></Checkbox>
    <Checkbox label="Personne morale etrangère/Etat" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , type : "Personne morale etrangère/Etat"})} checked={DataSelectedAssocie.type === "Personne morale etrangère/Etat"}></Checkbox>
    </div>
  </div>
  {DataSelectedAssocie.type === "Personne physique" && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text" value={DataSelectedAssocie?DataSelectedAssocie.nom_actionnaire : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , nom_actionnaire : e.target.value})}
      ></Input>

    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fonction"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.fonction_actionnaire : ""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , fonction_actionnaire : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Resident  " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , resident_actionnaire : true})} checked={DataSelectedAssocie.resident_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , resident_actionnaire : false})} checked={DataSelectedAssocie.resident_actionnaire === false }></Checkbox>
    </div>
    </div>
    { DataSelectedAssocie.resident_actionnaire === true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"
value={DataSelectedAssocie? DataSelectedAssocie.cin_passeport_actionnaire : ""}
onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , cin_passeport_actionnaire : e.target.value})}
></Input>
      </div>
      </>
    )

    }
    { DataSelectedAssocie.resident_actionnaire ===  false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"

value={DataSelectedAssocie? DataSelectedAssocie.cin_passeport_actionnaire : ""}
onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , cin_passeport_actionnaire : e.target.value})}
></Input>
      </div>
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"
      value={DataSelectedAssocie? DataSelectedAssocie.adresse_actionnaire : ""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , adresse_actionnaire : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={()=> setDataSelectedAssocie({...DataSelectedAssocie , autre_activite_actionnaire : "Avec RF" })} checked={ DataSelectedAssocie.autre_activite_actionnaire ==="Avec RF"}></Checkbox>
    <Checkbox label="Salarié" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , autre_activite_actionnaire : "Salarié"})} checked={ DataSelectedAssocie.autre_activite_actionnaire ==="Salarié"}></Checkbox>
    <Checkbox label="Aucune" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , autre_activite_actionnaire : "Aucune"})} checked={DataSelectedAssocie.autre_activite_actionnaire === "Aucune"}></Checkbox>
    </div>
    </div>
    { DataSelectedAssocie.autre_activite_actionnaire ==="Avec RF" && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"
      value={DataSelectedAssocie ? DataSelectedAssocie.nif_actionnaire : ""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , nif_actionnaire : e.target.value })}
      ></Input>
    </div>  
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="E-mail"></Label>
      <Input type="email"
      value={DataSelectedAssocie? DataSelectedAssocie.email_actionnaire : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , email_actionnaire : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Telephone"></Label>
      <Input type="number"
      value={DataSelectedAssocie? DataSelectedAssocie.numero_actionnaire: ""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , numero_actionnaire : e.target.value})}
      ></Input>
    </div>
    </>
  )}
  { DataSelectedAssocie.type === "Personne morale etrangère/Etat" && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.nom_actionnaire :""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , nom_actionnaire : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"
      value={DataSelectedAssocie? DataSelectedAssocie.adresse_actionnaire : ""}
      onChange={(e )=> setDataSelectedAssocie({...DataSelectedAssocie , adresse_actionnaire : e.targte.value})}
      ></Input>
    </div>
    </>
  )

  }
   { DataSelectedAssocie.type === "Personne morale" && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.nif_actionnaire : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , nif_actionnaire : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Gérant"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.gerant : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , gerant: e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="CIN /Passport"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.cin_passport_gerant : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , cin_passport_gerant : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Siege"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.siege : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , siege : e.target.value})}
      ></Input>
    </div>
    </>
  )

  }
              <div className="flex justify-between mt-6">
            <Label text="Associé unique" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>{setDataSelectedAssocie({...DataSelectedAssocie, associe_unique_actionnaire : true })}} checked={DataSelectedAssocie.associe_unique_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>{setDataSelectedAssocie({...DataSelectedAssocie , associe_unique_actionnaire : false })}} checked={DataSelectedAssocie.associe_unique_actionnaire === false}></Checkbox>
    </div>
          </div>
          { DataSelectedAssocie.associe_unique_actionnaire === true && (
            <>
            <div className="flex justify-between mt-6">
            <Label text="% Action ou" />
              <Input type="text"
              value={DataSelectedAssocie? DataSelectedAssocie.action_ou_actionnaire : ""}
              onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , action_ou_actionnaire : e.target.value})}
              ></Input>
            </div>
            </>
          )

          }
          <div className="flex justify-center mt-6">
          <button onClick={HandleModifieActionnaire} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Enregistrer</button>
          <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
          </div>
 </div>
            </div>
           )}
          
{ add === false  && (
  
  <div className="flex justify-center " >
   <div className="flex flex-col">
   
    <div className=" overflow-y-auto w-[500px] mt-6 overflow-y-auto">
  <Table

headers={HeadersAssocie}
data={DataAssocie}
onClick={handleSelectedDataTableAssocie}
selectedRowIndex={selectedRowIndexAssocie }
></Table>
</div>
<div className="flex justify-center mt-6 mb-6">
<div >
            <button  onClick={()=> setAdd(true)}  className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
</div>
<div className="ml-4" >
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
</div>
<div  className="ml-4">
            <button onClick={DeleteAssocieData} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
</div>

</div>
<div className="flex justify-between">
  
<button onClick={()=> setBool({...bool , associe: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
</div>
   </div>

</div>
)} 
      </div>
     
    </div>
  )

  }
  </>
):(
<>
</>
)
}
{ ContribuableData.type === "Personne morale" ? (
  <>
  <div onClick={()=> setBool({...bool , etablissement: true})} className=" bg-white py-3 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Etablissement
  </div>
  { bool.etablissement === true && (
    <div className="flex justify-center bg-gray-200 p-4">
     <div className="flex flex-col">
     { add === true && ( 
            <div className="p-4">
  
  
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom commercial"></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.nom_commercial : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , nom_commercial : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Activité"></Label>
      <Input type="text"
      value={DataSelectedEtablisement?DataSelectedEtablisement.activite : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , activite : e.target.value})}
      ></Input>
    </div>
   
    <div className="flex justify-between mt-6">
      <Label text="Date Ouverture "></Label>
      <Input type="date"
      value={DataSelectedEtablisement?DataSelectedEtablisement.date_ouverture : ""}
      onChange={(e)=>setDataSelectedEtablissment({...DataSelectedEtablisement , date_ouverture : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse  / Lot "></Label>
      <Input type="text"
      value={DataSelectedEtablisement?DataSelectedEtablisement.adresse : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , adresse : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fokontany "></Label>        
      <Select
      options={Fokontany.map((option) => ({ value: option, label: option }))}
      value={DataSelectedEtablisement.fokontany}
      onChange={(options) => {setDataSelectedEtablissment({...DataSelectedEtablisement , fokontany: options})}}    
      className=""
    />

    </div>
    <div className="flex justify-between mt-6">
      <Label text="Province "></Label>
      <Input type="text"
      value={DataSelectedEtablisement?DataSelectedEtablisement.province : ""}
      onChange={(e)=>setDataSelectedEtablissment({...DataSelectedEtablisement , province : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Région  "></Label>
      <Input type="text"
      value={DataSelectedEtablisement ? DataSelectedEtablisement.region : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , region : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="District  "></Label>
      <Input type="text"
      value={DataSelectedEtablisement?DataSelectedEtablisement.district : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , district : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Commune "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.commune : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , commune : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Téléphone   "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.telephone_1 : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , telephone_1 : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Autre Téléphone "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.autre_telephone : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , autre_telephone : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fax "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.fax : ""}
      onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , fax : e.target.value})}
      ></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="E-mail "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.email : ""}
       onChange={(e)=> setDataSelectedEtablissment({...DataSelectedEtablisement , email : e.target.value})}
      ></Input>
    </div>
    
   
    <div className="flex justify-between mt-6">
            <Label text="Propriétaire du local" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setDataSelectedEtablissment({...DataSelectedEtablisement , proprietaire_local : true })} checked={DataSelectedEtablisement.proprietaire_local === true }></Checkbox>
    <Checkbox label="Non" onChange={()=>setDataSelectedEtablissment({...DataSelectedEtablisement , proprietaire_local : false })} checked={DataSelectedEtablisement.proprietaire_local === false}></Checkbox>
    </div>
    </div>
    
   
    
    </>
 
    
          
          <div className="flex justify-center mt-6">
          <button onClick={HandleModifieEtablissement} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
          <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
          </div>
            </div>
           )}
          
{ add === false  && (
  
  <div className="flex justify-center p-4 " >
   
   <div className="flex flex-col">
   <div className=" mt-6 overflow-y-auto w-[500px] ">
  <Table
headers={Headersetablissement}
data={DataEtablissment}
onClick={handleSelectedDataTableEtablissment}
selectedRowIndex={selectedRowIndexEtablissement}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
            <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
</div>
<div className="ml-4" >
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
</div>
<div  className="ml-4">
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
</div>

</div>
<button onClick={()=> setBool({...bool , etablissement: false})}  className="border-[2px] ml-40 mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
   </div>
</div>
)} 
     </div>
    </div>
  )
  }
  </>
) : (
  <>
  
  </>
)

}
{ ContribuableData.type === "Personne morale" ?(
  <>
  <div onClick={()=> setBool({...bool , dirigeant: true})} className="bg-white py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <MdPermIdentity className="text-xl mx-2"></MdPermIdentity>
  Dirigant
  </div>
  { bool.dirigeant=== true && (
    <div className=" bg-gray-200 p-4">
    { add === true && ( 
          <div>


  <>
  <div className="flex justify-between mt-6">
    <Label text="Nom "></Label>
    <Input type="text"
    value={DataSelectedDirigeant?DataSelectedDirigeant.nom : ""}
    onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , nom : e.target.value})}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Fonction"></Label>
    <Input type="text"
    
    value={DataSelectedDirigeant?DataSelectedDirigeant.fonction : ""}
    onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , fonction : e.target.value})}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Etranger " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setDataSelectedDirigeant({ ...DataSelectedDirigeant, resident: true})} checked={DataSelectedDirigeant.resident === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setDataSelectedDirigeant({...DataSelectedDirigeant , resident: false})} checked={DataSelectedDirigeant.resident === false}></Checkbox>
    </div>
    </div>
    { DataSelectedDirigeant.resident === false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"
value={DataSelectedDirigeant? DataSelectedDirigeant.cin : ""}
onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , cin : e.target.value})}
></Input>
      </div>
      </>
    )

    }
    { DataSelectedDirigeant.resident === true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"
value={DataSelectedDirigeant? DataSelectedDirigeant.passport : ""}
onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , passport : e.target.value})}
></Input>
      </div>
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Adresse  "></Label>
    <Input type="text"
    value={DataSelectedDirigeant? DataSelectedDirigeant.adresse : ""}
    onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , adresse : e.target.value})}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={(checked : boolean)=> setDataSelectedDirigeant({...DataSelectedDirigeant , avec_rf : checked})} checked={DataSelectedDirigeant.avec_rf} ></Checkbox>
    <Checkbox label="Salarié" onChange={(checked:boolean)=>setDataSelectedDirigeant({...DataSelectedDirigeant , salarie: checked})} checked={DataSelectedDirigeant.salarie}></Checkbox>
    <Checkbox label="Aucune " onChange={(checked: boolean)=> setDataSelectedDirigeant({...DataSelectedDirigeant , aucune: checked})} checked={DataSelectedDirigeant.aucune}></Checkbox>
    </div>
    </div>
    { DataSelectedDirigeant.avec_rf === true && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"
      value={DataSelectedDirigeant? DataSelectedDirigeant.rf : ""}
      onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , rf : e.target.value})}
      ></Input>
    </div>  
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Email "></Label>
    <Input type="text"
    value={DataSelectedDirigeant? DataSelectedDirigeant.email : ""}
    onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , email : e.target.value})}
    ></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Telephone "></Label>
    <Input type="text"
    
    value={DataSelectedDirigeant ? DataSelectedDirigeant.telephone : ""}
    onChange={(e)=> setDataSelectedDirigeant({...DataSelectedDirigeant , telephone : e.target.value })}
    
    ></Input>
  </div>
   
  
  </>

  
        
        <div className="flex justify-center mt-6">
        <button onClick={HandleModificationDirigeant} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
        <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
        </div>
          </div>
         )}
        
{ add === false  && (

<div  className="">
   
  <div className="w-[550px] p-4 mt-6 overflow-y-auto flex justify-center">
<Table
headers={HeaderDirigent}
data={datadirigeant}
onClick={handleSelectedDataTableDirigeant}
selectedRowIndex={selectedRowIndexDirigeant}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
          <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
</div>
<div className="ml-4" >
            <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
</div>
<div  className="ml-4">
          <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
</div>

</div>
<button onClick={()=> setBool({...bool , dirigeant: false})}  className="border-[2px]  mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
</div>
)} 
    </div>
  )

  }
  </>
)
: 
(
  <>

  </>
)

}

  <div onClick={()=> setBool({...bool , vehicule: true})} className="bg-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <AiFillCar className="text-xl mx-2"></AiFillCar>
  Vehicule
  </div>
  { bool.vehicule === true && (
<div>
  {
    add === true && (
      <div className="flex justify-center p-4">
      <div className="flex  flex-col">
      <div className="flex justify-center items-center">
          
  <div className="flex flex-col ">
  
    <div className="flex flex-col  ">
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Numéro d'immatriculation " className="mt-4"></Label>
 <Input type="text"  placeholder="Numéro d'immatriculation" className="w-96 "
 value={value.numimmatriculation_v}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, numimmatriculation_v: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Marque " className="mt-4"></Label>
<Input type="text" placeholder="Marque" className="w-96  "
value={value.marque_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, marque_v: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Type " className="mt-4 "></Label>
  <Input type="text" placeholder="Type " className="w-96 "
  value={value.type_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, type_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Genre " className="mt-4"></Label>
  <Input type="text" placeholder="Genre" className="w-96 "
  value={value.genre_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, genre_v: e.target.value })}
  ></Input>
  </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Puissance :" className="mt-4"></Label>
 <Input type="text" placeholder="Puissance" className="w-96 "
 value={value.puissance_v}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, puissance_v: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Nombre de place sur carte grise :" className="mt-4"></Label>
<Input type="text" placeholder="Nombre de place sur carte grise" className="w-96 !"
value={value.nbplacecartegrise_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nbplacecartegrise_v: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre de place licence :" className="mt-4"></Label>
  <Input type="text" placeholder="Nombre de place licence" className="w-96 "
  value={value.nbplacelicence_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nbplacelicence_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Charge Utile :" className="mt-4"></Label>
  <Input type="text" placeholder="Charge Utile" className="w-96"
  value={value.chargeutile_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, chargeutile_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Date de mise en Circulation :" className="mt-4"></Label>
  <Input type="date" placeholder="Date de mise en Circulation" className="w-96 "
  value={value.datemisecirculation_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datemisecirculation_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Poids à vide :" className="mt-4"></Label>
  <Input type="text" placeholder="Poids à vide" className="w-96 "
  value={value.poidsavide_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, poidsavide_v: e.target.value })}
  ></Input>
  </div>
<div className="flex flex-row mt-6 justify-between">
  <Label text="Hikaràma" className="mt-4"></Label>
  <div >
<Checkbox label="Oui" checked={isChecked} onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked={isChecked2nd} onChange={handleCheckboxChangeSecond}></Checkbox>
  </div>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de début :" className="mt-4"></Label>
<Input type="date" placeholder="Date de début" className="w-96 "
value={value.datedebut_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datedebut_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="RF propriétaire" className="mt-4"></Label>
<Input type="text" placeholder="RF propriétaire" className="w-96 "
value={value.nifproprietaire_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nifproprietaire_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Centre Gestionnaire :" className="mt-4"></Label>
<Input type="text" placeholder="Centre Gestionnaire" className="w-96 "
value={value.centregestion_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, centregestion_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Anc RF Propriétaire :" className="mt-4"></Label>
<Input type="text" placeholder="Anc RF Propriétaire" className="w-96 "
value={value.ancnifproprietaire_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, ancnifproprietaire_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Exploitation :" className="mt-4"></Label>
<Select value="" options={options} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de validité licence :" className="mt-4"></Label>
<Input type="date" className="w-96 " 
value={value.datevalidlic_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datevalidlic_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Catégorie :" className="mt-4"></Label>
    <Select options={options} value="" onChange={handleOptionChange} className="w-96  "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Sous catégorie :" className="mt-4"></Label>
    <Select options={options} value="" onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Zone :" className="mt-4"></Label>
    <Select options={options} value="" onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Age :" className="mt-4"></Label>
    <Select options={options} value="" onChange={handleOptionChange} className="w-96 "/>
</div>
<button onClick={()=> setAdd(false)}  className="border-[2px] mt-6 w-40 ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
    </div>
  </div>
 
  </div>
      </div>
    </div>
    )
  }
  { add === false && (
    
<div >
   
   <div className="w-[1000px] p-4 mt-6 overflow-y-auto h-96">
 <Table
 
 headers={headers}
 data={data}
 ></Table>
 </div>
 <div className="flex justify-center mt-6">
 <div >
           <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><IoAdd></IoAdd></button>
 </div>
 <div  className="ml-4">
           <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><RiSubtractFill></RiSubtractFill></button>
 </div>
 <div className="ml-4">
           <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><MdOutlineZoomInMap></MdOutlineZoomInMap></button>
 </div>
 <div className="ml-4">
           <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white"><MdZoomOutMap></MdZoomOutMap> </button>
 </div>
 </div>
 <button onClick={()=> setBool({...bool , vehicule: false})}  className="border-[2px]  mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
 </div>
  )}
</div>
   
  ) 
  }
  {
   
   ContribuableData.type === "Personne morale"  ?
  (
  <>
  <div onClick={()=> setBool({...bool , interlocuteur: true})} className="bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
   <IoIosPerson className="text-xl mx-2"></IoIosPerson>
   Interlocuteur
   </div>
   { bool.interlocuteur === true && (
     <div className="flex justify-center bg-gray-200 p-4">
      
       <div  className="flex flex-col ">
       <div className="flex justify-between mt-6">
             <Label text="Nom " />
             <Input type="text"
              value={interlocuteur ?interlocuteur[0]?.nom_interlocuteur : ""}
              onChange={(e) => {
                const newInterlocuteur = e.target.value;
                setContribuableData((prevData : any) => ({
                  ...prevData,
                  interlocuteur: [
                    {
                      ...prevData.interlocuteur[0],
                      nom_interlocuteur: newInterlocuteur
                    }
                  ]
                }));
              }
              }  
              
              />
           </div>
           
    
     <div>
       <div className='flex justify-between mt-6 '>
       <Label text="Titre"></Label>
       <Input
         type="text"
         value={interlocuteur ?interlocuteur[0]?.titre_interlocuteur : ""}
         onChange={(e) => {
          const newInterlocuteur = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            interlocuteur: [
              {
                ...prevData.interlocuteur[0],
                titre_interlocuteur: newInterlocuteur
              }
            ]
          }));
        }
        }  
       
         ></Input>
     </div>
    
     <div className='flex justify-between mt-6 '>
       <Label text="Adresse  "></Label>
       <Input
         type="text" 
         value={interlocuteur ?interlocuteur[0]?.adresse_interlocuteur : ""}
         onChange={(e) => {
          const newInterlocuteur = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            interlocuteur: [
              {
                ...prevData.interlocuteur[0],
                adresse_interlocuteur: newInterlocuteur
              }
            ]
          }));
        }
        }        
       ></Input>
     </div>
     <div className='flex justify-between mt-6 '>
       <Label text="Téléphone "></Label>
       <Input
         type="text" 
         value={interlocuteur ?interlocuteur[0]?.telephone_interlocuteur : ""}
         onChange={(e) => {
          const newInterlocuteur = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            interlocuteur: [
              {
                ...prevData.interlocuteur[0],
                telephone_interlocuteur: newInterlocuteur
              }
            ]
          }));
        }
        }    
         
         ></Input>
     </div>
     <div className='flex justify-between mt-6 '>
       <Label text="E-mail"></Label>
       <Input
         type="text"
         value={interlocuteur ?interlocuteur[0]?.email_interlocuteur : ""}
         onChange={(e) => {
          const newInterlocuteur = e.target.value;
          setContribuableData((prevData : any) => ({
            ...prevData,
            interlocuteur: [
              {
                ...prevData.interlocuteur[0],
                email_interlocuteur: newInterlocuteur
              }
            ]
          }));
        }
        }  
       ></Input>
     </div>
     <div className="flex justify-center mt-6">
         <button  onClick={HandleModifieInterlocuteur} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Modifier</button>
         <button onClick={()=> setBool({...bool , interlocuteur : false})}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/>Fermer</button>
         </div>
     </div>
       </div>
    
     </div>
   )
 
   }
 
  </>
 
  ) :
  (
   <>
   </>
  
  )
  
  }
  
</div>
<button className="border-[2px] w-80 mt-6 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><IoSettingsOutline className="text-2xl mr-2"></IoSettingsOutline>Obtenir le code de validation</button>
  </div>
</div>
)
  return (
    <div
    className="
     w-screen 
    h-screen
    bg-gray-200
    flex
    items-center
    justify-center
    "
    >
<Layout children={ContentCardInformation} currentPath={location.pathname}></Layout>
</div>
   
  )
}

export default MAJRenseignementPage