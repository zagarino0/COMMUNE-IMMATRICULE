import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main"

function RectificationVehiculePage() {
    const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];
    const dataRectifie =()=>{
      window.location.href = "/RectificationVehiculeRF"
     }
    const contentCard=(
        <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des principaux renseignements des contribuables concernant ses véhicules</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
<Button text="Rechercher"></Button>
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