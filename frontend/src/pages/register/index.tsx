import { useLocation } from "react-router-dom";
import { Layout } from "./Layout"
import { Label } from "../../components/label/label";
import Input from "../../components/inputs";
import { TitleH1, TitleH3 } from "../../components/title";
import { useState } from "react";
import Checkbox from "../../components/common/checkbox";
import Button from "../../components/common/Button";


function ResgisterPage() {
  const location = useLocation(); 
  const [selectedOption, setSelectedOption] = useState(true);
  const content = (
    <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 1:" className="mt-2"></TitleH3>
        <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Nom et Prénoms ou Raison Social" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Type" />
          <div className="flex justify-between">
          <label className="">
    <input
      type="radio"
      value="Total"
      className='mr-2'
      checked={selectedOption === true}
      onChange={() => setSelectedOption(true)}
    />
    Personne physique
  </label>
  <label className=' ml-4'>
    <input
      type="radio"
      value="ParRF"
      className='mr-2'
      checked={selectedOption === false}
      onChange={() => setSelectedOption(false)}
    />
    Personne morale
  </label>
          </div>
        </div>
        {selectedOption === true && (
  <div>
    <div className='flex justify-between mt-6 '>
    <Label text="Situation matrimoniale "></Label>
    <Input
      type="text"     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Sexe "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Masculin" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Feminin" onChange={()=>window} checked></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Etranger "></Label>
    <div className="flex justify-between w-[200px]">
    <Checkbox label="Oui" onChange={()=>window} checked></Checkbox>
    <Checkbox label="Non" onChange={()=>window} checked></Checkbox>
    </div>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Date de délivrance"></Label>
    <Input
      type="date"     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu de délivrance"></Label>
    <Input
      type="text"     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Date naissance"></Label>
    <Input
      type="date"     
    ></Input>
  </div>
  <div className='flex justify-between mt-6 '>
    <Label text="Lieu naissance "></Label>
    <Input
      type="text"     
    ></Input>
  </div>
  </div>
)}
        <div className="flex justify-between mt-6">
          <Label text="Forme juridique" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Régime Fiscale" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Création" />
          <Input type="date" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Capital en Ar" />
          <Input type="text" />
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
          <Input type="text" />
        </div>
        <div className="w-40">
          <Button label="Suivant" onClick={()=>window.location.href = "/Activite"}></Button>
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

export default ResgisterPage