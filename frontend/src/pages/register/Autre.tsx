import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { Label } from "../../components/label/label";
import { TitleH1, TitleH3 } from "../../components/title";
import { Layout } from "./Layout";
import Checkbox from "../../components/common/checkbox";
import { useState } from "react";
import axios from "axios";

function Autre() {
  let navigate = useNavigate();
  const location = useLocation(); 
    
  const registrationData = localStorage.getItem("registrationData");
  const parsedDataRegistre = JSON.parse(registrationData as string);

  const activiteData = localStorage.getItem("activitePersMoralData");
  const parsedDataActivite = JSON.parse(activiteData as string);

  const siegeData = localStorage.getItem("siegePersMoraleData");
  const parsedDataSiege = JSON.parse(siegeData as string);

  const etablissementData = localStorage.getItem("etablissementData");
  const parsedDataEtablissement = JSON.parse(etablissementData as string);

  const dirigeantData = localStorage.getItem("dirigeantData");
  const parsedDataDirigeant = JSON.parse(dirigeantData as string);
  
  const interlocuteurData = localStorage.getItem("interlocuteurData");
  const parsedDataInterlocuteur = JSON.parse(interlocuteurData as string);

  const actionnaireData = localStorage.getItem("associeData");
  const parsedDataActionnaire = JSON.parse(actionnaireData as string);


  const [Autre , setAutre] = useState<{
    id_contribuable: string,
    information_mail: boolean,
    depaseement_12_mois: boolean,
    certification: boolean
  }>({
    id_contribuable: parsedDataRegistre.id,
    information_mail: false,
    depaseement_12_mois: false,
    certification: false
  }) 


const HandleClick = async  () =>{


if (parsedDataRegistre){

try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/contribuable", parsedDataRegistre);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);
  alert("contribuable ajouté")
 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
  alert("erreur contribuable")
}
}

if(parsedDataActivite){

  const Activite = {    
    "id_contribuable": parsedDataActivite.id_contribuable ,
    "activite": parsedDataActivite.activite ,
    "precision_activite": parsedDataActivite.precision_activite,
    "numero_statistique": parsedDataActivite.numero_statistique,
    "date_delivrance_statistique": parsedDataActivite.date_delivrance_statistique,
    "registre_commerce": parsedDataActivite.registre_commerce,
    "date_registre_commerce": parsedDataActivite.date_registre_commerce,
    "debut_exercice": parsedDataActivite.debut_exercice,
    "cloture_exercice": parsedDataActivite.cloture_exercice,
    "nif": parsedDataActivite.nif,

  }
try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/activite", Activite);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 alert("Activité ajouté")
} catch (error) {
  // Handle errors
  console.error("Error:", error);
  alert("Erreur activité")
}

}

if(parsedDataSiege){

try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/siege", parsedDataSiege);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 alert("Siège ajouté")
} catch (error) {
  // Handle errors
  console.error("Error:", error);
  alert("Error Siège")
}
}

