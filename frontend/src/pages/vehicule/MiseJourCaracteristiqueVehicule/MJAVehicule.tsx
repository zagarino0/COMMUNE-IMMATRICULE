import axios from "axios";
import { Card } from "../../../components/card/card";
import { Button } from "../../../components/common";
import Checkbox from "../../../components/common/checkbox";
import Input from "../../../components/inputs";
import Select from "../../../components/inputs/selectInput";
import { Label } from "../../../components/label/label";
import Modal from "../../../components/modals/modals";
import { MainLayout } from "../../../layouts/main";
import { useState } from "react";

function MJAVehicule() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2nd, setIsChecked2nd] = useState(false);
    const [isModalSuccess, setIsModalSuccess] = useState(false);
    const [isModalError, setIsModalError] = useState(false);
    const [value , setValue] = useState<{
      numimmatriculation_v:string,
       marque_v:string,
       type_v:string,
       genre_v:string,
       puissance_v:string,
       nbplacecartegrise_v:string,
       nbplacelicence_v:string,
       chargeutile_v:string,
       datemisecirculation_v:string,
       poidsavide_v:string,
       hikaramana_v:string,
       datedebut_v:string,
       nifproprietaire_v:string,
       centregestion_v:string,
       ancnifproprietaire_v:string,
       exploitation_v:string,
       datevalidlic_v:string,
       categ_v:string,
       souscateg_v: string,
       zone_v:string,
       age_v:string,
    }>({
       numimmatriculation_v:"",
       marque_v:"",
       type_v:"",
       genre_v:"",
       puissance_v:"",
       nbplacecartegrise_v:"",
       nbplacelicence_v:"",
       chargeutile_v:"",
       datemisecirculation_v:"",
       poidsavide_v:"",
       hikaramana_v:"",
       datedebut_v:"",
       nifproprietaire_v:"",
       centregestion_v:"",
       ancnifproprietaire_v:"",
       exploitation_v:"",
       datevalidlic_v:"",
       categ_v:"",
       souscateg_v: "",
       zone_v:"",
       age_v:"",
    })     
    const handleCheckboxChange = (checked: boolean) => {
        setIsChecked(checked);
      };
      const handleCheckboxChangeSecond = (checked: boolean) => {
          setIsChecked2nd(checked);
        };
        const [selectedOption, setSelectedOption] = useState('');

        const handleOptionChange = (value: string) => {
          setSelectedOption(value);
        };
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
      
          try {
            // Envoyer les données du formulaire au serveur via Axios
            const response = await axios.post("http://localhost:3500/vehicle", value);
            console.log("Données envoyées avec succès", response.data);
            console.log(value)
            setIsModalSuccess(true);
            // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
            // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
            setValue({
              numimmatriculation_v:"",
              marque_v:"",
              type_v:"",
              genre_v:"",
              puissance_v:"",
              nbplacecartegrise_v:"",
              nbplacelicence_v:"",
              chargeutile_v:"",
              datemisecirculation_v:"",
              poidsavide_v:"",
              hikaramana_v:"",
              datedebut_v:"",
              nifproprietaire_v:"",
              centregestion_v:"",
              ancnifproprietaire_v:"",
              exploitation_v:"",
              datevalidlic_v:"",
              categ_v:"",
              souscateg_v: "",
              zone_v:"",
              age_v:"",
           });    
          } catch (error) {
            console.error("Erreur lors de l'envoi des données", error);
            setIsModalError(true);
          }
        };
        const options = [
          { value: 'référence', label: 'Choisissez dans la liste' },
          { value: 'Raison sociale', label: 'Raison sociale' },
          { value: 'NIF', label: 'NIF' },
          { value: 'CIN', label: 'CIN' },
          { value: 'Adresse', label: 'Adresse' },
          { value: 'Nom commercial', label: 'Nom commercial' },
        ];
    
    const contentCard =(
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
  <div className="flex flex-col ">
  <div className="text-[#959824] text-3xl font-semibold border-b-2 border-[#959824] mt-6">Mise à jour des caractéristiques du vehicule : Numéro d'automobile</div>
  
    <div className="flex flex-col  ">
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Numéro d'immatriculation " className="mt-4"></Label>
 <Input type="text"  placeholder="Numéro d'immatriculation" className="w-96 "
 value={value.numimmatriculation_v}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, numimmatriculation_v: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Marque " className="mt-4"></Label>
<Input type="text" placeholder="Marque" className="w-96  "
value={value.marque_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, marque_v: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Type " className="mt-4 "></Label>
  <Input type="text" placeholder="Type " className="w-96 "
  value={value.type_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, type_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Genre " className="mt-4"></Label>
  <Input type="text" placeholder="Genre" className="w-96 "
  value={value.genre_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, genre_v: e.target.value })}
  ></Input>
  </div>
 <div className="flex flex-row mt-6 justify-between">
 <Label text="Puissance :" className="mt-4"></Label>
 <Input type="text" placeholder="Puissance" className="w-96 "
 value={value.puissance_v}
 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, puissance_v: e.target.value })}
 ></Input>
 </div>
