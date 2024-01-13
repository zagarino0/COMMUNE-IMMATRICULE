
import { MainLayout } from "../../../layouts/main"

import { Card } from "../../../components/card/card";

import Input from "../../../components/inputs";
import { Button } from "../../../components/common";
import { useState } from "react";
import axios from "axios";

function GererLesComptesOperateurDeVotreCentrePage() {
  const [ Compte , setCompte] = useState<{
   login_operatreur : string,
   nom : string ,
   prenom : string , 
   numero_matricule : string ,
   corps : string 
  }>({
    login_operatreur : "",
    nom : "" ,
    prenom : "" , 
    numero_matricule : "" ,
    corps : "" 
  })

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_BACKEND_SEARCH_URL' with your actual backend API endpoint for searching
      const response = await axios.get(``, Compte);
      
      // Handle the response from the server as needed
      console.log("Search results:", response.data);

      // Set the search results to state
      setCompte(response.data);
    } catch (error) {
      // Handle errors from the server
      console.error("Search failed:", error.message);
      alert("Search failed. Please try again.");
    }
  };
const contentCard =(
  <div className="flex justify-center items-center">
<div className="flex flex-col">
<div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Cestion compte opérateur - Centre fiscal Mahajanga A</div>

<div className="flex flex-col mt-6 p-12">

<Input type="text"
value={Compte.login_operatreur}
onChange={(e)=>{ setCompte({...Compte , login_operatreur: e.target.value})}}
placeholder="Login opérateur" className="mt-6 w-full"></Input>

<Input type="text"
value={Compte.nom}
onChange={(e)=>{ setCompte({...Compte , nom : e.target.value})}}
placeholder="Nom" className="mt-6 w-full"></Input>

<Input type="text"
value={Compte.prenom}
onChange={(e)=>{ setCompte({...Compte , prenom: e.target.value})}}
placeholder="Prénom" className="mt-6 w-full"></Input>

<Input type="text"
value={Compte.numero_matricule}
onChange={(e)=>{ setCompte({...Compte , numero_matricule: e.target.value})}}
placeholder="Numéro matricule" className="mt-6 w-full"></Input>

<Input type="text"
value={Compte.corps}
onChange={(e)=>{ setCompte({...Compte , corps: e.target.value})}}
placeholder="Corps" className="mt-6 w-full"></Input>


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