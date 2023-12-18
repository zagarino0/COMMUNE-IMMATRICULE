import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { TitleH2 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";

function RectificationVehicule() {
  const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Rectification des véhicules des contribuables ayant la Référence Fiscaln: RF</div>
<TitleH2 text="Principaux renseignements sur ce contribuables" className="mt-6"></TitleH2>
<div className="mt-6 flex  justify-between ">
<Label text="Raison social" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="flex justify-between mt-6">
<Label text="Type"></Label>
<div className="flex justify-between w-[350px]">
<Checkbox checked label="Personne Physique" onChange={()=>window}></Checkbox>
<Checkbox checked label="Personne Moral" onChange={()=>window}></Checkbox>
</div>

</div>
<div className="mt-6 flex  justify-between ">
<Label text="Activités" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex  justify-between ">
<Label text="Précision sur les activités" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6 flex  justify-between ">
<Label text="Adresse (siège)" className="mt-4"></Label>
<Input type="text" className="w-96  "></Input>
</div>
<div className="mt-6">
<Button text="Rechercher"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div className="flex justify-between mt-6">
<Button text="Ajouter un nouveau vehicule"></Button>
<Button text="Supprimer tous les vehicules"></Button>
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
  <Card contentCard={contentCard} className="w-[800px] h-[800px] "></Card>
  </div>
 </MainLayout>
)
}
export default RectificationVehicule