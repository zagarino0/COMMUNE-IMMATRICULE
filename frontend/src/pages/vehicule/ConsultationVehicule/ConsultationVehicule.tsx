import {  useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { useEffect, useState } from "react";
import axios from "axios";

function ConsultationVehicule() {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [DataSelected , setDataSelected] = useState([]);
  
  const [Data , setData] = useState([])
  const [numimmatriculation_v , setImmatriculation] = useState('');

  const handleSearchClient = async () => {
  
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post(`http://localhost:3500/vehicle/${numimmatriculation_v}`);
      setData(response.data);
      // Check the response status or do something with the response
      console.log("Server Response:", Data );
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = Data.map((item)=>[item.numimmatriculation_v  ,item.marque_v ,  item.puissance_v , item.poidsavide_v])
 

  const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedConsultationVehiculeData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  


  const handleTableRowClick = (rowIndex) => {
    setSelectedRowIndex(rowIndex);
    
    // Extract the property values from the data object
    const selectedRowData = Data[rowIndex];
  
    
    setDataSelected(selectedRowData);
    console.log('Selected Row Data:', DataSelected);
  };
  


  
  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);
 
    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/ConsultationVehiculeNum";
 
    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };
 
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Annuaire des vehicules sur RFonline</div>
<div className="mt-6 flex  justify-between ">
<Label text="Numéro véhicule" className="mt-2"></Label>
<Input type="text" className="w-96 ml-4 "
value={numimmatriculation_v}
onChange={(e)=> setImmatriculation(e.target.value)}
></Input>
<Button text="Rechercher" onClick={handleSearchClient} className="ml-4"></Button>
</div>
<div className="mt-10">
<Table
headers={headers}
data={data}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
></Table>
</div>
<div className="flex justify-between mt-12">
<button  onClick={handleButtonClick} className="flex flex-row"><TiDocumentText  className="text-xl" /><Label text="Voir les carateristiques de ce vehicule"></Label></button>
<button  className="flex flex-row"><TiDocumentText  className="text-xl" /><Label text="Voir l'historique de ce vehicule"></Label></button>
</div>
<div>
{/* to="/ConsultationHistoriqueVehicule" */}
</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ConsultationVehicule