import { Card } from "../../components/card/card"
import Input from "../../components/inputs";
import { Label } from "../../components/label/label";
import Table from "../../components/table/table";
import { MainLayout } from "../../layouts/main"

function RectificationVehiculePage() {
    const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];
    const contentCard=(
        <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des principaux renseignements des contribuables concernant ses véhicules</div>
<div className="mt-6 flex flex-row justify-between ">
<Label text="Votre recherche :" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>

</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
</div>
        </div>
        </div>
    )
  return (
   <MainLayout>
    <Card contentCard={contentCard} className="w-[800px] h-[800px] mt-24"></Card>
   </MainLayout>
  )
}

export default RectificationVehiculePage