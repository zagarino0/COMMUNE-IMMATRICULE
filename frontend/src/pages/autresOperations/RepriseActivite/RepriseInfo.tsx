import axios from "axios";
import { Card } from "../../../components/card/card";

import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { TitleH1 } from "../../../components/title";
import { MainLayout } from "../../../layouts/main";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

function RepriseInfo() {
    let navigate = useNavigate();
    const selectedData = localStorage.getItem("selectedRepriseData");
    const  parsedDataSelected = JSON.parse(selectedData as string);
    console.log(parsedDataSelected)
    const {activite} = parsedDataSelected ;
    const {siege} = parsedDataSelected ;
    const userAdminData = localStorage.getItem("userAdministrationData");
    const userData  = JSON.parse(userAdminData as string);


    const HandleCessation = async () => {

      const Data ={
        "reference_fiscal": parsedDataSelected.reference_fiscal,
        "motif" : "Réprise",
        "comment" : " Réprise d'activité d'un contribuable",
        "id_user" : userData.id_user         
      }
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/contribuable/activite/reprise", Data);
        
        // Check the response status or do something with the response
        console.log("Server Response:", response.data );
        alert(`Réprise pour ${parsedDataSelected.raison_social} réussi`)
        navigate('/RepriseActivite')
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert("Vous ne pouvez pas faire une réprise d'activité avant 3 mois")
      }
    }
    const content = (
      <div className="flex justify-center w-full h-full  p-8">
        <div className="flex flex-col w-[1000px]">
        <div className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2"><TitleH1 className="text-[#959824] text-3xl  font-semibold border-b-2 border-[#959824] mt-2" text="REPRISE D'ACTIVITE"></TitleH1></div>
          <div className="flex flex-row mt-6">
            
          <TitleH1 text="Principaux renseignements sur le contribuable" className="ml-2"></TitleH1>
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Référence Fiscal" />
            <Input type="text" 
            value={ parsedDataSelected ? parsedDataSelected.reference_fiscal : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Raison Social" />
            <Input type="text" 
            value={parsedDataSelected ? parsedDataSelected.raison_social : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Type" />
            <div className="flex justify-between">
            <label className="">
      <input
        type="radio"
        value="Total"
        className='mr-2'
        checked={ parsedDataSelected.type ==="Personne physique" }
       
      />
      Personne physique
    </label>
    <label className=' ml-4'>
      <input
        type="radio"
        value="ParRF"
        className='mr-2'
        checked={parsedDataSelected.type === "Personne morale"}
        
      />
      Personne morale
    </label>
            </div>
          </div>
          {parsedDataSelected.type ==="Personne physique" && (
    <div>
      <div className='flex justify-between mt-6 '>
      <Label text="Situation matrimoniale "></Label>
      <Input
        type="text"
           value={parsedDataSelected.situation_matrimoiniale}  
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Sexe "></Label>
      <div className="flex justify-between w-[200px]">
      <Checkbox label="Masculin" onChange={()=>window} checked={parsedDataSelected.sexe === "Masculin"}></Checkbox>
      <Checkbox label="Feminin" onChange={()=>window} checked={parsedDataSelected.sexe === "Feminin"}></Checkbox>
      </div>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Etranger "></Label>
      <div className="flex justify-between w-[200px]">
      <Checkbox label="Oui" onChange={()=>window} checked={parsedDataSelected.etranger === true}></Checkbox>
      <Checkbox label="Non" onChange={()=>window} checked={parsedDataSelected.etranger === false}></Checkbox>
      </div>
    </div>
  { parsedDataSelected.etranger === true &&(
<>
<div className='flex justify-between mt-6 '>
      <Label text="Numéro passport"></Label>
      <Input
        type="text"
        value={parsedDataSelected? parsedDataSelected.numero_passeport : "" }     
      ></Input>
    </div>
<div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance"></Label>
      <Input
        type="date"  
          value={parsedDataSelected? parsedDataSelected.date_de_delivrance_passeport : "" }
      ></Input>
    </div>
  
</>

  )}

{ parsedDataSelected.etranger === false &&(
<>
<div className='flex justify-between mt-6 '>
      <Label text="CIN"></Label>
      <Input
        type="text"
        value={parsedDataSelected? parsedDataSelected.cin : "" }     
      ></Input>
    </div>
<div className='flex justify-between mt-6 '>
      <Label text="Date de délivrance"></Label>
      <Input
        type="date"  
          value={parsedDataSelected? parsedDataSelected.date_de_delivrance_cin : "" }
      ></Input>
    </div>
  
</>

  )}
    <div className='flex justify-between mt-6 '>
      <Label text="Date naissance"></Label>
      <Input
        type="date"  
        value={parsedDataSelected ? parsedDataSelected.date_de_naissance : ""}   
      ></Input>
    </div>
    <div className='flex justify-between mt-6 '>
      <Label text="Lieu naissance "></Label>
      <Input
        type="text"
         value={parsedDataSelected? parsedDataSelected.lieu_de_naissance : ""  }     
      ></Input>
    </div>
    </div>
  )}
          
          <div className="flex justify-between mt-6">
            <Label text="Date de Création" />
            <Input type="date"
            value={parsedDataSelected ? parsedDataSelected.date_creation : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Activité" />
            <Input type="text"
            value={activite ? activite.activite : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Province" />
            <Input type="text"
            value={siege ? siege.province : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Région" />
            <Input type="text"
            value={siege ? siege.region : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="District" />
            <Input type="text"
            value={siege ? siege.district : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Commune" />
            <Input type="text"
            value={siege ? siege.commune : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Fokontany" />
            <Input type="text"
            value={siege ? siege.fokontany : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Adresse" />
            <Input type="text" 
            value={siege? siege.adresse_actuel : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="N° Statistique" />
            <div className="flex flex-col">
            <Input type="text" 
            value={activite ? activite.statistique : ""}
            />
          
            </div>
          </div>
         
          <div className="flex justify-between mt-6">
            <Label text="Régime fiscal" />
            <Input type="text"
            value={parsedDataSelected ?parsedDataSelected.regime_fiscal : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Date de création" />
            <Input type="date"
            value={parsedDataSelected ? parsedDataSelected.date_creation : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Forme juridique" />
            <Input type="text" 
            value={parsedDataSelected ?parsedDataSelected.forme_juridique : ""}
            />
          </div>
  
          <div className="flex justify-center mt-12">
          <div className="w-96 ">
            <Button label="Accorder" onClick={HandleCessation}></Button>
          </div>
          </div>
        </div>
      </div>
    );
    
    return (
        <MainLayout>
         <div className="overflow-y-auto h-[500px] mt-14 mb-8">
         <Card contentCard={content} className="w-[800px] h-[1800px] "></Card>
         </div>
        </MainLayout>
       )
}
export default RepriseInfo