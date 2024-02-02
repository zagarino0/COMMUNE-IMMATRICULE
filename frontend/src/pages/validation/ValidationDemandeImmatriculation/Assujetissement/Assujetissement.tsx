

import { Card } from "../../../../components/card/card";
import { Button } from "../../../../components/common";
import Checkbox from "../../../../components/common/checkbox";
import Input from "../../../../components/inputs";
import Select from "../../../../components/inputs/selectInput";
import { Label } from "../../../../components/label/label";
import { MainLayout } from "../../../../layouts/main";

import { useEffect, useState } from "react";
import Table from "../../../../components/table/table";
import {  AiOutlineSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosPerson } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { BiBody } from "react-icons/bi";
import { MdOutlineCached, MdOutlineZoomInMap, MdPermIdentity, MdZoomOutMap } from "react-icons/md";
import { IoAdd } from "react-icons/io5";


interface Assujetissement {
  id_contribuable: string,
  imposition:string,
  date_debut:string,
  periodicite: string,
  annee: string,
  actif: boolean,
  exonere: boolean,
  period_1: string;
  period_2: string,
  etat: string,
  date_exe: string,
  date_assujetissement: string,
  id: string,
  date_fin : string
}

function Assujetissement() {

  function generatePassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.!@#$%^&*()<>?/";
    const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
  
  const [bool , setBool] = useState<{
    Principaux_renseignement : boolean,
    activite : boolean,
    siege: boolean,
    associe: boolean,
    etablissement:boolean,
    dirigeant:boolean,
    vehicule:boolean,
    interlocuteur:boolean,
    autre : boolean
  }>({
    Principaux_renseignement : false,
    activite: false,
    siege: false,
    associe: false,
    etablissement: false,
    dirigeant:false,
    vehicule:false,
    interlocuteur:false,
    autre: false
  })
  

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

    
    const selectedData = localStorage.getItem("selectedValidationData");
 
   const [ContribuableData, setContribuableData] = useState(
  JSON.parse(selectedData  as string)
);

console.log(ContribuableData);
    const {activite} = ContribuableData ;
    const {siege} = ContribuableData;
    const {actionnaire} = ContribuableData;
    const {etablissement} = ContribuableData;  
    const {dirigeant} = ContribuableData ;
    const {autre} =ContribuableData ;
    const {interlocuteur} = ContribuableData ;
    const userAdminData = localStorage.getItem("userAdministrationData");
    const userData  = JSON.parse(userAdminData as string);

    const [Assujetissement , setAssujetissement] = useState<Assujetissement>({
      id_contribuable: ContribuableData.id,
      imposition:"",
      date_debut:"",
      periodicite: "",
      annee: "",
      actif: false,
      exonere: false,
      period_1: "",
      period_2: "",
      etat: "",
      date_exe: "",
      date_assujetissement: "",
      id : "",
      date_fin : ""
    })
    let navigate = useNavigate();
  

    const [entries, setEntries] = useState([]); // New state to hold the list of entries



    const handleButtonClickSave = () => {

      const newId = entries.length > 0 ? parseInt(entries[entries.length - 1].id) + 1 : 1;
      

          // Update the Actionnaire state with the new ID
    setAssujetissement((prevActionnaire) => ({
      ...prevActionnaire,
      id: newId.toString(),
    }));

      // Add the current entry to the list of entries
      setEntries((prevEntries ) => [...prevEntries, {...Assujetissement , id: newId.toString()}]);
  
      // Reset the Actionnaire state to clear the form
      setAssujetissement<Assujetissement>({
        id_contribuable: ContribuableData.id,
        imposition:"",
        date_debut:"",
        periodicite: "",
        annee: "",
        actif: false,
        exonere: false,
        period_1: "",
        period_2: "",
        etat: "",
        date_exe: "",
        date_fin: "",
        date_assujetissement: "",
  
      });
       
    };
  
    const headers = [
      "numero",
      "imposition",
      "date_debut",
      "periodicite",
      "annee",
      "exonere",
      "period_1",
      "period_2",
      "etat",
       "date_exe",
      "date_assujetissement",
      "date fin"

    ];
  
    const data = entries.map((entry) => [
        entry.id,
        entry.imposition,
        entry.date_debut,
        entry.periodicite,
        entry.annee,
      <Checkbox checked={entry.exonere}></Checkbox>,
        entry.period_1,
        entry.period_2,
        entry.etat,
        entry.date_exe,
        entry.date_assujetissement,
        entry.date_fin
  
    ]);
  

  const [Coordonnees , setCoordonnees ] = useState<{
    id_contribuable: string,
    longitude: string,
    latitude : string
  }>({
   id_contribuable: ContribuableData.id,
   longitude : "",
   latitude : ""
  })


  // associe Table 
  const HeadersAssocie = ["Type association" , "Nom actionnaire" , "Fonction" , " Résident" , "N° CIN ou Passport" , " Adresse Actionnaire" , "Autre activité " , " Référence contribuable " , "Référence fiscal actionnaire" , "Action ou actionnaire" , "associe unique" , "Email actionnaire" , "numéro actionnaire" ]
  const DataAssocie = actionnaire ? actionnaire.map((item)=>[item.type , item.nom_actionnaire , item.fonction_actionnaire , item.resident_actionnaire , item.cin_passport_actionnaire , item.adresse_actionnaire , item.autre_activite_actionnaire , item.id_contribuable , item.nif_actionnaire , item.action_ou_actionnaire , item.associe_unique_actionnaire, item.email_actionnaire , item.numero_actionnaire ]) : [];

 // Etablissement table 
 const Headersetablissement  = ["activité" ,"adresse" , "commune" ,"fokontany" , "district", "province" , "date ouverture", "email" , "fax", "identifiant contribuable" , "nom commercial" ,"proprietaire local" , "region" , "téléphone" , "titre"]
 const DataEtablissment = etablissement ? etablissement.map((item)=>[item.activite , item.adresse , item.commune , item.fokontany , item.district , item.province ,item.date_ouverture , item.email , item.fax , item.id_contribuable , item.nom_commercial , <Checkbox checked={item.proprietaire_local}></Checkbox> , item.region , item.telephone_1 , item.titre]) : [];

 // Table dirigeant
 const HeaderDirigent = ["Nom" , "fonction" , "cin" , "passport" , "RF" , "email" , "telephone"]
 const datadirigeant = dirigeant ? dirigeant.map((item)=>[item.nom ,item.fonction , item.cin , item.passport , item.rf , item.email , item.telephone]): [];


 // valider contribuable 
  const HandleClick = async  () =>{


    if (entries){
      
      const Assujetissement_contribuable = {
        "assujetissements" : entries
      }
    
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/assujetissement", Assujetissement_contribuable);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
      alert("Assujetissement ajouté")
     
      setAssujetissement<Assujetissement>({
        id_contribuable: ContribuableData.id,
        imposition:"",
        date_debut:"",
        periodicite: "",
        annee: "",
        actif: false,
        exonere: false,
        period_1: "",
        period_2: "",
        etat: "",
        date_exe: "",
        date_assujetissement: "",
  
  
      });
     
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("erreur Assujetissment")
    }
    }
    
         
    if(Coordonnees){
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/coordonnees", Coordonnees);
      
        // Check the response status or do something with the response
        console.log("Server Response:", response.data);
      
       alert("Ajout coordonnées");
       setCoordonnees({ 
        id_contribuable: ContribuableData.id,
        longitude:"",
        latitude : ""
         })
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert("Erreur interlocuteur")
      }
      
      }
         
      if(ContribuableData){
        const mdp = generatePassword() ;
        const reference_fiscal  = {
            "id_user": userData.id_user ,
             "reference_fiscal" : ContribuableData.reference_fiscal,
            "mot_de_passe" : mdp ,
        }
        try {
          // Make a POST request to your server endpoint
          const response = await axios.post("http://localhost:3500/contribuable/validation/contribuable", reference_fiscal);
        
          // Check the response status or do something with the response
           console.log("Server Response:", response.data);
        
         alert("Générationde mot de passe en cours");
         alert(`le mot de passe est ${mdp}`)
         localStorage.removeItem("selectedValidationData");
         navigate("/ValidationDemandeImmatriculation") 
        } catch (error) {
          // Handle errors
           console.error("Error:", error);
           alert("Erreur Code de validation")
        }
        
        } 
      
   
    
     }

