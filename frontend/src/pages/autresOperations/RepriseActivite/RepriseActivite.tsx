import {  useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
//import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { TitleH1, TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import { useEffect, useState } from "react";
import DateFormatConverter from "../../../components/date/Date";

function RepriseActivite() {
  const [Data , setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  //const [reference_fiscal , setReference_fiscal] = useState('');
  useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/cesse')
      .then((response) => setData(response.data))
      .catch((error) => {console.error(error)});
  }, []);
  
  console.log(Data)


  const headers = [ "Référence" , "Raison social" , "référence fiscal" , "Type"  , "Date d'agrement" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"];
  const filteredData = Data.filter((item:any) =>
  item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
{/**  const handleSearchButtonClick = () => {
    console.log(filteredData);
  }; */}



// Fonction pour faire un  recherche d'un client avec référence fiscal
// const handleSearchClient = async () => {

// try {
//   // Make a POST request to your server endpoint
//   const response = await axios.post("http://localhost:3500/contribuable", DataSearch);
//   setData(response.data);
//   // Check the response status or do something with the response
//   console.log("Server Response:", Data );
// } catch (error) {
//   // Handle errors
//   console.error("Error:", error);
// }
// };

// Selectionner contribuable 

const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedRepriseData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/RepriseInfo";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };

  const handleTableRowClick = (rowIndex: any) => {
    if (selectedRowIndex === rowIndex) {
      // Deselect the row
      setSelectedRowIndex(null);
      setDataSelected([]);
    } else {
      // Select the row
      setSelectedRowIndex(rowIndex);
      const selectedRowData = Data[rowIndex];
      setDataSelected(selectedRowData);
    }
  };


  const contentCard=(
      <div >

<div className="flex justify-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-4xl  font-semibold mt-2"><TitleH1 className="text-[#959824] text-center text-4xl  font-semibold border-b-2 mt-2" text="REPRISE D'ACTIVITE"></TitleH1></div>

    {/**card recherche  */} 
    <div className="mt-12 flex  justify-center ">
        <Label text="Reference " className="mt-2" ></Label>
        <Input type="text" className="w-96 ml-5 " placeholder="reférence EX:005" onChange={handleSearch}></Input>
          {/** <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */} 
      </div>
{/* <div className="mt-6 flex flex-col  ">


<div className="flex justify-between mt-6">
  <Label text="Référence Fiscal"></Label>
<Input type="text"  className=" w-40"
value={reference_fiscal}
onChange={(e)=>setReference_fiscal(e.target.value)}
></Input>

</div>
<Button text="Trouver" onClick={handleSearchClient} className="mt-6"></Button>
</div> */}
<div className="mt-12 flex justify-center w-[1300px]">
<Table

onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-start px-8 mt-6">
 
 <button onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-[#1956e3] text-xl"/><TitleH3 text="Voir l'information général du contribuable  " className="text-xs"></TitleH3></button>
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
  <Card contentCard={contentCard} className="w-[1300px] "></Card>
  </div>
 </MainLayout>
)
}
export default RepriseActivite