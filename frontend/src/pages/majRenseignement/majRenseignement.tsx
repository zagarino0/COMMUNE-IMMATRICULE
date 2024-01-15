
import {HiOutlineInformationCircle} from "react-icons/hi"
import {ImStatsDots} from "react-icons/im"
import {FaUniversity} from "react-icons/fa"
import {BiBody} from "react-icons/bi"
import {MdOutlineZoomInMap, MdPermIdentity, MdZoomOutMap} from "react-icons/md"
import {IoIosPerson} from "react-icons/io"
import Layout from "./Layout"
import { useLocation } from "react-router-dom"
import { AiFillCar, AiOutlineSave } from "react-icons/ai"
import { useState } from "react"
import Input from "../../components/inputs"
import { Label } from "../../components/label/label"
import Checkbox from "../../components/common/checkbox"
import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri"
import Table from "../../components/table/table"
import { IoAdd, IoSettingsOutline } from "react-icons/io5"
import Select from "../../components/inputs/selectInput"

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
const [selectedOption, setSelectedOption] = useState(true);
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

const HandlePersonePhysique  = (checked:boolean) => {  
  setValue({
    ...value,
    personne_physique: checked,
  });
};
const HandlePersoneMorale  = (checked:boolean) => {  
  setValue({
    ...value,
    personne_morale: checked,
  });
};
const HandlePersoneEtrangere = (checked:boolean) => {  
  setValue({
    ...value,
    personne_etrangere: checked,
  });
};

