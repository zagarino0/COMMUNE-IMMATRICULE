import { useEffect } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main";
import { states } from "../../../states/states";

function ModifierMotDePassePage() {  
    useEffect(() => {
    states.selectedLink = "modifierlemotdepasse";
  }, []);

  const ContentCard = (
    <div className="flex justify-center items-center">
<div className="flex flex-col">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">
    Modification mot de passe 
  </div>
<div className="flex flex-col p-2  border-[#959824] mt-6">
<Input type="text" placeholder="Ancien mot de passe" className="mt-6"></Input>
<Input type="text" placeholder="Nouveau mot de passe" className="mt-6"></Input>
<Input type="text" placeholder="Resaisir le nouveau mot de passe "className="mt-4"></Input>
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