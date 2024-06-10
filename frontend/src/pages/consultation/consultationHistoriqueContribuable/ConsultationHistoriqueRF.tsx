//import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";
import { TitleH3 } from "../../../components/title";
import { ImFilePdf } from "react-icons/im";
import { SiMicrosoftexcel } from "react-icons/si";


function ConsultationHistoriqueRF() {

    const contentCard = (
        <div className="m-4">
            <div className="text-[#959824] text-4xl text-center font-semibold border-b-2 mt-2 m-4">CONSULTATION DE L'HISTORIQUE DU CONTRIBUABLE AYANT COMME RF : référence fiscal</div>
           <div className="flex flex-col m-4">

  
           </div>

<div className="flex justify-between mt-6">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl text-[#19e341]"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl text-[#e32019]"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><TiDocumentText  className="mr-2 text-[#1956e3] text-xl"/><TitleH3 text="Voir ce contribuable en détail " className="text-xs"></TitleH3></button>

</div>
        </div>
    )
  return (
    <MainLayout>
   <div className="overflow-y-auto h-[500px] mt-8 ">
   <Card contentCard={contentCard} className="w-[1000px] "></Card> 
   </div>
   </MainLayout>
  )
}

export default ConsultationHistoriqueRF