<div className="flex flex-row mt-6 justify-between">
<Label text="Nombre de place sur carte grise :" className="mt-4"></Label>
<Input type="text" placeholder="Nombre de place sur carte grise" className="w-96 !"
value={value.nbplacecartegrise_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nbplacecartegrise_v: e.target.value })}
></Input>
</div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Nombre de place licence :" className="mt-4"></Label>
  <Input type="text" placeholder="Nombre de place licence" className="w-96 "
  value={value.nbplacelicence_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nbplacelicence_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Charge Utile :" className="mt-4"></Label>
  <Input type="text" placeholder="Charge Utile" className="w-96"
  value={value.chargeutile_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, chargeutile_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Date de mise en Circulation :" className="mt-4"></Label>
  <Input type="date" placeholder="Date de mise en Circulation" className="w-96 "
  value={value.datemisecirculation_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datemisecirculation_v: e.target.value })}
  ></Input>
  </div>
  <div className="flex flex-row mt-6 justify-between">
  <Label text="Poids à vide :" className="mt-4"></Label>
  <Input type="text" placeholder="Poids à vide" className="w-96 "
  value={value.poidsavide_v}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, poidsavide_v: e.target.value })}
  ></Input>
  </div>
<div className="flex flex-row mt-6 justify-between">
  <Label text="Hikaràma" className="mt-4"></Label>
  <div >
<Checkbox label="Oui" checked={isChecked} onChange={handleCheckboxChange}></Checkbox>
<Checkbox label="Non" checked={isChecked2nd} onChange={handleCheckboxChangeSecond}></Checkbox>
  </div>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de début :" className="mt-4"></Label>
<Input type="date" placeholder="Date de début" className="w-96 "
value={value.datedebut_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datedebut_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="RF propriétaire" className="mt-4"></Label>
<Input type="text" placeholder="RF propriétaire" className="w-96 "
value={value.nifproprietaire_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, nifproprietaire_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Centre Gestionnaire :" className="mt-4"></Label>
<Input type="text" placeholder="Centre Gestionnaire" className="w-96 "
value={value.centregestion_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, centregestion_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Anc RF Propriétaire :" className="mt-4"></Label>
<Input type="text" placeholder="Anc RF Propriétaire" className="w-96 "
value={value.ancnifproprietaire_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, ancnifproprietaire_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Exploitation :" className="mt-4"></Label>
<Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
<Label text="Date de validité licence :" className="mt-4"></Label>
<Input type="date" className="w-96 " 
value={value.datevalidlic_v}
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue({ ...value, datevalidlic_v: e.target.value })}
></Input>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Catégorie :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96  "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Sous catégorie :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Zone :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<div className="mt-6 flex flex-row justify-between">
    <Label text="Age :" className="mt-4"></Label>
    <Select options={options} value={selectedOption} onChange={handleOptionChange} className="w-96 "/>
</div>
<Button type="submit" text="Enregistrer" className="mt-6"></Button>
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

export default MJAVehicule