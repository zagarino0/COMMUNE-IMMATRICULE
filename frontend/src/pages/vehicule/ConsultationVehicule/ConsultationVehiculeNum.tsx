import axios from "axios";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Modal from "../../../components/modals/modals";
import { MainLayout } from "../../../layouts/main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function  ConsultationVehiculeNum() {
  const [isModalSuccess , setIsModalSuccess] = useState(false)
  const [isModalError , setIsModalError] = useState(false)
  const selectedData = localStorage.getItem("selectedVehiculeMJA");
  const [value, setValue] = useState(
    JSON.parse(selectedData  as string)
  );
  console.log(value)
  
        
        const optionsExploitation = [
          { value: 'Urbaine', label: 'Urbaine' },
          { value: 'Sub-urbaine', label: 'Sub-urbaine' },
         
        ];
        const optionsCategorie = [
          { value: 'Transport en commun', label: 'Transport en commun' },
          { value: 'Transport Urbaine', label: 'Transport Urbaine' },
          { value: 'Transport marchandise', label: 'Transport marchandise' },
        ];
        const optionsZone = [
          { value: 'Commune Urbaine de Mahajanga', label: 'Commune Urbaine de Mahajanga' },
         
        ];

        const userAdminData = localStorage.getItem("userAdministrationData");
        const userData  = JSON.parse(userAdminData as string);
    
// fonction modification vehicule 
let navigate =useNavigate();

const ModifieVehicule =  () => {
const comment = "Modification"
const motif = "Mal saisie ou information non complet"
    const DataVehicule ={
      "id_vehicule": value.id_vehicule ,
      "numimmatriculation_v": value.numero_immatriculation,
      "marque_v": value.marque ,
      "type_v" : value.type,
      "genre_v": value.genre ,
      "puissance_v": value.puissance,
      "nbplacecartegrise_v": value.nombre_place_carte_grise,
      "chargeutile_v": value.charge_utile,
      "datemisecirculation_v" : value.date_mise_circulation,
      "poidsavide_v": value.poids_a_vide ,
       "hikaramana_v": value.hikaramana,
       "datedebut_v": value.date_debut,
       "nifproprietaire_v": value.nif_proprietaire,
      "centregestion_v": value.centre_gestionnaire ,
      "ancnifproprietaire_v": value.anc_nif_proprietaire ,
      "exploitation_v": value.exploitation,
      "datevalidlic_v": value.date_validite_licence,
      "categ_v": value.categorie,
      "souscateg_v": value.sous_categorie ,
      "zone_v": value.zone ,
      "age_v": value.age,
      "id_user": userData.id,
      "comment": comment,
      "motif": motif,
      
        } 
    try {
      // Make a POST request to your server endpoint
      const response = axios.post(`http://localhost:3500/vehicle/${value.id_vehicule}`, DataVehicule);
    
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
          <form onSubmit={ModifieVehicule}>
  <div className="flex flex-col ">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 mt-6">Consultation des caractéristiques du véhicule : {value.numero_immatriculation}</div>
  
    <div className="flex flex-col  ">
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Numéro d'immatriculation " className="mt-4"></Label>
 <Input type="text"  placeholder="Numéro d'immatriculation" className="w-96 "
 value={value ?value.numero_immatriculation : ""}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, numero_immatriculation: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Marque " className="mt-4"></Label>
<Input type="text" placeholder="Marque" className="w-96  "
value={value ? value.marque : ""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, marque: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Type " className="mt-4 "></Label>
  <Input type="text" placeholder="Type " className="w-96 "
  value={value ?value.type: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, type : e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Genre " className="mt-4"></Label>
  <Input type="text" placeholder="Genre" className="w-96 "
  value={value ? value.genre: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, genre: e.target.value })}
  ></Input>
  </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Puissance :" className="mt-4"></Label>
 <Input type="text" placeholder="Puissance" className="w-96 "
 value={value ?value.puissance: ""}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, puissance: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Nombre de place sur carte grise :" className="mt-4"></Label>
<Input type="text" placeholder="Nombre de place sur carte grise" className="w-96 !"
value={value? value.nombre_place_carte_grise:""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nombre_place_carte_grise: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre de place licence :" className="mt-4"></Label>
  <Input type="text" placeholder="Nombre de place licence" className="w-96 "
  value={value? value.nombre_place_licence: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nombre_place_licence: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Charge Utile :" className="mt-4"></Label>
  <Input type="text" placeholder="Charge Utile" className="w-96"
  value={value ? value.charge_utile:""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, charge_utile: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Date de mise en Circulation :" className="mt-4"></Label>
  <Input type="date" placeholder="Date de mise en Circulation" className="w-96 "
  value={value ?value.date_mise_circulation: ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, date_mise_circulation: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Poids à vide :" className="mt-4"></Label>
  <Input type="text" placeholder="Poids à vide" className="w-96 "
  value={value ?value.poids_a_vide : ""}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, poids_a_vide: e.target.value })}
  ></Input>
  </div>

<div className="mt-6 flex flex-row justify-between">
<Label text="Date de début :" className="mt-4"></Label>
<Input type="date" placeholder="Date de début" className="w-96 "
value={value ? value.date_debut : ""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, date_debut: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="RF propriétaire" className="mt-4"></Label>
<Input type="text" placeholder="RF propriétaire" className="w-96 "
value={value ?value.nif_proprietaire: ""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nif_proprietaire: e.target.value })}
></Input>
</div>

<div className="mt-6 flex flex-row justify-between">
<Label text="Anc RF Propriétaire :" className="mt-4"></Label>
<Input type="text" placeholder="Anc RF Propriétaire" className="w-96 "
value={value ?value.anc_nif_proprietaire: ""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, anc_nif_proprietaire: e.target.value })}
></Input>
</div>

<div className="mt-6 flex flex-row justify-between">
<Label text="Date de validité licence :" className="mt-4"></Label>
<Input type="date" className="w-96 " 
value={value ? value.date_validite_licence :""}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, date_validite_licence: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Catégorie :" className="mt-4"></Label>
    <Select options={optionsCategorie} value={value? value.categorie : ""} onChange={(options)=>setValue({...value , categorie : options })} className="w-96  "/>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Exploitation :" className="mt-4"></Label>
<Select options={optionsExploitation} value={value ?value.exploitation : ""} onChange={(option=>{setValue({...value , exploitation: option})})} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Zone :" className="mt-4"></Label>
    <Select options={optionsZone} value={value? value.zone: ""} onChange={()=>window} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Age :" className="mt-4"></Label>
    <Input value={value ? value.age :""} 
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, age: e.target.value })} className="w-96 "/>
</div>

    </div>
  </div>
  </form>
  </div>
      
      )  
  return (
    <div>
      <MainLayout>
        <div className="overflow-y-auto h-[550px] mt-20 mb-8 ">
            <Card className="w-[900px] h-[1250px] " contentCard={contentCard}></Card>
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


export default  ConsultationVehiculeNum