// Delete contribuable 
const handlesupression = () =>{

}

 const [DataCode , setDataCode] = useState([])
    useEffect(() => {
      // Récupérer les données depuis le backend
      axios.get('http://localhost:3500/impot')
        .then((response) => setDataCode(response.data))
         .catch((error) => console.error(error));
    }, []);


  const [isStorageUpdated, setIsStorageUpdated] = useState(false);
  
    useEffect(() => {
      // Store Value data in localStorage
      localStorage.setItem("ContribuableSelectedValidationAssujetissementData", JSON.stringify(ContribuableData ));
      // Reset the dummy state to trigger rerender
      console.log(ContribuableData)
       setIsStorageUpdated(false);
    }, [ContribuableData , isStorageUpdated]);
    

    const handleButtonClick = () => {            
      //Trigger a rerender by updating the dummy state
       
      setIsStorageUpdated(true);
  
      // Use the selectedOption to determine the route to navigate to
      const routeToNavigate = "/saisirmotifrejet";
  
      // Use navigate to navigate to the determined route
      navigate(routeToNavigate, { state: { ContribuableData } });
  };


// data selected associe table 
const [selectedRowIndexAssocie, setSelectedRowIndexAssocie] = useState(null);
const [DataSelectedAssocie , setDataSelectedAssocie] = useState([]);


