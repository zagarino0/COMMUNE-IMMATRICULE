import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import { Label } from "../../../components/label/label";
import Modal from "../../../components/modals/modals";
import Input from "../../../components/inputs";
import { MainLayout } from "../../../layouts/main";
import axios from "axios";

function ConsultationHistoriqueVehicule() {
    
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [isModalError, setIsModalError] = useState(false);
    const selectedData = localStorage.getItem("selectedVehiculeMJA");
    const [value, setValue] = useState(
      JSON.parse(selectedData  as string)
    );
    console.log(value)
    
    
  const HistoryProp = () =>{
    const DataVehiculeHistory = {
      "nifproprietaire_v": value.nif_proprietaire,
      "ancnifproprietaire_v": value.anc_nif_proprietaire ,
      "centregestion_v": value.centre_gestionnaire ,

    }
    try {
      // Make a POST request to your server endpoint
      const response = axios.post(`http://localhost:3500/vehicle/${value.id_vehicule}`, DataVehiculeHistory );
    
      // Check the response status or do something with the response
       console.log("Server Response:", response.data);
     localStorage.removeItem("selectedVehiculeMJA");
   
    
    } catch (error) {
      // Handle errors
       console.error("Error:", error);
       alert("veillez selectionné du  Véhicule ")
    }
     
  }
    
    const contentCard =(
        <div className="flex justify-center items-center">
          <form onSubmit={HistoryProp }>
  <div className="flex flex-col ">
  <div className="text-[#959824] text-3xl font-semibold border-b-2  mt-6">Consultation de l'historique du véhicule{value.  numimmatriculation_v}  :</div>
  
    <div className="flex flex-col  ">
 
<div className="flex flex-row mt-6 justify-between">
<Label text="Propriétaire" className="mt-4"></Label>
<Input type="text" className="w-96 " 
value={value ? value.nif_proprietaire:""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nif_proprietaire: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Centre Gestionnaire" className="mt-4 "></Label>
  <Input type="text" className="w-96 " 
value={value ? value.centre_gestionnaire:""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, centre_gestionnaire: e.target.value })}
></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Anciens Propriétaire" className="mt-4 "></Label>
  <Input type="text" className="w-96 " 
value={value ? value.anc_nif_proprietaire:""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, anc_nif_proprietaire: e.target.value })}
></Input>
  </div>
    </div>
  </div>
  </form>
  </div>
      
      )  
  return (
    <div>
      <MainLayout>
        <div className="overflow-y-auto h-[500px] mt-20 mb-8 ">
            <Card className="w-[1000px] h-[300px] mt-10 " contentCard={contentCard}></Card>
        </div>
    </MainLayout>
      <Modal isOpen={isModalSuccess} onClose={() => setIsModalSuccess(false)} className="w-[300px] h-[150px]">
      <div className="flex justify-center items-center">
    <div className="flex flex-col">
     <Label text="Donnée ajouté avec succés" className="mt-12"></Label>
       <div className="flex justify-center mt-4" >
       <Button text="OK" onClick={() =>setIsModalSuccess(false)}></Button>
       </div>
    </div>
      </div>
      </Modal>
         <Modal isOpen={isModalError} onClose={() => setIsModalError(false)}className="w-[300px] h-[150px]">
        <div className="flex justify-center items-center">
    <div className="flex flex-col">
     <Label text="Il y a une erreur" className="mt-12"></Label>
       <div className="flex justify-center mt-4" >
       <Button text="OK" onClick={() =>setIsModalError(false)}></Button>
       </div>
    </div>
      </div>
      </Modal>
    </div>
  )
}
export default ConsultationHistoriqueVehicule