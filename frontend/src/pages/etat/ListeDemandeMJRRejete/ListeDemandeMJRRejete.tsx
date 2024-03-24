import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";
import { TitleH1, TitleH3 } from "../../../components/title";
import Table from "../../../components/table/table";
import { Button } from "../../../components/common";
//import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Input from "../../../components/inputs";
import { useState, useEffect } from "react";
import axios from "axios";

function ListeDemandeMJRRejete() {
  //const [selectedOption, setSelectedOption] = useState('');
  const [dataTable ,setDataTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleActive();
  }, [dataTable]);
  const handleActive = async () => {
    try{
      const response = await axios.get('http://localhost:3500/etat/contribuable/rejete');
        setDataTable(response.data)
    }
    catch(error)
    {
         console.log('An  error occurred during the request');
         alert("Il y a une erreur")
      }
  };
  console.log(dataTable);
  
  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
  // Filtrer les données en fonction par "id"

  const filteredData = dataTable.filter((item:any) =>
    item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = filteredData.map((item:any) => [
    item.id,
    item.raison_social,
    item.nom_commerciale,
    item.forme_juridique,
  ]);

  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    console.log(filteredData);
  };

{/**
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
*/}
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="Liste des demandes de mise à jour rejetées"></TitleH1></div>
<div className="mt-6 flex flex-col  ">

      {/**card recherche  */} 
      <div className="mt-6 flex  justify-between ">
        <Label text="Reference" className="mt-2" ></Label>
        <Input type="text" className="w-96 ml-5"placeholder="Reférence EX: 005" onChange={handleSearch}></Input>
            <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick} ></Button>
      </div>

  {/**
   * 
   * <div className="flex justify-between mt-6">
  <Label text="Date  Du"></Label>
<Input type="date"  className=" w-40"></Input>
</div>
<div className="flex justify-between mt-6">
  <Label text="Au"></Label>       
<Input type="date"  className=" w-40"></Input>
</div>

   * <div className="flex justify-between mt-6">
  <Label text="Région"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
<div className="flex justify-between mt-6">
  <Label text="CF Gestionnaire"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
   * <Button text="Lister" className="mt-6"></Button>
   */}

</div>
<div className="mt-10">
<Table headers={headers} data={data}></Table>
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

export default ListeDemandeMJRRejete