import { useLocation } from "react-router-dom";
import Button from "../../components/common/Button";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import Checkbox from "../../components/common/checkbox";
import { useState } from "react";

function Autre() {
  const location = useLocation();
  const [value , setValue] = useState<{
    envoie_email: boolean
  }>({
    envoie_email: false
  }) 
  const content = (
    <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 8:" className="mt-2"></TitleH3>
        <TitleH1 text="Confirmation des étapes" className="ml-2"></TitleH1>
        </div>
        <div className="flex justify-between mt-6">
            <Label text="M'envoyer par e-mail les informations saisies " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui" onChange={(checked)=>setValue({ ...value , envoie_email: checked})} checked={value.envoie_email }></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>setValue({...value , envoie_email: checked})} checked={value.envoie_email }></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Votre exerice dépasse t-il 12 mois ? " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui(18 mois)" onChange={(checked)=>setValue({ ...value , envoie_email: checked})} checked={value.envoie_email }></Checkbox>
    <Checkbox label="Non(12 mois)" onChange={(checked)=>setValue({...value , envoie_email: checked})} checked={value.envoie_email }></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Je certifie que ces renseignements sont complets et exacts " />
      <div className="flex justify-between w-[300px]">
    
    <Checkbox onChange={(checked)=>setValue({...value , envoie_email: checked})} checked={value.envoie_email }></Checkbox>
    </div>
    </div>

        
       <div className="flex justify-between mt-6">
       <div className="w-40">
          <Button label="Précédent" onClick={()=>window.location.href = "/Autre"}></Button>
        </div>
        <div className="w-40">
          <Button label="Terminer" onClick={()=>window.location.href = ""}></Button>
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

export default Autre