
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
import { IoAdd } from "react-icons/io5"

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
  aucune : boolean
}>({
  personne_physique:false,
  personne_morale:false,
  personne_etrangere:false,
  associe_unique:false,
  resident: true ,
  avec_rf: false,
  salarie: false,
  aucune : false
})

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
const ContentCardInformation =(
<div className="flex items-center justify-center">
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
    <div className=" flex ">

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
            <Input type="text" />
          </div>
          
   
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Précision sur les activités "></Label>
      <Input
        type="text"     
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
        className="mt-2"     
      ></Input>
      </div>
    </div>
  
    <div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance statistique "></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Registre de commerce"></Label>
      <Input
        type="text"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Date de registre de commerce"></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Début de l'exercice comptable  "></Label>
      <Input
        type="date"     
      ></Input>
    </div>
    </div>
  
          <div className="flex justify-between mt-6">
            <Label text="Clôture de l'exercice comptable" />
            <Input type="date" />
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
            <Input type="text" />
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
    <div>

    </div>
  )
  }
  <div className="bg-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <MdPermIdentity className="text-xl mx-2"></MdPermIdentity>
  Dirigant
  </div>
  <div className="bg-white py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <AiFillCar className="text-xl mx-2"></AiFillCar>
  Vehicule
  </div>
  <div className="bg-white  py-3 mx-4 px-4 flex flex-row shadow-xl border-[1px] font-semibold cursor-pointer w-full">
  <IoIosPerson className="text-xl mx-2"></IoIosPerson>
  Interlocuteur
  </div>
  
</div>
</div>
)
  return (
    <div
    className="
    bg-neutral-800/70
    w-screen 
    h-screen
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