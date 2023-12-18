import { Link } from "react-router-dom";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";
import { TiDocumentText } from "react-icons/ti";

function ConsultationVehicule() {
  const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
 
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Annuaire des vehicules sur RFonline</div>
<div className="mt-6 flex  justify-between ">
<Label text="Numéro véhicule" className="mt-2"></Label>
<Input type="text" className="w-96 ml-4 "></Input>
<Button text="Rechercher" className="ml-4"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-12">
<Link to="/ConsultationVehiculeNum" className="flex flex-row"><TiDocumentText  className="text-xl" /><Label text="Voir les carateristiques de ce vehicule"></Label></Link>
<Link to="/ConsultationHistoriqueVehicule" className="flex flex-row"><TiDocumentText  className="text-xl" /><Label text="Voir l'historique de ce vehicule"></Label></Link>
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

export default ConsultationVehicule