import { useState } from "react";
import Button from "../../../components/common/Button";
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { TitleH1 } from "../../../components/title";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";

function CessationInformation() {
    
    const selectedData = localStorage.getItem("selectedCessationData");
    const parsedDataSelected = JSON.parse(selectedData as string);
    
    
    const content = (
      <div className="flex justify-center w-full h-full  p-8">
        <div className="flex flex-col w-[1000px]">
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="CESSATION D'ACTIVITE"></TitleH1></div>
          <div className="flex flex-row mt-6">
            
          <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Référence Fiscal" />
            <Input type="text" 
            value={ parsedDataSelected ? parsedDataSelected.id : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Raison Social" />
            <Input type="text" 
            value={parsedDataSelected ? parsedDataSelected.raison_social : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Type" />
            <div className="flex justify-between">
            <label className="">
      <input
        type="radio"
        value="Total"
        className='mr-2'
        checked={ parsedDataSelected.type ==="Personne physique" }
       
      />
      Personne physique
    </label>
    <label className=' ml-4'>
      <input
        type="radio"
        value="ParRF"
        className='mr-2'
        checked={parsedDataSelected.type === "Personne morale"}
        
      />
      Personne morale
    </label>
            </div>
          </div>
          {parsedDataSelected.type ==="Personne physique" && (
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Situation matrimoniale "></Label>
      <Input
        type="text"
           value={parsedDataSelected.situation_matrimoiniale}  
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Sexe "></Label>
      <div className="flex justify-between w-[200px]">
      <Checkbox label="Masculin" onChange={()=>window} checked={parsedDataSelected.sexe === "Masculin"}></Checkbox>
      <Checkbox label="Feminin" onChange={()=>window} checked={parsedDataSelected.sexe === "Feminin"}></Checkbox>
      </div>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Etranger "></Label>
      <div className="flex justify-between w-[200px]">
      <Checkbox label="Oui" onChange={()=>window} checked={parsedDataSelected.etranger === true}></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked={parsedDataSelected.etranger === false}></Checkbox>
      </div>
    </div>
  { parsedDataSelected.etranger === true &&(
<>
<div className='flex justify-between mt-6 '>
      <Label text="Numéro passport"></Label>
      <Input
        type="text"
        value={parsedDataSelected? parsedDataSelected.numero_passeport : "" }     
      ></Input>
    </div>
<div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance"></Label>
      <Input
        type="date"  
          value={parsedDataSelected? parsedDataSelected.date_de_delivrance_passeport : "" }
      ></Input>
    </div>
  
</>

  )}

{ parsedDataSelected.etranger === false &&(
<>
<div className='flex justify-between mt-6 '>
      <Label text="CIN"></Label>
      <Input
        type="text"
        value={parsedDataSelected? parsedDataSelected.cin : "" }     
      ></Input>
    </div>
<div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance"></Label>
      <Input
        type="date"  
          value={parsedDataSelected? parsedDataSelected.date_de_delivrance_cin : "" }
      ></Input>
    </div>
  
</>

  )}
    <div className='flex justify-between mt-6 '>
      <Label text="Date naissance"></Label>
      <Input
        type="date"  
        value={parsedDataSelected ? parsedDataSelected.date_de_naissance : ""}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Lieu naissance "></Label>
      <Input
        type="text"
         value={parsedDataSelected? parsedDataSelected.lieu_de_naissance : ""  }     
      ></Input>
    </div>
    </div>
  )}
          
          <div className="flex justify-between mt-6">
            <Label text="Date de Création" />
            <Input type="date"
            value={parsedDataSelected ? parsedDataSelected.date_creation : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Activité" />
            <Input type="text"
            
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Province" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Région" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="District" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Commune" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Fokontany" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Adresse" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="N° Statistique" />
            <div className="flex flex-col">
            <Input type="text" />
            <Input type="date" className="mt-6" />
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="CF Gestionnaire" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Date Acte" />
            <Input type="date" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Date accord" />
            <Input type="text" />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Titre" />
            <Input type="text" />
          </div>
  
          <div className="flex justify-center mt-12">
          <div className="w-96 ">
            <Button label="Accorder" onClick={()=>window}></Button>
          </div>
          </div>
        </div>
      </div>
    );
    
    return (
        <MainLayout>
         <div className="overflow-y-auto h-[500px] mt-14 mb-8">
         <Card contentCard={content} className="w-[800px] h-[1800px] "></Card>
         </div>
        </MainLayout>
       )
}

export default CessationInformation