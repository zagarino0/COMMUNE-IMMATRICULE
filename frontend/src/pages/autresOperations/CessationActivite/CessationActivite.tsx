import {  useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH1, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import { useEffect, useState } from "react";

function CessationActivite() {

  
  const [Data , setData] = useState([])
  const [reference_fiscal , setReference_fiscal] = useState('');
// Fonction pour faire un  recherche d'un client avec référence fiscal
const handleSearchClient = async () => {
const DataSearch ={

"reference_fiscal": reference_fiscal,

}
try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/contribuable", DataSearch);
  setData(response.data);
  // Check the response status or do something with the response
  console.log("Server Response:", Data );
} catch (error) {
  // Handle errors
  console.error("Error:", error);
}
};
const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
const data = Data.map((item)=>[item.id  ,item.raison_social ,  item.nom_commercial , item.forme_juridique])


const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedCessationData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);

    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/CessationInformation";

    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };

 const handleTableRowClick = (rowIndex) => {
  setSelectedRowIndex(rowIndex);
  // Update input fields or perform other actions based on the selected row data
  const selectedRowData = Data[rowIndex];
 setDataSelected(selectedRowData)
 
};

  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="CESSATION D'ACTIVITE"></TitleH1></div>
<div className="mt-6 flex flex-col  ">


<div className="flex justify-between mt-6">
  <Label text="Référence Fiscal"></Label>
<Input type="text"  className=" w-40"
value={reference_fiscal}
onChange={(e)=>setReference_fiscal(e.target.value)}

></Input>

</div>
<Button onClick={handleSearchClient} text="Trouver" className="mt-6"></Button>
</div>
<div className="mt-10">
<Table
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-start mt-6">
 <button  onClick={handleButtonClick} className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir l'information général du contribuable  " className="text-xs"></TitleH3></button>
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
export default CessationActivite