import { useState } from "react";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import { Label } from "../../../components/label/label";
import Modal from "../../../components/modals/modals";
import { MainLayout } from "../../../layouts/main";

function ConsultationHistoriqueVehicule() {
    
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [isModalError, setIsModalError] = useState(false);
    // const [value , setValue] = useState<{
    //   numimmatriculation_v:string,
    //    marque_v:string,
    //    type_v:string,
    //    genre_v:string,
    //    puissance_v:string,
    //    nbplacecartegrise_v:string,
    //    nbplacelicence_v:string,
    //    chargeutile_v:string,
    //    datemisecirculation_v:string,
    //    poidsavide_v:string,
    //    hikaramana_v:string,
    //    datedebut_v:string,
    //    nifproprietaire_v:string,
    //    centregestion_v:string,
    //    ancnifproprietaire_v:string,
    //    exploitation_v:string,
    //    datevalidlic_v:string,
    //    categ_v:string,
    //    souscateg_v: string,
    //    zone_v:string,
    //    age_v:string,
    // }>({
    //    numimmatriculation_v:"",
    //    marque_v:"",
    //    type_v:"",
    //    genre_v:"",
    //    puissance_v:"",
    //    nbplacecartegrise_v:"",
    //    nbplacelicence_v:"",
    //    chargeutile_v:"",
    //    datemisecirculation_v:"",
    //    poidsavide_v:"",
    //    hikaramana_v:"",
    //    datedebut_v:"",
    //    nifproprietaire_v:"",
    //    centregestion_v:"",
    //    ancnifproprietaire_v:"",
    //    exploitation_v:"",
    //    datevalidlic_v:"",
    //    categ_v:"",
    //    souscateg_v: "",
    //    zone_v:"",
    //    age_v:"",
    // })     
    
    const contentCard =(
        <div className="flex justify-center items-center">
          <form >
  <div className="flex flex-col ">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Consultation de l'historique du vehicule : Numéro d'automobile</div>
  
    <div className="flex flex-col  ">
 
<div className="flex flex-row mt-6 justify-between">
<Label text="Propriétaire" className="mt-4"></Label>
<Label text="Propriétaire" className="mt-4"></Label>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Centre Gestionnaire" className="mt-4 "></Label>
  <Label text="Centre Gestionnaire" className="mt-4 "></Label>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Anciens Propriétaire" className="mt-4 "></Label>
  <Label text="Anciens Propriétaire" className="mt-4 "></Label>
  </div>
    </div>
  </div>
  </form>
  </div>
      
      )  
  return (
    <div>
      <MainLayout>
        <div className="overflow-y-auto h-[500px] mt-14 mb-8 ">
            <Card className="w-[1000px] h-[500px] " contentCard={contentCard}></Card>
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