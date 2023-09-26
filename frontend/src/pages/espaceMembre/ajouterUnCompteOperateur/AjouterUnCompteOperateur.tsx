import { useEffect } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main"
import { states } from "../../../states/states";

function AjouterUnCompteOperateurPage() {
    useEffect(() => {
        states.selectedLink = "ajoutcompteoperateur";
      }, []);
    const contentCard =(
      <div className="flex justify-center items-center">
<div className="flex flex-col">
<div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Ajout compte opérateur - Centre fiscal Mahajanga A</div>

  <div className="flex flex-col mt-6 p-12">
<Input type="text" placeholder="Nom" className="mt-6"></Input>
<Input type="text" placeholder="Prénom" className="mt-6"></Input>
<Input type="text" placeholder="Numéro matricule" className="mt-6"></Input>
<Input type="text" placeholder="Type opérateur" className="mt-6"></Input>
<Input type="text" placeholder="Login" className="mt-6"></Input>
<Input type="password" placeholder="Mot de passe" className="mt-6"></Input>
<Input type="password" placeholder="Resaisir le mot de passe" className="mt-6"></Input>
<Button type="submit" text="Enregistrer" className="mt-6"></Button>
  </div>
</div>
</div>
    
    )  
  return (
    <MainLayout>
        <div className="m-20">
        <Card className="w-[800px] h-[800px]" contentCard={contentCard}></Card>
        </div>
    </MainLayout>
  )
}

export default AjouterUnCompteOperateurPage