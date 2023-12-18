import { useEffect } from "react";
import { MainLayout } from "../../../layouts/main"
import { states } from "../../../states/states";
import { Card } from "../../../components/card/card";

import Input from "../../../components/inputs";
import { Button } from "../../../components/common";

function GererLesComptesOperateurDeVotreCentrePage() {
  useEffect(() => {
    states.selectedLink = "ajoutcompteoperateur";
  }, []);
const contentCard =(
  <div className="flex justify-center items-center">
<div className="flex flex-col">
<div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Cestion compte opérateur - Centre fiscal Mahajanga A</div>

<div className="flex flex-col mt-6 p-12">
<Input type="text" placeholder="Login opérateur" className="mt-6 w-full"></Input>
<Input type="text" placeholder="Nom" className="mt-6 w-full"></Input>
<Input type="text" placeholder="Prénom" className="mt-6 w-full"></Input>
<Input type="text" placeholder="Numéro matricule" className="mt-6 w-full"></Input>
<Input type="text" placeholder="Corps" className="mt-6 w-full"></Input>

<div className="flex justify-between">
<Button type="submit" text="Desactiver" className="mt-6 "></Button>
<Button type="submit" text="Activer" className="mt-6 "></Button>
<Button type="submit" text="Privileger" className="mt-6 "></Button>
<Button type="submit" text="Supprimer" className="mt-6 "></Button>
</div>

</div>
</div>
</div>

)  
return (
<MainLayout>
    <div className="overflow-y-auto h-[500px] mt-14 mb-8">
    <Card className="w-[800px] h-[600px]" contentCard={contentCard}></Card>
    </div>
</MainLayout>
)
}

export default GererLesComptesOperateurDeVotreCentrePage