const [isStorageUpdatedAssocie, setIsStorageUpdatedAssocie] = useState(false);

  useEffect(() => {
     console.log(DataSelectedAssocie)
     setIsStorageUpdatedAssocie(false);
  }, [DataSelectedAssocie, isStorageUpdatedAssocie]);
  
  const handleSelectedDataTableAssocie = (rowIndex : key) =>{
    setSelectedRowIndexAssocie(rowIndex);
    const selectedRowDataAssocie= actionnaire[rowIndex] ;
    setDataSelectedAssocie(selectedRowDataAssocie);
    console.log("selected :",DataSelectedAssocie);
    setAdd(true);
    }
    
// data selected Etablissement  table 
const [selectedRowIndexEtablissement, setSelectedRowIndexEtablissement] = useState(null);
const [DataSelectedEtablisement, setDataSelectedEtablissment] = useState([]);


const [isStorageUpdatedEtablissement, setIsStorageUpdatedEtablissement] = useState(false);

  useEffect(() => {
     console.log(DataSelectedEtablisement)
     setIsStorageUpdatedEtablissement(false);
  }, [DataSelectedEtablisement, isStorageUpdatedEtablissement]);
  
  const handleSelectedDataTableEtablissment= (rowIndex : key) =>{
    setSelectedRowIndexEtablissement(rowIndex);
    const selectedRowDataEtablissment= etablissement[rowIndex] ;
    setDataSelectedEtablissment(selectedRowDataEtablissment);
    console.log("selected :",DataSelectedEtablisement);
    setAdd(true);
    }
    
// data selected Dirigeant  table 
const [selectedRowIndexDirigeant, setSelectedRowIndexDirigeant] = useState(null);
const [DataSelectedDirigeant, setDataSelectedDirigeant] = useState([]);


