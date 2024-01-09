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

  const activiteData = localStorage.getItem("activiteData");
  const parsedDataActivite = JSON.parse(activiteData as string);

  const siegeData = localStorage.getItem("siegeData");
  const parsedDataSiege = JSON.parse(siegeData as string);


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

 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
}
}

if(parsedDataActivite){
try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/activite", parsedDataActivite);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
}

}

if(parsedDataSiege){

try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/siege", parsedDataSiege);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
}
}

if(Autre){

try {
  // Make a POST request to your server endpoint
  const response = await axios.post("http://localhost:3500/autre", Autre);

  // Check the response status or do something with the response
  console.log("Server Response:", response.data);

 
} catch (error) {
  // Handle errors
  console.error("Error:", error);
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