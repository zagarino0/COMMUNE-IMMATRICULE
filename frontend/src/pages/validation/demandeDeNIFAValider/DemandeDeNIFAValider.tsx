import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common"
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs"
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import "../../../components/font/font.css";

function DemandeDeNIFAValiderPage() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value: string) => {
      setSelectedOption(value);
    };
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
      setIsChecked(checked);
    };
    const handleCheckboxChangeSecond = (checked: boolean) => {
        setIsChecked2nd(checked);
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
      <div>     
         <div className="bg-hoteldeville py-32  bg-cover h-96 p-4">
     <div className="bg-white rounded-md shadow-xl p-4">
     <div className="text-center   font-[kaldera] text-3xl py-4">
         DEMANDES DE MISE A JOUR DES RENSEIGNEMENTS SUR LES CONTRIBUABLES A VALIDER
       </div>
           <div className="text-3xl  font-[kaldera] text-center p-4 ">
             Recherche des contribuables
           </div>
     </div>
      </div>
     <div className="flex justify-center items-center ">
<div className="flex flex-col ">
        
<div className="flex flex-col py-4">

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
    <Checkbox label="Deuxième validation" checked={isChecked2nd} onChange={handleCheckboxChangeSecond} className="ml-4"/>
    </div>
</div>
<Button type="submit" text="Rechercher" className="w-96 ml-[180px] mt-4"></Button>
        </div>
 <div className="flex justify-center items-center mt-4" >

<Table
headers={headers}
data={data}
onClick={()=>{window.location.href="/DemandeValidationNif"}}
></Table>
</div>
</div>
     </div>
     </div>
    )
  return (
    <MainLayout>
    <div className="overflow-y-auto h-[500px] mt-14 mb-8">
    <Card contentCard={ContentSearch} className="w-[1000px] h-[1200px]"></Card>
    </div>
        </MainLayout>
  )
}

export default DemandeDeNIFAValiderPage