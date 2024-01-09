import axios from "axios"
import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table"
import { MainLayout } from "../../../layouts/main"
import { useState } from "react"

function RectificationPrincipauxPage() {
  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];

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
    const dataRectifie =()=>{
     window.location.href = "/Rectification"
    }
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
onClick={dataRectifie}
headers={headers}
data={data}
></Table>
</div> 
        </div>
    )
  return (
    <MainLayout>
    <div  className="overflow-y-auto h-[500px] mt-14 mb-8 ">
    <Card contentCard={contentCard} className="w-[900px] h-[500px]"></Card>
    </div>
        </MainLayout>
  )
}

export default RectificationPrincipauxPage