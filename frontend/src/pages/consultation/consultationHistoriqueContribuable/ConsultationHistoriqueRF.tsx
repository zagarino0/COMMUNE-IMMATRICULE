import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";


function ConsultationHistoriqueRF() {

    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2 m-4">Consultation de l'historique du contribuable ayant comme RF : référence fiscal</div>
           <div className="flex flex-col m-4">

  
           </div>

<div className="flex justify-between mt-6">
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

export default ConsultationHistoriqueRF