const userContribuableData = localStorage.getItem("userContribuableData");
const ContribuableData  = JSON.parse(userContribuableData as string);
const Activite  = ContribuableData.activite


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
  <div onClick={()=>setBool({...bool , Principaux_renseignement:true})} className=" w-full bg-white  py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <HiOutlineInformationCircle className="text-xl mx-2 font-semibold"></HiOutlineInformationCircle>
  Principaux renseignements
  </div>
  { bool.Principaux_renseignement === true && (
<div className="flex justify-enter ml-16">
<div className=" flex flex-col ">
        <div className="flex justify-between mt-6">
          <Label text="Nom et Prénoms ou Raison Social" />
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
      onChange={() => setSelectedOption(true)}
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="Personne morale"
      className='mr-2'
      checked={ContribuableData.type === "Personne morale"}
      onChange={() => setSelectedOption(false)}
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
      value={ContribuableData ? ContribuableData.situationmatrimoinial : ""}     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Sexe "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Masculin" checked={ContribuableData.sexe === "Masculin"} onChange={()=>window} ></Checkbox>
    <Checkbox label="Feminin" checked={ContribuableData.sexe === "Feminin"} onChange={()=>window} ></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Etranger "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" checked={ContribuableData.etranger === true} onChange={()=>window} ></Checkbox>
    <Checkbox label="Non" onChange={()=> window } checked={ContribuableData.etranger === false}></Checkbox>
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
      value={ContribuableData?ContribuableData.datedelivrancecin : ""}
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance"></Label>
    <Input
      type="text"
       value={ContribuableData?ContribuableData.lieudelivrancecin : ""}     
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
      type="date" 
      value={ContribuableData?ContribuableData.numero_passport : ""}
    ></Input>
  </div>
    <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date" 
      value={ContribuableData?ContribuableData.datedelivrancepasseport: ""}
    ></Input>
  </div>
 
    </>
  )

  }
  <div className='flex justify-between mt-6 '>
    <Label text="Date naissance"></Label>
    <Input
      type="date" 
       value={ContribuableData?ContribuableData.datenaissance : ""}    
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance "></Label>
    <Input
      type="text" 
      value={ContribuableData? ContribuableData.lieunaissance : ""}    
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
          value={ContribuableData? ContribuableData.regimefiscal : ""}
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
    <Checkbox label="Disponible" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Pas encore" onChange={()=>window} checked></Checkbox>
    </div>
    
  </div>
  <div className="flex justify-between mt-6">
          <Label text="Numéro compte bancaire" />
          <Input type="text"
          value={ContribuableData? ContribuableData.numero_compte_bancaire : ""}
          />
        </div>
        <button onClick={()=> setBool({...bool , Principaux_renseignement: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
    </div>
</div>
  )

  }
  <div  onClick={()=>setBool({...bool , activite:true })} className="w-full bg-white  py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer ">
  <ImStatsDots className="text-xl mx-2"></ImStatsDots>
  Activités
  </div>
  { bool.activite === true && (
    <div className="flex justify-center">
      <div className="flex flex-col">
      <div className="flex justify-between mt-6">
            <Label text="Activités " />
            <Input type="text" 
            value={Activite ? Activite[0].activite : ""}

            />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text" 
        value={Activite?Activite[0].precision_activite : ""}    
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Numéro statistique "></Label>
      <div className="flex flex-col">
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Disponible" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Pas encore Disponible" onChange={()=>window} checked></Checkbox>
      </div>
      <Input
        type="text"
        value={Activite?Activite[0].numero_statistique : ""}
        className="mt-2"     
      ></Input>
      </div>
    </div>
  
    <div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance statistique "></Label>
      <Input
        type="date"
        value={Activite?Activite[0].date_delivrance_statistique : ""}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"
         value={Activite?Activite[0].registre_commerce : ""}     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"  
        value={Activite?Activite[0].date_registre_commerce : ""}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"
        value={Activite?Activite[0].date_debut : ""}
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date" 
            value={Activite ? Activite[0].date : ""}
            />
          </div>
                  <div className='flex justify-between mt-6 '>
      <Label text="Importateur "></Label>
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
      </div>
      
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Exportateur "></Label>
      <div className="flex justify-between w-[300px]">
      <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
      </div>
      
    </div>
          <div className="flex justify-between mt-6">
            <Label text="Nombre salarié" />
            <Input type="text"
            value={Activite?Activite[0].nombre_salarie : ""}
             />
          </div>
          <button onClick={()=> setBool({...bool , activite: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
   
      </div>
          </div>
  )

  }
  <div onClick={()=> setBool({...bool , siege: true})} className=" bg-white w-full py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer  ">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Siège
  </div>
  { bool.siege === true && (
    <div className=" flex justify-center">
    <div className="flex flex-col">
    <div className="flex justify-between mt-6">
            <Label text="Adresse actuelle (siège) " />
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Fokontany"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Commune "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="District "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Région"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Province "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <button onClick={()=> setBool({...bool , siege: false})}  className="border-[2px] mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
    </div>
    </div>
    </div>
  )
  }
  <div onClick={()=>setBool({...bool , associe:true })} className=" bg-white  py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <BiBody className="text-xl mx-2"></BiBody>
  Associé
  </div>
  { bool.associe === true && (
    <div className="flex justify-center  p-4">
      <div className="flex flex-col" >
      { add === true && ( 
            <div className=" flex justify-center">
 <div className="flex flex-col">
 <div className='flex justify-between mt-6 '>
    <Label text="Type d'associés / Actionnaires"></Label>
    <div className="flex justify-between ">
    <Checkbox label="Personne physique" onChange={HandlePersonePhysique} checked={value.personne_physique}></Checkbox>
    <Checkbox label="Personne morale" onChange={HandlePersoneMorale} checked={value.personne_morale}></Checkbox>
    <Checkbox label="Personne morale etrangère/Etat" onChange={HandlePersoneEtrangere} checked={value.personne_etrangere}></Checkbox>
    </div>
  </div>
  {value.personne_physique===true && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fonction"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Resident  " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setValue({ ...value , resident: true})} checked={value.resident == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setValue({...value , resident: false})} checked={value.resident == false}></Checkbox>
    </div>
    </div>
    { value.resident == true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"></Input>
      </div>
      </>
    )

    }
    { value.resident == false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"></Input>
      </div>
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={(checked:boolean)=> setValue({...value , avec_rf : checked})} checked={value.avec_rf} ></Checkbox>
    <Checkbox label="Salarié" onChange={(checked:boolean)=>setValue({...value , salarie: checked})} checked={value.salarie}></Checkbox>
    <Checkbox label="Aucune " onChange={(checked: boolean)=> setValue({...value , aucune: checked})} checked={value.aucune}></Checkbox>
    </div>
    </div>
    { value.avec_rf === true && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"></Input>
    </div>  
      </>
    )

    }
    <div className="flex justify-between mt-6">
      <Label text="E-mail"></Label>
      <Input type="email"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Telephone"></Label>
      <Input type="number"></Input>
    </div>
    </>
  )}
  { value.personne_etrangere === true && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse"></Label>
      <Input type="text"></Input>
    </div>
    </>
  )

  }
   { value.personne_morale === true && (
    <>
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"></Input>
    </div>
    
    </>
  )

  }
              <div className="flex justify-between mt-6">
            <Label text="Associé unique" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>{setValue({...value , associe_unique : true })}} checked={value.associe_unique == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>{setValue({...value , associe_unique : false })}} checked={value.associe_unique == false}></Checkbox>
    </div>
          </div>
          { value.associe_unique === true && (
            <>
            <div className="flex justify-between mt-6">
            <Label text="% Action ou" />
              <Input type="text" ></Input>
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
  
  <div className="flex justify-center ml-40" >
   <div className="flex flex-col">
   
    <div className="w-[800px] mt-6 overflow-y-auto h-96">
  <Table

headers={headers}
data={data}
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
  <div onClick={()=> setBool({...bool , etablissement: true})} className=" bg-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <FaUniversity className="text-xl mx-2"></FaUniversity>
  Etablissement
  </div>
  { bool.etablissement === true && (
    <div className="flex justify-center p-4">
     <div className="flex flex-col">
     { add === true && ( 
            <div className="p-4">
  
  
    <>
    <div className="flex justify-between mt-6">
      <Label text="Nom commercial"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Activité"></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Titre "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Date Ouverture "></Label>
      <Input type="date"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Adresse  / Lot "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fokontany "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Province "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Région  "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="District  "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Commune "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Téléphone 1  "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Autre Téléphone "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="Fax "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
      <Label text="E-mail "></Label>
      <Input type="text"></Input>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Exportateur " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
    </div>
    </div>
   <div className="flex justify-between mt-6">
            <Label text="Importateur " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Propriétaire du local" />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
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
  
  <div className="flex justify-center p-4 ml-96" >
   
   <div className="flex flex-col">
   <div className=" mt-6 overflow-y-auto h-60">
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
<button onClick={()=> setBool({...bool , etablissement: false})}  className="border-[2px] ml-40 mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
   </div>
</div>
)} 
     </div>
    </div>
  )
  }
  <div onClick={()=> setBool({...bool , dirigeant: true})} className="bg-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <MdPermIdentity className="text-xl mx-2"></MdPermIdentity>
  Dirigant
  </div>
  { bool.dirigeant=== true && (
    <div>
    { add === true && ( 
          <div>


  <>
  <div className="flex justify-between mt-6">
    <Label text="Nom "></Label>
    <Input type="text"></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Fonction"></Label>
    <Input type="text"></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Etranger " />
      <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>setValue({ ...value , resident: true})} checked={value.resident == true}></Checkbox>
    <Checkbox label="Non" onChange={()=>setValue({...value , resident: false})} checked={value.resident == false}></Checkbox>
    </div>
    </div>
    { value.resident == false && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numero CIN"></Label>
<Input type="text"></Input>
      </div>
      </>
    )

    }
    { value.resident == true && (
      <>
      <div className="flex justify-between mt-6">
<Label text="Numéro Passeport ou Carte Résident"></Label>
<Input type="text"></Input>
      </div>
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Adresse  "></Label>
    <Input type="text"></Input>
  </div>
  <div className="flex justify-between mt-6">
            <Label text="Autre activité " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Avec RF" onChange={(checked:boolean)=> setValue({...value , avec_rf : checked})} checked={value.avec_rf} ></Checkbox>
    <Checkbox label="Salarié" onChange={(checked:boolean)=>setValue({...value , salarie: checked})} checked={value.salarie}></Checkbox>
    <Checkbox label="Aucune " onChange={(checked: boolean)=> setValue({...value , aucune: checked})} checked={value.aucune}></Checkbox>
    </div>
    </div>
    { value.avec_rf === true && (
      <> 
    <div className="flex justify-between mt-6">
      <Label text="RF"></Label>
      <Input type="text"></Input>
    </div>  
      </>
    )

    }
  <div className="flex justify-between mt-6">
    <Label text="Email "></Label>
    <Input type="text"></Input>
  </div>
  <div className="flex justify-between mt-6">
    <Label text="Telephone "></Label>
    <Input type="text"></Input>
  </div>
   
  
  </>

  
        
        <div className="flex justify-center mt-6">
        <button className="border-[2px] p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><AiOutlineSave className="text-2xl mr-2"></AiOutlineSave> Sauver</button>
        <button onClick={()=> setAdd(false)}  className="border-[2px] ml-4 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Annuler</button>
        </div>
          </div>
         )}
        
{ add === false  && (

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
<button onClick={()=> setBool({...bool , dirigeant: false})}  className="border-[2px]  mt-6 mb-6 w-40 p-2 border-black rounded hover:bg-black/70 hover:text-white flex flex-row"><RiArrowGoBackFill  className="text-2xl mr-2"/> Fermer</button>
</div>
)} 
    </div>
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
  <div onClick={()=> setBool({...bool , interlocuteur: true})} className="bg-white  py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <IoIosPerson className="text-xl mx-2"></IoIosPerson>
  Interlocuteur
  </div>
  { bool.interlocuteur === true && (
    <div className="flex justify-center p-4">
      <div className="flex flex-col">
      <div className="flex justify-between mt-6">
            <Label text="Nom " />
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Titre"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
   
    <div className='flex justify-between mt-6 '>
      <Label text="Adresse  "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Téléphone "></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="E-mail"></Label>
      <Input
        type="text"     
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