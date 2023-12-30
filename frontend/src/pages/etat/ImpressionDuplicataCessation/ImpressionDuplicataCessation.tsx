import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import Table from "../../../components/table/table";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { TiDocumentText } from "react-icons/ti";
import { TitleH1, TitleH3 } from "../../../components/title";

function ImpressionDuplicataCessation() {
  const headers = ["RF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="IMPRESSION DU DUPLICATA DE LA CESSATION"></TitleH1></div>
<div className="mt-6 flex flex-col  ">

<div className="flex justify-between mt-6">
  <Label text="Référence Fiscal"></Label>
<Input type="text"  className=" w-40"></Input>

</div>
<Button text="Trouver" className="mt-6"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-start mt-6">
 
 <Link to="#"  className="flex flex-row "><TiDocumentText  className="mr-2 text-xl"/><TitleH3 text="Imprimer l'Attestation de Cessation " className="text-xs"></TitleH3></Link>
 </div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ImpressionDuplicataCessation