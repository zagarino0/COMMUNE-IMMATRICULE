import {  useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
// import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import {  TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import { useEffect, useState } from "react";

function RepriseActivite() {
  const [Data , setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  //const [reference_fiscal , setReference_fiscal] = useState('');
  useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/etat/contribuable/cesse')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  
  console.log(Data)


  const headers = ["Reférence", "Raison social", "Type", "Forme juridique" , "Date de création"];
  const filteredData = Data.filter((item:any) =>
  item.id && item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const data = filteredData.map((item :any) => [
    item.id,
    item.raison_social,
    item.type,
    item.forme_juridique,
    item.date_creation,
  ]);
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };
  



// // Fonction pour faire un  recherche d'un client avec référence fiscal
// const handleSearchClient = async () => {
// const DataSearch ={

// "reference_fiscal": reference_fiscal,

// }
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
    // If the clicked row is already selected, unselect it
    if (selectedRowIndex === rowIndex) {
      setSelectedRowIndex(null); // Unselect the row
      setDataSelected([]); // Clear the selected data
    } else {
      // Otherwise, select the clicked row
      setSelectedRowIndex(rowIndex); // Set the selected row index
      const selectedRowData = Data[rowIndex]; // Get the data of the selected row
      setDataSelected(selectedRowData); // Set the selected data
    }
  };
  


  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><h1 className="text-white p-5 text-3xl   font-semibold  bg-[#959824] mt-2" >REPRISE D'ACTIVITE</h1></div>

    {/**card recherche  */} 
    <div className="mt-6 flex  justify-center ">
        <Label text="Reference " className="mt-2" ></Label>
        <Input type="text" className="w-96 ml-8 " placeholder="reférence EX:005" onChange={handleSearch}></Input>
            {/* <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
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
<div className="mt-4">
<Table

onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-start mt-4">
 
 <button onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir l'information général du contribuable  " className="text-xs"></TitleH3></button>
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
  <Card contentCard={contentCard} className="w-[800px] h-[500px] "></Card>
  </div>
 </MainLayout>
)
}
export default RepriseActivite