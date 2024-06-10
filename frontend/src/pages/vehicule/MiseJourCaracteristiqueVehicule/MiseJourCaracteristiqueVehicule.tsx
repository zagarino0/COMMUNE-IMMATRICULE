import axios from "axios";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";

function MiseJourCaracteristiqueVehicule() {
  const dataRectifie =()=>{
    window.location.href = "/MJAVehicule"
   }


   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
   const [DataSelected , setDataSelected] = useState([]);
   const [searchTerm, setSearchTerm] = useState("")

   const [Data , setData] = useState([])
   const [immatriculation , setImmatriculation] = useState('');



   useEffect(() => {
    // Récupérer les données depuis le backend
    axios.get('http://localhost:3500/vehicle')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  
  console.log(Data)
   const headers = ["Numéro immatriculattion", "Marque", "Puissance", "Poids à vide "];
  // const data = Data.map((item : any )=>[item.numero_immatriculation  ,item.marque ,  item.puissance , item.poids_a_vide])
  
  const filteredData = Data.filter ((item:any)=>
  item.numero_immatriculation && item.numero_immatriculation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const data = filteredData.map((item:any)=>
  [
   item.numero_immatriculation,
   item.marque ,
   item.puissance,
   item.poids_a_vide
 
  ]);
 
  const handleSearch = (e:any) => {
   setSearchTerm(e.target.value);
 };
 
 {/**const handleSearchButtonClick = () => {
   console.log(filteredData);
 }
  */}
// selection data 

const navigate = useNavigate()// Initialize useHistory

const [isStorageUpdated, setIsStorageUpdated] = useState(false);

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
  const routeToNavigate = "/MJAVehicule";

  // Use navigate to navigate to the determined route
  navigate(routeToNavigate, { state: { DataSelected } });
};
{/**const handleButtonHistoriqueClick = () => {
  // Trigger a rerender by updating the dummy state
  setIsStorageUpdated(true);

  // Use the selectedOption to determine the route to navigate to
  const routeToNavigate = "/ConsultationHistoriqueVehicule";

  // Use navigate to navigate to the determined route
  navigate(routeToNavigate, { state: { DataSelected } });
};
 */}



const handleTableRowClick = (rowIndex:any) => {
setSelectedRowIndex(rowIndex);

// Extract the property values from the data object
const selectedRowData = Data[rowIndex]


setDataSelected(selectedRowData);
console.log('Selected Row Data:', DataSelected);
};


 // Fonction pour faire un  recherche d'un client avec référence fiscal
 {/**
const handleSearchVehicule = async () => {
 
 try {
   // Make a POST request to your server endpoint
   const response = await axios.get(`http://localhost:3500/vehicle/${immatriculation}`);
   setData(response.data);
   // Check the response status or do something with the response
   console.log("Server Response:", Data );
 } catch (error) {
   // Handle errors
   console.error("Error:", error);
 }
};

*/}



  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  text-center font-semibold border-b-2  mt-2">MISE A JOUR DES CARACTERISTIQUES DES VEHICULES</div>
<div className="mt-6">

  
             {/**card recherche  */} 
             <div className="mt-6 flex  justify-center ">
                        <Label text="Numéro immatriculattion" className="mt-4" ></Label>
                        <Input type="text" className="w-96 ml-5 "placeholder="Numéro immatriculattion EX: 7878 TBA" onChange={handleSearch}></Input>
                     {/**   <Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
                    </div>
{/**
 * <Label text="Numéro véhicules" className="mt-2" ></Label>
<Input type="text" className="w-96 ml-4 "
value={immatriculation}
onChange={(e)=> setImmatriculation(e.target.value)}
></Input>
<Button onClick={handleSearchVehicule} text="Rechercher" className="ml-4"></Button>
 */}

</div>
<div className="mt-8 overflow-y-auto flex justify-center">
<Table  className=" border-x-2  items-center mt-4 w-[950px]"

headers={headers}data={data }onClick = {handleTableRowClick}selectedRowIndex={selectedRowIndex}></Table>
</div>
<div>
{/**<button onClick={handleButtonHistoriqueClick } className="flex flex-row"><TiDocumentText  className="text-xl text-[#1956e3]" /><Label text="Voir l'historique de ce vehicule"></Label></button> */}
<button  className="flex flex-row mt-4 " onClick={handleButtonClick}><TiDocumentText  className="mr-2 text-[#1956e3] text-xl"/><TitleH3 text="Voir les détails du Contribuable " className="text-xs"></TitleH3></button>
</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
  <Card contentCard={contentCard} className="w-[1300px]  "></Card>
  </div>
 </MainLayout>
)
}

export default MiseJourCaracteristiqueVehicule