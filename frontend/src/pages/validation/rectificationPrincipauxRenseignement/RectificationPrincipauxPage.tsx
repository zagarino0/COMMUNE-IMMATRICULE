import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"

function RectificationPrincipauxPage() {
    const contentCard = (
        <div>
           
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4"> Rectification des principaux renseignement des contribuables</div> 
        </div>
    )
  return (
    <MainLayout>
    <div className="mt-24 p-6">
    <Card contentCard={contentCard} className="w-[1000px] h-[900px]"></Card>
    </div>
        </MainLayout>
  )
}

export default RectificationPrincipauxPage