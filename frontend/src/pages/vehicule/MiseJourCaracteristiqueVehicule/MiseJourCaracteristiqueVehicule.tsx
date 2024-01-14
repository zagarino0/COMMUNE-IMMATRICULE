import axios from "axios";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import { useState } from "react";

function MiseJourCaracteristiqueVehicule() {
  const dataRectifie =()=>{
    window.location.href = "/MJAVehicule"
   }


   const [Data , setData] = useState([])
   const [immatriculation , setImmatriculation] = useState('');
 // Fonction pour faire un  recherche d'un client avec référence fiscal
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



const headers = ["Numero", "Marque", "Type", "Genre"];
 const data = Data.map((item)=>[item.numimmatriculation_v , item.marque_v , item.type_v , item.genre_v ])
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Mise à jour des caractéristique des véhicules</div>
<div className="mt-6 flex  justify-between ">
<Label text="Numéro véhicules" className="mt-2" ></Label>
<Input type="text" className="w-96 ml-4 "
value={immatriculation}
onChange={(e)=> setImmatriculation(e.target.value)}
></Input>
<Button onClick={handleSearchVehicule} text="Rechercher" className="ml-4"></Button>
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

export default MiseJourCaracteristiqueVehicule