const [isStorageUpdatedDirigeant, setIsStorageUpdatedDirigeant] = useState(false);

  useEffect(() => {
     console.log(DataSelectedDirigeant)
     setIsStorageUpdatedDirigeant(false);
  }, [DataSelectedDirigeant, isStorageUpdatedDirigeant]);
  
  const handleSelectedDataTableDirigeant= (rowIndex : key) =>{
    setSelectedRowIndexDirigeant(rowIndex);
    const selectedRowDataDirigeant= dirigeant[rowIndex] ;
    setDataSelectedDirigeant(selectedRowDataDirigeant);
    console.log("selected :",DataSelectedDirigeant);
    setAdd(true);
    }
    

  // Modification Contribuable
  
  //Modification Renseignement Général
  const HandleRenseignementGeneralModifie = async () =>{
   
if (ContribuableData){

  const RenseignementGeneral = {
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
   "reference_fiscal" : ContribuableData.reference_fiscal
  }

  try {
    // Make a POST request to your server endpoint
    const response = await axios.put(`http://localhost:3500/contribuable`, RenseignementGeneral);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
    alert("contribuable Modifié")
   
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert("erreur contribuable")
  }
  }

  }
  const HandleModificationContribuable = async () => {
  
 
//Modofication activité 
 
if(activite){

  const Activite = {    
    "id_contribuable": ContribuableData.id ,
    "activite": activite.activite ,
    "precision_activite": activite.precision_activite,
    "statistique" : activite.statistique,
    "numero_statistique": activite.numero_statistique,
    "date_delivrance_statistique": activite.date_delivrance_statistique,
    "registre_commerce": activite.registre_commerce,
    "date_registre_commerce": activite.date_registre_commerce,
    "debut_exercice": activite.debut_exercice,
    "cloture_exercice": activite.cloture_exercice,
    "nif": activite.nif,
    "nombre_salarie": activite.nombre_salarie

  }
try {
  // Make a POST request to your server endpoint
  const response = await axios.put("http://localhost:3500/activite", Activite);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 alert("Activité Modifié")
} catch (error) {
  // Handle errors
  console.error("Error:", error);
  alert("Erreur activité")
}

}

// Modification siege 
if(siege){
  const DataSiege = {
    "id_contribuable": ContribuableData.id ,
    "adresse_actuel" : siege.adresse_actuel,
    "fokontany": siege.fokontany ,
    "commune": siege.commune,
    "district": siege.district,
    "region": siege.region ,
    "province": siege.province,
    
  }
  try {
    // Make a POST request to your server endpoint
    const response = await axios.put("http://localhost:3500/siege", DataSiege);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   alert("Siège Modifié")
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert("Error Siège")
  }
  }
  
// Modification Actionnaire 
if(actionnaire){

  const DataActionnaire = {
    "id_contribuable": ContribuableData.id ,
    "action_ou_actionnaire" : actionnaire.action_ou_actionnaire,
    "adresse_actionnaire": actionnaire.adresse_actionnaire,
    "associe_unique_actionnaire": actionnaire.associe_unique_actionnaire,
    "cin_passeport_actionnaire": actionnaire.cin_passeport_actionnaire,
    "email_actionnaire": actionnaire.email_actionnaire ,
    "fonction_actionaire": actionnaire.fonction_actionnaire,
    "id": actionnaire.id,
    "nif_actionnaire": actionnaire.nif_actionnaire,
    "nom_actionnaire": actionnaire.nom_actionnaire,
    "numero_actionnaire": actionnaire.numero_actionnaire ,
    "resident_actionnaire": actionnaire.resident_actionnaire,
    "type": actionnaire.type 
    
  }
  try {

    // Make a POST request to your server endpoint
    const response = await axios.put(`http://localhost:3500/actionnaire/${actionnaire.id}`, DataActionnaire);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   alert("Associé Modifié")
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert("Error Siège")
  }
  }
  


} 


  // Partie sur le contribualble à modifier et à valider sur l'interface
  
    const contentCard = (
        <div className="m-4 mb-4">
       
        <div className="text-white bg-[#959824] py-3 px-4 rounded  text-3xl  font-semibold  "> Validation des demandes du contribuable  : {ContribuableData?ContribuableData.id:""}</div>
<div className="flex flex-col">
<div className="flex items-center justify-center p-2">
  <div className="flex flex-col">

  <div className="flex flex-col  ">
<div className="p-2 mx-4">
<h1 className=" text-2xl font-semibold">Modifications des renseignements permanents</h1>
<div className="py-1">1. CLiquer sur l'entête de chaque groupe</div>
<div className="py-1">2. Effectuer les modifications possibles</div>
<div className="py-1">3. Validation du Contribuable </div>
  </div>
  <div onClick={()=>setBool({...bool , Principaux_renseignement:true})} className=" w-full bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <HiOutlineInformationCircle className="text-xl mx-2 font-semibold"></HiOutlineInformationCircle>
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
  <div  onClick={()=>setBool({...bool , activite:true })} className="w-full bg-white  py-3 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <ImStatsDots className="text-xl mx-2"></ImStatsDots>
  Activités
  </div>
  { bool.activite === true && (
    <div className="flex justify-center">
      <div className="flex flex-col bg-gray-200 p-4">
      <div className="flex justify-between mt-6">
            <Label text="Activités " />
            <Input type="text" 
          value={activite.activite}
          onChange={e => 
            setContribuableData({
              ...ContribuableData,
              activite: {
                ...ContribuableData.activite,  
                activite: e.target.value  
              }
            })
          }     />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text" 
           value={activite.precision_activite}
           onChange={e => 
            setContribuableData({
              ...ContribuableData,
              activite: {
                ...ContribuableData.activite,  
                precision_activite: e.target.value  
              }
            })
          }
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro d'identification Fiscal"></Label>
      <Input
        type="text" 
           value={activite.nif }
           onChange={e => 
            setContribuableData({
              ...ContribuableData,
              activite: {
                ...ContribuableData.activite,  
                nif: e.target.value  
              }
            })
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
        value={activite.numero_statistique}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            activite: {
              ...ContribuableData.activite,  
             numero_statique: e.target.value  
            }
          })
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
        value={activite.date_delivrance_statistique }
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            activite: {
              ...ContribuableData.activite,  
              date_delivrance_statistique : e.target.value  
            }
          })
        } 
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"
         value={activite.registre_commerce}
         onChange={e => 
          setContribuableData({
            ...ContribuableData,
            activite: {
              ...ContribuableData.activite,  
              registre_commerce: e.target.value  
            }
          })
        } 
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"  
         value={activite.date_registre_commerce}
         onChange={e => 
          setContribuableData({
            ...ContribuableData,
            activite: {
              ...ContribuableData.activite,  
              date_registre_commerce: e.target.value  
            }
          })
        }  
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"
         value={activite.debut_exercice}
         onChange={e => 
          setContribuableData({
            ...ContribuableData,
            activite: {
              ...ContribuableData.activite,  
              debut_exercice: e.target.value  
            }
          })
        }
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date" 
             value={activite.cloture_exercice }
             onChange={e => 
              setContribuableData({
                ...ContribuableData,
                activite: {
                  ...ContribuableData.activite,  
                  cloture_exercice: e.target.value  
                }
              })
            }
            />
          </div>
     
          <div className="flex justify-between mt-6">
            <Label text="Nombre salarié" />
            <Input type="text"
            value={activite?activite.nombre_salarie : ""}
            onChange={e => 
              setContribuableData({
                ...ContribuableData,
                activite: {
                  ...ContribuableData.activite,  
                  nombre_salarie: e.target.value  
                }
              })
            }
             />
          </div>
          <button onClick={()=> setBool({...bool , activite: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
   
      </div>
          </div>
  )

  }
  <div onClick={()=> setBool({...bool , siege: true})} className=" bg-white w-full py-3 px-4  flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer  ">
  <FaUniversity className="text-xl  mx-2"></FaUniversity>
  Siège
  </div>
  { bool.siege === true && (
    <div className=" flex justify-center ">
    <div className="flex flex-col bg-gray-200 p-4  w-[620px] ">
    <div className="flex justify-between  mt-6">
            <Label text="Adresse actuelle (siège) " />
            <Input type="text" 
            value={siege?siege.adresse_actuel : ""}
            onChange={e => 
              setContribuableData({
                ...ContribuableData,
                siege: {
                  ...ContribuableData.siege,  
                  adresse_actuel: e.target.value  
                }
              })
            }
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Fokontany"></Label>
      <Input
        type="text"    
        value={ siege ? siege.fokontany : ""}
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
        value={siege ? siege.commune : ""}
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
        value={siege? siege.district : ""}
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
        value={siege ? siege.region : ""}
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
        value={siege ? siege.province : ""}
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
    <button onClick={()=> setBool({...bool , siege: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
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
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , adresse_actionnaire : e.targte.value})}
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
              onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , action_ou_actionniare : e.target.value})}
              ></Input>
            </div>
            </>
          )

          }
          <div className="flex justify-center mt-6">
          <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
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
selectedRowIndex={selectedRowIndexAssocie}
></Table>
</div>
<div className="flex justify-center mt-6 mb-6">
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
<button onClick={()=> setBool({...bool , associe: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
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
      <Label text="Titre "></Label>
      <Input type="text"
      value={DataSelectedEtablisement? DataSelectedEtablisement.titre : ""}
      onChange={(e)=>setDataSelectedEtablissment({...DataSelectedEtablisement , titre : e.target.value})}
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
      <Input type="text"
      value={DataSelectedEtablisement?DataSelectedEtablisement.fokontany : ""}
      onChange={(e)=>setDataSelectedEtablissment({...DataSelectedEtablisement , fokonatny : e.target.value })}
      ></Input>
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
      <Label text="Téléphone 1  "></Label>
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
          <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
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
        <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
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
             value={interlocuteur.nom_interlocuteur}
             onChange={e => 
               setContribuableData({
                 ...ContribuableData,
                 interlocuteur: {
                   ...ContribuableData.interlocuteur,  
                   nom_interlocuteur: e.target.value  
                 }
               })
             } />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Titre"></Label>
      <Input
        type="text"
        value={interlocuteur.titre_interlocuteur}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            interlocuteur: {
              ...ContribuableData.interlocuteur,  
              titre_interlocuteur: e.target.value  
            }
          })
        }   ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Adresse  "></Label>
      <Input
        type="text" 
        value={interlocuteur.adresse_interlocuteur}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            interlocuteur: {
              ...ContribuableData.interlocuteur,  
              adresse_interlocuteur: e.target.value  
            }
          })
        }       
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Téléphone "></Label>
      <Input
        type="text" 
        value={interlocuteur.telephone_interlocuteur}onChange={e => 
          setContribuableData({
            ...ContribuableData,
            interlocuteur: {
              ...ContribuableData.interlocuteur,  
              telephone_interlocuteur: e.target.value  
            }
          })
        }   ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="E-mail"></Label>
      <Input
        type="text"
        value={ interlocuteur.email_interlocuteur}
        onChange={e => 
          setContribuableData({
            ...ContribuableData,
            interlocuteur: {
              ...ContribuableData.interlocuteur,  
              email_interlocuteur: e.target.value  
            }
          })
        } 
      ></Input>
    </div>
    <div className="flex justify-center mt-6">
        <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Modifier</button>
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

