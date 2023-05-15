import { useState } from "react";
import { Button } from "../../components/common"
import Checkbox from "../../components/common/checkbox";
import Input from "../../components/inputs"
import Select from "../../components/inputs/selectInput";
import { Label } from "../../components/label/label"
import { Navbar } from "../../components/navbar/Nabvar"
import Table from "../../components/table/table";

function DemandeDeNIFAValiderPage() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value: string) => {
      setSelectedOption(value);
    };
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
      setIsChecked(checked);
    };
    const handleCheckboxChangeSecond = (checked: boolean) => {
        setIsChecked(checked);
      };
  
    const options = [
        { value: 'référence', label: 'référence' },
        { value: 'Raison sociale', label: 'Raison sociale' },
        { value: 'NIF', label: 'NIF' },
        { value: 'CIN', label: 'CIN' },
        { value: 'Adresse', label: 'Adresse' },
        { value: 'Nom commercial', label: 'Nom commercial' },
      ];
  const headers = ["Ref démandé", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
    const ContentSearch =(
     <div className="flex justify-center items-center">
<div className="flex flex-col">
        
<div className="flex flex-col">
  <div className="text-center font-semibold text-xl py-4">
    DEMANDES DE MISE A JOUR DES RENSEIGNEMENTS SUR LES CONTRIBUABLES A VALIDER
  </div>
      <div className="text-xl font-semibold text-center p-4">
        Recherche des contribuables
      </div>
<div className="mt-6 flex flex-row">
    <Label text="Domaine de recherche :"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 mx-6"/>
</div>
<div className="mt-4 flex flex-row">
    <Label text="Votre recherche :"></Label>
<Input type="text" className="w-96 mx-[65px] "></Input>
</div>
<div className="mt-4 flex flex-row">
    <Label text="Date de debut :"></Label>
<Input type="date" className="w-96 mx-20 "></Input>
</div>
<div className="mt-4 flex flex-row">
    <Label text="Date fin :"></Label>
<Input type="date" className="w-96 mx-[120px] "></Input>
</div>
<div className="flex flex-row mt-4">
    <Label text="Trasfert :"></Label>
    <div className="flex flex-row mx-32">
    <Checkbox label="Première validation" checked={isChecked} onChange={handleCheckboxChange} className="ml-1"/>
    <Checkbox label="Deuxième validation" checked={isChecked} onChange={handleCheckboxChangeSecond} className="ml-4"/>
    </div>
</div>
<Button type="submit" text="Rechercher" className="w-96 ml-[180px] mt-4"></Button>
        </div>
 <div className="flex justify-center items-center mt-4" >

<Table
headers={headers}
data={data}
></Table>
</div>
</div>
     </div>
    )
  return (
    <div className="bg-neutral-800/70 h-screen flex flex-col">
<div>
<Navbar className="fixed p-2 " content={ContentSearch}></Navbar>
</div>

    </div>
  )
}

export default DemandeDeNIFAValiderPage