import { useState } from "react"
import { Card } from "../../../components/card/card"
import  Button  from "../../../components/common/Button"
import Checkbox from "../../../components/common/checkbox"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import { TitleH1 } from "../../../components/title"
import { MainLayout } from "../../../layouts/main"

function DemandeValidationNif() {
    const [selectedOption, setSelectedOption] = useState(true);
    const ContentSearch =(
        <div>     
           <div className="bg-hoteldeville py-32  bg-cover h-96 p-4">
       <div className="bg-white rounded-md shadow-xl p-4">
       <div className="text-center   font-[kaldera] text-3xl py-4">
           DEMANDES DE MISE A JOUR DES RENSEIGNEMENTS SUR LES CONTRIBUABLES A VALIDER
         </div>
             <div className="text-3xl  font-[kaldera] text-center p-4 ">
               N° : Référence Fiscal
             </div>
       </div>
        </div>
        <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          
        <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Référence Fiscal" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text=" Raison Social" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Nom Commercial" />
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
          <Label text="Date d'agrément" />
          <Input type="date" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Réf. Agrément" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Période de grace" />
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
        <div className="flex justify-between mt-6">
          <Label text="Activité" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Précision sur les Activités" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date Demande modif " />
          <Input type="date" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date d'attribution de RF" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Registre de commerce" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Date de Registre" />
          <Input type="date" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="N° Statistique" />
          <Input type="text" />
        </div>
        <div className="flex justify-between mt-6">
          <Label text="Délivré le" />
          <Input type="text" />
        </div>
        
        <div className="mt-16 w-full flex justify-center">
        <div className="w-[800px] ">
          <Button label="Enregistrer" onClick={()=>window}></Button>
        </div>
        </div>
      </div>
    </div>
       </div>
      )
    return (
      <MainLayout>
      <div className="overflow-y-auto h-[500px] mt-14 mb-8">
      <Card contentCard={ContentSearch} className="w-[1000px] h-[2500px]"></Card>
      </div>
          </MainLayout>
    )
  }
  
export default DemandeValidationNif