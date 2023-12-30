import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH1, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";
import Select from "../../../components/inputs/selectInput";
import { useState } from "react";

function ListeNIFDelivre() {
  const [selectedOption, setSelectedOption] = useState('');

  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];

  //option select input
  const options = [
    { value: 'référence', label: 'référence' },
    { value: 'Raison sociale', label: 'Raison sociale' },
    { value: 'NIF', label: 'NIF' },
    { value: 'CIN', label: 'CIN' },
    { value: 'Adresse', label: 'Adresse' },
    { value: 'Nom commercial', label: 'Nom commercial' },
  ];

  // onChange in the select input 
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };


  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="CONSULTATION DES REFERENCE FISCAL DELIVRES"></TitleH1></div>
<div className="mt-6 flex flex-col  ">

<div className="flex justify-between mt-6">
  <Label text="Date de Validation , Du"></Label>
<Input type="date"  className=" w-40"></Input>
</div>
<div className="flex justify-between mt-6">
  <Label text="Au"></Label>
<Input type="date"  className=" w-40"></Input>
</div>

<div className="flex justify-between mt-6">
  <Label text="Région"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
<div className="flex justify-between mt-6">
  <Label text="CF Gestionnaire"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
<Button text="Lister" className="mt-6"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-12">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>

</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[800px] "></Card>
  </div>
 </MainLayout>
)
}
export default ListeNIFDelivre