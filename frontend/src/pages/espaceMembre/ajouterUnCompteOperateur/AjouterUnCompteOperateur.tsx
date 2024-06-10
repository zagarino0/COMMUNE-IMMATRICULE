
import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main"
import axios from "axios";
import Select from "../../../components/inputs/selectInput";

function AjouterUnCompteOperateurPage() {
  const options = [
    { value: 'Maire', label: 'Maire' },
    { value: 'Directeur financier', label: 'Directeur financier' },
    { value: 'Chef de service recette', label: 'Chef de service recette' },
    { value: 'Directeur de gestion', label: 'Directeur de gestion' },
    { value: 'Directeur de contrôle', label: 'Directeur de contrôle' },
    { value: 'Directeur de Recuvrement', label: 'Directeur de Recouvrement' },
    { value: 'Chef de division', label: 'Chef de division' },
    { value: 'Regisseur', label: 'Regisseur' },
    { value: 'Percepteur', label: 'Percepteur' },
    
    // Ajoutez vos options ici
  ];
   const [Compte , setCompte ] = useState<{
   nom : string ,
   prenom : string,
   numero_matricule: string,
   type_operateur: string,
   code : string ,
   pwd : string ,
   confirm_password : string,
   }>({
    nom : "" ,
    prenom : "",
    numero_matricule: "",
    type_operateur: "",
    code : "" ,
    pwd : "" ,
    confirm_password : "",

   })

   const handleRegister = async () => {
    if (Compte.pwd !== Compte.confirm_password) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    try {
      // Replace 'YOUR_BACKEND_API_URL' with your actual backend API endpoint for registration
      const response = await axios.post('http://localhost:3500/user/register/', Compte);

      // Handle the response from the server as needed
      console.log("Registration successful:", response.data);
   alert("compte ajouté");
      // Reset the form after successful registration
      setCompte({
        nom: "",
        prenom: "",
        numero_matricule: "",
        type_operateur: "",
        code: "",
        pwd: "",
        confirm_password: "",
      });
    } catch (error) {
      // Handle errors from the server
      alert("Registration failed. Please try again.");
    }
  };
    const contentCard =(
      <div className="flex items-center justify-center ">
<div className="flex flex-col">
<div className="text-[#959824] text-4xl text-center font-semibold border-b-2  mt-6">AJOUTER UN COMPTE  OPERATEUR </div>

  <div className="flex flex-col mt-4 ml-24">

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
placeholder="Numéro matricule" className="mt-6 flex-col"></Input>

<Select options={options} value={Compte.type_operateur} onChange={(e)=>{setCompte({...Compte , type_operateur : e })}} className="mt-6"></Select>
<Input type="text" 
value={Compte.code}
onChange={(e)=>{setCompte({...Compte , code : e.target.value })}}
placeholder="Login" className="mt-6"></Input>

<Input type="password"
value={Compte.pwd}
onChange={(e)=>{setCompte({...Compte , pwd : e.target.value })}}
placeholder="Mot de passe" className="mt-6"></Input>

<Input type="password" 
value={Compte.confirm_password}
onChange={(e)=>{setCompte({...Compte , confirm_password : e.target.value })}}
placeholder="Resaisir le mot de passe" className="mt-6"></Input>

<Button type="submit" text="Enregistrer" onClick={handleRegister} className="mt-6 text-2xl w-96"></Button>

  </div>
</div>
</div>
    
    )  
  return (
    <MainLayout>
        <div className="overflow-y-auto h-[500px] mt-14">
        <Card className="w-[1200px] bg-white flex justify-center" contentCard={contentCard}></Card>
        </div>
    </MainLayout>
  )
}

export default AjouterUnCompteOperateurPage