if(Autre){

try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/autre", Autre);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);
 alert("Autre ajouté")
 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
  alert("Erreur autre")
}
}
if(parsedDataDirigeant){
  
  const DirigeaantData = { "dirigeant": parsedDataDirigeant}; 
  try {
    // Make a POST request to your server endpoint
    const response = await axios.post("http://localhost:3500/dirigeant", DirigeaantData);
  
    // Check the response status or do something with the response
    console.log("Server Response:", response.data);
  
   alert("Dirigeant ajouté")
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    alert("Erreur dirigeant")
  }

  }

  if(parsedDataEtablissement){

  const Etablissement = {
    "etablissement" : parsedDataEtablissement
  }
    try {
      // Make a POST request to your server endpoint
      const response = await axios.post("http://localhost:3500/etablissement", Etablissement);
    
      // Check the response status or do something with the response
      console.log("Server Response:", response.data);
    
     alert("Etablissement ajouté")
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("Error Etablissement")
    }
    }
  
    if(parsedDataInterlocuteur){

      const Interlocuteur = {
        "id_contribuable":parsedDataInterlocuteur.id_contribuable,
        "nom_interlocuteur":parsedDataInterlocuteur.nom_interlocuteur,
        "titre_interlocuteur": parsedDataInterlocuteur.titre_interlocuteur,
        "adresse_interlocuteur": parsedDataInterlocuteur.adresse_interlocuteur,
        "telephone_interlocuteur": parsedDataInterlocuteur.telephone_interlocuteur,
        "email_interlocuteur": parsedDataInterlocuteur.email_interlocuteur,
    
      }

      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/interlocuteur", Interlocuteur);
      
        // Check the response status or do something with the response
        console.log("Server Response:", response.data);
      alert("Interlocuteur ajouté")
       
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert("Error interlocuteur")
      }
      }
    
      if(parsedDataActionnaire){

        const Actionnaire = {
          "actionnaire" : parsedDataActionnaire
        }

        try {
          // Make a POST request to your server endpoint
          const response = await axios.post("http://localhost:3500/actionnaire", Actionnaire);
        
          // Check the response status or do something with the response
          console.log("Server Response:", response.data);
        alert("Actionnaire ajouté")
        alert(`Votre code de connexion est ${parsedDataRegistre.id}`)
        localStorage.removeItem("registrationData");
        localStorage.removeItem("activitePersMoralData");
        localStorage.removeItem("siegePersMoraleData");
        localStorage.removeItem("etablissementData");
        localStorage.removeItem("dirigeantData");
        localStorage.removeItem("interlocuteurData");
        localStorage.removeItem("associeData");
        
         navigate("/register");
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
       
       alert("Error actionnaire  ")
        }
        }
      
   

}
  const content = (
    <div className="flex justify-center w-full h-full mt-28 p-8">
      <div className="flex flex-col w-[1000px]">
        <div className="flex flex-row">
          <TitleH3 text="Etape 8:" className="mt-2"></TitleH3>
        <TitleH1 text="Confirmation des étapes" className="ml-2"></TitleH1>
        </div>
        <div className="flex justify-between mt-6">
            <Label text="M'envoyer par e-mail les informations saisies " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui" onChange={(checked)=>setAutre({ ...Autre , information_mail: checked})} checked={Autre.information_mail == true }></Checkbox>
    <Checkbox label="Non" onChange={(checked)=>setAutre({...Autre , information_mail: !checked})} checked={Autre.information_mail == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Votre exerice dépasse t-il 12 mois ? " />
      <div className="flex justify-between w-[300px]">
    <Checkbox label="Oui(18 mois)" onChange={(checked)=>setAutre({ ...Autre , depaseement_12_mois: checked})} checked={Autre.depaseement_12_mois == true}></Checkbox>
    <Checkbox label="Non(12 mois)" onChange={(checked)=>setAutre({...Autre , depaseement_12_mois: !checked})} checked={Autre.depaseement_12_mois == false}></Checkbox>
    </div>
    </div>
    <div className="flex justify-between mt-6">
            <Label text="Je certifie que ces renseignements sont complets et exacts " />
      <div className="flex justify-between w-[300px]">
    
    <Checkbox onChange={(checked)=>setAutre({...Autre , certification: checked})} checked={Autre.certification }></Checkbox>
    </div>
    </div>

        
       <div className="flex justify-between mt-6">
       <div className="w-40">
          <Button label="Précédent" onClick={()=>navigate("/Autre")}></Button>
        </div>
        <div className="w-40">
          <Button label="Terminer" onClick={HandleClick}></Button>
        </div>
       </div>
      </div>
      </div>
  );
  
  return (
      <div className=" w-full h-full bg-gray-200 ">
          <Layout children={content} currentPath={location.pathname}></Layout>
          </div>
        )
      }

export default Autre