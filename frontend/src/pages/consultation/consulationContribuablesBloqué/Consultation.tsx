import { useState } from "react";
import { Card } from "../../../components/card/card"
import Input from "../../../components/inputs"
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { Button } from "../../../components/common";
import { Link } from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";

function ConsultationContribuableBloque() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleOptionChange1 = (value: string) => {
    setSelectedOption1(value);
  };
  const options = [
    { value: 'référence', label: 'référence' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'NIF', label: 'NIF' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];
  const options1 = [
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
  const contentCard = (
    <div className="p-8 flex flex-col">
<div className=" font-semibold text-[#959824]  text-3xl mt-6 border-b-2 border-[#959824]">
  Consultation des contribuables bloqués
</div>
<div className="mt-4 text-xl font-semibold">
  veuillez remplir vos critères ci-dessous : 
</div>
<div className="flex justify-between mt-4">
<Label text="Domaine de recherche :" className="mt-4"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 mx-6"/>
</div>
<div className="flex justify-between mt-4">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" placeholder="Votre recherche" className="w-96 mx-6"></Input>
</div>

<div className="flex justify-between mt-4">
<Label text="Date blocage du :" className="mt-4"></Label>
<Input type="date" className="w-96 mx-6" ></Input>
</div>

<div className="flex justify-between mt-4">
<Label text="Au :" className="mt-4"></Label>
<Input type="date" className="w-96 mx-6" ></Input>
</div>
<div className="flex justify-between mt-4">
<Label text="CF gestionnaire :" className="mt-4"></Label>
<Select options={options1} value={selectedOption1} onChange={handleOptionChange1} className="w-96 mx-6"/>
</div>
<div className="mt-4">
<Button text="Lister" className="rounded w-40"></Button>
</div>
<div className="flex justify-center items-center mt-12" >

<Table
headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-6">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>
</div>
    </div>
  )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
   <Card contentCard={contentCard} className="w-[1000px] h-[700px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default ConsultationContribuableBloque