<>
 <div onClick={()=> setBool({...bool , autre: true})} className="bg-white  py-3  px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <MdOutlineCached  className="text-xl mx-2"></MdOutlineCached >
  Autre
  </div>
  { bool.autre === true && (
   <div className="bg-gray-200  p-4">

<div className="flex justify-center w-full h-full ">
      <div className="flex flex-col w-[500px]">
                <div className="flex justify-between mt-6">
            <Label text="M'envoyer par e-mail les informations saisies " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui" onChange={(checked)=>setContribuableData({ ...ContribuableData , autre:{...ContribuableData.autre , information_mail : checked}})} checked={autre.information_mail == true }></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>setContribuableData({ ...ContribuableData , autre:{...ContribuableData.autre , information_mail : !checked}})} checked={autre.information_mail == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Votre exerice dépasse t-il 12 mois ? " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui(18 mois)" onChange={(checked)=>setContribuableData({ ...ContribuableData , autre: {...ContribuableData.autre , depassement_12_mois : checked}})} checked={autre.depassement_12_mois == true}></Checkbox>
    <Checkbox label="Non(12 mois)" onChange={(checked)=>setContribuableData({ ...ContribuableData , autre: {...ContribuableData.autre , depassement_12_mois : !checked}})} checked={autre.depassement_12_mois == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Je certifie que ces renseignements sont complets et exacts " />
      <div className="flex justify-between w-[300px]">
    
    <Checkbox onChange={(checked)=>setContribuableData({ ...ContribuableData , autre: {...ContribuableData.autre , certification : checked}})} checked={autre ? autre.certification : "" }></Checkbox>
    </div>
    </div>

        
       
      </div>
      </div>
    <div className="flex justify-center mt-6">
        <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Modifier</button>
        <button onClick={()=> setBool({...bool , autre : false})}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/>Fermer</button>
        </div>
    
    </div>
  )

  }

 </>


</div>
  </div>
</div>

<div className="flex flex-col bg-gray-200 mt-4 rounded h-[1200px] p-4">
<div className="flex flex-row">

<Label text={`régime d'imposition :`} className="ml-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Imposition" className="mt-4"></Label>
<Select 
 options={DataCode.map((item) => ({
  value: item.libelle,
  label: item.libelle,
}))}

 value={Assujetissement.imposition} onChange={(options)=>{setAssujetissement({...Assujetissement , imposition : options })}} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date début" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_debut}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_debut : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date fin" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_fin}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_fin : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Périodicité" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.periodicite}
