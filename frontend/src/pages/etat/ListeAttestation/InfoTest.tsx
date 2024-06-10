
import Button from "../../../components/common/Button";
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import { Label } from "../../../components/label/label";
import { TiDocumentText } from "react-icons/ti";
import { TitleH1, TitleH3 } from "../../../components/title";
import { Card } from "../../../components/card/card";
import { MainLayout } from "../../../layouts/main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "../../../components/modals/modals";
import { useState, useEffect } from "react";

function InfoTest() {
    const navigate = useNavigate();
    const selectedData = localStorage.getItem("selectedCessationData");
    const  parsedDataSelected = JSON.parse(selectedData as string);
    console.log(parsedDataSelected)
    const {activite} = parsedDataSelected ;
    const {siege} = parsedDataSelected ;
    const userAdminData = localStorage.getItem("userAdministrationData");
    const userData  = JSON.parse(userAdminData as string);

    const HandleCessation = async () => {

      const Data ={
        "reference_fiscal": parsedDataSelected.reference_fiscal,
        "motif" : Motif.motif,
        "comment" : Motif.comment,
        "id_user" : userData.id_user         
      }
      try {
        // Make a POST request to your server endpoint
        const response = await axios.post("http://localhost:3500/contribuable/activite/cessation", Data);
        
        // Check the response status or do something with the response
        console.log("Server Response:", response.data );
        alert(`Cessation pour ${parsedDataSelected.raison_social} réussi`)
        setIsModalMotif(false)
        navigate('/CessationActivite')
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
        alert("Il y a une erreur")
      }
    }

    {/**impression  */}

    const [isStorageUpdated, setIsStorageUpdated] = useState(false);
    const [DataSelected, setDataSelected] = useState ([])
  
    useEffect(() => {
      // Store Value data in localStorage
      localStorage.setItem("selectedBlocageData", JSON.stringify(DataSelected ));
      // Reset the dummy state to trigger rerender
      console.log(DataSelected)
      setIsStorageUpdated(false);
    }, [DataSelected, isStorageUpdated]);
  
    const handleSendImpression = () =>{
    setIsStorageUpdated(true);
    const routeToNavigate = "/ImpressionAttestation";
    navigate(routeToNavigate, { state: { DataSelected } });
    };


    const content = (
      <div className="flex justify-center w-full h-full  p-8">
        <div className="flex flex-col w-[1000px]">
        <div className="text-[#959824] text-4xl  font-semibold border-b-2  mt-2"><TitleH1 className="text-[#959824] text-4xl  text-center font-semibold border-b-2  mt-2" text="CESSATION D'ACTIVITE"></TitleH1></div>
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
            <Label text="RIB" />
            <Input type="text"
            value={parsedDataSelected? parsedDataSelected.RIB : ""}
            />
          </div>
          <div className="flex justify-between mt-6">
            <Label text="Compte bancaire" />
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
            <Button label="Accorder" onClick={()=>setIsModalMotif(true)}></Button>
          </div>
          </div>
        </div>
      </div>
    );
    const [isModalMotif , setIsModalMotif] = useState(false)
    const [Motif , setMotif] = useState<{
     motif : string,
     comment : string
    }>({
     motif : "",
     comment : ""
    })
    return (
        <MainLayout>
         <div className="overflow-y-auto h-[500px] mt-14 mb-8">
         <Card contentCard={content} className="w-[1200px] mt-10"></Card>
         </div>
         <Modal isOpen={isModalMotif} onClose={()=>setIsModalMotif(false)} className="w-[550px]  p-6">
   <div className="flex justify-between">
   <div className="flex flex-col">
      <Label
      text="Motif"
      className="mt-4"
      
      ></Label>
      <Label
      text="Commentaire"
      className="mt-4"
      ></Label>
     
    </div>

    <div className="flex flex-col ">
      
      <Input
      type="text"
      className=""
       value={Motif.motif}
       onChange={(e)=> setMotif({...Motif , motif : e.target.value})}
      ></Input>
     <Input
      type="text"
      className=" mt-2"
       value={Motif.comment}
       onChange={(e)=>setMotif({...Motif , comment : e.target.value})}
      ></Input>
    </div>
   </div>
    <div className="mt-4">
    <Button label="Accorder" onClick={HandleCessation}></Button>

            <div className="flex justify-start px-8 justify-center mt-4"> {/**button impressionCessation */}
              <button   className="flex flex-row "onClick={handleSendImpression}><TiDocumentText  className="mr-2 text-2xl text-[#1956e3] font-bold"/><TitleH3 text="Imprimer l'Attestation de Cessation " className="text-xs"></TitleH3></button>
            </div>
    </div>
  </Modal>
        </MainLayout>
       )
}

export default InfoTest