import { RiArrowGoBackFill, RiSubtractFill } from "react-icons/ri";
import Button from "../../components/common/Button";
import Checkbox from "../../components/common/checkbox";
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import Table from "../../components/table/table";
import { Layout } from "./Layout";
import { AiOutlineSave } from "react-icons/ai";
import { MdOutlineZoomInMap, MdZoomOutMap } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { TitleH1, TitleH3 } from "../../components/title";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Etablissement() {
  const location = useLocation(); 
    // const [value , setValue] = useState<{
    //   personne_physique:boolean,
    //   personne_morale:boolean,
    //   personne_etrangere:boolean,
    //   associe_unique:boolean,
    //   resident:boolean,
    //   avec_rf: boolean,
    //   salarie : boolean,
    //   aucune : boolean
    // }>({
    //   personne_physique:false,
    //   personne_morale:false,
    //   personne_etrangere:false,
    //   associe_unique:false,
    //   resident: true ,
    //   avec_rf: false,
    //   salarie: false,
    //   aucune : false
    // })
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
            <TitleH3 text="Etape 5:" className="mt-2"></TitleH3>
          <TitleH1 text="Principaux renseignements sur l'établissement / Lieu d'exploitation" className="ml-2"></TitleH1>
          </div>
          <TitleH3 text="Procéder comme suit:" className="mt-2"></TitleH3>
          { add === true && ( 
            <div>
  
  
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
            <Button label="Précédent" onClick={()=>window.location.href = "/Associe"}></Button>
          </div>
          <div className="w-40">
            <Button label="Suivant" onClick={()=>window.location.href = "/Dirigeant"}></Button>
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
export default Etablissement