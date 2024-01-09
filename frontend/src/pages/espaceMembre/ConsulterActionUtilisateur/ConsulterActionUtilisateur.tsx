import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import Table from "../../../components/table/table";
import { MainLayout } from "../../../layouts/main";

function ConsulterActionUtilisateur() {
  const [Action , setACtion] = useState<{
   login: string,
   date_debut : string,
   date_fin: string,

  }>({
login: "",
   date_debut : "",
   date_fin: "",
   
  })
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

<div className="flex justify-between mt-6">
  <Label text="Login"></Label>
<Input type="text" 
value={Action.login}
onChange={(e)=>{setACtion({...Action , login : e.target.value})}}
placeholder="Login" className=" w-40"></Input>

</div>
<div className=" flex justify-between mt-6">
  <Label text="Date debut"></Label>
<Input type="date" 
value={Action.date_debut}
onChange={(e)=>{setACtion({...Action , date_debut : e.target.value})}}
 className=" w-40"></Input>

</div>
<div className="flex justify-between mt-6">
  <Label text="Date fin"></Label>
<Input type="date" 
value={Action.date_fin}
onChange={(e)=>{setACtion({...Action , date_fin : e.target.value})}}
className=" w-40"></Input>

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
  <div className="overflow-y-auto h-[500px] mt-14 mb-8">
  <Card contentCard={contentCard} className="w-[800px] h-[600px] "></Card>
  </div>
 </MainLayout>
)
}

export default ConsulterActionUtilisateur