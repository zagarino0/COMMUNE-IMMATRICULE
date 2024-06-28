import { useEffect, useState } from "react";
import {  AiOutlineSave } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosPerson } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { RiArrowGoBackFill, RiDeleteBinLine, RiSubtractFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { BiBody } from "react-icons/bi";
import { MdDeleteOutline, MdOpenInBrowser, MdOpenInNew, MdOutlineCached, MdOutlineZoomInMap, MdPermIdentity, MdZoomOutMap } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import { BsPencil } from "react-icons/bs";
import Checkbox from "../../../components/common/checkbox";
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import Table from "../../../components/table/table";

import { MainLayout } from "../../../layouts/main";
import { Card } from "../../../components/card/card";
import Modal from "../../../components/modals/modals";
import Button from "../../../components/common/Button";

interface Assujetissement {
  id_contribuable: string,
  imposition:any,
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

interface Etablissement{
  activite: string,
  adresse: string ,
  autre_telephone : string ,
  commune : string ,
  date_ouverture : string ,
  district : string ,
  email : string,
  fax : string ,
  fokontany : string ,
  id : number,
  id_contribuable : string ,
  nom_commercial : string ,
  proprietaire_local : string ,
  province : string ,
  region : string ,
  telephone_1 : string ,
  titre : string 
}

interface Actionnaire {
  action_ou_actionnaire : string ,
  adresse_actionnaire : string ,
  associe_activite_actionnaire : boolean ,
  autre_activite_actionnaire : string ,
  email_actionnaire : string ,
  fonction_actionnaire : string ,
  id : number ,
  id_contribuable : string ,
  nif_actionnaire : string ,
  nom_actionnaire : string ,
  numero_actionnaire : string ,
  resident_actionnaire : boolean ,
  type : string  ,
  associe_unique_actionnaire : string,
  cin_passeport_actionnaire: string,
  gerant : string ,
  cin_passport_gerant : string,
  siege : string ,
}

function VoirContribuableDetailDebloque() {
  const [DataSelected , setDataSelected] = useState<any>([]);

  function generatePassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-.!@#$%^&*()<>?/";
    const length = Math.floor(Math.random() * (10 - 8 + 1)) + 8;
    let randomString = "";
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
  

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
  
  const [isModalImpot , setIsModalImpot] = useState(false)
  const [isModalAddImpot , setIsModalAddImpot] = useState(false)
  const [isModalModifie , setIsModalModifie] = useState(false)
  const [add , setAdd] = useState(false);

    
    const selectedData = localStorage.getItem("selectedRechercheConsulationDataDebloque");
 
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
    const {coordonnees} = ContribuableData ;
    const {assujetissement} = ContribuableData ;
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
      setEntries<any>((prevEntries ) => [...prevEntries, {...Assujetissement , id: newId.toString()}]);
  
      // Reset the Actionnaire state to clear the form
      setAssujetissement<any>({
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

      setDataSelected([])
       
    };
  

     // Delete the Data From the Table 
 const handleDeleteButtonClickImpot = (idToDelete: string) => {
  // Filter out the entry with the specified ID
  const updatedEntries = entries.filter((entry : any) => entry.id !== idToDelete);

  // Update the entries state with the filtered entries
  setEntries(updatedEntries);

  
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
  
    const dataAssujetissement = assujetissement ? assujetissement.map((item : any) => [
        item.id,
        item.imposition,
        item.date_debut,
        item.periodicite,
        item.annee,
      <Checkbox onChange={()=> window} checked={item.exonere}></Checkbox>,
        item.period_1,
        item.period_2,
        item.etat,
        item.date_exe,
        item.date_assujetissement,
        item.date_fin
  
    ]) : [];
  

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

 // Etablissement table 
 const Headersetablissement  = ["activité" ,"adresse" , "commune" ,"fokontany" , "district", "province" , "date ouverture", "email" , "fax", "identifiant contribuable" , "nom commercial" ,"proprietaire local" , "region" , "téléphone" , "titre" ,"supprimer" , "modifier"]
 const DataEtablissment = etablissement ? etablissement.map((item :any)=>[item.activite , item.adresse , item.commune , item.fokontany , item.district , item.province ,item.date_ouverture , item.email , item.fax , item.id_contribuable , item.nom_commercial , <Checkbox checked={item.proprietaire_local}></Checkbox> , item.region , item.telephone_1 , item.titre ,
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


 

const Periodicite = [
  "ANNUEL",
  "MENSUEL",
  "TRIMESTRIEL",
  "BIMESTRIEL",
  "SEMESTRIEL",
  "JOURNALIER"
]


// ajout donné actionnaire dans Table  actionnaire
// const AjoutDataAssocieTable = () => {

// }






    const contentCard = (
        <div className="m-4 mb-4">
       
        <div className="text-white bg-[#959824] py-3 px-4 rounded  text-3xl  font-semibold  "> Détails d'un contribuable  : {ContribuableData?ContribuableData.reference_fiscal:""}</div>
<div className="flex flex-col">
<div className="flex items-center justify-center p-2">
  <div className="flex flex-col">

  <div className="flex flex-col  ">
<div className="p-2 mx-4">
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
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="Personne morale"
      className='mr-2'
      checked={ContribuableData.type === "Personne morale"}
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
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Sexe "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Masculin" checked={ContribuableData.sexe === "Masculin"} onChange={()=>window} ></Checkbox>
    <Checkbox label="Feminin" checked={ContribuableData.sexe === "Feminin"} onChange={()=>window}></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Etranger "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" checked={ContribuableData.etranger === true} onChange={()=>window} ></Checkbox>
    <Checkbox label="Non" onChange={()=>window} checked={ContribuableData.etranger === false}></Checkbox>
    </div>
  </div>
  { ContribuableData.etranger === false && (
    <>
      <div className='flex justify-between mt-6 '>
    <Label text="CIN"></Label>
    <Input
      type="text" 
      value={ContribuableData?ContribuableData.cin : ""}
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={ContribuableData?ContribuableData.date_de_delivrance_cin : ""}
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance"></Label>
    <Input
      type="text"
       value={ContribuableData?ContribuableData.lieu_de_delivrance_cin : ""}     
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
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={ContribuableData?ContribuableData.date_de_delivrance_passeport: ""}
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
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance "></Label>
    <Input
      type="text" 
      value={ContribuableData? ContribuableData.lieu_de_naissance : ""}    
    ></Input>
  </div>
  </div>
)}
        <div className="flex justify-between mt-6">
          <Label text="Forme juridique" />
          <Input type="text" 
          value={ContribuableData?ContribuableData.forme_juridique : ""}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Régime Fiscale" />
          <Input type="text"
          value={ContribuableData? ContribuableData.regime_fiscal : ""}
        
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Création" />
          <Input type="date"
          value={ContribuableData? ContribuableData.date_creation : ""}
          />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Capital en Ar" />
          <Input type="text"
          value={ContribuableData? ContribuableData.capital : ""}
          />
        </div>
        <div className='flex justify-between mt-6 '>
    <Label text="RIB "></Label>
    <div className="flex justify-between w-[300px]">
    <Checkbox label="Disponible" onChange={()=>window} checked={ContribuableData.RIB === "Disponible"}></Checkbox>
    <Checkbox label="Pas encore" onChange={()=>window} checked={ContribuableData.RIB === "Pas encore"}></Checkbox>
    </div>
    
  </div>
  <div className="flex justify-between mt-6">
          <Label text="Compte bancaire" />
          <Input type="text"
          value={ContribuableData? ContribuableData.numero_compte_bancaire : ""}

          />
        </div>
        <div className="flex justify-between"> 
        
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
  { bool.activite === true  && (
    <div className="flex justify-center">
      <div className="flex flex-col bg-gray-200 p-4">
      <div className="flex justify-between mt-6">
            <Label text="Activités " />
            <Input type="text" 
          value={activite ?activite.activite:""}
              />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text" 
           value={activite ? activite.precision_activite: ""}
          
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro d'identification Fiscal"></Label>
      <Input
        type="text" 
           value={activite ? activite.nif: "" }
          
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro statistique "></Label>
      <div className="flex flex-col">
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Disponible" onChange={()=>window} checked={activite.statistique === true} ></Checkbox>
      <Checkbox label="Pas encore Disponible" onChange={()=>window} checked={activite.statistique === false} ></Checkbox>
      </div>
      { activite.statistique === true && (
        <Input
        type="text"
        value={activite.numero_statistique}
       
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
        value={activite ? activite.date_delivrance_statistique : ""}
       
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"
         value={activite ? activite.registre_commerce : ""}
        
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"  
         value={activite ? activite.date_registre_commerce : ""}
          
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"
         value={activite ? activite.debut_exercice : ""}
       
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date" 
             value={ activite ?activite.cloture_exercice : ""}
            
            />
          </div>
     
          <div className="flex justify-between mt-6">
            <Label text="Nombre salarié" />
            <Input type="text"
            value={activite?activite.nombre_salarie : ""}
            
             />
          </div>
<div className="flex justify-between">
<button onClick={()=> setBool({...bool , activite: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>

  </div>   
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
            
            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Fokontany"></Label>
      <Select
        options={Fokontany.map((option) => ({ value: option, label: option }))}   
        value={ siege ? siege.fokontany : ""}
        
        className=""
      />
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Commune "></Label>
      <Input
        type="text"
        value={siege.commune = "MAHAJANGA I"}
        
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="District "></Label>
      <Input
        type="text"     
        value={siege.district = "MAHAJANGA"}
        
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Région"></Label>
      <Input
        type="text"     
        value={siege.region = "BOENY"}
        
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Province "></Label>
      <Input
        type="text" 
        value={siege.province = "MAHAJANGA "}
        
      ></Input>
    </div>
    <div className="flex justify-between">      

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
    
    {/* <div className="flex justify-between mt-6">
      <Label text="Fonction"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.fonction_actionnaire : ""}
      onChange={(e)=>setDataSelectedAssocie({...DataSelectedAssocie , fonction_actionnaire : e.target.value})}
      ></Input>
    </div> */}
    {/* <div className="flex justify-between mt-6">
            <Label text="Resident  " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , resident_actionnaire : true})} checked={DataSelectedAssocie.resident_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setDataSelectedAssocie({...DataSelectedAssocie , resident_actionnaire : false})} checked={DataSelectedAssocie.resident_actionnaire === false }></Checkbox>
    </div>
    </div> */}
    {/* { DataSelectedAssocie.resident_actionnaire === true && (
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

    } */}
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
      onChange={(e: any )=> setDataSelectedAssocie({...DataSelectedAssocie , adresse_actionnaire : e.targte.value})}
      ></Input>
    </div>
    </>
  )

  }
   { DataSelectedAssocie.type === "Personne morale" && (
    <>
    {/* <div className="flex justify-between mt-6">
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
    </div> */}
    {/* <div className="flex justify-between mt-6">
      <Label text="CIN /Passport"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.cin_passport_gerant : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , cin_passport_gerant : e.target.value})}
      ></Input>
    </div> */}
    {/* <div className="flex justify-between mt-6">
      <Label text="Siege"></Label>
      <Input type="text"
      value={DataSelectedAssocie?DataSelectedAssocie.siege : ""}
      onChange={(e)=> setDataSelectedAssocie({...DataSelectedAssocie , siege : e.target.value})}
      ></Input>
    </div> */}
    </>
  )

  }
              {/* <div className="flex justify-between mt-6">
            <Label text="Associé unique" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>{setDataSelectedAssocie({...DataSelectedAssocie, associe_unique_actionnaire : true })}} checked={DataSelectedAssocie.associe_unique_actionnaire === true}></Checkbox>
    <Checkbox label="Non" onChange={()=>{setDataSelectedAssocie({...DataSelectedAssocie , associe_unique_actionnaire : false })}} checked={DataSelectedAssocie.associe_unique_actionnaire === false}></Checkbox>
    </div>
          </div> */}
          {/* { DataSelectedAssocie.associe_unique_actionnaire === true && (
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

          } */}
          {/* <div className="flex justify-center mt-6">
          <button onClick={HandleModifieActionnaire} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Enregistrer</button>
          <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
          </div> */}
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
></Table>
</div>
<div className="flex justify-center mt-6 mb-6">
<div >
            <button  onClick={()=> setAdd(true)}  className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
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
    {/* <div className="flex justify-between mt-6">
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
    
    */}
    
    </>
 
    
          
          <div className="flex justify-center mt-6">
          {/* <button onClick={HandleModifieEtablissement} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button> */}
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
// onClick={handleSelectedDataTableEtablissment}
// selectedRowIndex={selectedRowIndexEtablissement}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
            <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
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
  {/* <div className="flex justify-between mt-6">
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
  </div> */}
   
  
  </>

  
        
        <div className="flex justify-center mt-6">
        {/* <button onClick={HandleModificationDirigeant} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button> */}
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
// onClick={handleSelectedDataTableDirigeant}
// selectedRowIndex={selectedRowIndexDirigeant}
></Table>
</div>
<div className="flex justify-center mt-6">
<div >
          <button onClick={()=> setAdd(true)} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white "><MdOpenInNew></MdOpenInNew></button>
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
               
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Téléphone "></Label>
      <Input
        type="text" 
        value={interlocuteur.telephone_interlocuteur}
           ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="E-mail"></Label>
      <Input
        type="text"
        value={ interlocuteur.email_interlocuteur}
        
      ></Input>
    </div>
    <div className="flex justify-center mt-6">
        {/* <button  onClick={HandleModifieInterlocuteur} className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave>Modifier</button> */}
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
    <Checkbox label="Oui" onChange={()=> window} checked={autre.information_mail == true }></Checkbox>
    <Checkbox label="Non" onChange={()=> window} checked={autre.information_mail == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Votre exerice dépasse t-il 12 mois ? " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui(18 mois)" onChange={()=> window} checked={autre.depassement_12_mois == true}></Checkbox>
    <Checkbox label="Non(12 mois)" onChange={()=> window} checked={autre.depassement_12_mois == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Je certifie que ces renseignements sont complets et exacts " />
      <div className="flex justify-between w-[300px]">
    
    <Checkbox onChange={()=> window} checked={autre ? autre.certification : "" }></Checkbox>
    </div>
    </div>

        
       
      </div>
      </div>
    <div className="flex justify-center mt-6">
       
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
{/* <div className="mt-6 flex flex-row justify-between ">
<Label text="Imposition" className="mt-4"></Label>

 <div className="flex flex-row">
 <Input
 type="text"
 value={  Assujetissement.imposition = DataSelected.libelle   }
 />
<MdOpenInBrowser className="ml-2 text-3xl mt-1 cursor-pointer"  onClick={()=>setIsModalImpot(true)}/>
 </div>
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
<Select
  options={Periodicite.map((option) => ({ value: option, label: option }))}
  value={Assujetissement.periodicite}
  onChange={(options) => {setAssujetissement({...Assujetissement , periodicite : options})}}    
  className=""
/>
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
</div> */}
{/* <div className="flex flex-row">
<button onClick={handleButtonClickSave} className=" mt-6 w-40 -border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
<button onClick={()=> handleDeleteButtonClickImpot(EntriesSelected.id)}  className=" mt-6 w-40 -border-[2px] ml-6 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><MdDeleteOutline className="text-2xl mr-2"></MdDeleteOutline> Effacer</button>
</div> */}
<div className="  mt-6 overflow-y-auto h-[400px]">
  <Table
  // onClick={handleTableRowClickEntries}
  // selectedRowIndex={selectedRowIndexEntries}
headers={headers}
data={dataAssujetissement}
></Table>
</div>
</div>

<div className="flex flex-col bg-gray-200 mt-4 rounded h-[220px] p-4">
<Label text={`Coordonnées géographique :`} className="ml-4"></Label>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Longitude" className="mt-4"></Label>
<Input type="text" className="w-96  "
value={coordonnees.longitude}

></Input>
</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Laltitude" className="mt-4"></Label>
<Input type="text" className="w-96  "

value={coordonnees.latitude}

></Input>
</div>

</div>

{/* <div className="flex justify-between mt-4">
<Button text="Valider" onClick={HandleClick}></Button>
<Button text="Rejeter " onClick={handleButtonClick}></Button>
</div> */}
{/* /saisirmotifrejet */}
</div>


  
    </div>


  )
  //  code Impot
//   const [Impot , setImpot ] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);


//   const [ImpotValue , setImpotValue] = useState({
//     libelle : "",
//     abbreviation: ""
//   })
  
//   // get all data from backend Impot
//   useEffect(() => {
//     // Récupérer les données depuis le backend
//     axios.get('http://localhost:3500/impot/')
//       .then((response) => setImpot(response.data))
//       .catch((error) => console.error(error));
//   }, []);
 

// const handleSearch = (e:any) => {
//     setSearchTerm(e.target.value);
//   };


//   function filterImpotData(impot: any[], searchTerm: string): any[] {
//     return impot.filter((item: any) => {
//       const codeString = item.libelle.toString(); // Convert code to string
//       return typeof codeString === 'string' && codeString.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//   }
  

//   const HandleAddCodeImpot =  (e : any)  =>{
//     e.preventDefault();
    
    
//     console.log(ImpotValue)
//     try {
//        axios.post('http://localhost:3500/impot', ImpotValue)
//        .then((response) => setDataCode(response.data))
//        .catch((error) => console.error(error));
//       console.log("données ajoutées avec succès " , ImpotValue);
    
//       // Récupérer les données depuis le backend
//     axios.get('http://localhost:3500/impot/')
//     .then((response) => setImpot(response.data))
//     .catch((error) => console.error(error));
     
//     setIsModalAddImpot(false)
//      setImpotValue({
//       libelle : "",
//       abbreviation : ""
//      })
//     } catch(error){
//   console.error("erreur lors de l'ajout de donnée" , error)
//     }
      
//   }


//   const handleDelete = (code :any) => {
//     try {
//       // Make the DELETE request to your backend API to delete the data by ID
//       axios.delete(`http://localhost:3500/impot/${code}`);
  
//       // Update the list of data after successful deletion
//       setImpot((prevData) => prevData.filter((data : any) => data.code !== code));
  
//       console.log(`Data with ID ${code} deleted successfully.`);
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };
//   const [selectedEditData, setSelectedEditData] = useState(null);
//   const headerModalImpot = ["Code Impôt" , "Libellé" , "Abbrévation", "" ,""];
//   const DataImpotModal = filterImpotData(Impot, searchTerm).map((item: any) => [
//     item.code,
//     item.libelle,
//     item.abbreviation,
//     <span
//     key={item.code} // Make sure to use a unique key
//     className='cursor-pointer'
//     onClick={() => handleDelete(item.code)}
//   >
//     <RiDeleteBinLine />
//   </span>,
//     <span
//      key={`edit-${item.code}`} // Make sure to use a unique key
//      className='cursor-pointer'
//      onClick={() => {
//        setSelectedEditData(item);
//        setIsModalModifie(true)
//      }}
//    >
//      <BsPencil />
//    </span>
//   ]);
  


//   const HandleUpdateImpot = (e : any)  => {
//     e.preventDefault();
    
//     try {
//       // Make the PUT/PATCH request to update the data in the database
//        const response  =   axios.put(
//         `http://localhost:3500/impot/${selectedEditData.code}`,
//         selectedEditData
//       );
//     console.log(response)
//     setIsModalModifie(false)
//       // Récupérer les données depuis le backend
//       axios.get('http://localhost:3500/impot/')
//       .then((response) => setImpot(response.data))
//       .catch((error) => console.error(error));
//    console.log('Data updated successfully.');
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   }

//   const handleTableRowClick = (rowIndex: any) => {
//     // Check if the clicked row is already selected
//     const isSelected = rowIndex === selectedRowIndex;
  
//     // Toggle selection
//     const newSelectedRowIndex = isSelected ? null : rowIndex;
//     setSelectedRowIndex(newSelectedRowIndex);
  
//     // Extract the property values from the data object
//     const selectedRowData = isSelected ? null : Impot[rowIndex];
  
//     // Set the selected data
//     setDataSelected(selectedRowData);
//     console.log('Selected Row Data:', selectedRowData);
//   };
  

  

  return (
  <MainLayout>
  <div className="  overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[1300px] h-[8000px]"></Card>
  </div>
  {/* Modal Impot  */}
  {/* <Modal isOpen={isModalImpot} onClose={()=>{setIsModalImpot(false)}} className=" w-[1200px] mb-8 mt-8   p-6">
 <div className="flex flex-col ">
 <div className="text-white  py-3 px-4 rounded bg-[#959824] text-3xl  font-semibold  mt-2">
      Impôt
     </div>

 <div className="flex justify-center mt-6">
      <Label
      text="Impôt  "
      className="mt-2"
      ></Label>
      <Input
      type="text"
      className="ml-8"
      placeholder="Impôt"
       onChange={handleSearch}
      >
      </Input>
     </div>
    <div className="flex justify-center mt-6">
    <Table
    headers={headerModalImpot}
    data={DataImpotModal}
    
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
    >

    </Table>
    </div>
    <div className="flex justify-between mt-4">
     <Button
     text="Ajouter"
     onClick={()=>setIsModalAddImpot(true)}
     ></Button>
      <Button
     text="Choisir"
     onClick={()=>setIsModalImpot(false)}
     ></Button>
     <Button
     text="Quitter"
     onClick={()=>setIsModalImpot(false)}
     ></Button>
    </div>
 </div>
  </Modal>

  <Modal isOpen={isModalAddImpot} onClose={()=>setIsModalAddImpot(false)} className="w-[1250px]  p-6">
   <div className="flex justify-between">
   <div className="flex flex-col">
      <Label
      text="Libellé"
      className="mt-4"
        
      ></Label>
      <Label
      text="Abbrevation"
      className="mt-4"
      ></Label>
     
    </div>

    <div className="flex flex-col ">
      
      <Input
      type="text"
      className=""
       value={ImpotValue.libelle}
       onChange={(e)=>setImpotValue({...ImpotValue , libelle : e.target.value})}
      ></Input>
     <Input
      type="text"
      className=" mt-2"
      value={ImpotValue.abbreviation}
      onChange={(e)=> setImpotValue({...ImpotValue , abbreviation : e.target.value})}
      ></Input>
    </div>
   </div>
    <Button
      text="Ajouter"
      
      className=" mt-4 w-full"
       onClick={HandleAddCodeImpot }
      ></Button>
  </Modal>

  <Modal isOpen={isModalModifie} onClose={()=>setIsModalModifie(false)} className="w-[550px]  p-6">
  <div className="flex justify-between">
   <div className="flex flex-col">
      <Label
      text="Libellé"
      className="mt-4"
      
      ></Label>
      <Label
      text="Abbrevation"
      className="mt-4"
      ></Label>
     
    </div>

    <div className="flex flex-col ">
      
      <Input
      type="text"
      className=""
      value={selectedEditData ? selectedEditData.libelle : ''}
      onChange={(e) =>
        setSelectedEditData((prevData : any) => ({
          ...prevData,
          libelle: e.target.value,
        }))
      }
      ></Input>
     <Input
      type="text"
      className=" mt-2"
      value={selectedEditData ? selectedEditData.abbreviation : ''}
      onChange={(e) =>
        setSelectedEditData((prevData : any) => ({
          ...prevData,
          abbreviation: e.target.value,
        }))
      }
      ></Input>
    </div>
   </div>
    <Button
      text="Modifier"
      className=" mt-4 w-full"
      onClick={HandleUpdateImpot}
      ></Button>
  </Modal> */}
 
      </MainLayout>
  )
  }
  
export default VoirContribuableDetailDebloque