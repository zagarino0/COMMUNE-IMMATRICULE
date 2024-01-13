import axios from "axios";
import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"
import { useState } from "react";

function RectificationVehiculePage() {
   
    const dataRectifie =()=>{
      window.location.href = "/RectificationVehiculeRF"
     }

     const [Data , setData] = useState([])
     const [numimmatriculation_v , setImmatriculation] = useState('');
   // Fonction pour faire un  recherche d'un client avec référence fiscal
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
 const headers = ["Numéro immatriculattion", "Marque", "Puissance", "Poids à vide "];
 const data = Data.map((item)=>[item.numimmatriculation_v  ,item.marque_v ,  item.puissance_v , item.poidsavide_v])
 const contentCard=(
        <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des principaux renseignements des contribuables concernant ses véhicules</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" 
value={numimmatriculation_v}
onChange={(e)=>setImmatriculation(e.target.value)}
className="w-96  "></Input>
<Button onClick={handleSearchClient} text="Rechercher"></Button>
</div>
<div className="mt-10">
<Table
onClick={dataRectifie}
headers={headers}
data={data}
></Table>
</div>
<div>
  
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

export default RectificationVehiculePage