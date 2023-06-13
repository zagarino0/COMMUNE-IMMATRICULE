import { useState } from "react"
import { Card } from "../../components/card/card"
import { Button } from "../../components/common"
import Checkbox from "../../components/common/checkbox"
import Input from "../../components/inputs"
import Select from "../../components/inputs/selectInput"
import { Label } from "../../components/label/label"
import { MainLayout } from "../../layouts/main"

function AjoutVehiculePage() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
      };
      const handleCheckboxChangeSecond = (checked: boolean) => {
          setIsChecked2nd(checked);
        };
        const [selectedOption, setSelectedOption] = useState('');

        const handleOptionChange = (value: string) => {
          setSelectedOption(value);
        };
    
        const options = [
          { value: 'référence', label: 'Choisissez dans la liste' },
          { value: 'Raison sociale', label: 'Raison sociale' },
          { value: 'NIF', label: 'NIF' },
          { value: 'CIN', label: 'CIN' },
          { value: 'Adresse', label: 'Adresse' },
          { value: 'Nom commercial', label: 'Nom commercial' },
        ];
    
    const contentCard =(
        <div className="flex justify-center items-center">
  <div className="flex flex-col">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Ajout de véhicule</div>
  
    <div className="flex flex-col  ">
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Numéro d'immatriculation :" className="mt-4"></Label>
 <Input type="text" placeholder="Numéro d'immatriculation" className="w-96 "></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Marque :" className="mt-4"></Label>
<Input type="text" placeholder="Marque" className="w-96  "></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Type :" className="mt-4 "></Label>
  <Input type="text" placeholder="Type " className="w-96 "></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Genre :" className="mt-4"></Label>
  <Input type="text" placeholder="Genre" className="w-96 "></Input>
  </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Puissance :" className="mt-4"></Label>
 <Input type="text" placeholder="Puissance" className="w-96 "></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Nombre de place sur carte grise :" className="mt-4"></Label>
<Input type="text" placeholder="Nombre de place sur carte grise" className="w-96 !"></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre de place licence :" className="mt-4"></Label>
  <Input type="text" placeholder="Nombre de place licence" className="w-96 "></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Charge Utile :" className="mt-4"></Label>
  <Input type="text" placeholder="Charge Utile" className="w-96"></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Date de mise en Circulation :" className="mt-4"></Label>
  <Input type="date" placeholder="Date de mise en Circulation" className="w-96 "></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Poids à vide :" className="mt-4"></Label>
  <Input type="text" placeholder="Poids à vide" className="w-96 "></Input>
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
<Input type="date" placeholder="Date de début" className="w-96 "></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de début :" className="mt-4"></Label>
<Input type="text" placeholder="NIF propriétaire" className="w-96 "></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Centre Gestionnaire :" className="mt-4"></Label>
<Input type="text" placeholder="Centre Gestionnaire" className="w-96 "></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Anc NIF Propriétaire :" className="mt-4"></Label>
<Input type="text" placeholder="Anc NIF Propriétaire" className="w-96 "></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Exploitation :" className="mt-4"></Label>
<Input type="text" placeholder="Exploitation" className="w-96 "></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de validité licence :" className="mt-4"></Label>
<Input type="date" className="w-96 " ></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Catégorie :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96  "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Sous catégorie :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Zone :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Age :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<Button type="submit" text="Enregistrer" className="mt-6"></Button>
    </div>
  </div>
  </div>
      
      )  
  return (
    <MainLayout>
        <div className="mt-24">
            <Card className="w-[1000px] h-[1800px] " contentCard={contentCard}></Card>
        </div>
    </MainLayout>
  )
}

export default AjoutVehiculePage