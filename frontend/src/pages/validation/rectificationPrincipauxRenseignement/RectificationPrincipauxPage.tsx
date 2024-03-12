import axios from "axios"
import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table"
import { MainLayout } from "../../../layouts/main"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { TitleH3 } from "../../../components/title"
import { TiDocumentText } from "react-icons/ti"

function RectificationPrincipauxPage() {
  
    const [Data , setData] = useState([])
    const [reference_fiscal , setReference_fiscal] = useState('');
  // Fonction pour faire un  recherche d'un client avec référence fiscal
const handleSearchClient = async () => {
  const DataSearch ={
  "reference_fiscal": reference_fiscal
  }

  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/consultation/contribuable/referencefiscal", DataSearch);
    setData(response.data);
    // Check the response status or do something with the response
    console.log("Server Response:", Data );
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert("Aucune information trouvé");
  }
};

   

//  select Data in the table      
const [EntriesSelected , setEntriesSelected] = useState([])

const [DataSelected , setDataSelected] = useState([]);

const [selectedRowIndexEntries  , setSelectedRowIndexEntries] = useState(null) 
const handleTableRowClickEntries = (rowIndex ) => {
  if (rowIndex === selectedRowIndexEntries) {
    // If the clicked row is already selected, unselect it
    setSelectedRowIndexEntries(null);
    setDataSelected([]);
  } else {
    // Extract the property values from the data object
    const selectedRowData = Data[rowIndex];

    // Select the clicked row
    setSelectedRowIndexEntries(rowIndex);
    setDataSelected(selectedRowData);
  }

  
  console.log('Selected entiers Data:', EntriesSelected);
};


const navigate = useNavigate()// Initialize useHistory

const [isStorageUpdated, setIsStorageUpdated] = useState(false);

useEffect(() => {
  // Store Value data in localStorage
  localStorage.setItem("selectedRectifictationData", JSON.stringify(DataSelected ));
  // Reset the dummy state to trigger rerender
  console.log(DataSelected)
  setIsStorageUpdated(false);
}, [DataSelected, isStorageUpdated]);

const handleButtonClick = () => {
  // Trigger a rerender by updating the dummy state
  setIsStorageUpdated(true);

  // Use the selectedOption to determine the route to navigate to
  const routeToNavigate = "/Rectification";

  // Use navigate to navigate to the determined route
  navigate(routeToNavigate, { state: { DataSelected } });
};

    const headers = ["Code", "Raison social", "Type", "Date de Création" , "Référence Fiscal"];
  const data = Data.map((item)=>[item.id  ,item.raison_social ,  item.type, item.date_creation , item.reference_fiscal])


    const contentCard = (
        <div className="m-4">
           
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Rectification des principaux renseignement des contribuables </div>
            <div className="mt-6 flex flex-row justify-between ">
<Label text="Référence fiscal :" className="mt-2"></Label>
<Input type="text" className="w-96  "
value={reference_fiscal}
onChange={(e)=>setReference_fiscal(e.target.value)}
></Input>
<Button text="Rechercher" onClick={handleSearchClient} className="rounded font-semibold"></Button>
</div>
<div className="mt-10">
<Table
onClick={handleTableRowClickEntries}
selectedRowIndex={selectedRowIndexEntries}

headers={headers}
data={data}
></Table>
</div> 
<div className="mt-8">
  
<button  className="flex flex-row mt-4 " onClick={handleButtonClick}><TiDocumentText  className="mr-2  text-xl"/><TitleH3 text="Voir les détails du Contribuable " className="text-xs"></TitleH3></button>
</div>
        </div>
    )
  return (
    <MainLayout>
    <div  className="overflow-y-auto h-[500px] flex justify-center mt-14 mb-8 ">
    <Card contentCard={contentCard} className="w-[900px] h-[800px]"></Card>
    </div>
        </MainLayout>
  )
}

export default RectificationPrincipauxPage