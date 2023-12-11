import { MdOutlineZoomInMap, MdZoomOutMap } from "react-icons/md";
import Button from "../../components/common/Button";
import { Layout } from "./Layout";
import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import Table from "../../components/table/table";
import { Label } from "../../components/label/label";
import { AiOutlineSave } from "react-icons/ai";
import Checkbox from "../../components/common/checkbox";
import Input from "../../components/inputs";
import { TitleH1, TitleH3 } from "../../components/title";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Dirigeant() {
  const location = useLocation(); 
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
  const [add , setAdd] = useState(false);
  const headers = ["Type association", "Nom association", "Fonction", "Résident", "N° CIN", "N° Passport", "Autra act.", "RF Pers. moral", "Nom Pers.physique", "Adresse", "Associe", "Action en"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
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
  const content = (
    
    <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 6:" className="mt-2"></TitleH3>
        <TitleH1 text="Renseignements sur le ou les dirigeants de la société" className="ml-2"></TitleH1>
        </div>
        <TitleH3 text="Procéder comme suit:" className="mt-2"></TitleH3>
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
  <div className="mt-6">
        <Label text={`1.Cliquer sur le bouton "Nouveau" en bas du tableau `}  className="mt-2"/>
        <Label text="2.Remplir le formulaire " className="mt-2" />
        <Label text={`3.Cliquer sur "Ajouter dans la liste"`} className="mt-2" />
        </div>
        
  <div className="w-[1000px] mt-6 overflow-y-auto h-96">
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
</div>
)} 
<div className="flex justify-between mt-6">
       <div className="w-40">
          <Button label="Précédent" onClick={()=>window.location.href = "/Etablissement"}></Button>
        </div>
        <div className="w-40">
          <Button label="Suivant" onClick={()=>window.location.href = "/Interlocuteur"}></Button>
        </div>
       </div>
</div>



 
      
      </div>
    
  );
  

return (
<div className=" w-full h-full bg-gray-200 ">
    <Layout children={content} currentPath={location.pathname}></Layout>
    </div>
  )
}

export default Dirigeant