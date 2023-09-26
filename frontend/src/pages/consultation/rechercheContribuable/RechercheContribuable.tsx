import { useState } from "react";
import { Card } from "../../../components/card/card"
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"

function RechercheContribuablePage() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
      };
      const handleCheckboxChangeSecond = (checked: boolean) => {
          setIsChecked2nd(checked);
        };
        const handleCheckboxChange3 = (checked: boolean) => {
            setIsChecked3(checked);
          };
          const handleCheckboxChange4 = (checked: boolean) => {
            setIsChecked4(checked);
          };
          const handleCheckboxChange5 = (checked: boolean) => {
            setIsChecked5(checked);
          };
          const handleCheckboxChange6 = (checked: boolean) => {
            setIsChecked6(checked);
          };
    const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const handleOptionChange = (value: string) => {
      setSelectedOption(value);
    };
    const handleOptionChange2 = (value: string) => {
        setSelectedOption2(value);
      };
    const options = [
        { value: 'référence', label: 'Choisissez dans la liste' },
        { value: 'Raison sociale', label: 'Raison sociale' },
        { value: 'NIF', label: 'NIF' },
        { value: 'CIN', label: 'CIN' },
        { value: 'Adresse', label: 'Adresse' },
        { value: 'Nom commercial', label: 'Nom commercial' },
      ];
      const options2 = [
        { value: 'Centre Fiscal MAHAJANGA I', label: 'Centre Fiscal MAHAJANGA I' },
        { value: 'Raison sociale', label: 'Raison sociale' },
        { value: 'NIF', label: 'NIF' },
        { value: 'CIN', label: 'CIN' },
        { value: 'Adresse', label: 'Adresse' },
        { value: 'Nom commercial', label: 'Nom commercial' },
      ];
    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4"> Recherche contribuable</div>
           <div className="flex flex-col m-4">
<div className="mt-6 flex flex-row justify-between">
    <Label text="Domaine de Recherche :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96  "/>
</div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Votre recherche :" className="mt-4"></Label>
 <Input type="text" placeholder="Votre recherche" className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Régime fiscal :" className="mt-4"></Label>
 <Input type="text" placeholder="Régime fiscal" className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Date de validation Du :" className="mt-4"></Label>
 <Input type="date"  className="w-96 "></Input>
 </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Au :" className="mt-4"></Label>
 <Input type="date"  className="w-96 "></Input>
 </div>
 <div className="mt-6 flex flex-row justify-between">
    <Label text="CF Gestionnaire :" className="mt-4"></Label>
    <Select options={options2} value={selectedOption2} onChange={handleOptionChange2} className="w-96  "/>
</div>
 <div className="mt-6 flex flex-row justify-between" >
<div>
<Label text="Exportateur :" className="mt-4"></Label>
</div>
<div>
<Checkbox label="Oui" checked={isChecked} onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked={isChecked2nd} onChange={handleCheckboxChangeSecond}></Checkbox>
</div>
  </div>
  <div className="mt-6 flex flex-row justify-between" >
<div>
<Label text="Importeur :" className="mt-4"></Label>
</div>
<div>
<Checkbox label="Oui" checked={isChecked3} onChange={handleCheckboxChange3}></Checkbox>
<Checkbox label="Non" checked={isChecked4} onChange={handleCheckboxChange4}></Checkbox>
</div>
  </div>
  <div className="mt-6 flex flex-row justify-between" >
<div>
<Label text="Personne :" className="mt-4"></Label>
</div>
<div>
<Checkbox label="Physique" checked={isChecked5} onChange={handleCheckboxChange5}></Checkbox>
<Checkbox label="Morale" checked={isChecked6} onChange={handleCheckboxChange6}></Checkbox>
</div>
  </div>
           </div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
        </div>
    )
  return (
    <MainLayout>
    <Card contentCard={contentCard} className="w-[800px] h-[1000px] mt-24"></Card>
   </MainLayout>
  )
}

export default RechercheContribuablePage