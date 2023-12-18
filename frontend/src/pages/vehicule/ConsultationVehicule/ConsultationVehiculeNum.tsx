
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import { Label } from "../../../components/label/label";
import Modal from "../../../components/modals/modals";
import { MainLayout } from "../../../layouts/main";
import { useState } from "react";

function ConsultationVehiculeNum() {
   
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
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Consultation des caractéristiques du vehicule : Numéro d'automobile</div>
  
    <div className="flex flex-col  ">
 
<div className="flex flex-row mt-6 justify-between">
<Label text="Marque " className="mt-4"></Label>
<Label text="Marque " className="mt-4"></Label>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Type " className="mt-4 "></Label>
  <Label text="Type " className="mt-4 "></Label>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Genre " className="mt-4"></Label>
  <Label text="Genre " className="mt-4"></Label>
  </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Puissance " className="mt-4"></Label>
 <Label text="Puissance " className="mt-4"></Label>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Nombre de place sur carte grise " className="mt-4"></Label>
<Label text="Nombre de place sur carte grise " className="mt-4"></Label>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre de place licence " className="mt-4"></Label>
  <Label text="Nombre de place licence " className="mt-4"></Label>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Charge Utile " className="mt-4"></Label>
  <Label text="Charge Utile " className="mt-4"></Label>
 
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Date de mise en Circulation " className="mt-4"></Label>
  <Label text="Date de mise en Circulation " className="mt-4"></Label>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Poids à vide " className="mt-4"></Label>
  <Label text="Poids à vide " className="mt-4"></Label>
  </div>
<div className="flex flex-row mt-6 justify-between">
  <Label text="Hikaràma" className="mt-4"></Label>
  <Label text="Hikaràma" className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de début " className="mt-4"></Label>
<Label text="Date de début " className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="RF propriétaire" className="mt-4"></Label>
<Label text="RF propriétaire" className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Centre Gestionnaire " className="mt-4"></Label>
<Label text="Centre Gestionnaire " className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Anc RF Propriétaire " className="mt-4"></Label>
<Label text="Anc RF Propriétaire " className="mt-4"></Label>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Exploitation " className="mt-4"></Label>
<Label text="Exploitation " className="mt-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de validité licence " className="mt-4"></Label>
<Label text="Date de validité licence " className="mt-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Catégorie " className="mt-4"></Label>
    <Label text="Catégorie " className="mt-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Sous catégorie " className="mt-4"></Label>
    <Label text="Sous catégorie " className="mt-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Zone " className="mt-4"></Label>
    <Label text="Zone " className="mt-4"></Label>

</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Age " className="mt-4"></Label>
    <Label text="Age " className="mt-4"></Label>

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
            <Card className="w-[1000px] h-[1800px] " contentCard={contentCard}></Card>
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
export default ConsultationVehiculeNum