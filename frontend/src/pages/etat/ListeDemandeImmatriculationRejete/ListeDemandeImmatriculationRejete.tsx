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
import { useEffect, useState } from "react";
import axios from "axios";

function ListeDemandeImmatriculationRejete() {

  const [dataTable ,setDataTable] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Cette fonction est appelée à chaque fois que le composant est monté ou que `Contribuable` ou `selectedOption` change.
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
  
  const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type" , "CIN" , "Passport" , "Sexe"]
  const filteredData = dataTable.filter((item:any) =>
    item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())

  );
  const data = filteredData.map((item:any) => [
    item.id,
    item.raison_social,
    item.reference_fiscal,
    item.type ,
    item.cin ,
    item.numero_passeport,
    item.sexe,
  ]);

  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    // Vous pouvez déclencher la recherche ici en utilisant la même logique que handleSearch
    console.log(filteredData);
    // Mettre à jour l'état searchTerm ici en fonction de la logique de recherche
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
      <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="Liste des demandes d'immatriculation rejetées"></TitleH1></div>
      <div className="mt-6 flex flex-col  ">

      <div className="flex justify-between mt-1">
          {/**card recherche  */} 
     <div className="mt-6 flex  justify-between ">
        <Label text="Reference" className="mt-2" ></Label>
        <Input type="text" className="w-96 ml-5 "placeholder="reference EX: 005" onChange={handleSearch}></Input>
            <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button>
      </div>

  {/**
   * 
   * <Input type="text" 
        value={Contribuable.reference_fiscal}
        onChange={(e)=>{setContribuable({...Contribuable , reference_fiscal : e.target.value})}}
        className=" w-40"></Input>
   * 
        * <div className="flex justify-between mt-6">
        <Label text="Date  Du"></Label>
      <Input type="date" 
      value={Contribuable.date_debut}
      onChange={(e)=>{setContribuable({...Contribuable , date_debut: e.target.value})}}

      className=" w-40"></Input>
      </div>
   * <Label text="Référence Fiscal"></Label>
   * 
   */}
  

</div>
{/**
 * <div className="flex justify-between mt-6">
  <Label text="Au"></Label>       
<Input type="date"  className=" w-40"
value={Contribuable.date_fin}
onChange={(e)=>{setContribuable({...Contribuable , date_fin : e.target.value})}}
></Input>
</div>
 * <Button text="Lister" className="mt-6"></Button>
 */}





</div>
<div className="overflow-auto w-[750px] mt-10">
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
  <Card contentCard={contentCard} className="w-[800px] h-[1000px] "></Card>
  </div>
 </MainLayout>
)
}

export default ListeDemandeImmatriculationRejete