
import { useEffect, useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main";
import axios from "axios"
//import { API_ENDPOINTS } from "./config";

interface Mdp {
  code : string ,
 ancien_mot_de_pass : string,
 nouveau_mot_de_pass : string,
 confirm_mot_de_pass : string   
 }

function ModifierMotDePassePage() {  
  
 const [ Mot_de_pass , setMot_de_pass] = useState<Mdp>({
  code : "",
  ancien_mot_de_pass : "",
  nouveau_mot_de_pass : "",
  confirm_mot_de_pass : ""  
 });
 
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState<string | null>(null);

 const handleChangePassword = async () => {
  if (Mot_de_pass.nouveau_mot_de_pass !== Mot_de_pass.confirm_mot_de_pass) {
    setError("Les nouveaux mots de passe ne correspondent pas");
    return;
  }
  setLoading(true)
    const ChangePassword = {
        "code" : Mot_de_pass.code,
        "password": Mot_de_pass.ancien_mot_de_pass,
        "newPassword": Mot_de_pass.nouveau_mot_de_pass,    
    }

  try {
    const response = await axios.put('http://localhost:3500/user/password/update', ChangePassword);
    // Handle the response from the server as needed
    console.log("Password change successful:", response.data);
    alert(`Mot de passe changer  pour l'utilisateur ${Mot_de_pass.code}`)
    // Reset the form after successful password change
    setMot_de_pass({
      code : "",
      ancien_mot_de_pass: "",
      nouveau_mot_de_pass: "",
      confirm_mot_de_pass: "",
    });
  } catch (error) {
    // Handle errors from the server
   // console.error("Password change failed:", error.message);
    alert(
      "La modification du mot de passe a échoué. Veuillez vérifier vos informations d'identification et réessayer."
    );
  }
  finally{setLoading(false)}
};
  const ContentCard = (
    <div className="flex justify-center items-center">
<div className="flex flex-col">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">
    Modification mot de passe 
  </div>
<div className="flex flex-col p-2  border-[#959824] mt-14">
<Input type="text"
value={Mot_de_pass.code}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , code : e.target.value })}}
placeholder="Code" className="mt-6"></Input>

<Input type="password"
value={Mot_de_pass.ancien_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , ancien_mot_de_pass : e.target.value })}}
placeholder="Ancien mot de passe" className="mt-6"></Input>

<Input type="password"

value={Mot_de_pass.nouveau_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , nouveau_mot_de_pass: e.target.value })}}
placeholder="Nouveau mot de passe" className="mt-6"></Input>

<Input type="password" placeholder="Resaisir le nouveau mot de passe "className="mt-4"

value={Mot_de_pass.confirm_mot_de_pass}
onChange={(e)=>{ setMot_de_pass({...Mot_de_pass , confirm_mot_de_pass : e.target.value })}}
></Input>

<Button type="submit" text="Enregistrer" onClick={handleChangePassword} className="mt-6" ></Button>
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


//changement mot d passe efa madeha tsara