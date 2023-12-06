import { Card } from "../../../components/card/card"
import { Button } from "../../../components/common"
import Input from "../../../components/inputs"
import { Label } from "../../../components/label/label"
import Table from "../../../components/table/table"
import { MainLayout } from "../../../layouts/main"

function RectificationPrincipauxPage() {
  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
    const data = [
      ["none", "none", "none", "none"],
     
    ];

    const dataRectifie =()=>{
     window.location.href = "/Rectification"
    }
    const contentCard = (
        <div className="m-4">
           
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 "> Rectification des principaux renseignement des contribuables </div>
            <div className="mt-6 flex flex-row justify-between ">
<Label text="RF" className="mt-4"></Label>
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
        </div>
    )
  return (
    <MainLayout>
    <div className=" mt-14 mb-8">
    <Card contentCard={contentCard} className="w-[800px] h-[500px]"></Card>
    </div>
        </MainLayout>
  )
}

export default RectificationPrincipauxPage