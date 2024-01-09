
import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main";

function ModifierMotDePassePage() {  
 const [ Mot_de_pass , setMot_de_pass] = useState<{
 ancien_mot_de_pass : string,
 nouveau_mot_de_pass : string,
 confirm_mot_de_pass : string   
 }>({
  ancien_mot_de_pass : "",
  nouveau_mot_de_pass : "",
  confirm_mot_de_pass : ""  
 })   

  const ContentCard = (
    <div className="flex justify-center items-center">
<div className="flex flex-col">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">
    Modification mot de passe 
  </div>
<div className="flex flex-col p-2  border-[#959824] mt-14">
<Input type="text"
value={Mot_de_pass.ancien_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , ancien_mot_de_pass : e.target.value })}}
placeholder="Ancien mot de passe" className="mt-6"></Input>

<Input type="text"

value={Mot_de_pass.nouveau_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , nouveau_mot_de_pass: e.target.value })}}
placeholder="Nouveau mot de passe" className="mt-6"></Input>

<Input type="text" placeholder="Resaisir le nouveau mot de passe "className="mt-4"

value={Mot_de_pass.confirm_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , confirm_mot_de_pass : e.target.value })}}
></Input>

<Button type="submit" text="Enregistrer" className="mt-6" ></Button>
</div>
</div>
    </div>
  )
return (
<MainLayout>
    <div className="mt-24">
   <Card contentCard={ContentCard} className="w-[500px] h-[500px]"></Card>
    </div>
</MainLayout>
  )
}

export default ModifierMotDePassePage