onChange={(e)=>{setAssujetissement({...Assujetissement , periodicite : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Année" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.annee}
onChange={(e)=>{setAssujetissement({...Assujetissement , annee : e.target.value})}}
></Input>
</div>

<div className="mt-6 flex flex-row justify-between ">
<Label text="Exonoré" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Oui" checked={Assujetissement.exonere === true} onChange={(checked)=>{setAssujetissement({...Assujetissement , exonere : checked })}}></Checkbox>
<Checkbox label="Non" checked={Assujetissement.exonere === false} onChange={(checked)=>{setAssujetissement({...Assujetissement , exonere : ! checked })}} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 1" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.period_1}
onChange={(e)=>{setAssujetissement({...Assujetissement , period_1 : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Période 2" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Assujetissement.period_2}
onChange={(e)=>{setAssujetissement({...Assujetissement , period_2 : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Etat" className="mt-4"></Label>
<div className="flex justify-between">
<Checkbox label="Création" checked={Assujetissement.etat === "Création"} onChange={()=>{setAssujetissement({...Assujetissement , etat : "Création" })}}></Checkbox>
<Checkbox label="Rénouvellement" checked={Assujetissement.etat === "Rénouvellement"} onChange={()=>{setAssujetissement({...Assujetissement , etat : "Rénouvellement" })}} className="ml-4"></Checkbox>
</div>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date exe" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_exe}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_exe : e.target.value})}}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Date assujestissement" className="mt-4"></Label>
<Input type="date" className="w-96  "
value={Assujetissement.date_assujetissement}
onChange={(e)=>{setAssujetissement({...Assujetissement , date_assujetissement: e.target.value})}}
></Input>
</div>
<button onClick={handleButtonClickSave} className=" mt-6 w-40 -border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
<div className="w-[750px] mt-6 overflow-y-auto h-[400px]">
  <Table
headers={headers}
data={data}
></Table>
</div>
</div>

<div className="flex flex-col bg-gray-200 mt-4 rounded h-[220px] p-4">
<Label text={`Coordonnées géographique :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Longitude" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={Coordonnees.longitude}
onChange={(e)=> setCoordonnees({...Coordonnees , longitude : e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Laltitude" className="mt-4"></Label>
<Input type="text" className="w-96  "

value={Coordonnees.latitude}
onChange={(e)=> setCoordonnees({...Coordonnees , latitude : e.target.value })}
></Input>
</div>

</div>

<div className="flex justify-between mt-4">
<Button text="Valider" onClick={HandleClick}></Button>
<Button text="Modifier" onClick={HandleModificationContribuable}></Button>
<Button text="Rejeter " onClick={handleButtonClick}></Button>
</div>
{/* /saisirmotifrejet */}
</div>
  
    </div>


  )
  return (
  <MainLayout>
  <div className="  overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[7000px]"></Card>
  </div>
      </MainLayout>
  )
  }
  
export default Assujetissement