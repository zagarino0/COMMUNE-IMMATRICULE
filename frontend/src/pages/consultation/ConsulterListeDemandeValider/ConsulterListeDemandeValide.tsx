import { Link } from "react-router-dom"
import { Card } from "../../../components/card/card"
import { MainLayout } from "../../../layouts/main"
import { TiDocumentText } from "react-icons/ti"
import { ImFilePdf } from "react-icons/im"
import { SiMicrosoftexcel } from "react-icons/si"
import { TitleH3 } from "../../../components/title"
import Table from "../../../components/table/table"

function ConsulterListeDemandeValide() {
 const HeaderTable = [ "Référence" , "Raison social"]
 const DataTable = [["none", "none"]]
  const contentCard = (
    <div className="m-4">
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Liste des démandes à valider</div>
       <div className="flex flex-col m-4">

        <div className="mt-6">
<Table headers={HeaderTable} data={DataTable}>

</Table>
        </div>
       </div>

<div className="flex justify-between mt-6 m-4">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></Link>

</div>
    </div>
)
return (
<MainLayout>
<div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
<Card contentCard={contentCard} className="w-[1000px] h-[500px] "></Card> 
</div>
</MainLayout>
)
}

export default ConsulterListeDemandeValide