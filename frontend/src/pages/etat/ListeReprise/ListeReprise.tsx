import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { ImFilePdf } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import { SiMicrosoftexcel } from "react-icons/si";
import { TitleH1, TitleH3 } from "../../../components/title";
import Table from "../../../components/table/table";
//import { Button } from "../../../components/common";
//import Select from "../../../components/inputs/selectInput";
//import { Label } from "../../../components/label/label";
//import Input from "../../../components/inputs";
import { useState, useEffect } from "react";
import axios from "axios";

function ListeReprise() {
  //const [selectedOption, setSelectedOption] = useState('');


  const [Contribuable] = useState<{

    id:string,
    raison_social:string,
    nom_commercial:string,
    forme_juridique:string,
 
  }>({
  
    id:"",
    raison_social:"",
    nom_commercial:"",
    forme_juridique:"",
   
  })


  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    // Cette fonction est appelée à chaque fois que le composant est monté ou que `Contribuable` ou `selectedOption` change.
    handleActive();
  }, [Contribuable]);
  const handleActive = async () => {
    try{
      const response = await axios.get('http://localhost:3500/consultation/contribuable/valide');
        
        setDataTable(response.data)
      
        
    }
    catch(error)
    {
         console.log('An  error occurred during the request');
      }
  };

  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = dataTable.map((item:any)=>[item.id, item.raison_social, item.nom_commercial, item.forme_juridique])



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

<div className="flex justify-between mt-6">
  <Label text="Région"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>
<div className="flex justify-between mt-6">
  <Label text="CF Gestionnaire"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className=""></Select>
</div>

*/}
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl text-center font-semibold border-b-2 border-[#959824] mt-2" text="CONSULTATION DES CONTRIBUABLES AYANT EFFECTUES DE REPRISE"></TitleH1></div>
<div className="mt-6 flex flex-col  ">

{/**
 * 
 * 
 * <div className="flex justify-between mt-6">
  <Label text="Date de Réprise , Du"></Label>
<Input type="date"  className=" w-40"></Input>
</div>
<div className="flex justify-between mt-6">
  <Label text="Au"></Label>
<Input type="date"  className=" w-40"></Input>
</div>
 * 
 * <Button text="Lister" className="mt-6"></Button>
 * 
 * 
 */}



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
export default ListeReprise