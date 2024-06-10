import axios from "axios";
import { Card } from "../../../components/card/card"
//import { Button } from "../../../components/common";
//import { CgDanger } from "react-icons/cg";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TitleH3 } from "../../../components/title";
import { TiDocumentText } from "react-icons/ti";
import DateFormatConverter from "../../../components/date/Date";

function RectificationVehiculePage() {
   
   

     const [selectedRowIndex, setSelectedRowIndex] = useState(null);
     const [DataSelected , setDataSelected] = useState([]);
     const [searchTerm, setSearchTerm] = useState("")
   

     const [Data , setData] = useState([])
//      const [numimmatriculation_v , setImmatriculation] = useState('');
//    // Fonction pour faire un  recherche d'un client avec référence fiscal
//  const handleSearchClient = async () => {
  
//    try {
//     console.log(numimmatriculation_v);
//      // Make a POST request to your server endpoint
//      const response = await axios.post(`http://localhost:3500/vehicle/${numimmatriculation_v}`);
//      setData(response.data);
//      // Check the response status or do something with the response
//      console.log("Server Response:", Data );
//    } catch (error) {
//      // Handle errors
//      console.error("Error:", error);
//      alert('Vehicule non trouvé')
//    }
//  };

 
 useEffect(() => {
  // Récupérer les données depuis le backend
  axios.get('http://localhost:3500/etat/contribuable/valide')
    .then((response) => setData(response.data))
    .catch((error) => console.error(error));
}, []);

console.log(Data)
 const headers = ["Ref démandé", "Raison social",  "Référence Fiscal" , "type" , " Date autorisation" , "Régime fiscal" , "Forme juridique" , "Date de création" , "RIB"];
// const data = Data.map((item)=>[item.raison_social ,item.reference_fiscal ,  item.type, item.date_creation])
 const filteredData = Data.filter ((item:any)=>
item.reference_fiscal &&  item.reference_fiscal.toLowerCase().includes(searchTerm.toLowerCase())
 );
 
 const data = filteredData.map((item:any)=>
 [ item.id , 
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
} */}

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
  
<div className="text-[#959824] text-2xl  font-semibold border-b-2 text-center  mt-2">RECTIFICATION DES PRINCIPAUX RENSEIGNEMENT DES CONTRIBUABLES CONCERNANT SES VEHICULES</div>
<div className="mt-8 px-20">
    <p className="font-[Courier]">Veuillez saisir le RF du Contribuable: </p>
</div>
         
    {/**card recherche  */} 
             <div className="mt-6 flex  justify-center ">
                        <Label text="Reférence fiscal" className="mt-4" ></Label>
                        <Input type="text" className="w-96 ml-5 "placeholder="Reférence fiscal EX: 000015" onChange={handleSearch}></Input>
                        {/**<Button text="Rechercher" className="ml-4" onClick={handleSearchButtonClick}></Button> */}
                    </div>


{/* <div className="mt-6 flex flex-row justify-between ">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" 
value={numimmatriculation_v}
onChange={(e)=>setImmatriculation(e.target.value)}
className="w-96  "></Input>
<Button onClick={handleSearchClient} text="Rechercher"></Button>
</div> */}
<div className="mt-8 overflow-y-auto flex justify-center">
<Table className="border-x-2  w-[1000px]"
headers={headers}
data={data}

onClick={handleTableRowClick}
selectedRowIndex={selectedRowIndex}

></Table>
</div>
<div>
  
<button  className="flex flex-row mt-4 px-8 mb-4  " onClick={handleButtonClick}><TiDocumentText  className="mr-2 text-[#1956e3] font-semibolde text-2xl"/><TitleH3 text="Voir les détails du Contribuable " className="text-xs"></TitleH3></button>
</div>
</div>
        </div>
        </div>
    )
  return (
   <MainLayout>
    <div className="overflow-y-auto  h-[550px] mt-10">
    <Card contentCard={contentCard} className="w-[1500px] "></Card>
    </div>
   </MainLayout>
  )
}

export default RectificationVehiculePage