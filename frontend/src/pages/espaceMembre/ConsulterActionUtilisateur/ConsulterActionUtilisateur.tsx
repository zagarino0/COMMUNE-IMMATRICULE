import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";

function ConsulterActionUtilisateur() {
  const headers = ["NIF", "Raison social", "Nom commercial", "Forme juridique"];
  const data = [
    ["none", "none", "none", "none"],
   
  ];
  const contentCard=(
      <div >

<div className="flex justify-center items-center mt-4" >
<div className="mt-4 flex flex-col mx-6">
<div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2">Consutation action utilisateur</div>
<div className="mt-6 flex flex-col  ">

<div className="flex justify-between">
  <Label text="Login"></Label>
<Input type="text" placeholder="Login" className="mt-6 w-full"></Input>*

</div>
<div className=" flex justif">
  <Label text="Date debut"></Label>
<Input type="date" placeholder="Resaisir le mot de passe" className="mt-6 w-full"></Input>

</div>
<div className="">
  <Label text="Date fin"></Label>
<Input type="date" placeholder="Resaisir le mot de passe" className="mt-6 w-full"></Input>

</div>
<Button text="Rechercher" className="mt-6"></Button>
</div>
<div className="mt-10">
<Table

headers={headers}
data={data}
></Table>
</div>
<div>

</div>
</div>
      </div>
      </div>
  )
return (
 <MainLayout>
  <Card contentCard={contentCard} className="w-[800px] h-[600px] mt-24"></Card>
 </MainLayout>
)
}

export default ConsulterActionUtilisateur