
import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main"

function AjouterUnCompteOperateurPage() {
   const [Compte , setCompte ] = useState<{
   nom : string ,
   prenom : string,
   numero_matricule: string,
   type_operateur: string,
   login : string ,
   password : string ,
   confirm_password : string,
   }>({
    nom : "" ,
    prenom : "",
    numero_matricule: "",
    type_operateur: "",
    login : "" ,
    password : "" ,
    confirm_password : "",

   })
    const contentCard =(
      <div className="flex items-center justify-center ">
<div className="flex flex-col">
<div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Ajout compte un opérateur </div>

  <div className="flex flex-col mt-6 p-12 ml-24">

<Input type="text"
value={Compte.nom}
onChange={(e)=>{setCompte({...Compte , nom : e.target.value })}}
placeholder="Nom" className="mt-6"></Input>

<Input type="text"
value={Compte.prenom}
onChange={(e)=>{setCompte({...Compte , prenom : e.target.value })}}
placeholder="Prénom" className="mt-6"></Input>

<Input type="text" 
value={Compte.numero_matricule}
onChange={(e)=>{setCompte({...Compte , numero_matricule : e.target.value })}}
placeholder="Numéro matricule" className="mt-6"></Input>

<Input type="text"
value={Compte.type_operateur}
onChange={(e)=>{setCompte({...Compte , type_operateur : e.target.value })}}
placeholder="Type opérateur" className="mt-6"></Input>

<Input type="text" 
value={Compte.login}
onChange={(e)=>{setCompte({...Compte , login : e.target.value })}}
placeholder="Login" className="mt-6"></Input>

<Input type="password"
value={Compte.password}
onChange={(e)=>{setCompte({...Compte , password : e.target.value })}}
placeholder="Mot de passe" className="mt-6"></Input>

<Input type="password" 
value={Compte.confirm_password}
onChange={(e)=>{setCompte({...Compte , confirm_password : e.target.value })}}
placeholder="Resaisir le mot de passe" className="mt-6"></Input>

<Button type="submit" text="Enregistrer" className="mt-6 w-96"></Button>

  </div>
</div>
</div>
    
    )  
  return (
    <MainLayout>
        <div className="overflow-y-auto h-[500px] mt-14 mb-8">
        <Card className="w-[800px] h-[800px] flex justify-center" contentCard={contentCard}></Card>
        </div>
    </MainLayout>
  )
}

export default AjouterUnCompteOperateurPage