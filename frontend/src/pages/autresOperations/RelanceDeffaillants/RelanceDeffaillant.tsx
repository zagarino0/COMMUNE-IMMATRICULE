import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
//import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import DateFormatConverter from "../../../components/date/Date";

function RelanceDeffaillant() {

  const [Data ,setData] = useState([]);
  const [ searchTerm, setSearchTerm] = useState("")

useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/valide')
      .then((response) => setData(response.data))
      .catch((error) => {console.error(error);alert(`Il y a une erreur :  ${error}`)});
  }, []);
console.log(Data);

  

const headers=[ "Référence" , "Raison social" , "référence fiscal" , "Type"  , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"]
const filteredData = Data.filter((item:any) =>
item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
&&  item.type === "Personne morale"
 
);

console.log(filteredData)
const data = filteredData.map((item :any) => [
  item.id , 
  item.raison_social , 
  item.reference_fiscal , 
  item.type,
  <DateFormatConverter isoDate={item.date_agrement}></DateFormatConverter> ,
  item.regime_fiscal,
  item.forme_juridique ,
 <DateFormatConverter isoDate={item.date_creation}></DateFormatConverter> ,
  item.RIB
]);
const handleSearch = (e:any) => {
  setSearchTerm(e.target.value);
};
{/**const handleSearchButtonClick = () => {
  console.log(filteredData);
}; */}


  
// Selectionner contribuable 

const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const navigate = useNavigate()

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedContribuableRadieData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/InfoContribuableRadie";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };
  const handleTableRowClick = (rowIndex :any) => {
    if (selectedRowIndex === rowIndex) {
      // If the clicked row is already selected, unselect it
      setSelectedRowIndex(null);
      setDataSelected([]);
    } else {
      // Otherwise, select the clicked row
      setSelectedRowIndex(rowIndex);
      const selectedRowData = Data[rowIndex];
      setDataSelected(selectedRowData);
    }
  };
  const contentCard=(
      <div >

<div className="flex justify-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-4xl  text-center font-semibold border-b-2  mt-2">MISE  EN CONTRIBUABLE RADIE</div>
<div className="mt-6 flex flex-col  ">

 {/**card recherche  */} 
 <div className="mt-6 flex  justify-center ">
        <Label text="Reference " className="mt-2" ></Label>
        <Input type="text" className="w-96 ml-5 " placeholder="reférence EX:005" onChange={handleSearch}></Input>
        {/**<Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}    
      </div>


{/* 
<div className="flex justify-between mt-6">
  <Label text="Année"></Label>
<Input type="text" placeholder="Année" className=" w-40"></Input>

</div>
<div className=" flex justify-between mt-6">
  <Label text="Nature de prélévement"></Label>
<Input type="text"  className=" w-40"></Input>

</div>

<Button text="Lister" className="mt-6"></Button> */}
</div>
<div className="mt-8 flex justify-center w-[1300px]">
<Table
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
headers={headers}
data={data}
></Table>
</div>
<div className="mt-6 px-10">
<button  onClick={handleButtonClick} className="flex flex-row  mr-6"><TiDocumentText  className="mr-2 text-[#1956e3]  text-xl"/><TitleH3 text="Voir l'information général du contribuable  " className="text-xs"></TitleH3></button>
</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[550px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[1300px]  "></Card>
  </div>
 </MainLayout>
)
}

export default RelanceDeffaillant