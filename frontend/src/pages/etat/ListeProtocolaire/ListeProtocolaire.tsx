import { ImFilePdf } from "react-icons/im";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH1, TitleH3 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { SiMicrosoftexcel } from "react-icons/si";

function ListeProtocolaire() {
  const headers = ["Centre", "Tél Fixe", "Tél Mobile", "Mail"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
 
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className=""><TitleH1 text="CONSULTATION DE LA LISTE DES DIRECTIONS , SERVICES CENTRAUX ET CENTRES FISCAUX AU SEIN DE LA CUM" className="text-[#959824] text-sm border-b-2 border-[#959824] mt-2"></TitleH1></div>
<div className="mt-6 flex  justify-between ">
<Label text="Votre Recherche" className="mt-2" ></Label>
<Input type="text" className="w-96 ml-4 "></Input>
<Button text="Lister" className="ml-4"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-12">
<button className="flex flex-row"><SiMicrosoftexcel  className="mr-2 text-xl"/><TitleH3 text="Exporter en CSV" className="text-xs"></TitleH3></button>
<button  className="flex flex-row "><ImFilePdf  className="mr-2 text-xl"/><TitleH3 text="Telecharger la liste" className="text-xs"></TitleH3></button>

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


export default ListeProtocolaire