import axios from "axios";
import { Card } from "../../../components/card/card"
// import { Button } from "../../../components/common";
// import Input from "../../../components/inputs";
// import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";

function RectificationVehiculePage() {
   
   

     const [selectedRowIndex, setSelectedRowIndex] = useState(null);
     const [DataSelected , setDataSelected] = useState([]);
   
   

     const [Data , setData] = useState([])
     const [numimmatriculation_v , setImmatriculation] = useState('');
   // Fonction pour faire un  recherche d'un client avec référence fiscal
 const handleSearchClient = async () => {
  
   try {
    console.log(numimmatriculation_v);
     // Make a POST request to your server endpoint
     const response = await axios.post(`http://localhost:3500/vehicle/${numimmatriculation_v}`);
     setData(response.data);
     // Check the response status or do something with the response
     console.log("Server Response:", Data );
   } catch (error) {
     // Handle errors
     console.error("Error:", error);
     alert('Vehicule non trouvé')
   }
 };

 
 useEffect(() => {
  // Récupérer les données depuis le backend
  axios.get('http://localhost:3500/etat/contribuable/valide')
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));
}, []);

console.log(Data)
 const headers = ["Raison social", "Référence Fiscal", "Type", "Date de création "];
 const data = Data.map((item)=>[item.raison_social ,item.reference_fiscal ,  item.type, item.date_creation])

// selection data 

const navigate = useNavigate()// Initialize useHistory

const [isStorageUpdated, setIsStorageUpdated] = useState(false);

useEffect(() => {
  // Store Value data in localStorage
  localStorage.setItem("selectedContribuableRectificationAddVehicule", JSON.stringify(DataSelected ));
  // Reset the dummy state to trigger rerender
  console.log(DataSelected)
  setIsStorageUpdated(false);
}, [DataSelected, isStorageUpdated]);

const handleButtonClick = () => {
  // Trigger a rerender by updating the dummy state
  setIsStorageUpdated(true);

  // Use the selectedOption to determine the route to navigate to
  const routeToNavigate = "/RectificationVehiculeRF";

  // Use navigate to navigate to the determined route
  navigate(routeToNavigate, { state: { DataSelected } });
};

const handleTableRowClick = (rowIndex) => {
setSelectedRowIndex(rowIndex);

// Extract the property values from the data object
const selectedRowData = Data[rowIndex]


setDataSelected(selectedRowData);
console.log('Selected Row Data:', DataSelected);
};

 const contentCard=(
        <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des principaux renseignements des contribuables concernant ses véhicules</div>
{/* <div className="mt-6 flex flex-row justify-between ">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" 
value={numimmatriculation_v}
onChange={(e)=>setImmatriculation(e.target.value)}
className="w-96  "></Input>
<Button onClick={handleSearchClient} text="Rechercher"></Button>
</div> */}
<div className="mt-10">
<Table
headers={headers}
data={data}

onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}

></Table>
</div>
<div>
  
<button  className="flex flex-row mt-4 " onClick={handleButtonClick}><TiDocumentText  className="mr-2  text-xl"/><TitleH3 text="Voir les détails du Contribuable " className="text-xs"></TitleH3></button>
</div>
</div>
        </div>
        </div>
    )
  return (
   <MainLayout>
    <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
    <Card contentCard={contentCard} className="w-[800px] h-[700px] "></Card>
    </div>
   </MainLayout>
  )
}

export default RectificationVehiculePage