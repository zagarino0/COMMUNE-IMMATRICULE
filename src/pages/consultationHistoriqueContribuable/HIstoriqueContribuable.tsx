import { Card } from "../../components/card/card"
import { MainLayout } from "../../layouts/main"

function HIstoriqueContribuable() {
    const contentCard = (
        <div>
Historique contribuable
        </div>
    )
  return (
    <div>
<MainLayout>
    <Card contentCard={contentCard} className='w-[800px] h-[700px] bg-white mt-24'></Card>
</MainLayout>
    </div>
)}

export default HIstoriqueContribuable