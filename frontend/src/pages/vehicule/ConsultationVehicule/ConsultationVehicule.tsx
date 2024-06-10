import {  useNavigate } from "react-router-dom";
import { Card } from "../../../components/card/card";
//import { Button } from "../../../components/common";
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
  const [searchTerm, setSearchTerm] = useState("")
  const [Data , setData] = useState([])
  const [reference_fiscal] = useState('');


  useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/vehicle')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  
  console.log(Data)
 const headers = ["RF propriétaire", "Numéro immatriculattion", "Marque", "Puissance", "Poids à vide "] ;
 const filteredData = Data.filter ((item:any)=>
  item.numero_immatriculation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const data = filteredData.map((item:any) =>
  [    
      item.nif_proprietaire,
      item.numero_immatriculation,
      item.marque , 
      item.puissance , 
      item.poids_a_vide , 

  ]);
  
 const handleSearch = (e:any) => {
  setSearchTerm(e.target.value);
};
  const navigate = useNavigate()// Initialize useHistory

  const [isStorageUpdated, setIsStorageUpdated] = useState(false);

{/**  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedConsultationVehiculeData", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
   */}

  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedVehiculeMJA", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
 

  const handleButtonHistoriqueClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);
 
    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/ConsultationHistoriqueVehicule";
 
    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };
 
  useEffect(() => {
    // Store Value data in localStorage
    localStorage.setItem("selectedVehiculeMJA", JSON.stringify(DataSelected ));
    // Reset the dummy state to trigger rerender
    console.log(DataSelected)
    setIsStorageUpdated(false);
  }, [DataSelected, isStorageUpdated]);
  
 

  const handleButtonClick = () => {
    // Trigger a rerender by updating the dummy state
    setIsStorageUpdated(true);
  
    // Use the selectedOption to determine the route to navigate to
    const routeToNavigate = "/ConsultationVehiculeNum";
  
    // Use navigate to navigate to the determined route
    navigate(routeToNavigate, { state: { DataSelected } });
  };
  
const handleTableRowClick = (rowIndex:any) => {
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
<div className="text-[#959824] text-4xl text-center font-semibold border-b-2 mt-2">ANNUAIRE DES VEHICULES SUR RFonline</div>
<div className="mt-6 flex  justify-center ">
<Label text="RF propriétaire" className="mt-2"></Label>
<Input type="text" className="w-96 ml-4 "
value={reference_fiscal}
onChange={(e)=> handleSearch (e.target.value)}
></Input>
{/**<Button text="Rechercher" onClick={handleSearchClient} className="ml-4"></Button>  */}
</div>
<div>
<Table className="border-2 mt-4"
headers={headers}
data={data}
onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}
></Table>
</div>
<div className="flex justify-between mt-10">
<button  onClick={handleButtonClick} className="flex flex-row"><TiDocumentText  className="text-xl text-[#1956e3]" /><Label text="Voir les carateristiques de ce vehicule"></Label></button>
<button onClick={handleButtonHistoriqueClick } className="flex flex-row"><TiDocumentText  className="text-xl text-[#1956e3]" /><Label text="Voir l'historique de ce vehicule"></Label></button>
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
  <div className="overflow-y-auto h-[540px] mt-20 mb-8 ">
  <Card contentCard={contentCard} className="w-[1100px]"></Card>
  </div>
 </MainLayout>
)
}

export default ConsultationVehicule